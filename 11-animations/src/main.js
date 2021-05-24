import { createApp } from 'vue';
import router from './router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);

// Only mount when router is ready, removes initial animation
router.isReady().then(() => {
  app.mount('#app');
});

