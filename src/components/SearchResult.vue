<script setup lang="ts">
  import type {Search} from '@/interfaces';

  const {display_name} = defineProps<Pick<Search, 'display_name'>>();
</script>

<template>
  <div class="results">
    {{ display_name }}
  </div>
</template>

<style lang="scss" scoped>
.results {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
}
</style>
