<template>
<router-link :to="{name: 'editUser', params: {id: user.id}}">
  {{ fullName }}
</router-link>
</template>

<script>
export default {
  name: 'EditUserLink',
  props: {
    user: {
      type: Object,
      default() {
        return { first_name: '', last_name: '' };
      },
    },
  },
  computed: {
    fullName() {
      const { first_name, last_name } = this.user;
      return `${first_name} ${last_name}`;
    },
  },
};
</script>

<style scoped>
</style>
