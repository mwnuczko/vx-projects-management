<template>
<v-layout row wrap>
  <v-flex xs12>
    <v-chip>
      <v-avatar class="teal">U</v-avatar>
      Users
    </v-chip>
  </v-flex>
  <v-flex xs12>
    <router-view></router-view>
  </v-flex>
</v-layout>
</template>

<script>
import store, { NAMESPACE } from './store';

export default {
  name: 'UsersModule',
  created() {
    this.$store.registerModule(NAMESPACE, store);
  },
  beforeDestroy() {
    this.$store.unregisterModule(NAMESPACE);
  },
};
</script>

<style scoped>
</style>
