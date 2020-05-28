<template>
    <section class="skill">
        <div class="content">
            <common-title :title="info.title" :subTitle="info.subTitle"></common-title>
            <ul class="skill-list">
                <li>
                    <div class="img-box">
                        <img src="~@/assets/images/icon/html.png" alt="">
                    </div>
                    <div class="skill-wrap">
                        <h4>HTML</h4>
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
            align-items:flex-start;
            margin-top: 60px;
            li{
                position: relative;
                @include widthHeight(250px);
                margin-bottom: 30px;
                box-shadow: 7px 7px 24px rgba(0, 0, 0, 0.15);
                .img-box{
                    @include widthHeight(100%,220px);
                    @include flexbox;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transition: height .45s;
                    background: #eb6c3f;
                    overflow: hidden;
                }
                .skill-wrap{
                    @include widthHeight(100%,60px);
                    line-height: 60px;
                    padding: 0 20px;
                    text-align: left;
                    overflow: hidden;
                    transition: height .45s;
                    h4{
                        font-size: 1.4em;
                        font-weight: 600;
                        text-transform: uppercase;
                        color: $black;
                    }
                }
                &:hover{
                    .img-box{
                        height: 30px;
                    }
                    .skill-wrap{
                        height: 250px;
                    }
                }
            }
        }
    }
</style>