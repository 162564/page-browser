<template>
  <h1>控制广告显示</h1>
  <Switch v-model="value" @on-change="change" />
</template>

<script>


export default {
  name: "ScNotice",
  data () {
    return {
      value: false
    }
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status);
    }
  }
}
</script>

<style scoped>
</style>