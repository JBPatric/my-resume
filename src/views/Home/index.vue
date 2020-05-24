<template>
    <div class="home">
        <banner :info="getData.welcome" />
        <nav-header :navList="getData.nav" :isFixed="isFixed">
            <template slot="language">
                <div class="language" @click="changeLanguage" :title="isChinese ? 'To English' : '简体中文'">{{isChinese ? 'EN' : 'CN'}}</div>
            </template>
        </nav-header>
        <about :info="getData.about" />
        <skill :info="getData.skill" />
    </div>
</template>

<script>
    import subComponents from './index'
    import { data } from '@/utils/data'
    export default {
        name: "index",
        components: {
            ...subComponents
        },
        data() {
            return {
                data,
                isChinese: true,
                toTop: false,
                isFixed: false
            }
        },
        computed: {
            getData () {
                return this.isChinese ? this.data.cn : this.data.en
            }
        },
        methods: {
            changeLanguage() {
                this.isChinese = !this.isChinese
            },
            handleScroll () {
                // 获取滚动的距离
                let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
                let contentDom = document.querySelector('.js-container')
                // 返回顶部显示隐藏
                scrollTop > document.documentElement.clientHeight / 2 ? this.toTop = true : this.toTop = false
                // 导航吸顶
                this.isFixed =  scrollTop > contentDom[0].offsetTop - 81
            }
        }
    }
</script>

<style lang="scss" scoped>
    .language{
        height: 80px;
        line-height: 80px;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
        transition: opacity .25s;
        flex-shrink: 0;
        &:hover{
            opacity: .85;
        }
    }
</style>