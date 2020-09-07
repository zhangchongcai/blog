import React, {useState,useEffect} from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
const Marked = (props) => {

    marked.setOptions({
        renderer: new marked.Renderer(), // 渲染
        gfm: true, // 启动gitHub样式
        pedantic: false,  // 允许容错
        sanitize: false,   // 允许html
        tables: true, // 表格gitHub样式 要先开启gfm
        breaks: false, // 换行符
        smartLists: true, // 列表样式
        highlight: function(code) {
          return hljs.highlightAuto(code).value
        }
      })
    return(
        <div className="marked-content"
            dangerouslySetInnerHTML={{__html: marked(props.markdownContent)}}
        />
    )
}
export default Marked