import React, {Component} from 'react';
import '../css/details.css';
import $ from 'jquery';

class Details extends Component{
   constructor(){
     super();
     this.state = {
       data:null,
       img:null,
       directors:null,
      //  title:null,
       casts:null,
       countries:null,
       genres:null,
       year:null,
       summary:null
     }
   }
   //https://api.douban.com/v2/movie/subject/:id
   componentDidMount(){
      let h = $('#header').height();
      $('.details').css({
         marginTop:h
      });
      let id = this.props.id;
      $.ajax({
         url: 'https://api.douban.com/v2/movie/subject/'+id,
         dataType: 'jsonp',
         success: (data) => {
            let arrCasts = [];
            data.casts.forEach((e,i) => {
               arrCasts.push(e.name);
            });
            let str1 = arrCasts.join(' | ');
            let str2 = data.genres.join(' | ');
            this.setState({
               data:data,
               img:data.images.large,
               // title:data.title,
               directors:data.directors[0].name,
               casts:str1,
               countries:data.countries[0],
               genres:str2,
               year:data.year,
               summary:data.summary
            });
         }
      });
   };
   render(){
      return(
         <div className = "details">
            <div className = "pic">
               <img src = {this.state.img} />
            </div>
            <h4>
               <span></span>
               影片简介
            </h4>
            <div className = "info">
               <p className = "tips">导演：{this.state.directors}</p>
               <p className = "tips">主演：{this.state.casts}</p>
               <p className = "tips">地区语言：{this.state.countries}</p>
               <p className = "tips">类型：{this.state.genres}</p>
               <p className = "tips">上映日期：{this.state.year}</p>
               <p className = "txt">{this.state.summary}</p>
            </div>
         </div>
      );
   };
};

export default Details;
