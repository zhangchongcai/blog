import React,{useState, useEffect} from 'react'
import Head from 'next/head'
import { List, Breadcrumb, Row, Col } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author' // 作者介绍
import Advert from '../components/Advert' // 广告
import Fotter from '../components/Footer' // 底部内容
import dynamic from 'next/dynamic'
const APlayer = dynamic(
  () => import('../components/Play'),
  { ssr: false }
)
import Marked from '../components/Marked'
import Link from 'next/link'
import api from '../api'
import '../static/style/pages/list.css'
import { 
    FieldTimeOutlined, 
    VideoCameraAddOutlined,
    FireOutlined
  } from '@ant-design/icons'
const myList = (props) => {
  const [ mylist , setMylist ] = useState(props.articleList)
  return (
    <div>
      <Head>
        <title>List</title>
      </Head>
      <div className="list-body">
        <Header navArray={props.navArray} />
        <Row className='comm-main' type='flex' justify='center'>
          <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
            <div className='bread-div'>
              <Breadcrumb>
                <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a>{mylist[0].typeName}列表</a></Breadcrumb.Item>
              </Breadcrumb>
            </div>
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
                    <span><FieldTimeOutlined /> {item.addTime}</span>
                    <span><VideoCameraAddOutlined /> 视频教程</span>
                    <span><FireOutlined /> {item.view_count}人</span>
                  </div>
                  <div className="list-context">
                    <Marked markdownContent={item.introduce} />  
                  </div>
                </List.Item>
             )}
              />    
          </Col>
          <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
          </Col>
        </Row>
        <Fotter />
        {/* <APlayer /> */}
      </div>
  </div>
  )
}
myList.getInitialProps = async (context) => {
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
export default myList