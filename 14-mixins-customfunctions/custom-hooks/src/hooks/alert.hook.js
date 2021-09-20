import { ref } from 'vue';
export default function useAlert(startingVisibily = false) {
  const alertIsVisible = ref(startingVisibily);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [
    alertIsVisible,
    showAlert,
    hideAlert
  ];
}
