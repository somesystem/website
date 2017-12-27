<template>
    <div class="home">
        <swiper></swiper>  

        <div class="home-pay">
            <h2>{{pay.title}}</h2>
            <aside>{{pay.dec}}</aside>
            <ul>
                <li v-for="item in pay.list">
                    <i></i>
                    <h3>{{item.title}}</h3>
                    <div></div>
                    <p>{{item.dec}}</p>
                </li>
            </ul>
        </div>
        <div class="home-product">
            <h2>{{product.title}}</h2>
            <aside>{{product.dec}}</aside>
            <ul>
                <li v-for="item in product.list">
                    <router-link to="/product"><i></i></router-link>
                </li>
            </ul>
        </div>
        <div class="home-pipe">
            <h2>{{pipe.title}}</h2>
            <aside>{{pipe.dec}}</aside>
            <ul>
                <li v-for="item in pipe.list">
                    <p v-html="item.text"></p>
                </li>
            </ul>
        </div>
        <div class="home-friend">
            <h2>{{friend.title}}</h2>
            <aside>{{friend.dec}}</aside>
            <ul>
                <li v-for="item in friend.list">
                    <img :src="item.src" alt="">
                </li>
            </ul>
        </div>
        <div class="home-question">
            <h2>热门咨询</h2>
            <ul>
                <li @click="toDetail(item.id)" class="home-question-list" v-for="item in hot">
                    <div class="home-question-l">
                        <p>{{item.time | MonthAndDay}}</p>
                        <p>{{item.time | Year}}</p>
                    </div>
                    <div v-show="item.img" class="home-question-c">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="home-question-r">
                        <h3>{{item.title}}</h3>
                        <p>{{item.dec}}</p>
                    </div>
                </li>
            </ul>
            <router-link :to="{name:'newsList'}" class="home-question-more"></router-link>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { pay,product,pipe,friend } from "../data/home";
    const TestData = [
        { "id": 1, "time": Date.now(), 
          "title": "买火车票终于可以用微信支付啦",
          "dec": "昨日，12306网站上发布公告，从2017年11月23日期，中国铁路客户服务中心12306网站微信支付服务功能上线运营"
        },
        { "id": 2, "time": Date.now(), "img": "/images/static/topic2.jpg", 
          "title": "微信首次上线刷脸支付",
          "dec": "刚刚 微信首次上线刷脸支付，抢先来看腾讯「智慧零售」的真面目"
        },
        { "id": 3, "time": Date.now(), 
          "title": "微信支付中刷卡支付的场景介绍及验证密码的", 
          "dec": "微信支付官网上，将用户展示微信钱包内的“刷卡条码/二维码”给商户系统扫描后直接完成支付的模式称之为刷......"
        }
    ];

    export default {
        data(){
            return {
                pay,
                product,
                pipe,
                friend,
                hot: []
            }
        },
        mounted() {
            this.getDate();
        },
        methods: {
            getDate(){
                setTimeout(() => {
                    this.hot = TestData;
                }, 500);
            },
            toDetail(id){
                this.$router.push({name:"newsDetail",params:{id}});
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/home";
</style>