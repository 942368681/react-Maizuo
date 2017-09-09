import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
   Link
} from 'react-router-dom';
import $ from 'jquery';
import '../css/list2.css';

class Lis2 extends Component{
   details = () => {
      this.props.detailsData(this.props.id,this.title.innerText);
   };
   render(){
      return(
         <li>
            <Link to = "/details" onClick = {this.details}>
               <div className = "con">
                  <img src = {this.props.img} />
                  <div className = "conRight">
                     <p className = "p1" ref = {(elem) => {this.title = elem}}>{this.props.title}</p>
                     <p className = "p2">导演：{this.props.directors}</p>
                     <span>{this.props.rating}</span>
                  </div>
               </div>
            </Link>
         </li>
      );
   };
};

class List2 extends Component {
   constructor(){
     super();
     this.state = {
       data:[]
     }
   }
   componentDidMount(){
      $.ajax({
         url: 'https://api.douban.com/v2/movie/coming_soon',
         dataType: 'jsonp',
         data: {
            start: 0,
            count:30
         },
         success: (data) => {
            this.setState({
               data:data.subjects
            });
         }
      });
   };
   detailsData = (id,title) => {
      this.props.detailsData(id,title);
   };
   render(){
      let {data} = this.state;
      let data1 = Object.assign(data);
      let list1 = data1.map((e,i) => {
         let data = {
            img:e.images.large,
            title:e.title,
            directors:e.directors[0].name,
            rating:e.rating.average,
            key:i,
            id:e.id,
            detailsData:this.detailsData
         };
         return <Lis2 {...data}/>
      });
      return(
         <ul className = "list1">
            {list1}
         </ul>
      );
   };
};

export default List2;
