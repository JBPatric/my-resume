<template>
    <header class="header">
        <div class="navmove" ref="navmove"></div>
        <slot name="language"></slot>
        <ul class="nav fr" :class="{'active': menuBtn}">
            <li
                    v-for="(item, index) in navList"
                    :key="index"
                    :ref="index"
                    :class="{'active' : activeClass === index}"
                    @mouseenter="handleMouseenter(index)"
                    @mouseleave="handleMouseleave"
                    @click="handleClick(index)"
            >
                <span>{{item.text}}</span>
            </li>
        </ul>
        <div class="nav-btn fr" @click="menuBtnClick">
            <i class="iconfont icon-menu"></i>
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
                menuBtn: false, // 移动端菜单按钮
                isFixed: false,
                onOff: true, // 避免快速点击阀门
                activeClass: 0, // 选中的下标
                flagIndex: 0, // 鼠标移出的下标
                width: '',
                left: '',
                flagWidth: '',
                flagLeft: ''
            }
        },
        methods: {
            handleMouseenter() {

            },
            handleMouseleave() {

            },
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
        &.fixed{
            @include fixedLeftTop(0,0);
            z-index: 9;
        }
    }
</style>


