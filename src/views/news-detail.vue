<template>
    <div class="news-detail">
        新闻详情,新闻id: {{$route.params.id}}
    </div>
</template>

<script type="text/javascript">
    export default {
        data(){
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/base";
    
    .news-detail{
        line-height: 10;
        text-align: center
    }
</style>