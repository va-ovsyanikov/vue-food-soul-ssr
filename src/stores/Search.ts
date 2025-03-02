import { defineStore } from 'pinia';
import axios from 'axios';
import type { Search } from '@/interfaces';
import { ref } from 'vue';

export const useSearchStore = defineStore('search', () =>  {

  const results = ref([] as Search[])

  const loader = ref(false)

  const searchData = async (query:string) => {
    loader.value = true
      try {
        const { data } = await axios.get<Search[]>(`https://nominatim.openstreetmap.org/search`, {
          params: { q: query, format: 'json' },
        });
        results.value = data;
      } catch (error) {
        console.log(error);
      } finally{
        loader.value = false
      }
    }

  return {
    results,
    loader,
    searchData
  }
});
