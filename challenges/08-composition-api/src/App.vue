<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-show="showGoal">{{ courseGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle goal</button>

  <button @click="goal.isVisible = !goal.isVisible">Toggle another goal</button>
  <h3 v-show="goal.isVisible">{{ goal.message }}</h3>
  <hr />
  <h2>Options API</h2>
  <button @click="optGoal.isVisible = !optGoal.isVisible">Option Toggle</button>
  <h3 v-show="optGoal.isVisible">{{ optGoal.message }}</h3>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  data: () => ({
    optGoal: {
      message: 'Option goal completed!',
      isVisible: false,
    },
  }),
  setup() {
    const courseGoal = ref('Termine o curso!');
    const showGoal = ref(false);
    const toggleGoal = () => {
      showGoal.value = !showGoal.value;
    };

    const goal = reactive({
      message: 'You have completed your course goal!',
      isVisible: false,
    });
    return { courseGoal, showGoal, toggleGoal, goal };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>