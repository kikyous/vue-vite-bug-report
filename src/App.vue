<template>
  <div class="border border-d8 w-full">
    <div class="p-5">
      <input
        v-model="name"
        type="text"
      >
      <div v-if="!name.length" class="text-sm text-red-400">
        error
      </div>
      <div v-if="showTable" class="">
        <ElTable :data="[]" style="width: 100%">
          <ElTableColumn width="100">
            <template #default="{row}">
              <span>{{ row.createdBy.name }}</span>
            </template>
          </ElTableColumn>
        </ElTable>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { ElTable, ElTableColumn } from 'element-plus'

const showTable = ref(false)

const name = ref('')
setTimeout(() => {
  showTable.value = true
}, 500)

</script>
