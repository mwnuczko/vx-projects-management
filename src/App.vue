<template>
<v-app id="inspire">
  <app-info-snackbar/>
  <v-navigation-drawer fixed v-model="drawer" app>
    <navigation/>
  </v-navigation-drawer>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <router-view/>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer color="indigo" app>
    <span class="white--text">&copy; Piotr Woloszun</span>
  </v-footer>
</v-app>
</template>

<script>
import Navigation from './components/Navigation';
import AppInfoSnackbar from './containers/AppInfoSnackbar';

export default {
  components: { AppInfoSnackbar, Navigation },
  name: 'App',
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>

<style>
</style>
