<template>
  <base-container v-if="user">
    <h2>{{ user.fullName }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No user selected.</h3>
  </base-container>
</template>

<script>
import { computed, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';
import useSearch from '../../hooks/search.hook';

export default {
  components: {
    ProjectItem,
  },
  props: ['user'],
  setup(props) {
    const { user } = toRefs(props);
    const projects = computed(() => (user.value ? user.value.projects : []));
    const { enteredSearchTerm, availableItems, updateSearch } = useSearch(
      projects,
      'title'
    );

    watch(user, () => {
      updateSearch('');
    });

    const hasProjects = computed(
      () => props.user.projects && availableItems.value.length > 0
    );

    return {
      updateSearch,
      hasProjects,
      availableProjects: availableItems,
      enteredSearchTerm,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>