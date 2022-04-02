import { defineComponent, h } from 'vue'
export default defineComponent({
  render() {
    try {
      this.$slots.default?.({
        row: {},
        column: {},
        $index: -1,
      })
      return h('div', 222)
    } catch {
      return h('div', 111)
    }
  },
})