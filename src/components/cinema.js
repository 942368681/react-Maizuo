import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/cinema.css';
import $ from 'jquery';
import arr from './data.js';

class Item extends Component{
   render(){
      let style = this.props.view?({display:'block'}):({display:'none'});
      return(
         <div className = "cinemaItem" style = {style}>
            <h3>{this.props.name}</h3>
            <i className="icon1"></i>
            <i className="icon2"></i>
            <span className = "span1">可乐爆米花</span>
            <span className = "span2">优惠活动</span>
            <p className = "address">{this.props.address}</p>
            <p className = "juli">距离未知</p>
         </div>
      );
   };
};

class CinemaList extends Component {
   constructor(){
     super();
     this.state = {
        //是否展示当地影院
        view:false
     }
   }
   componentDidMount(){
      this.setState({
         view:false
      });
   };
   show = () => {
      let bool = this.state.view;
      if (bool) {
         this.setState({
            view:false
         });
      } else {
         this.setState({
            view:true
         });
      }
   };
   render() {
      let list = this.props.arr.map((e,i) => {
         let data = {
            key:i,
            name:e.name,
            address:e.address,
            view:this.state.view
         }
         return <Item {...data} />
      });
      return (
         <div className="cinemalist">
            <h2 onClick = {this.show} >{this.props.name}</h2>
            {list}
         </div>
      );
   };
};

class Cinema extends Component {
   componentDidMount(){
      let h = $('#header').height();
      $('.cinemas').css({
         marginTop:h
      });
   };
   render() {
      let data = arr;
      let list = data.map((e,i) => {
         let data1 = {
            key:i,
            name:e[0].district.name,
            arr:e
         }
         return <CinemaList {...data1} />
      })
      return (
         <div className="cinemas">
            {list}
         </div>
      );
   };
};

export default Cinema;
