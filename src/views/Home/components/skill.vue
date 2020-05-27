<template>
    <section class="skill">
        <div class="content">
            <common-title :title="info.title" :subTitle="info.subTitle"></common-title>
            <ul class="skill-list">
                <li>
                    <div class="img-box">
                        <img src="~@/assets/images/icon/html.png" alt="">
                        <h4>html</h4>
                    </div>
                    <div class="skill-wrap">

                    </div>
                </li>
                <li>
                    <div class="skill-wrap"></div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    //https://yangshun.win/Learn-To-Use/Front-End/CSS-Effect/2019/12/15-Card-Hover-Effects/index.html
    import commonTitle from  '@/components/commonTitle'
    export default {
        components: {
            commonTitle
        },
        props: {
            info: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skill{
        min-height: 100vh;
        padding: 80px 0;
        background: #e7ebfd;
        .skill-list{
            @include flexbox;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 60px;
            li{
                position: relative;
                @include widthHeight(48%,350px);
                padding: 15px;
                margin-bottom: 30px;
                box-shadow: 7px 7px 24px rgba(0, 0, 0, 0.15);
                .img-box{
                    @include leftTop(0,0);
                    z-index: 2;
                    @include widthHeight(100%,100%);
                    @include flexbox;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transition: .35s ease-in-out;
                    img{
                        @include widthHeight(100px,100px);
                    }
                    h4{
                        @include leftBottom(0,0);
                        z-index: 0;
                        @include widthHeight(100%,45%);
                        opacity: .2;
                        text-align: center;
                        font-size: 5em;
                        font-weight: 600;
                    }
                }
                .skill-wrap{
                    @include widthHeight(100%,100%);

                }
            }
        }
    }
</style>