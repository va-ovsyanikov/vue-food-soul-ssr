<script setup lang="ts">
  import { ref, unref } from 'vue';
  import {useSearchStore} from '@/stores';
  import {debounce} from '@/composables';

  const store = useSearchStore();

  const searchQuery = ref('');

  const debouncedSearch = debounce(store.searchData, 1000);

  const handleImput = () => {
    debouncedSearch(unref(searchQuery));
  }
</script>

<template>
  <input placeholder="Введите место..." class="input" v-model="searchQuery" @input="handleImput">
</template>

<style lang="scss" scoped>
.input {
  padding: 10px;
  border: 1px solid green;
  border-radius: 4px;
  margin: 0.5rem;
}
</style>
