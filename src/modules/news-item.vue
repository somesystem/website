<template>
    <div class="news-item">
        <a class="news-item-link" target="_blank" :href="url"></a>
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
        props: ["url","img","title","dec","time"],
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
        position: relative;
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
    .news-item-link{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .news-item-box{
        flex: 1;
        img{
            width: 100%;
            height: 130px;
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