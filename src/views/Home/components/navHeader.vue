<template>
    <header class="header" :class="{isFixed: isFixed}">
        <div class="logo">
            <img src="@/assets/images/avatar.png" alt="">
        </div>
        <div class="nav_box">
            <ul class="nav" :class="{'active': menuBtn}">
                <li v-for="(item, index) in navList"
                    :key="index"
                    :class="{'active' : activeClass === index}"
                >
                    {{item}}
                </li>
            </ul>
            <slot name="language"></slot>
            <div class="menu"></div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header",
        props: {
            navList: {
                type: Array,
                default: ()=>{
                    return []
                }
            }
        },
        data() {
            return {
                menuBtn: false,
                isFixed: false,
                onOff: true,
                activeClass: 0
            }
        },
        methods: {
            handleClick() {

            }
        }

    }
</script>

<style lang="scss" scoped>
    .header{
        @include widthHeight(100%,80px);
        @include flexbox;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background: $blue;
        color: #fff;
        &.fixed{
            @include fixedLeftTop(0,0);
            z-index: 9;
        }
        .logo{
            @include widthHeight(55px,55px);
            @include flexbox;
            justify-content: center;
            align-items: center;
            background: linear-gradient(0deg,rgba(64,158,255,.3) 0,rgba(125,150,69,.3));
            border-radius: 50%;
            transition: all 1s;
            animation: music-data 6s infinite linear;
            img{
                width: 65%;
            }
        }
        .nav_box{
            @include flexbox;
            align-items: center;
            .nav{
                @include flexbox;
                font-size: 18px;
                li{
                    padding: 0 20px;
                    cursor: pointer;
                    &::before,&::after{
                        display: inline-block;
                        opacity: 0;
                        transition:transform 0.3s, opacity 0.2s;
                        -moz-transition:transform 0.3s, opacity 0.2s;
                        -webkit-transition:transform 0.3s, opacity 0.2s;
                    }
                    &::before{
                        content: '「';
                        transform:translateX(20px);
                        -webkit-transform:translateX(20px);
                        -moz-transform:translateX(20px);
                    }
                    &::after{
                        content: '」';
                        transform:translateX(-20px);
                        -webkit-transform:translateX(-20px);
                        -moz-transform:translateX(-20px);
                    }
                    &:hover,&.active{
                        &::before,&::after{
                            opacity: 1;
                            transform:translateX(0);
                            -webkit-transform:translateX(0);
                            -moz-transform:translateX(0);
                        }
                    }
                }
            }
            .menu{
                @include widthHeight(30px,24px);
                position: relative;
                &::before,&::after{
                    content: '';
                    display: block;
                    @include widthHeight(100%,3px);
                    position: absolute;
                    left: 0;
                    background: #fff;
                    transition: all .3s;
                }
                &::before{
                    top: 0;
                    box-shadow: 0 10px #fff;
                }
                &::after{
                    bottom: 0;
                }
                &.expand{
                    &::before{
                        top: 10px;
                        box-shadow: none;
                        transform: rotate(225deg);
                    }
                    &::after{
                        bottom: 11px;
                        transform: rotate(135deg);
                    }
                }
            }
        }
    }
</style>


