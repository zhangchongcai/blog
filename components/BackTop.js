import React from 'react'
import { BackTop } from 'antd'
import '../static/style/components/backTop.css'
import {
    ArrowUpOutlined
} from '@ant-design/icons'
const MyBackTop = () => {
    return (
        <BackTop>
            <div className='back-top-box'>
                <ArrowUpOutlined />
            </div>
        </BackTop>
    )
}

export default MyBackTop