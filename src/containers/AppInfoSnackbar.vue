<template>
<v-snackbar
  v-model="isVisible"
  right
  top
  color="info"
>
  {{ appInfo }}
</v-snackbar>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppInfoSnackbar',
  computed: {
    appInfo() { // TODO
      return null;
    },

    hasAppInfo() { // TODO
      return false;
    },

    isVisible() {
      return this.hasAppInfo;
    }
  },
};
</script>

<style scoped>
</style>
