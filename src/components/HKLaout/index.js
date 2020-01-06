import React,{Component} from 'react'
import { TabBar } from 'antd-mobile';
//引入这个withRoute并把这个HKLaout包起来，可以使用路由跳转属性history
import {withRouter} from 'react-router-dom'

class HKLaout extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selectedTab: 'blueTab',
    // };
  }


  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21B97A"
          barTintColor="white"
        
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i className="iconfont icon-ind"></i>
            }
            selectedIcon={<i className="iconfont icon-ind"></i>
            }
            // selected={this.state.selectedTab === 'blueTab'}
           selected={this.props.match.path==='/'}
            onPress={() => {
             this.props.history.push('/')
            }}
          
          >
            {this.props.match.path==='/'&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-findHouse"></i>
            }
            selectedIcon={
              <i className="iconfont icon-findHouse"></i>
            }
            title="找房"
            key="FindHouse"
           
            // selected={this.state.selectedTab === 'redTab'}
            selected={this.props.match.path==='/list'}
            onPress={() => {
              this.props.history.push('/list')
            }}
    
          >
             {this.props.match.path==='/list'&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i className="iconfont icon-infom"></i>
            }
            selectedIcon={
              <i className="iconfont icon-infom"></i>
            }
            title="咨询"
            key="info"
            // selected={this.state.selectedTab === 'greenTab'}
            selected={this.props.match.path==='/info'}
            onPress={() => {
              this.props.history.push('/info')
            }}
          >
            {this.props.match.path==='/info'&&this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-myinfo"></i>}
            selectedIcon={<i className="iconfont icon-myinfo"></i>}
            title="我的"
            key="my"
            // selected={this.state.selectedTab === 'yellowTab'}
            selected={this.props.match.path==='/profile'}
            onPress={() => {
              this.props.history.push('/profile')
            }}
          >
             {this.props.match.path==='/profile'&&this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
export default withRouter(HKLaout)