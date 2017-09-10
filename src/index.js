import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect
} from 'react-router-dom';
import Header from './components/header.js';
import Mask from './components/mask.js';
import Side from './components/side.js';
import HomePage from './components/homePage.js';
import Movie from './components/movie.js';
import Sign from './components/sign.js';
import SignIn from './components/signin.js';
import NoPaper from './components/nopaper.js';
import Gps from './components/gps.js';
import Cinema from './components/cinema.js';
import Details from './components/details.js';

class Home extends Component{
   constructor(){
     super();
     this.state = {
       sideShow:false,
       activeBool:true,
       //是否登陆
       signinBool:false,
       //登陆的用户
       userName:'',
       //定位
       position:'上海',
       //详情页数据
       id:'',
       //title
       title:'卖座电影'
     }
   }
   //控制侧边栏
   sideBar = (bool) => {
      if (bool) {
         this.setState({
            sideShow:true
         });
      } else {
         this.setState({
            sideShow:false
         });
      }
   }
   //侧边栏隐藏
   sideHidden = () => {
      this.setState({
         sideShow:false
      });
   };
   changeActive = (bool) => {
      this.setState({
         activeBool:bool
      });
   }
   //判断是否登陆
   signIn = (bool,username) => {
      if (bool) {
         this.setState({
            signinBool:true,
            userName:username
         });
      } else {
         this.setState({
            signinBool:false
         });
      }
   }
   //登出
   out = () => {
      this.setState({
         signinBool:false
      });
   };
   //切换地点
   address = (addr) => {
      this.setState({
         position:addr
      });
   };
   //详情页数据
   detailsData = (id,title) => {
      console.log(id,title);
      this.setState({
         id:id,
         title:title
      });
   };
   //title
   titleChange = (title) => {
      this.setState({
         title:title
      });
   };
   //titleReset
   titleReset = () => {
      this.setState({
         title:'卖座电影'
      });
   };
   render(){
      return(
         <Router>
            <div>
               <Header sideShow = {this.state.sideShow} sideBar = {this.sideBar} position = {this.state.position} title = {this.state.title} titleReset = {this.titleReset} />
               <Mask sideShow = {this.state.sideShow} sideHidden = {this.sideHidden} />
               <Side titleReset = {this.titleReset} sideShow = {this.state.sideShow} sideBar = {this.sideBar} />
                  <Switch>
                     <Route exact path = "/" render = {() => {
                        return <HomePage changeActive = {this.changeActive} detailsData = {this.detailsData} />
                     }} />
                     <Route path = "/homepage" render = {() => {
                        return <HomePage changeActive = {this.changeActive}  detailsData = {this.detailsData} />
                     }} />
                     <Route path = "/movie" render = {() => {
                        return <Movie activeBool = {this.state.activeBool} detailsData = {this.detailsData} />
                     }} />
                     <Route path = "/sign" render = {() => {
                        if (this.state.signinBool) {
                           return <Redirect to="/signin" />
                        } else {
                           return <Sign signIn = {this.signIn} />
                        }
                     }} />
                     <Route path = "/signin" render = {() => {
                        if (this.state.signinBool) {
                           return <SignIn out = {this.out} userName = {this.state.userName} />
                        } else {
                           return <Redirect to="/sign" />
                        }
                     }} />
                     <Route path = "/404" component = {NoPaper} />
                     <Route path = "/gps" render = {() => {
                        return <Gps address = {this.address} />
                     }} />
                     <Route path = "/cinema" component = {Cinema} />
                     <Route path = "/details" render = {() => {
                        return <Details id = {this.state.id} titleChange = {this.titleChange} />
                     }} />
                  </Switch>
            </div>
         </Router>
      );
   };
};


ReactDOM.render(<Home />, document.getElementById('root'));
