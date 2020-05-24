<template>
    <section class="banner">
        <div class="banner-box"></div>
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
        .banner-box{
            @include leftTop(0,0);
            @include widthHeight(100%,100%);
            -webkit-filter: blur(20px);
            filter: blur(20px);
            background: linear-gradient(-45deg, #23a6d5, #34d5ac, #4beee9);
            background-size: 400%;
            -webkit-animation: gradient 8.5s ease-in-out infinite;
            animation: gradient 8.5s ease-in-out infinite;
            overflow: hidden;
            z-index: 0;
        }
        .info{
            color: #fff;
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
                letter-spacing: -3px;
            }
            h3{
                font-size: 26px;
                margin-bottom: 20px;
            }
            p{
                font-size: 22px;
            }
            @media (max-width: 980px) {
                h1{
                    font-size: 54px;
                }
            }
            @media (max-width: 768px) {
                h1{
                    font-size: 32px;
                }
                h3{
                    font-size: 22px;
                }
                p{
                    font-size: 18px;
                }
            }
        }
    }
</style>