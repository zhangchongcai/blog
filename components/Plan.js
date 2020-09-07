import React, { useState } from 'react'
import '../static/style/components/plan.css'
const Plan = props => {
    return (
        <div>
            <div className='comm-box plan-box img-focus'>
                <img src='../static/images/studyPlan.png' style={{width: '100%'}}/>
                <span className='plan-text'>2020年学习计划</span>
            </div>
            <div className='comm-box daily-box'>
                <p className='daily-title'>每日一句</p>
                <div>
                    <img src={props.daily.src} style={{width: '100%'}}/>
                    <div className='daily-content'>
                        {props.daily.text}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plan