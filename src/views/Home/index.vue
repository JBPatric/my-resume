<template>
    <div class="home">
        <banner :info="getData.welcome" />
        <nav-header />
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
                isChinese: true,
            }
        },
        computed: {
            getData () {
                return this.isChinese ? this.data.cn : this.data.en
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>