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
                    <i></i>
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
                <li v-for="item in hot"></li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { pay,product,pipe,friend } from "../data/home";

    export default {
        data(){
            return {
                pay,
                product,
                pipe,
                friend,
                hot: []
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/home";
</style>