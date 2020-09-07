/**
 * @author cuishijie
 * @apis images must length > 4 array
 * 核心参数有：n>4张图片,响应式,某些样式参数，样式方面并不能开放所有出去，尤其是核心样式
 * 先看清组件的核心算法是什么。算不算按钮导航。
 */

import React, {useState, useEffect} from 'react';
import styles from '../static/style/components/slide.less';

const Comparison = {
  0: 'middle',
  1: 'start',
};

const Slide = props => {
 

  const loopDir =  (images) => {
    if (images && Array.isArray(images) && images.length < 4) {
      console.log('请输入至少四张图片');
      return [];
    }
    const _images = [...images];
    const dirs = _images.map((item, idx) => {
      let name;
      if (idx + 1 === _images.length) {
        name = 'end';
      } else {
        name = Comparison[idx] || 'normal';
      }
      return { name };
    });
    return dirs;
  }
  const imgArr = (name) => { // 数组处理
    const dirCopy = dir;
    if (name === 'start') {  // 点击左侧那张
      const pop = dirCopy.pop(); // 从数组尾部弹出一个元素
      dirCopy.unshift(pop); // 尾部元素添加到数组头部
    } else if (name === 'end') { // 点击右侧那张
      const shift = dirCopy.shift(); // 从数组头部弹出一个元素
      dirCopy.push(shift);  // 添加到数组尾部
    }
    setDir(dirCopy)
    // this.setState({ dir: dirCopy }); // 保存重新排列的数组 并触发render
  }
  const [dir, setDir] = useState(loopDir(props.images))
  const [current, setCurrent] = useState('')
  const slide = (name, key) => {  // 图片点击逻辑
    // 记录当前节点
    setCurrent(key)
    // this.setState({ current: key });
    // 数组操作
    imgArr(name);
  }

  const pointFunc = (index) => { // 按钮点击
    // const { current } = this.state;
    const dirCopy = dir;
    if (index < current) { // 鼠标经过左侧的按钮
      for (let i = 0; i < (current - index); i += 1) { // 判断距离
        const shift = dirCopy.shift(); // 进行数组操作
        dirCopy.push(shift);
      }
    } else if (index > current) { // 鼠标经过右侧的按钮
      for (let i = 0; i < (index - current); i += 1) {
        const pop = dirCopy.pop();
        dirCopy.unshift(pop);
      }
    }
    setDir(dirCopy)
    setCurrent(index)
    // this.setState({ dir: dirCopy }); // 触发react-render重新渲染页面
    // this.setState({ current: index }); // 记录当前图片节点
  }


    return (
      <div className='silder-warp'>
        {/* 外部容器*/}
        <div className='slideBox'>
          {/* 内部循环*/}
          {
            dir.map((item, idx) => {
              return (
                <div key={idx} className={`slide ${[item.name]}`}>
                  <img src={props.images[idx]} alt="404.png" />
                  <div
                    className='masking'
                    onClick={() => slide(item.name, idx)}
                  >{''}</div>
                </div>
              );
            })
          }
          {/* 导航按钮*/}
          <div className='point'>
            {
              dir.map((item, key) => {
                return (
                  <span
                    key={key}
                    className={item.name === 'start' ? 'hover' : ''}
                    onMouseEnter={() => pointFunc(key - 1)}
                  >{}</span>
                );
              })
            }
          </div>
        </div>
      </div>
    )
}

export default Slide;