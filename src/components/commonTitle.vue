<template>
  <hgroup class="common_title" :class="{light: light === 'yes'}">
    <h3 v-html="title"></h3>
    <h5>{{subTitle}}</h5>
  </hgroup>
</template>

<script>
export default {
  name: 'commonTitle',
  props: {
    title: String,
    subTitle: String,
    light: {
      type: String,
      default: 'no'
    }
  }
}
</script>

<style lang="scss" scoped>
.common_title{
  position: relative;
  z-index: 5;
  h5{
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    text-transform: uppercase;
  }
  h3{
    font-size: 30px;
    font-weight: bold;
    line-height:30px;
    padding-bottom: 20px;
  }
  @media (max-width: 768px) {
    h3{
      font-size: 26px;
    }
    h5{
      font-size: 18px;
    }
  }
  &.light{
    h5{
      color: #FEFEFE;
      opacity: .3;
    }
    h3{
      color: #fff;
    }
  }
}
</style>
