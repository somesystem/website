<template>
    <div class="common-head">
        <div class="common-head-box">
            <router-link to="/"><img src="/images/static/logo.png" alt=""></router-link>
            <nav>
                <router-link to="/home">首页</router-link>
                <router-link to="/product">产品中心</router-link>
                <router-link :to="{name:'news',params:{page:1}}">新闻动态</router-link>
                <router-link to="/connect">合作招募</router-link>
                <router-link to="/about">关于我们</router-link>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
    @import "../styles/base";
    .common-head-box{
        @extend %mwidth;
        position: relative;
        padding: 18px 0;
        > a {
            position: absolute;
            top: 12px;
            left: 0;
        }
        nav {
            display: flex;
            align-items: center;
            justify-content: flex-end;

            a {
                display: block;
                margin-right: 12px;
                width: 80px;
                height: 40px;
                line-height: 40px;
                text-align: center;
                color: $color_base;
                font-size: $size_middle;
                &:last-child{
                    margin-right: 0;
                }
                &.router-link-active{
                    background-color: $bg_ac;
                    border-radius: 6px;
                    color: #ffffff;
                }
            }
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