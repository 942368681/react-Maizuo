import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import '../css/swiper.css';
import $ from 'jquery';

class Swiper extends Component {
   render() {
      return (
         <ReactSwipe className="carousel" swipeOptions={{
            continuous: true,auto:3000
         }}>
            <div><img src = "https://pic.maizuo.com/h5PicUpload/9c6b27260a23a248a49548979779168f.jpg" /></div>
            <div><img src = "https://pic.maizuo.com/h5PicUpload/926581999c78f6790c43159e4313c11e.jpg" /></div>
         </ReactSwipe>
      );
   };
};

export default Swiper;
