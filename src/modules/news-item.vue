<template>
    <div class="news-item" @click="toDetail(id)">
        <div class="news-item-box">
            <img :src="img" alt="">
        </div>
        <div class="news-item-main">
            <h2>{{title}}</h2>
            <p v-html="dec"></p>
        </div>
        <time>{{time | MonthAndDay}}</time>
    </div>
</template>

<script>
    export default {
        props: ["id","img","title","dec","time"],
        methods: {
            toDetail(id){
                this.$router.push({name: "newsDetail", params: {id}})
            }
        }
    }
</script>

<style lang="scss">
    @import "../styles/base";

    .news-item{
        cursor: pointer;
        display: flex;
        padding: 26px;
        border-bottom: 1px solid $line-light;

        > time{
            display: block;
            flex: 1;
            test-align: right;
            font-size: $size_large;
        }
    }
    .news-item-box{
        flex: 1;
        img{
            width: 100%;
            display: block;
        }
    }
    .news-item-main{
        flex: 2;
        padding: 0 30px;

        h2{
            font-size: $size_middle;
            line-height: 3;
        }
        p{
            font-size: $size_small;
            text-align: justify;
            color: $color_weak;
        }
    }

</style>