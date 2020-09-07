import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col, Breadcrumb, Affix, Divider } from 'antd'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Tocify from '../components/Tocify.tsx'
import marked from 'marked'
import hljs from "highlight.js";
import MyBackTop from '../components/BackTop'
import MyComment from '../components/MyComment'
import { 
  FieldTimeOutlined, 
  VideoCameraAddOutlined,
  FireOutlined
} from '@ant-design/icons'

import Axios from 'axios'
import servicePath from '../api/apiUrl'
import '../static/style/pages/detailed.css'
import 'highlight.js/styles/monokai-sublime.css';

const Detailed = (props) => {
  const tocify = new Tocify()
  const renderer = new marked.Renderer();
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level);
      // console.log('文本：',text,'等级：', level)
      return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  marked.setOptions({

    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,

    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }

  }); 
  let markedContent = marked(props.article_content)
  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="detail-body" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                  <Breadcrumb.Item>{props.title}</Breadcrumb.Item>
                </Breadcrumb>
              </div>

             <div>
                <div className="detailed-title">
                {props.title}
                </div>

                <div className="list-icon center">
                  <span><FieldTimeOutlined /> {props.addTime}</span>
                  <span><VideoCameraAddOutlined />{props.title}</span>
                  <span><FireOutlined /> {props.view_count}人</span>
                </div>
                <div className='detailed-content'>
                  <div dangerouslySetInnerHTML = {{__html: markedContent}}></div>
                </div>
             </div>
            </div>
            <Divider plain>评论区</Divider>
            <MyComment />

        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Affix offsetTop={5}>
            <div className='detailed-nav domm-box comm-box'>
              <div className='nav-title'>文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer/>
      <MyBackTop />
   </>
  )
}
Detailed.getInitialProps = async(context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    Axios(servicePath.getArticleById + id).then((res) => resolve(res.data.data))
  })
  return promise
}
export default Detailed