import { computed, ref } from 'vue';

export default function useSort(refItem, sortProp) {
  const sorting = ref(null);
  const sortedItems = computed(() => {
    if (!sorting.value) return refItem.value;
    return refItem.value.slice().sort((i1, i2) => {
      if (sorting.value === 'asc' && i1[sortProp] > i2[sortProp]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && i1[sortProp] > i2[sortProp]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode;
  }

  return { sortedItems, sorting, sort };
}
