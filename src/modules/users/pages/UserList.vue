<template>
<div>
  User List TODO
  <v-data-table
    :headers="headers"
    :items="users"
    :loading="false"
    :pagination="userListPagination"
    @update:pagination="changeUserListPagination($event)"
    class="elevation-3"
  >
    <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
    <template v-slot:items="props">
    <td>{{ props.item.id }}</td>
    <td>
      <router-link :to="{name: 'editUser', params: {id: props.item.id}}">
        {{ props.item.first_name }}
      </router-link>
    </td>
    <td>
      <router-link :to="{name: 'editUser', params: {id: props.item.id}}">
        {{ props.item.last_name }}
      </router-link>
    </td>
    <td>{{ props.item.email }}</td>
    <td>
      <span
        v-for="project in projectsByUserId(props.item.id)"
        :key="project.id"
      >
        <edit-project-link
          :project="project"
        />
        <br/>
      </span>
    </td>
    </template>
  </v-data-table>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import EditProjectLink from '../../../components/EditProjectLink';

const HEADERS = [
  { text: 'User ID', value: 'id' },
  { text: 'First Name', value: 'first_name' },
  { text: 'Last Name', value: 'last_name' },
  { text: 'Email', value: 'email' },
  { text: 'Projects', value: 'projects' },
];

export default {
  name: 'UserList',
  components: { EditProjectLink },
  data() {
    return {
      headers: HEADERS,
    };
  },
  computed: {
    users() {
      return []; // TODO
    },

    userListPagination() {
      return { // TODO
        sortBy: 'first_name',
        descending: true,
      };
    },
  },
  methods: {
    projectsByUserId(userId) {
      return []; // TODO
    },
    changeUserListPagination($event) {
      // TODO
    },
  },
  created() {
    // TODO
  }
};
</script>

<style scoped>
</style>
