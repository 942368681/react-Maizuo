import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
   Route,
   Switch,
   Link
} from 'react-router-dom';
import '../css/movie.css';
import $ from 'jquery';
import List1 from './list1.js';
import List2 from './list2.js';

class Movie extends Component {
   componentDidMount(){
      let h = $('#header').height();
      $('.movie').css({
         marginTop:h
      });
   };
   click = (ev) => {
      $('.movieHead').children().removeClass('active');
      ev.target.className = 'active';
   };
   detailsData = (id,title) => {
      this.props.detailsData(id,title);
   };
   render(){
      let style1 = "";
      let style2 = "";
      if (this.props.activeBool) {
         style1 = "active";
         style2 = "";
      } else {
         style1 = "";
         style2 = "active";
      }
      return(
         <div className = "movie">
            <div className = "movieHead">
               <Link
                  className = {style1}
                  to = "/movie/now"
                  onClick = {this.click}
               >正在热映</Link>
               <Link
                  className = {style2}
                  to = "/movie/will"
                  onClick = {this.click}
               >即将上映</Link>
            </div>
            <Switch>
               <Route exact path = "/movie" render = {() => {
                  return <List1 detailsData = {this.detailsData} />
               }} />
               <Route path = "/movie/now" render = {() => {
                  return <List1 detailsData = {this.detailsData} />
               }} />
               <Route path = "/movie/will" render = {() => {
                  return <List2 detailsData = {this.detailsData} />
               }} />
            </Switch>
            <List1 />
         </div>
      );
   };
};

export default Movie;
