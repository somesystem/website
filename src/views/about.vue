<template>
    <div class="about">
        <swiper></swiper>

        <div class="about-us">
            <h2>{{about.title}}</h2>
            <p v-html="about.dec"></p>
        </div>

        <div class="about-space">
            <h2>{{space.title}}</h2>
            <aside>{{space.dec}}</aside>

            <ul>
                <li v-for="item in space.list1">
                    <img :src="item.img" alt="">
                </li>
            </ul>
            <ul>
                <li v-for="item in space.list2">
                    <img :src="item.img" alt="">
                </li>
            </ul>
        </div>

        <div class="about-connect">
            <h2>{{connect.title}}</h2>
            <div class="about-connect-main">
                <img :src="connect.map" alt="">
                <div class="about-connect-other">
                    <p v-for="item in connect.other" v-html="item"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { about,space,connect } from "../data/about"

    export default {
        data(){
            return {
                about,
                space,
                connect
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/about";
</style>