<template>
<v-list dense>
  <v-list-tile v-for="(item, i) in items" :key="i" @click="onItemClick(item)">
    <template v-if="item === null">
    <v-divider/>
    </template>
    <template v-else>
    <v-list-tile-action>
      <v-icon>{{item.icon || 'label'}}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{item.text}}</v-list-tile-title>
    </v-list-tile-content>
    </template>
  </v-list-tile>
</v-list>
</template>

<script>
import router from '@/router';

const ITEMS = [
  { text: 'Dashboard', url: '/', icon: 'home' },
  { text: 'Users', url: '/users' },
  { text: 'Projects', url: '/projects' },
];

export default {
  name: 'Navigation',
  data() {
    return {
      items: ITEMS,
    };
  },
  methods: {
    onItemClick(item) {
      router.push(item.url);
    },
  },
};
</script>

<style scoped>
</style>
