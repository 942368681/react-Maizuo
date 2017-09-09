import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
   BrowserRouter as Router,
   Route,
   Switch,
   Redirect,
   Link
} from 'react-router-dom';
import '../css/header.css';
import $ from 'jquery';

class Header extends Component {
   //点击展开收起侧边栏
   sideBar = () => {
      if (this.props.sideShow) {
         this.props.sideBar(false);
      } else {
         this.props.sideBar(true);
      }
   };
   //如果当前侧边栏是展开的，就隐藏
   sideBarHidden = () => {
      if (this.props.sideShow) {
         this.props.sideBar(false);
      }
   };
   render() {
      return (
         <div id = "header">
            <a
               href = "javascript:;"
               className = "headerLeft"
               onClick = {this.sideBar}
            ></a>
            <div className = "headerRight">
               <h2>{this.props.title}</h2>
               <Link to = "/gps" className = "address" onClick = {this.sideBarHidden}>
                  <span>{this.props.position}</span>
               </Link>
               <Link to = "/sign" className = "person" onClick = {this.sideBarHidden}></Link>
            </div>
         </div>
      );
   };
};

export default Header;
