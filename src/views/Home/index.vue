<template>
    <div class="home">
        <banner :info="getData.welcome" />
        <nav-header :navList="getData.nav">
            <template slot="language">
                <div class="language" @click="changeLanguage" :title="isChinese ? 'To English' : '简体中文'">{{isChinese ? 'EN' : 'CN'}}</div>
            </template>
        </nav-header>
        <about />
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
                isChinese: true
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .language{
        @include widthHeight(40px,40px);
        border-radius: 50%;
        line-height: 40px;
        text-align: center;
        background: $lightBlue;
        cursor: pointer;
        transition: opacity .25s;
        flex-shrink: 0;
        &:hover{
            opacity: .85;
        }
    }
</style>