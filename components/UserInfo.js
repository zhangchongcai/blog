import React, { useState,useEffect } from 'react'
import '../static/style/components/userInfo.css'
import {
    UserOutlined,
    MessageOutlined,
    LogoutOutlined
} from '@ant-design/icons'
const UserInfo = () => {
    return (
        <div className='user-info'>
            <ul>
                <li className='name-warp'>炫酷的chuck</li>
                <li className='brand-box'>
                    <div className='brand-item'>
                        <div>文章</div>
                        <span>0</span>
                    </div>
                    <div className='brand-item'>
                        <div>粉丝</div>
                        <span>0</span>
                    </div>
                    <div className='brand-item'>
                        <div>获赞</div>
                        <span>0</span>
                    </div>
                </li>
                <li><UserOutlined style={{color: '#1e90ff', fontSize: '16px', paddingRight: '.5rem'}} className='my-icon' />个人中心</li>
                <li><MessageOutlined style={{color: '#1e90ff', fontSize: '16px', paddingRight: '.5rem'}} className='my-icon' />我的信息</li>
                <li><LogoutOutlined style={{color: '#1e90ff', fontSize: '16px', paddingRight: '.5rem'}} className='my-icon' />退出</li>
            </ul>
        </div>
    )
}

export default UserInfo