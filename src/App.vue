<template>
  <div class="border border-d8 w-full">
    <div class="p-5">
      <input v-model="toggle" type="checkbox" />
      <div v-if="!toggle">error</div>
      <m-table v-if="showTable">
        <template #default="{ row }">{{ test(row) }}</template>
      </m-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import MTable from './table'

const showTable = ref(false)

const toggle = ref(false)

onMounted(() => {
  setTimeout(() => {
    showTable.value = true
  }, 500)
})

const test = (row: any) => {
  return row.createdBy.name
}
</script>