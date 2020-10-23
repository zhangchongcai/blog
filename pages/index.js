import React,{ useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import { Tabs, Row, Col } from 'antd'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Axios from 'axios'
import Fotter from '../components/Footer' // 底部内容
import MyBackTop from '../components/BackTop'
import MyList from '../components/MyList'
import Slide from  '../components/Slide'
import dynamic from 'next/dynamic'
const APlayer = dynamic(
  () => import('../components/Play'),
  { ssr: false }
)
import api from '../api/index.js'
import '../static/style/pages/index.css'
const { TabPane } = Tabs

const Home = props => {
  const [ articleList , setArticleList ] = useState(props.articleList)
  const aplay = useRef(null)
  const additionSeach = async (type) => {
    const articleRes = await api.articleAPI.getListByType(type)
    setArticleList(articleRes.data)
  }
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header navArray={props.navArray} />
      <div>
        
        {/* <Slide
          images={props.sildeList}
        /> */}
        <Row className='comm-main' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <Tabs defaultActiveKey="1" onChange={additionSeach} style={{paddingLeft: '20px'}}>
            <TabPane tab="最新日志" key="addTime" />
            <TabPane tab="热门日志" key="view_count" />
          </Tabs>
            <MyList data={articleList} />
          </Col>
          <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
            <SideBar daily={props.daily}/>
          </Col>
        </Row>
        <Fotter />
        <MyBackTop />
      </div>
      <APlayer songs={props.songs}/>
  </div>
  )
}
Home.getInitialProps = async () => {
  // 轮播图
  const slideRes = await api.slideAPI.list()
  // 文章列表
  const articleRes = await api.articleAPI.list()
  console.log('----', articleRes)
  // 菜单
  const typeInfoRes = await api.articleAPI.getTypeInfo()
  const data = {
    sildeList: slideRes.data.map(item=>item.url),
    articleList: articleRes.data,
    navArray: typeInfoRes.data
  }
  // 每日一句
  const dailyPromise = new Promise((resolve) => {
    Axios('http://api.youngam.cn/api/one.php').then((res) => {
        resolve(res.data)
    })
  })
  // 歌曲
  const songPromise = new Promise((resolve) => {
    Axios('https://v1.hitokoto.cn/nm/summary/26830207,862862104,426881503,29027056,31134451,35331626,1301861960,514053624,550124213,22682066,1371939273,473940907,28582373?lyric=true&common=true')
    .then(res => resolve(res))
  })
  const songRes = await songPromise
  const dailyRes = await dailyPromise
  // 每日一句
  if (dailyRes.code = 200) {
    data.daily = dailyRes.data[0]
  }
  if (songRes.data.code == 200) {
    data.songs = songRes.data.songs
  } else {
    data.songs = []
  }
  return data
}
export default Home