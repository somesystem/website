<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in banner">
                <a :href="item.link" target="_blank"><img :src="item.src" alt=""></a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import banner from '../data/swiper'

    export default {
        data(){
            return {
                banner: banner.data
            }
        },
        mounted(){
            this.$nextTick(() => {
                this.swiper = new Swiper('.swiper-container', {
                    loop: true,
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                })
            });
        }
    }
</script>

<style lang="scss">
    .swiper-slide img{
        display: block;
        width: 100%;
    }
</style>