import React,{ useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { List, Row, Col } from 'antd'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Axios from 'axios'
import Fotter from '../components/Footer' // 底部内容
import Marked from '../components/Marked'
import Slide from  '../components/Slide'
import dynamic from 'next/dynamic'
const APlayer = dynamic(
  () => import('../components/Play'),
  { ssr: false }
)
import api from '../api/index.js'
import MyBackTop from '../components/BackTop'
import { 
  FieldTimeOutlined, 
  VideoCameraAddOutlined,
  FireOutlined
} from '@ant-design/icons'
import '../static/style/pages/index.css'
const Home = props => {
  const [ mylist , setMylist ] = useState(props.articleList)
  const aplay = useRef(null)
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div>
        {/* <Row className='banner' type='flex' justify='center'>
          <Col xs={24} sm={24} md={16} lg={17} xl={14}> */}
            <Slide
                images={props.sildeList}
            />
            {/* </Col>
        </Row> */}
        <Row className='comm-main' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
            <div>
              <List
                header={<div>最新日志</div>}
                itemLayout="vertical"
                dataSource={mylist}
                renderItem={item => (
                  <List.Item>
                    <div className="list-title">
                      <Link href={{pathname:'/detailed', query:{id:item.id}}}>
                      <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className="list-icon">
                      <span><FieldTimeOutlined />{item.addTime}</span>
                      <span><VideoCameraAddOutlined /> {item.typeName}</span>
                      <span><FireOutlined /> {item.view_count}</span>
                    </div>
                    <div className="list-context">
                        <Marked markdownContent={item.introduce} />
                    </div>  
                  </List.Item>
                )}
              />    
            </div>
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
  // 我的服务器api
  const slideRes = await api.slideAPI.list()
  const articleRes = await api.articleAPI.list()
  // 每日一句
  const dailyPromise = new Promise((resolve) => {
    Axios('http://api.youngam.cn/api/one.php').then((res) => {
        resolve(res.data)
    })
  })
  const songPromise = new Promise((resolve) => {
    Axios('https://v1.hitokoto.cn/nm/summary/26830207,862862104,426881503,29027056,31134451,35331626,1301861960,514053624,550124213,22682066,1371939273,473940907,28582373?lyric=true&common=true')
    .then(res => resolve(res))
  })
  const songRes = await songPromise
  const dailyRes = await dailyPromise
  const data = {
    sildeList: slideRes.data.map(item=>item.url),
    articleList: articleRes.data
  }
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