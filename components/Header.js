import React, {useState,useEffect} from 'react'
import '../static/style/components/header.css'
import { Row, Col, Message, Modal, Input, Button, Avatar } from 'antd'
import UserInfo from "./UserInfo";
import Router from 'next/router'
import Axios from 'axios'
import servicePath from '../api/apiUrl'
import {
    UserOutlined,
    KeyOutlined,
    WeiboCircleOutlined
} from '@ant-design/icons'
const Header = () => {
    const [navArray, setNavArray] = useState([])
    const [vistible, setVistible] = useState(false)
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(servicePath.getTypeInfo).then(
                (res) => {
                return res.data.data
            }) 
            setNavArray(result)
        } 
        fetchData()
    }, []);
    const handleClick = (key) => {
        if(key == 1 ){
            Router.push('./')
        } else if (key == 4) {
            setVistible(true)
        } else {
            Router.push('./list?id=' + key)
        }
    }
    const checkLogin = () => {
      Message.warning('靓仔，功能待完善！')
    }
    const onCancel = _ => {
        setVistible(false)
    }
    return(
        <div className='header'>
            <Modal
                title="登录"
                visible={vistible}
                onCancel={onCancel}
                footer={false}
            >
                <Input
                        id="userName"
                        size="large"
                        placeholder="Enter your userName"
                        prefix={<UserOutlined />}
                        onChange={(e)=>{setUserName(e.target.value)}}
                    /> 
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined />}
                        onChange={(e)=>{setPassWord(e.target.value)}}
                    />
                    <div className='login-footer'>
                        <a style={{padding: '10px 0'}}>忘记密码</a>
                        <Button
                            block onClick={checkLogin} 
                            type="primary"
                            size="large" 
                            style={{width: '25%', margin: '0 auto', borderRadius: '50px'}}
                        > Login in 
                        </Button>
                        <div style={{textAlign: 'center', padding: '10px 0'}}>
                            <span>登录即同意</span>
                            <a>
                                「软件许可服务协议」
                            </a>
                            <div>
                                <Avatar size={28} icon={<WeiboCircleOutlined />} className="account"  />
                            </div>
                        </div>
                        <div style={{textAlign: 'right'}}>
                            <a>注册</a>
                        </div>
                    </div>

            </Modal>
            <Row justify='center'>
                <Col xs={24} sm={24} md={8} lg={8} xl={9}>
                    <span className='header-logo'>我的博客</span>
                    <span className='header-txt'>学习前端，网站开发中ing。。。</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={15} xl={12} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <div className='user-box'>
                        <Avatar src='../static/images/touxiang.jpeg' />
                        <UserInfo />
                    </div>
                    <div className='menu-box'
                    >
                        {
                            navArray.map((item) => {
                                return(
                                    <a className='menu-item' key={item.id} onClick={() => handleClick(item.id)}>
                                        <span className='iconfont' dangerouslySetInnerHTML={{ __html: item.iconFont }}></span>
                                        <span style={{paddingLeft: '5px'}}>{item.typeName}</span>
                                    </a>
                                )
                            })

                        }
                    </div>
                </Col>
            </Row>

        </div>
    )
}
export default Header