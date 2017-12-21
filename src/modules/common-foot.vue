<template>
    <div class="common-foot">
        <div class="common-foot-warp">
            <div class="common-foot-link">
                <nav class="common-foot-nav">
                    <router-link to="/home">木丰科技</router-link>
                    <router-link to="/product">产品中心</router-link>
                    <router-link :to="{name:'news',params:{page:1}}">新闻动态</router-link>
                    <router-link to="/connect">合作招募</router-link>
                    <router-link to="/about">关于我们</router-link>
                </nav>
                <div class="common-foot-erweima">
                    <img src="/images/static/zhifujun.jpg" alt="">
                    <p>支付君</p>
                </div>
                <div class="common-foot-address">
                    <p>地址：武汉市东湖高新技术开发区光谷大道现代 世贸中心J栋1003</p>
                    <p>邮箱：<a href="mailto:wuhanmufeng131@163.com">wuhanmufeng131@163.com</a></p>
                    <p>地址：<a href="tel:027-62435770">027-62435770</a></p>
                </div>
            </div>
            <nav class="common-foot-friend">
                <p>友情链接：</p>
                <a href="/">微信支付商户平台</a>
                <a href="/">微信支付商户平台</a>
                <a href="/">微信支付商户平台</a>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../styles/base";
    .common-foot{
        background-color: $bg_foot;
    }
    .common-foot-warp{
        @extend %mwidth;
        padding: 44px 30px;
        &,a{
            color: #fff;
            font-size: $size_small;
        }
    }
    .common-foot-link{
        display: flex;
        > *{
            flex: 1;
        }
    }
    .common-foot-nav{
        overflow: hidden;
        a{
            float: left;
            margin-bottom: 20px;
            margin-right: 20px;
            width: 90px;
            text-align: center;
        } 
    }
    .common-foot-erweima{
        border-left: 1px solid $line-dark;
        border-right: 1px solid $line-dark;
        img{
            display: block;
            margin: 0 auto;
        }
        p{
            margin-top: 10px;
            text-align: center;
        }
    }
    .common-foot-address{
        display: flex;
        padding-left: 12.5%;
        flex-direction: column;
        justify-content: space-between;
    }
    .common-foot-friend{
        display: flex;
        margin-top: 50px;
        p{
            width: 90px;
            text-align: center;
        }
        > a{
            display: block;
            margin-right: 40px;
        }
    }
</style>

<script type="text/javascript">
    export default {
        data(){
            return {}
        }
    }
</script>