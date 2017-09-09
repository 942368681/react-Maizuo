import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/mask.css';
import $ from 'jquery';

class Mask extends Component{
   componentDidMount(){
      let h = $(window).innerHeight() - $('#header').height();
      let h1 = $('#header').height();
      $('.mask').css({
         height:h,
         position:'absolute',
         top:h1
      });
   };
   sideHidden = () => {
      this.props.sideHidden();
   };
   render(){
      if (this.props.sideShow) {
         $('.mask').css({
            display:'block'
         });
      } else {
         $('.mask').css({
            display:'none'
         });
      }
      return(
         <div className = "mask" onClick = {this.sideHidden}></div>
      );
   };
};

export default Mask;
