<template>
    <div class="product">
        <swiper></swiper>

        <div class="product-platform">
            <h2>{{platform.title}}</h2>
            <aside>{{platform.dec}}</aside>
            <ul>
                <li v-for="item in platform.list">
                    <div class="product-img-box">
                        <img :src="item.img" alt="">
                        <div>
                            <p>{{item.dec}}</p>
                        </div>
                    </div>
                    <h3>{{item.title}}</h3>
                </li>
            </ul>
        </div>

        <div class="product-pay">
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

        <div class="product-application">
            <h2>{{application.title}}</h2>
            <aside>{{application.dec}}</aside>
            <ul>
                <li v-for="item in application.list">
                    <span><i></i></span>
                    <h3>{{item.title}}</h3>
                    <p>{{item.dec}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { platform,pay,application } from "../data/product"

    export default {
        data(){
            return {
                platform,
                pay,
                application
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/product";
</style>