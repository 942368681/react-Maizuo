import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
   Link
} from 'react-router-dom';
import '../css/signin.css';
import $ from 'jquery';

class SignIn extends Component{
   componentDidMount(){
      let h = $('#header').height();
      $('.signin').css({
         marginTop:h
      });
   };
   out = () => {
      this.props.out();
   };
   render(){
      return(
         <div className = "signin">
            <div className = "signinHead">
               <div className = "headPic">
                  <img src = "https://pic.maizuo.com/usr/default/maizuomoren66.jpg" />
               </div>
               <p className = "p1">用户：{this.props.userName}</p>
               <p className = "p2">ID:{+new Date()}</p>
               <Link to = "/sign" className = "out" onClick = {this.out}>退出</Link>
            </div>
            <div className = "signinBody">
               <ul className = "lista">
                  <li><Link to = "/404">影票订单</Link></li>
                  <li><Link to = "/404">影票代付订单</Link></li>
                  <li><Link to = "/404">影票订单</Link></li>
               </ul>
               <ul className = "listb">
                  <li><Link to = "/404">我的代金券</Link></li>
                  <li><Link to = "/404">账户余额</Link></li>
                  <li><Link to = "/404">我的卖座卡</Link></li>
               </ul>
               <ul className = "listc">
                  <li><Link to = "/404">设置</Link></li>
               </ul>
            </div>
         </div>
      );
   };
};

export default SignIn;
