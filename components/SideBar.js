import React from 'react'
import Author from '../components/Author' // 作者介绍
import Advert from '../components/Advert' // 广告
import Plan from '../components/Plan'


const SildeBar = props => {
    return(
        <div>
            <Plan daily={props.daily}/>
            <Author />
            <Advert />
        </div>
    )
}
export default SildeBar