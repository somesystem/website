<template>
    <div>
        <common-head></common-head>
        <keep-alive v-if="$route.meta.keepAlive">
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
        <common-foot></common-foot>
    </div>
</template>

<style lang="scss">
    @import "./styles/reset";
</style>
<script type="text/javascript">
    import CommonHead from './modules/common-head';
    import CommonFoot from './modules/common-foot';

    export default {
        data (){
            return {
            }
        },
        components: {
            CommonHead,
            CommonFoot
        }
    }
</script>