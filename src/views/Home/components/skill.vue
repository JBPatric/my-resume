<template>
    <section class="skill">
        <div class="content">
            <common-title :title="info.title" :subTitle="info.subTitle"></common-title>
            <ul class="skill-list">
                <li>
                    <div class="skill-wrap"></div>
                </li>
                <li>
                    <div class="skill-wrap"></div>
                </li>
                <li>
                    <div class="skill-wrap"></div>
                </li>
                <li>
                    <div class="skill-wrap"></div>
                </li>
                <li>
                    <div class="skill-wrap"></div>
                </li>
                <li>
                    <div class="skill-wrap"></div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
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
        background: #f5f5f5;
        .skill-list{
            @include flexbox;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 60px;
            li{
                @include widthHeight(25%,350px);
                padding: 15px;
                .skill-wrap{
                    @include widthHeight(100%,100%);
                    border-radius: 5px;
                    border: 1px solid $blue;
                }
            }
        }
    }
</style>