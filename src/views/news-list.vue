<template>
    <div class="news-list">
        <swiper></swiper>
        {{$route.params.id}}
        <div class="news-list-box">
            <news-item :key="item.id" v-for="item in data" 
                :url="item.url" :img="item.img" :title="item.title" 
                :dec="item.dec" :time="item.time"></news-item>

            <ul class="page" v-show="page > 0">
                <li :class="curPage==item?'active':''" @click="toListPage(item)" :key="item" v-for="item in page">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import NewsItem from '../modules/news-item'
    import newsData from '../data/news_list'
    const Data = newsData.data;

    export default {
        data(){
            return {
                data: [], // 当前页面数据
                num: 5, // 每页多少个
                page: 0,  // 总页数,根据num自动计算
                curPage: this.$route.params.page || 1
            }
        },
        watch: {
            '$route' (to) {
                if (to.name == 'newsList') {
                    this.getData(to.params.page)
                    this.curPage = to.params.page;
                }
            }
        },
        mounted(){
            this.getData(this.curPage);
        },
        methods: {
            toListPage(page){
                this.$router.replace({name:"newsList",params:{page}})
            },
            getData(curPage){
                this.page = Math.ceil(Data.length/this.num);
                this.data = Data.slice((curPage-1)*this.num,curPage*this.num);
            }
        },
        components: {
            NewsItem
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/base";

    .news-list-box{
        @extend %mwidth;
        padding: 10px 0;
    }
    .page{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 45px 0;

        li{
            margin: 0 4px;
            padding: 10px;
            font-size: $size_middle;
            line-height: 1;
            background-color: $bg_page;
            color: #fff;
            cursor: pointer;

            &.active,&:hover{
                background-color: $bg_ac;
                color: #fff;
            }
        }
    }
</style>