import React, { useState } from 'react'
import {Comment, Tooltip, List, Form, Button, Input, Popover, Message} from 'antd'
import moment from 'moment';
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import '../static/style/components/comment.css'

const { TextArea } = Input;

const MyComment = props => {
    const [comment, setComment] = useState('')
    const onSubmit = () => {
      Message.warning('靓仔，请先登录！')
    }
    const selectEmoji = (value) => {
        setComment(comment + value.native)
    }
    const textAreChange = e => {
        console.log('e',e.target.value)
        setComment(e.target.value)
    }
    const data = [
        {
          actions: [<span key="comment-list-reply-to-0">Reply to</span>],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          datetime: (
            <Tooltip
              title={moment()
                .subtract(1, 'days')
                .format('YYYY-MM-DD HH:mm:ss')}
            >
              <span>
                {moment()
                  .subtract(1, 'days')
                  .fromNow()}
              </span>
            </Tooltip>
          ),
        },
        {
          actions: [<span key="comment-list-reply-to-0">Reply to</span>],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          datetime: (
            <Tooltip
              title={moment('2020-04-05')
                .subtract(2, 'days')
                .format('YYYY-MM-DD HH:mm:ss')}
            >
              <span>
                {moment()
                  .subtract(2, 'days')
                  .fromNow()}
              </span>
            </Tooltip>
          ),
        },
    ]
    const i18n = {
        search: 'Search',
        clear: 'Clear', // Accessible label on "clear" button
        notfound: 'No Emoji Found',
        skintext: 'Choose your default skin tone',
        categories: {
        search: 'Search Results',
        recent: '常用',
        smileys: 'Smileys & Emotion',
        people: '情绪和人物',
        nature: '动物和自然',
        foods: '食物',
        activity: '活动',
        places: '旅行和计划',
        objects: '物体',
        symbols: '符号',
        flags: '旗帜',
        custom: '自定义',
        },
        categorieslabel: 'Emoji categories', // Accessible title for the list of categories
        skintones: {
        1: 'Default Skin Tone',
        2: 'Light Skin Tone',
        3: 'Medium-Light Skin Tone',
        4: 'Medium Skin Tone',
        5: 'Medium-Dark Skin Tone',
        6: 'Dark Skin Tone',
        },
    }
    const Emojioption = {
        emoji:'point_up',
        showPreview: false,
        showSkinTones: false,
        onSelect: selectEmoji,
        title: '',
        i18n
    }
    const content = (
        <Picker {...Emojioption}/>
    )
    return (
        <div className='comment-box'>
          <div className='comment-avatar'>
            <img src='../static/images/commentAvatar.png'></img>
          </div>
          <div className='comment-list'>
            <TextArea onChange={textAreChange} value={comment} allowClear />
            <Form.Item>
              <Popover content={content} trigger="click" placement="bottomRight">
                  <span style={{cursor: 'pointer', fontSize: '20px'}}>😀</span>
              </Popover>
            </Form.Item>
            <div style={{textAlign: 'right'}}>
              <Button onClick={onSubmit} type="primary">
                发布
              </Button>
            </div>
            <List
                className="comment-list"
                header={`${data.length} replies`}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <li>
                    <Comment
                    actions={item.actions}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                    />
                    
                </li>
                )}
            />
          </div>
        </div>
    )
}

export default MyComment
