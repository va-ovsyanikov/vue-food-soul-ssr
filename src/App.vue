<template>
  <main class="container">
    <SearchInput />
    <p class="container__loader" v-if="loader">Поиск...</p>
    <div v-else-if ="results.length && !loader">
      <SearchResult v-for="(result , i) in results" :key="i"
        :display_name="result.display_name"
        :type="result.type"
      />
    </div>
    <p class="container__empty" v-else>Данных нет</p>
</main>
</template>

<script setup lang="ts">
  import { useSearchStore } from '@/stores';
  import { storeToRefs } from 'pinia';
  import SearchInput from '@/components/SearchInput.vue';
  import SearchResult from '@/components/SearchResult.vue';

  const store = useSearchStore();

  const {results, loader} = storeToRefs(store);
</script>
<style lang="scss" scoped>
.container{
  &__empty, &__loader{
    text-align: center;
  }
}
</style>
