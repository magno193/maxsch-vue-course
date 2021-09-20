import { computed, ref, watch } from 'vue';
export default function useSearch(items, searchProp) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(() =>
    activeSearchTerm.value
      ? items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      )
      : items.value || []
  );

  watch(enteredSearchTerm, (val) => {
    setTimeout(() => {
      if (val === enteredSearchTerm.value) {
        activeSearchTerm.value = val;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return { enteredSearchTerm, availableItems, updateSearch };
}
