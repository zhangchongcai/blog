
import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'
import { Tooltip } from 'antd';
import { 
    QqOutlined,
    WechatOutlined,
    WeiboOutlined
 } from '@ant-design/icons';
const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src=""  /></div>
            <div className="author-introduction">
                study,study,study
                <Divider>社交账号</Divider>
                    <Tooltip title='点赞关注我'>
                        <Avatar size={28} icon={<QqOutlined />} className="account"  />
                    </Tooltip>
                    <Tooltip title='暂无'>
                        <Avatar size={28} icon={<WechatOutlined />} className="account"  />
                    </Tooltip>
                    <Tooltip title='暂无'>
                        <Avatar size={28} icon={<WeiboOutlined />} className="account"  />
                    </Tooltip>
            </div>
        </div>
    )

}

export default Author