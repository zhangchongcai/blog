import React, { useState, useEffect } from 'react'
import '../static/style/components/mylist.css'
import baseUrl from '../api/base_url'
import Link from 'next/link'
import { List, Space, Tag } from 'antd';
import { ClockCircleOutlined, LikeOutlined, FireOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const MyCard = props => {
  const data = props.data
  return(
    <div className='mylist'>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        bordered={false}
        split={false}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={FireOutlined} text={item.view_count} key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text={item.praise||0} key="list-vertical-like-o" />,
              <IconText icon={ClockCircleOutlined} text={item.addTime} key="list-vertical-message" />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={baseUrl + item.imageUrl}
              />
            }
          >
            <Link href={{pathname:'/detailed', query:{id:item.id}}}>
              <a className="list-title">{item.title}</a>
            </Link>
            <div style={{padding: '10px 0'}}>
              {
                item.tags.map((item, index) => {
                  return <Tag key={index} color="#2db7f5">{item}</Tag>
                })
              }
            </div>
            {item.introduce}
          </List.Item>
        )}
      />
    </div>
  )
}

export default MyCard