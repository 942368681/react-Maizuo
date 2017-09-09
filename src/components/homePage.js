import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
   Link
} from 'react-router-dom';
import '../css/homePage.css';
import $ from 'jquery';
import Swiper from './swiper';

class Lis1 extends Component{
   details = () => {
      console.log(this.title.innerText);
      let title = this.title.innerText;
      this.props.detailsData(this.props.id,title);
   };
   render(){
      return(
         <li>
            <Link to = "/details" onClick = {this.details}>
               <img src = {this.props.img} />
               <div className = "txt">
                  <p className = "p1" ref = {(elem) => {this.title = elem}}>{this.props.title}</p>
                  <p className = "p2">导演：{this.props.directors}</p>
                  <span>{this.props.rating}</span>
               </div>
            </Link>
         </li>
      );
   };
}

class Lis2 extends Component{
   details = () => {
      console.log(this.title.innerText);
      this.props.detailsData(this.props.id,this.title.innerText);
   };
   render(){
      return(
         <li>
            <Link to = "/details" onClick = {this.details}>
               <img src = {this.props.img} />
               <div className = "txt">
                  <p className = "p1" ref = {(elem) => {this.title = elem}}>{this.props.title}</p>
                  <span>{this.props.rating}</span>
               </div>
            </Link>
         </li>
      );
   };
}

class HomePage extends Component{
   constructor(){
     super();
     this.state = {
       //正在热映
       data1:[],
       //即将上映
       data2:[]
     }
   }
   componentDidMount(){
      let h = $('#header').height();
      $('.homepage').css({
         marginTop:h
      });
      //请求数据
      //热门电影
      //https://api.douban.com/v2/movie/in_theaters
      $.ajax({
         url: 'https://api.douban.com/v2/movie/in_theaters',
         dataType: 'jsonp',
         data: {
            start: 0,
            count: 5
         },
         success: (data) => {
            this.setState({
               data1:data.subjects
            });
         }
      });
      //即将上映电影
      //https://api.douban.com/v2/movie/coming_soon
      $.ajax({
         url: 'https://api.douban.com/v2/movie/coming_soon',
         dataType: 'jsonp',
         data: {
            start: 0,
            count: 3
         },
         success: (data) => {
            this.setState({
               data2:data.subjects
            });
         }
      });
   };
   //传递详情页数据
   detailsData = (id,title) => {
      this.props.detailsData(id,title);
   };
   click1 = (ev) => {
      this.props.changeActive(false);
   };
   click2 = (ev) => {
      this.props.changeActive(true);
   };
   render(){
      //正在热映
      let {data1} = this.state;
      let data3 = Object.assign(data1);
      let list1 = data3.map((e,i) => {
         let data = {
            img:e.images.large,
            title:e.title,
            directors:e.directors[0].name,
            rating:e.rating.average,
            key:i,
            detailsData:this.detailsData,
            id:e.id
         };
         return <Lis1 {...data}/>
      });
      //即将上映
      let {data2} = this.state;
      let data4 = Object.assign(data2);
      let list2 = data4.map((e,i) => {
         let data = {
            img:e.images.large,
            title:e.title,
            rating:e.rating.average,
            key:i,
            detailsData:this.detailsData,
            id:e.id
         };
         return <Lis2 {...data}/>
      });
      return(
         <div className = "homepage">
            <Swiper />
            <ul className = "homepage_list1">
               {list1}
            </ul>
            <Link
               to = "/movie/now"
               className = "more1"
               onClick = {this.click2}
            >
               更多热映电影
            </Link>
            <div className = "will">
               <span className = "left"></span>
               <span className = "mid">即将上映</span>
               <span className = "right"></span>
            </div>
            <ul className = "homepage_list2">
               {list2}
            </ul>
            <Link
               onClick = {this.click1}
               to = "/movie/will"
               className = "more2"
            >
               更多即将上映电影
            </Link>
         </div>
      );
   };
};

export default HomePage;
