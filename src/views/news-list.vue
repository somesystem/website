<template>
    <div class="news-list">
        <swiper></swiper>
        {{$route.params.id}}
        <div class="news-list-box">
            <news-item :key="item.id" v-for="item in data" 
                :id="item.id" :img="item.img" :title="item.title" 
                :dec="item.dec" :time="item.time"></news-item>

            <ul class="page" v-show="page > 0">
                <li @click="toListPage(item)" :key="item" v-for="item in page">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import NewsItem from '../modules/news-item'

    const TestData = [
        {"id":1,"img":"/images/static/temp1.jpg","title":"买火车票","dec":"描述","time":Date.now()},
        {"id":2,"img":"/images/static/temp1.jpg","title":"买火车票","dec":"描述","time":Date.now()},
        {"id":3,"img":"/images/static/temp1.jpg","title":"买火车票","dec":"描述","time":Date.now()},
        {"id":4,"img":"/images/static/temp1.jpg","title":"买火车票","dec":"描述","time":Date.now()},
        {"id":5,"img":"/images/static/temp1.jpg","title":"买火车票","dec":"描述","time":Date.now()}
    ];

    export default {
        data(){
            return {
                data: [],
                page: 0,
                curPage: this.$route.params.page || 1
            }
        },
        watch: {
            '$route' (to) {
                if (to.name == 'newsList') {
                    this.getData(to.params.page)
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
                // 模拟接口 
                setTimeout(() => {
                    var testData = JSON.parse(JSON.stringify(TestData));
                    for (var i = 0; i < testData.length; i++) {
                        testData[i].title += curPage;
                    }
                    this.data = testData;
                    this.page = 3;
                }, 500);
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
        }
    }
</style>