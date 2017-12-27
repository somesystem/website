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
                <li class="home-question-list" v-for="item in hot">
                    <a class="home-question-link" target="_blank" :href="item.url"></a>
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
    import home_news from "../data/home_news";

    export default {
        data(){
            return {
                pay,
                product,
                pipe,
                friend,
                hot: home_news.data
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/home";
</style>