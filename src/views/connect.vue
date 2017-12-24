<template>
    <div class="content">
        <swiper></swiper>

        <div class="content-pattern">
            <h2>{{pattern.title}}</h2>
            <aside>{{pattern.dec}}</aside>

            <ul>
                <li v-for="item in pattern.list">
                    <h3>{{item.title}}</h3>
                    <p>{{item.dec}}</p>
                </li>
            </ul>
        </div>

        <div class="content-aptitude">
            <h2>{{aptitude.title}}</h2>
            <aside>{{aptitude.dec}}</aside>

            <ul>
                <li v-for="item in aptitude.list">
                    <i></i>
                    <h3>{{item.title}}</h3>
                </li>
            </ul>
        </div>

        <div class="content-join">
            <h2>{{join.title}}</h2>
            <aside>{{join.dec}}</aside>

            <ul>
                <li v-for="item in join.list">
                    <h3>{{item.title}}</h3>
                    <i></i>
                </li>
            </ul>
            <div class="content-join-other">
                <p v-for="item in join.other" v-html="item"></p>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import { pattern,aptitude,join } from "../data/connect"

    export default {
        data(){
            return {
                pattern,
                aptitude,
                join
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/connect";
</style>