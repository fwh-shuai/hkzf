import React, { Component, Fragment } from 'react'
import baseUrl from '../../utils/urls.js'
import axios from '../../utils/request.js'
// import  "./index.css";
import  "./index.scss"

//导入轮播图
import { Carousel } from 'antd-mobile';
//导入图片
import nav1 from '../../assets/images/nav-1.png'
import nav2 from '../../assets/images/nav-2.png'
import nav3 from '../../assets/images/nav-3.png'
import nav4 from '../../assets/images/nav-4.png'


export default class index extends Component {
  state = {
    swiper_list: [],
    imgHeight: 176,
    navs:[
    {id:1,imgSrc:nav1,title:'整租'},
    {id:2,imgSrc:nav2,title:'合租'},
    {id:3,imgSrc:nav3,title:'地图找房'},
    {id:4,imgSrc:nav4,title:'去出租'}]
  }
  componentDidMount() {
    axios.get('/home/swiper').then((res) => {
      console.log(res)
      this.setState({
        swiper_list: res.body,
      });
    })
  }
  render() {
    return (
      <Fragment>
        <div className='hk_home'>
        <div className='hk_swiper'>
          <Carousel
            autoplay={true}
            infinite          
          >
            {this.state.swiper_list.map(val => (
              <a
                key={val.id}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={baseUrl+val.imgSrc}
                  alt={val.alt}
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
         
        </div>
          {/* 下面是首页导航 */}
     
          <div className='hk_nav'>
          {
            this.state.navs.map((v)=>
              <div className='hk_nav_item' key={v.id} >
                <div className='tupian' >
                  <img src={v.imgSrc} alt={v.title}  ></img>
                  <p> {v.title}</p>
                </div>
              </div>
            )
          }
      </div>
     
     
    
      </div>
     
      </Fragment>
    )
  }

}