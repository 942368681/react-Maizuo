import React, {Component} from 'react';
import '../css/nopaper.css';
import $ from 'jquery';

class NoPaper extends Component{
   componentDidMount(){
      let h1 = $('#header').height();
      let w1 = $(window).width();
      let w = $('.nopaper').width();
      $('.nopaper').css({
         position:'relative',
         top:(2*h1),
         left:(w1/2),
         marginLeft:-(w/2)
      });
   };
   render(){
      return(
         <div className = "nopaper">
            <img src = "//static.m.maizuo.com/v4/static/app/asset/d6890783c910094a9d88db23f5202165.png" />
         </div>
      );
   };
};

export default NoPaper;
