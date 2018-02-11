<template>
  <div>
    <button type="button" @click="plus">+</button>
    <button type="button">{{ result }}</button>
    <button type="button" @click="minus">-</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      result: 0
    }
  },
  methods: {
    minus: function () {
      this.result--
      this.$emit('input', {res: this.result, other: '--'})
    },
    plus: function () {
      this.result++
      this.$emit('input', {res: this.result, other: '++'})
    }
  }
}
</script>
<style lang="scss" scoped>
  button {
    border: 0px;
    outline: 0px;
    border-radius: 3px;
    button:nth-child(2) {
      width: 200px
    }
  }
</style>
