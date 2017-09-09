import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
   Link
} from 'react-router-dom';
import '../css/sign.css';
import $ from 'jquery';

class Sign extends Component{
   constructor(){
     super();
     this.state = {
        //密码
        arr:[
           {user:'123',password:'123'},
           {user:'guest',password:'guest'}
        ]
     }
   }

   signIn = () => {
      let {arr} = this.state;
      console.log(this.username.value,this.password.value);
      arr.forEach((e,i) => {
         if (e.user === this.username.value && e.password === this.password.value) {
            this.props.signIn(true,this.username.value);
         }
      });
   };

   render(){
      return(
         <div className = "sign">
            <div className = "user">
               <div className = "signBg"></div>
               <input type = "text" placeholder = "请输入用户名" ref= {(elem) => {this.username = elem}} />
            </div>
            <div className = "password">
               <div className = "signBg"></div>
               <input type = "password" placeholder = "请输入密码" ref= {(elem) => {this.password = elem}} />
            </div>
            <Link to = "/signin" onClick = {this.signIn}>登陆</Link>
         </div>
      );
   };
};

export default Sign;
