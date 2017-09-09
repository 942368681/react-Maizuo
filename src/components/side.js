import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/side.css';
import $ from 'jquery';
import {
   Link
} from 'react-router-dom';

class Side extends Component{
   constructor(){
     super();
     this.state = {
       w:''
     }
   }
   componentDidMount(){
      let h1 = $('#header').height();
      let h2 = $(window).innerHeight();
      let h = h2 - h1;
      let w = $('.side').width();
      $('.side').css({
         height:h,
         position:'absolute',
         top:h1,
         left:-w
      });
      this.setState({
         w:w
      });
   };
   click = () => {
      this.props.sideBar(false)
   };
   render(){
      if (this.props.sideShow) {
         $('.side').css({
            left:0
         });
      } else {
         $('.side').css({
            left:-this.state.w
         });
      }
      return(
         <div className ="side">
            <ul>
               <li>
                  <Link to = "/homepage" onClick = {this.click}>首页</Link>
               </li>
               <li>
                  <Link to = "/movie/now" onClick = {this.click}>影片</Link>
               </li>
               <li>
                  <Link to = "/cinema" onClick = {this.click}>影院</Link>
               </li>
               <li>
                  <Link to = "/404" onClick = {this.click}>商城</Link>
               </li>
               <li>
                  <Link to = "/sign" onClick = {this.click}>我的</Link>
               </li>
               <li>
                  <Link to = "/404" onClick = {this.click}>卖座卡</Link>
               </li>
            </ul>
         </div>
      );
   };
};

export default Side;
