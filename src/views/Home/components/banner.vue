<template>
    <section class="banner">
        <transition-group name="fadeIn" tag="ul" class="banner_box">
            <li :class="{active: index === currentIndex}"
                v-for="(item, index) in info.banner"
                v-show="index === currentIndex"
                :key="item"
                :style="{ backgroundImage: `url(${item})`}"
            ></li>
        </transition-group>
        <div class="info">
            <div class="avatar" data-aos="zoom-in-up">
                <img :src="info.avatar" :alt="seoText" />
            </div>
            <h1 data-aos="fade-up" data-aos-delay="300">{{greetingText+",I'm "+author}}</h1>
            <h3 data-aos="fade-up" data-aos-delay="600">{{info.introduce[0]}}</h3>
            <p data-aos="fade-up" data-aos-delay="900">{{info.introduce[1]}}</p>
        </div>
    </section>
</template>

<script>
    import pageMixin from '@/mixins/pageMixin'
    export default {
        name: "banner",
        mixins: [pageMixin],
        props: {
            info: {
                type: Object
            }
        },
        data() {
            return {
                timer: null,
                currentIndex: 0,
                greetingText: 'Good morning'
            }
        },
        mounted() {
            this.gretting();
            this.timer = setInterval(() => {
                this.changeIndex();
            }, 5* 1000)
        },
        methods: {
            gretting() {
                const now = new Date();
                let hour = now.getHours();
                if (hour>=0 && hour<=12) {
                    this.greetingText = "Good morning";
                } else if (hour>12 && hour<=18) {
                    this.greetingText = "Good afternoon";
                } else {
                    this.greetingText = "Good evening";
                }
            },
            changeIndex() {
                this.currentIndex += 1
                if (this.currentIndex === this.info.banner.length) {
                    this.currentIndex = 0
                }
            }
        },
        beforeDestroy() {
            this.timer && clearInterval(this.timer)
        }
    }
</script>

<style lang="scss" scoped>
    .banner {
        @include flexbox;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 100vh;
        text-align: center;
        background: $lightBlue;
        overflow: hidden;
        .banner_box{
            @include leftTop(0,0);
            right: 0;
            bottom: 0;
            height: 100vh;
            li{
                @include leftTop(0,0);
                right: 0;
                bottom: 0;
                background-position: center;
                &.active{
                    animation: du-data 5s .1s forwards;
                }
            }
        }
        .info{
            .avatar{
                position: relative;
                @include widthHeight(180px,180px);
                @include flexbox;
                justify-content: center;
                align-items: center;
                margin: 0 auto 30px;
                border-radius: 50%;
                box-shadow: 0 0 20px rgba(51,68,85,.8);
                overflow: hidden;
                transition: all 1s;
                &::after{
                    content: '';
                    @include leftTop(0,0);
                    right: 0;
                    bottom: 0;
                    background-image: linear-gradient(-40deg, transparent, transparent 70px, rgba(255, 255, 255, 0.6) 90px, rgba(255, 255, 255, 0.6) 110px, transparent 130px);
                    background-position: -180px -180px;
                    background-repeat: no-repeat;
                    -webkit-transition: all 1s;
                    transition: all 1s;
                }
                &:hover{
                    -webkit-box-shadow: 0 0 20px rgba(51, 136, 238, 0.8);
                    box-shadow: 0 0 20px rgba(51, 136, 238, 0.8);
                    &::after{
                        background-position: 180px 180px;
                    }
                }
            }
            h1{
                margin-bottom: 25px;
                font-weight: 700;
                font-size: 48px;
                color: #fff;
            }
            h3{
                margin-bottom: 20px;
            }
            p,h3{
                color: #fff;
                font-size: 24px;
            }
            @media (max-width: 980px) {
                h1{
                    font-size: 54px;
                }
            }
            @media (max-width: 768px) {
                h1{
                    font-size: 36px;
                }
                p,h3{
                    font-size: 20px;
                }
            }
        }
    }
</style>