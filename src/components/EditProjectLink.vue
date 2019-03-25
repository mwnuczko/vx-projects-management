<template>
<router-link :to="{name: 'editProject', params: {id: project.id}}">
  {{ project.name }}
</router-link>
</template>

<script>
export default {
  name: 'EditProjectLink',
  props: {
    project: {
      type: Object,
      default() {
        return { name: '' };
      },
    },
  },
};
</script>

<style scoped>
</style>
