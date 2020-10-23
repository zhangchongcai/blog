import React,{useState, useEffect} from 'react'
import Head from 'next/head'
import { Tabs, Row, Col } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author' // 作者介绍
import Advert from '../components/Advert' // 广告
import Fotter from '../components/Footer' // 底部内容
import MyList from '../components/MyList'
import api from '../api'
import '../static/style/pages/list.css'
const { TabPane } = Tabs

const list = (props) => {
  const [ articleList , setArticleList ] = useState(props.articleList)
  const additionSearch = async type => {
    const articleRes = await api.articleAPI.getListByType(type)
    setArticleList(articleRes.data)
  }
  return (
    <div>
      <Head>
        <title>List</title>
      </Head>
      <div>
        <Header navArray={props.navArray} />
        <Row className='comm-main' type='flex' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <Tabs defaultActiveKey="1" onChange={additionSearch} style={{paddingLeft: '20px'}}>
            <TabPane tab="全部" key="all" />
            <TabPane tab="vue" key="vue" />
            <TabPane tab="react" key="react" />
            <TabPane tab="后端" key="back" />
            <TabPane tab="其他" key="other" />
          </Tabs>
            <MyList data={articleList} />
          </Col>
          <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
          </Col>
        </Row>
        <Fotter />
      </div>
  </div>
  )
}
list.getInitialProps = async (context) => {
  let id = context.query.id
  // 列表
  const listResult =  await api.articleAPI.getListById(id)
  // 菜单
  const typeInfoRes = await api.articleAPI.getTypeInfo()
  const data = { 
    articleList: listResult.data,
    navArray: typeInfoRes.data
  }
  return  data
}
export default list