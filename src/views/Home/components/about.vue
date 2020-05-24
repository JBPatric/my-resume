<template>
    <section class="about">
        <div class="content">
            <common-title data-aos="fade-up" data-aos-delay="150" :title="info.title" :subTitle="info.subTitle"></common-title>
            <ul class="basic-info">
                <li v-for="(item,index) of info.infos" :key="item.id" data-aos="fade-in" :data-aos-delay="300 * (index+1)">
                    <i :class="'icon-'+(index+1)"></i>
                    <h4>{{item.title}}</h4>
                    <div v-html="item.content"></div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import commonTitle from  '@/components/commonTitle'
    export default {
        name: "about",
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
    .about{
        padding: 80px 0;
        background: $black;
        .basic-info{
            @include flexbox;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top:80px;
            li{
                @include flexbox;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 25%;
                line-height: 1.5;
                margin-bottom: 40px;
                transition: all .25s;
                i{
                    display: block;
                    @include widthHeight(120px,120px);
                    @include flexbox;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border: 1px $blue solid;
                    border-radius: 50%;
                    transition: all .25s;
                    cursor: pointer;
                    margin-bottom: 15px;
                    &::after{
                        content: '';
                        display: block;
                        @include widthHeight(64px,64px);
                        background: url('~@/assets/images/icon/icons_about.png') no-repeat;
                        transition: all .15s;
                    }
                    &.icon-1{
                        &::after{
                            background-position: 0 0;
                        }
                    }
                    &.icon-2{
                        &::after{
                            background-position: -64px 0;
                        }
                    }
                    &.icon-3{
                        &::after{
                            background-position: -128px 0;
                        }
                    }
                    &.icon-4{
                        &::after{
                            background-position: -192px 0;
                        }
                    }
                    &:hover{
                        background: $blue;
                        &.icon-1{
                            &::after{
                                background-position: 0 -64px;
                            }
                        }
                        &.icon-2{
                            &::after{
                                background-position: -64px -64px;
                            }
                        }
                        &.icon-3{
                            &::after{
                                background-position: -128px -64px;
                            }
                        }
                        &.icon-4{
                            &::after{
                                background-position: -192px -64px;
                            }
                        }
                    }
                }
                h4{
                    font-size: 20px;
                    margin-bottom: 10px;
                    font-weight: 600;
                }
                p{
                    font-size: 18px;
                }
                @media (max-width: 1080px) {
                    width: 50%;
                }
            }
        }
    }
</style>