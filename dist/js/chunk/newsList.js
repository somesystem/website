/*!
 * 2017-12-28 17:08:17
 * 
 * built by `mufengkeji`
 */
webpackJsonp([2],{384:function(t,e,i){"use strict";function a(t){i(404)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(389),n=i(411),c=i(46),o=a,l=c(s.a,n.a,!1,o,"data-v-0deecece",null);e.default=l.exports},389:function(t,e,i){"use strict";var a=i(406),s=i(410),n=i.n(s),c=n.a.data;e.a={data:function(){return{data:[],num:5,page:0,curPage:this.$route.params.page||1}},watch:{$route:function(t){"newsList"==t.name&&(this.getData(t.params.page),this.curPage=t.params.page)}},mounted:function(){this.getData(this.curPage)},methods:{toListPage:function(t){this.$router.replace({name:"newsList",params:{page:t}})},getData:function(t){this.page=Math.ceil(c.length/this.num),this.data=c.slice((t-1)*this.num,t*this.num)}},components:{NewsItem:a.a}}},390:function(t,e,i){"use strict";e.a={props:["url","img","title","dec","time"],methods:{toDetail:function(t){this.$router.push({name:"newsDetail",params:{id:t}})}}}},404:function(t,e,i){var a=i(405);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),i(373)("c5a84a7e",a,!0)},405:function(t,e,i){e=t.exports=i(132)(void 0),e.push([t.i,".news-list-box[data-v-0deecece]{width:89%;margin:0 auto;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px 0}.page[data-v-0deecece]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:45px 0}.page li[data-v-0deecece]{margin:0 4px;padding:10px;font-size:16px;line-height:1;background-color:#6b6b6b;color:#fff;cursor:pointer}.page li.active[data-v-0deecece],.page li[data-v-0deecece]:hover{background-color:#ff7e46;color:#fff}",""])},406:function(t,e,i){"use strict";function a(t){i(407)}var s=i(390),n=i(409),c=i(46),o=a,l=c(s.a,n.a,!1,o,null,null);e.a=l.exports},407:function(t,e,i){var a=i(408);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),i(373)("4e07351b",a,!0)},408:function(t,e,i){e=t.exports=i(132)(void 0),e.push([t.i,".news-item{position:relative;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;padding:26px;border-bottom:1px solid #ebebeb}.news-item>time{display:block;-webkit-box-flex:1;-ms-flex:1;flex:1;test-align:right;font-size:28px}.news-item-link{position:absolute;top:0;left:0;width:100%;height:100%}.news-item-box{-webkit-box-flex:1;-ms-flex:1;flex:1}.news-item-box img{width:100%;height:130px;display:block}.news-item-main{-webkit-box-flex:2;-ms-flex:2;flex:2;padding:0 30px}.news-item-main h2{font-size:16px;line-height:3}.news-item-main p{font-size:12px;text-align:justify;color:#999}",""])},409:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-item"},[i("a",{staticClass:"news-item-link",attrs:{target:"_blank",href:t.url}}),t._v(" "),i("div",{staticClass:"news-item-box"},[i("img",{attrs:{src:t.img,alt:""}})]),t._v(" "),i("div",{staticClass:"news-item-main"},[i("h2",[t._v(t._s(t.title))]),t._v(" "),i("p",{domProps:{innerHTML:t._s(t.dec)}})]),t._v(" "),i("time",[t._v(t._s(t._f("MonthAndDay")(t.time)))])])},s=[],n={render:a,staticRenderFns:s};e.a=n},410:function(t,e){t.exports={version:"1.0.0",data:[{id:1,url:"http://www.zfzj.cn/portal.php?mod=view&aid=801",img:"/images/static/temp1.jpg",title:"银联联机预授权过闸，全线支持信用卡和借记卡，杭州地铁全国首创",dec:"以前杭州市民坐地铁，需要在自助购票机上买票，现在只要掏出银联IC卡（包括信用卡和借记卡）或者绑定了各类智能Pay的手机、手表、手环，在地铁站内的闸机上一刷，“滴”一声后，闸机打开放行。",time:1514379424887},{id:2,url:"http://www.zfzj.cn/portal.php?mod=view&aid=794",img:"/images/static/temp2.jpg",title:"NFC和二维码支付哪个强？",dec:"当你还在想着如何在手机支付上一争高低的时候，人家支付已经开始不玩手机了。...",time:1514379424887},{id:3,url:"http://www.zfzj.cn/portal.php?mod=view&aid=793",img:"/images/static/temp3.jpg",title:"沈阳无人便利店现“刷手支付”",dec:"人体手掌中静脉血管位于皮肤以下3毫米处，多而复杂，医学上各人都不相同，终生不变，无法伪造，且识别感应器具备活体检知功能。...",time:1514379424887},{id:4,url:"http://www.zfzj.cn/portal.php?mod=view&aid=788",img:"/images/static/temp4.jpg",title:"为方便中国游客，美国国家铁路所有售票渠道开通银联卡受理 ...",dec:"美国国家铁路（Amtrak）所有售票渠道开始受理境内外发行的银联信用卡，尤其方便赴美自由行游客提前预订行程，提升支付体验。目前，美国几乎所有ATM都能用银联卡取款，80%以上的商家支持银联信用卡。",time:1514379424887},{id:5,url:"http://www.zfzj.cn/portal.php?mod=view&aid=786",img:"/images/static/temp5.jpg",title:"为创建更为快捷的支付系统，以色列央行考虑推出官方数字货币 ...",dec:"“世界各国的央行都在研究（使用数字货币），所以我们也应该这么做”...",time:1514379424887},{id:6,url:"http://paynews.net/article-35255-1.html",img:"/images/static/temp6.jpg",title:"港股上市公司中国优通将收购微信支付服务商福建创杰60%股权",dec:"中国优通近日公布，与独立第三方订立谅解备忘录，可能收购福建创杰信息科技60%股权，强调正式协尚待进一步磋商方可落实，双方有180日的排他期。",time:1514379424887},{id:7,url:"http://www.mpaypass.com.cn/news/201712/28103032.html",img:"/images/static/temp7.jpg",title:"微信支付宝迅速回应央行296号文：认同规范，积极配合",dec:"央行网站发布了《条码支付业务规范（试行）》的通知，二维码支付两大巨头迅速回应，均表示认同央行规范，同时积极研发新技术以及探索新技术应用于条码支付领域的可行性",time:1514379424887},{id:8,url:"http://www.mpaypass.com.cn/news/201712/28100125.html",img:"/images/static/temp8.png",title:"中国游客购物 不爱现金更爱支付宝",dec:"马来西亚槟城的小商贩开始接受中国游客用支付宝来购买商品。作为一种无现金支付方式，支付宝正在成为21世纪的收银选择。",time:1514379424887},{id:9,url:"http://www.mpaypass.com.cn/news/201712/27095100.html",img:"/images/static/temp9.png",title:"易观：2017年3季度中国第三方支付移动支付市场规模近30亿元",dec:"根据Analysys易观发布的《中国第三方支付移动支付市场季度监测报告2017年第3季度》数据显示，2017年第三季度，中国第三方支付移动支付市场交易规模达294959.2亿元人民币，环比增长28.02%。",time:1514379424887},{id:10,url:"http://www.mpaypass.com.cn/news/201712/28110223.html",img:"/images/static/temp10.jpg",title:"盘点：2017年金融科技十大关键词",dec:"标签：盘点，金融科技，十大关键词",time:1514379424887}]}},411:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"news-list"},[i("swiper"),t._v("\n    "+t._s(t.$route.params.id)+"\n    "),i("div",{staticClass:"news-list-box"},[t._l(t.data,function(t){return i("news-item",{key:t.id,attrs:{url:t.url,img:t.img,title:t.title,dec:t.dec,time:t.time}})}),t._v(" "),i("ul",{directives:[{name:"show",rawName:"v-show",value:t.page>0,expression:"page > 0"}],staticClass:"page"},t._l(t.page,function(e){return i("li",{key:e,class:t.curPage==e?"active":"",on:{click:function(i){t.toListPage(e)}}},[t._v(t._s(e))])}))],2)],1)},s=[],n={render:a,staticRenderFns:s};e.a=n}});