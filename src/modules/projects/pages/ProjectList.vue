<template>
<v-card>

  <v-card-title>
    Project List
    <v-spacer></v-spacer>
    <project-search-field
      :value="searchQuery"
      @search="handleSearch($event)"
    />
  </v-card-title>
  <v-data-table
    :headers="headers"
    :items="projects"
    :loading="isProjectsFetching"
    :search="searchQuery"
    class="elevation-3"
  >
    <v-progress-linear v-slot:progress color="red" indeterminate></v-progress-linear>
    <template v-slot:items="props">
    <td>{{ props.item.id }}</td>
    <td>{{ props.item.name }}</td>
    <td>{{ props.item.version }}</td>
    <td>
      <a :href="props.item.url" target="_blank">link</a>
    </td>
    <td>{{ props.item.description }}</td>
    <td>
      <span
        v-for="user in usersByProjectId(props.item.id)"
        :key="user.id"
      >
        <edit-user-link :user="user"/>
        <br/>
      </span>
    </td>
    </template>
  </v-data-table>
</v-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import EditUserLink from '../../../components/EditUserLink';
import ProjectSearchField from '../components/ProjectSearchField';
import { NAMESPACE } from '../store';

const HEADERS = [
  { text: 'ID', value: 'id' },
  { text: 'Name', value: 'name' },
  { text: 'Version', value: 'version' },
  { text: 'URL', value: 'url' },
  { text: 'Description', value: 'description' },
  { text: 'Users', value: 'users' },
];

export default {
  name: 'ProjectList',
  components: { ProjectSearchField, EditUserLink },
  data() {
    return {
      headers: HEADERS,

      // TODO
      projects: [],
      isProjectsFetching: false,
      searchQuery: '',
    };
  },
  computed: {},
  methods: {
    fetchProjects() {
      // TODO
    },
    handleSearch(searchQuery) {
      // TODO
    },
    usersByProjectId(projectId) {
      // TODO
    },
  },
  created() {
    this.fetchProjects();
  },
  watch: {
    $route(to, from) {
    },
  },
};
</script>

<style scoped>
</style>
