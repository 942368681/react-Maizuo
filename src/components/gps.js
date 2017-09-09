import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
   Link
} from 'react-router-dom';
import '../css/gps.css';
import $ from 'jquery';

class Gps extends Component{
   componentDidMount(){
      let h = $('#header').height();
      $('.gps').css({
         marginTop:h
      });
   };
   address = (ev) => {
      this.props.address(ev.target.innerText);
   };
   render(){
      return(
         <div className = "gps">
            <p className = "gps_p">GPS定位你所在城市</p>
            <div className = "gps_div clearfix">
               <Link to ="/" className = "bj" onClick = {this.address}>上海</Link>
            </div>
            <p className = "gps_p">热门城市</p>
            <div className = "gps_div clearfix">
               <Link to ="/" onClick = {this.address}>北京</Link>
               <Link to ="/" onClick = {this.address}>上海</Link>
               <Link to ="/" onClick = {this.address}>广州</Link>
               <Link to ="/" onClick = {this.address}>深圳</Link>
            </div>
            <p className = "gps_p">按字母排序</p>
            <div className = "gps_div">
               <div className = "item clearfix">
                  <span>A</span>
                  <span>B</span>
                  <span>C</span>
                  <span>D</span>
               </div>
               <div className = "item clearfix">
                  <span>E</span>
                  <span>F</span>
                  <span>G</span>
                  <span>H</span>
               </div>
               <div className = "item clearfix">
                  <span>J</span>
                  <span>K</span>
                  <span>L</span>
                  <span>M</span>
               </div>
               <div className = "item clearfix">
                  <span>N</span>
                  <span>P</span>
                  <span>Q</span>
                  <span>R</span>
               </div>
               <div className = "item clearfix">
                  <span>S</span>
                  <span>T</span>
                  <span>W</span>
                  <span>X</span>
               </div>
               <div className = "item clearfix last">
                  <span>Y</span>
                  <span>Z</span>
               </div>
            </div>
            <p className = "gps_p">A</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>安顺</Link>
               <Link to ="/" onClick = {this.address}>阿拉善盟</Link>
               <Link to ="/" onClick = {this.address}>安宁</Link>
               <Link to ="/" onClick = {this.address}>安康</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>安庆</Link>
               <Link to ="/" onClick = {this.address}>安阳</Link>
               <Link to ="/" onClick = {this.address}>鞍山</Link>
            </div>
            <p className = "gps_p">B</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>白银</Link>
               <Link to ="/" onClick = {this.address}>毕节</Link>
               <Link to ="/" onClick = {this.address}>北海</Link>
               <Link to ="/" onClick = {this.address}>北京</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>本溪</Link>
               <Link to ="/" onClick = {this.address}>巴中</Link>
               <Link to ="/" onClick = {this.address}>百色</Link>
               <Link to ="/" onClick = {this.address}>滨州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>毫州</Link>
               <Link to ="/" onClick = {this.address}>保定</Link>
               <Link to ="/" onClick = {this.address}>宝鸡</Link>
               <Link to ="/" onClick = {this.address}>蚌埠</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>巴彦淖尔</Link>
               <Link to ="/" onClick = {this.address}>白城</Link>
               <Link to ="/" onClick = {this.address}>宝山</Link>
               <Link to ="/" onClick = {this.address}>包头</Link>
            </div>
            <p className = "gps_p">C</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>巢湖</Link>
               <Link to ="/" onClick = {this.address}>成都</Link>
               <Link to ="/" onClick = {this.address}>长春</Link>
               <Link to ="/" onClick = {this.address}>郴州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>常德</Link>
               <Link to ="/" onClick = {this.address}>长治</Link>
               <Link to ="/" onClick = {this.address}>长沙</Link>
               <Link to ="/" onClick = {this.address}>重庆</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>滁州</Link>
               <Link to ="/" onClick = {this.address}>赤峰</Link>
               <Link to ="/" onClick = {this.address}>沧州</Link>
               <Link to ="/" onClick = {this.address}>楚雄</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>潮州</Link>
               <Link to ="/" onClick = {this.address}>朝阳</Link>
               <Link to ="/" onClick = {this.address}>常州</Link>
               <Link to ="/" onClick = {this.address}>承德</Link>
            </div>
            <p className = "gps_p">D</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>德州</Link>
               <Link to ="/" onClick = {this.address}>东营</Link>
               <Link to ="/" onClick = {this.address}>儋州</Link>
               <Link to ="/" onClick = {this.address}>大理</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>大庆</Link>
               <Link to ="/" onClick = {this.address}>德阳</Link>
               <Link to ="/" onClick = {this.address}>都江堰</Link>
               <Link to ="/" onClick = {this.address}>东莞</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>大同</Link>
               <Link to ="/" onClick = {this.address}>达州</Link>
               <Link to ="/" onClick = {this.address}>丹东</Link>
               <Link to ="/" onClick = {this.address}>大连</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>德宏州</Link>
            </div>
            <p className = "gps_p">E</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>鄂州</Link>
               <Link to ="/" onClick = {this.address}>恩施</Link>
               <Link to ="/" onClick = {this.address}>鄂尔多斯</Link>
            </div>
            <p className = "gps_p">F</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>阜阳</Link>
               <Link to ="/" onClick = {this.address}>阜新</Link>
               <Link to ="/" onClick = {this.address}>抚顺</Link>
               <Link to ="/" onClick = {this.address}>福州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>富阳</Link>
               <Link to ="/" onClick = {this.address}>抚州</Link>
               <Link to ="/" onClick = {this.address}>丰城</Link>
               <Link to ="/" onClick = {this.address}>佛山</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>防城港</Link>
            </div>
            <p className = "gps_p">G</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>广元</Link>
               <Link to ="/" onClick = {this.address}>桂林</Link>
               <Link to ="/" onClick = {this.address}>广州</Link>
               <Link to ="/" onClick = {this.address}>固原</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>盖州</Link>
               <Link to ="/" onClick = {this.address}>贵港</Link>
               <Link to ="/" onClick = {this.address}>公主岭市</Link>
               <Link to ="/" onClick = {this.address}>固始县</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>赣州</Link>
               <Link to ="/" onClick = {this.address}>贵阳</Link>
               <Link to ="/" onClick = {this.address}>高邮</Link>
               <Link to ="/" onClick = {this.address}>广安</Link>
            </div>
            <p className = "gps_p">H</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>怀化</Link>
               <Link to ="/" onClick = {this.address}>菏泽</Link>
               <Link to ="/" onClick = {this.address}>衡水</Link>
               <Link to ="/" onClick = {this.address}>惠州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>呼伦贝尔</Link>
               <Link to ="/" onClick = {this.address}>衡阳</Link>
               <Link to ="/" onClick = {this.address}>哈尔滨</Link>
               <Link to ="/" onClick = {this.address}>海宁</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>湖州</Link>
               <Link to ="/" onClick = {this.address}>海口</Link>
               <Link to ="/" onClick = {this.address}>洪湖</Link>
               <Link to ="/" onClick = {this.address}>黄山</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>合肥</Link>
               <Link to ="/" onClick = {this.address}>葫芦岛</Link>
               <Link to ="/" onClick = {this.address}>黄冈</Link>
               <Link to ="/" onClick = {this.address}>杭州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>淮南</Link>
               <Link to ="/" onClick = {this.address}>邯郸</Link>
               <Link to ="/" onClick = {this.address}>汉中</Link>
               <Link to ="/" onClick = {this.address}>淮安</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>桦甸市</Link>
               <Link to ="/" onClick = {this.address}>和龙市</Link>
               <Link to ="/" onClick = {this.address}>淮北</Link>
               <Link to ="/" onClick = {this.address}>河源</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>红河州</Link>
               <Link to ="/" onClick = {this.address}>呼和浩特</Link>
               <Link to ="/" onClick = {this.address}>黄石</Link>
               <Link to ="/" onClick = {this.address}>海北州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>鹤岗</Link>
               <Link to ="/" onClick = {this.address}>合作</Link>
               <Link to ="/" onClick = {this.address}>海东</Link>
               <Link to ="/" onClick = {this.address}>河池</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>黑河</Link>
            </div>
            <p className = "gps_p">J</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>荆门</Link>
               <Link to ="/" onClick = {this.address}>济宁</Link>
               <Link to ="/" onClick = {this.address}>嘉峪关</Link>
               <Link to ="/" onClick = {this.address}>济源</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>金华</Link>
               <Link to ="/" onClick = {this.address}>九江</Link>
               <Link to ="/" onClick = {this.address}>介休</Link>
               <Link to ="/" onClick = {this.address}>晋城</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>吉林</Link>
               <Link to ="/" onClick = {this.address}>江油</Link>
               <Link to ="/" onClick = {this.address}>靖江</Link>
               <Link to ="/" onClick = {this.address}>焦作</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>景德镇</Link>
               <Link to ="/" onClick = {this.address}>锦州</Link>
               <Link to ="/" onClick = {this.address}>吉安</Link>
               <Link to ="/" onClick = {this.address}>酒泉</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>荆州</Link>
               <Link to ="/" onClick = {this.address}>佳木斯</Link>
               <Link to ="/" onClick = {this.address}>揭阳</Link>
               <Link to ="/" onClick = {this.address}>济南</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>江门</Link>
               <Link to ="/" onClick = {this.address}>晋中</Link>
               <Link to ="/" onClick = {this.address}>嘉兴</Link>
               <Link to ="/" onClick = {this.address}>冀州市</Link>
            </div>
            <p className = "gps_p">K</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>昆明</Link>
               <Link to ="/" onClick = {this.address}>开封</Link>
               <Link to ="/" onClick = {this.address}>开原</Link>
            </div>
            <p className = "gps_p">L</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>聊城</Link>
               <Link to ="/" onClick = {this.address}>莱芜</Link>
               <Link to ="/" onClick = {this.address}>吕梁</Link>
               <Link to ="/" onClick = {this.address}>乐山</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>辽阳</Link>
               <Link to ="/" onClick = {this.address}>泸州</Link>
               <Link to ="/" onClick = {this.address}>临安</Link>
               <Link to ="/" onClick = {this.address}>娄底</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>临海</Link>
               <Link to ="/" onClick = {this.address}>丽水</Link>
               <Link to ="/" onClick = {this.address}>六盘水</Link>
               <Link to ="/" onClick = {this.address}>临沧</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>廊坊</Link>
               <Link to ="/" onClick = {this.address}>洛阳</Link>
               <Link to ="/" onClick = {this.address}>漯河</Link>
               <Link to ="/" onClick = {this.address}>六安</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>连云港</Link>
               <Link to ="/" onClick = {this.address}>辽源</Link>
               <Link to ="/" onClick = {this.address}>凉山州</Link>
               <Link to ="/" onClick = {this.address}>丽江</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>龙岩</Link>
               <Link to ="/" onClick = {this.address}>临沂</Link>
               <Link to ="/" onClick = {this.address}>兰州</Link>
               <Link to ="/" onClick = {this.address}>柳州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>临汾</Link>
               <Link to ="/" onClick = {this.address}>来宾</Link>
               <Link to ="/" onClick = {this.address}>陇南</Link>
               <Link to ="/" onClick = {this.address}>临夏州</Link>
            </div>
            <p className = "gps_p">M</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>绵阳</Link>
               <Link to ="/" onClick = {this.address}>满洲里</Link>
               <Link to ="/" onClick = {this.address}>马鞍山</Link>
               <Link to ="/" onClick = {this.address}>梅州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>眉山</Link>
               <Link to ="/" onClick = {this.address}>茂名</Link>
               <Link to ="/" onClick = {this.address}>牡丹江</Link>
            </div>
            <p className = "gps_p">N</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>南通</Link>
               <Link to ="/" onClick = {this.address}>南昌</Link>
               <Link to ="/" onClick = {this.address}>宁德</Link>
               <Link to ="/" onClick = {this.address}>宁波</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>南充</Link>
               <Link to ="/" onClick = {this.address}>南阳</Link>
               <Link to ="/" onClick = {this.address}>南宁</Link>
               <Link to ="/" onClick = {this.address}>怒江州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>南平</Link>
               <Link to ="/" onClick = {this.address}>南京</Link>
               <Link to ="/" onClick = {this.address}>内江</Link>
            </div>
            <p className = "gps_p">P</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>盘锦</Link>
               <Link to ="/" onClick = {this.address}>攀枝花</Link>
               <Link to ="/" onClick = {this.address}>平顶山</Link>
               <Link to ="/" onClick = {this.address}>邳州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>萍乡</Link>
               <Link to ="/" onClick = {this.address}>莆田</Link>
               <Link to ="/" onClick = {this.address}>普洱</Link>
               <Link to ="/" onClick = {this.address}>濮阳</Link>
            </div>
            <p className = "gps_p">Q</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>钦州</Link>
               <Link to ="/" onClick = {this.address}>曲靖</Link>
               <Link to ="/" onClick = {this.address}>庆阳</Link>
               <Link to ="/" onClick = {this.address}>清远</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>衢州</Link>
               <Link to ="/" onClick = {this.address}>黔南州</Link>
               <Link to ="/" onClick = {this.address}>潜江</Link>
               <Link to ="/" onClick = {this.address}>齐齐哈尔</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>青岛</Link>
               <Link to ="/" onClick = {this.address}>琼海</Link>
               <Link to ="/" onClick = {this.address}>秦皇岛</Link>
               <Link to ="/" onClick = {this.address}>泉州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>七台河</Link>
               <Link to ="/" onClick = {this.address}>启东</Link>
               <Link to ="/" onClick = {this.address}>黔东南州</Link>
               <Link to ="/" onClick = {this.address}>黔西南州</Link>
            </div>
            <p className = "gps_p">R</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>瑞安</Link>
               <Link to ="/" onClick = {this.address}>日照</Link>
            </div>
            <p className = "gps_p">S</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>双鸭山</Link>
               <Link to ="/" onClick = {this.address}>四平</Link>
               <Link to ="/" onClick = {this.address}>深圳</Link>
               <Link to ="/" onClick = {this.address}>三亚</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>邵阳</Link>
               <Link to ="/" onClick = {this.address}>三明</Link>
               <Link to ="/" onClick = {this.address}>石嘴山</Link>
               <Link to ="/" onClick = {this.address}>绍兴</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>苏州</Link>
               <Link to ="/" onClick = {this.address}>上海</Link>
               <Link to ="/" onClick = {this.address}>宿州</Link>
               <Link to ="/" onClick = {this.address}>汕尾</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>十堰</Link>
               <Link to ="/" onClick = {this.address}>上饶</Link>
               <Link to ="/" onClick = {this.address}>随州</Link>
               <Link to ="/" onClick = {this.address}>宿迁</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>商丘</Link>
               <Link to ="/" onClick = {this.address}>汕头</Link>
               <Link to ="/" onClick = {this.address}>石家庄</Link>
               <Link to ="/" onClick = {this.address}>遂宁</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>松原</Link>
               <Link to ="/" onClick = {this.address}>绥化</Link>
               <Link to ="/" onClick = {this.address}>沈阳</Link>
               <Link to ="/" onClick = {this.address}>商洛</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>朔州</Link>
               <Link to ="/" onClick = {this.address}>韶关</Link>
            </div>
            <p className = "gps_p">T</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>泰安</Link>
               <Link to ="/" onClick = {this.address}>铜仁</Link>
               <Link to ="/" onClick = {this.address}>通辽</Link>
               <Link to ="/" onClick = {this.address}>台州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>通化</Link>
               <Link to ="/" onClick = {this.address}>铜陵</Link>
               <Link to ="/" onClick = {this.address}>泰州</Link>
               <Link to ="/" onClick = {this.address}>天水</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>铁岭</Link>
               <Link to ="/" onClick = {this.address}>太原</Link>
               <Link to ="/" onClick = {this.address}>唐山</Link>
               <Link to ="/" onClick = {this.address}>天津</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>天门</Link>
            </div>
            <p className = "gps_p">W</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>乌兰察布</Link>
               <Link to ="/" onClick = {this.address}>威海</Link>
               <Link to ="/" onClick = {this.address}>五家渠</Link>
               <Link to ="/" onClick = {this.address}>潍坊</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>渭南</Link>
               <Link to ="/" onClick = {this.address}>温州</Link>
               <Link to ="/" onClick = {this.address}>涡阳</Link>
               <Link to ="/" onClick = {this.address}>武威</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>芜湖</Link>
               <Link to ="/" onClick = {this.address}>乌鲁木齐</Link>
               <Link to ="/" onClick = {this.address}>梧州</Link>
               <Link to ="/" onClick = {this.address}>文山</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>武汉</Link>
               <Link to ="/" onClick = {this.address}>文昌</Link>
               <Link to ="/" onClick = {this.address}>武安市</Link>
               <Link to ="/" onClick = {this.address}>乌兰浩特</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>无锡</Link>
               <Link to ="/" onClick = {this.address}>吴忠</Link>
            </div>
            <p className = "gps_p">X</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>湘西州</Link>
               <Link to ="/" onClick = {this.address}>兴义</Link>
               <Link to ="/" onClick = {this.address}>西宁</Link>
               <Link to ="/" onClick = {this.address}>仙桃</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>邢台</Link>
               <Link to ="/" onClick = {this.address}>西双版纳</Link>
               <Link to ="/" onClick = {this.address}>锡林浩特</Link>
               <Link to ="/" onClick = {this.address}>厦门</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>咸阳</Link>
               <Link to ="/" onClick = {this.address}>许昌</Link>
               <Link to ="/" onClick = {this.address}>新余</Link>
               <Link to ="/" onClick = {this.address}>信阳</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>宣城</Link>
               <Link to ="/" onClick = {this.address}>咸宁</Link>
               <Link to ="/" onClick = {this.address}>湘潭</Link>
               <Link to ="/" onClick = {this.address}>徐州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>孝感</Link>
               <Link to ="/" onClick = {this.address}>新乡</Link>
               <Link to ="/" onClick = {this.address}>忻州</Link>
               <Link to ="/" onClick = {this.address}>襄阳</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>西安</Link>
               <Link to ="/" onClick = {this.address}>湘江市</Link>
            </div>
            <p className = "gps_p">Y</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>阳泉</Link>
               <Link to ="/" onClick = {this.address}>烟台</Link>
               <Link to ="/" onClick = {this.address}>鹰潭</Link>
               <Link to ="/" onClick = {this.address}>运城</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>延安</Link>
               <Link to ="/" onClick = {this.address}>雅安</Link>
               <Link to ="/" onClick = {this.address}>宜昌</Link>
               <Link to ="/" onClick = {this.address}>延吉</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>永州</Link>
               <Link to ="/" onClick = {this.address}>益阳</Link>
               <Link to ="/" onClick = {this.address}>盐城</Link>
               <Link to ="/" onClick = {this.address}>义乌</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>玉溪</Link>
               <Link to ="/" onClick = {this.address}>银川</Link>
               <Link to ="/" onClick = {this.address}>榆林</Link>
               <Link to ="/" onClick = {this.address}>扬州</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>阳江</Link>
               <Link to ="/" onClick = {this.address}>岳阳</Link>
               <Link to ="/" onClick = {this.address}>宜宾</Link>
               <Link to ="/" onClick = {this.address}>营口</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>伊春</Link>
               <Link to ="/" onClick = {this.address}>玉林</Link>
               <Link to ="/" onClick = {this.address}>云浮</Link>
               <Link to ="/" onClick = {this.address}>宜春</Link>
            </div>
            <p className = "gps_p">Z</p>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>株洲</Link>
               <Link to ="/" onClick = {this.address}>张家界</Link>
               <Link to ="/" onClick = {this.address}>驻马店</Link>
               <Link to ="/" onClick = {this.address}>资阳</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>自贡</Link>
               <Link to ="/" onClick = {this.address}>镇江</Link>
               <Link to ="/" onClick = {this.address}>遵义</Link>
               <Link to ="/" onClick = {this.address}>周口</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>漳州</Link>
               <Link to ="/" onClick = {this.address}>张家口</Link>
               <Link to ="/" onClick = {this.address}>肇庆</Link>
               <Link to ="/" onClick = {this.address}>淄博</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>枣庄</Link>
               <Link to ="/" onClick = {this.address}>中卫</Link>
               <Link to ="/" onClick = {this.address}>郑州</Link>
               <Link to ="/" onClick = {this.address}>中山</Link>
            </div>
            <div className = "item clearfix">
               <Link to ="/" onClick = {this.address}>湛江</Link>
               <Link to ="/" onClick = {this.address}>昭通</Link>
               <Link to ="/" onClick = {this.address}>舟山</Link>
               <Link to ="/" onClick = {this.address}>珠海</Link>
            </div>
         </div>
      );
   };
};

export default Gps;
