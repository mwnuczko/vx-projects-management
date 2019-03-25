<template>
<v-layout>
  <v-flex xs12 class="elevation-3">
    <v-card>
      <v-card-actions>
        <edit-user-button
          :user-id="previousUserId"
          :disabled="false"
          label="Previous User"
        />
        <edit-user-button
          :user-id="nextUserId"
          :disabled="false"
          label="Next User"
        />
      </v-card-actions>
      <v-card-title primary-title>
        <h3 class="headline mb-0">Edit User</h3>
      </v-card-title>
      <v-card-text>
        <div>
          <user-form
            :user="currentUser"
            :projects="projects"
          />
        </div>
      </v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import UserForm from '../components/UserForm';
import { NAMESPACE } from '../store';
import EditUserButton from '../components/EditUserButton';

export default {
  name: 'EditUser',
  components: { EditUserButton, UserForm },
  methods: {
    // TODO
  },
  computed: {
    currentUser() {
      return { id: 13, first_name: 'batman' }; // TODO
    },
    previousUserId() {
      return 12; // TODO
    },
    nextUserId() {
      return 14; // TODO
    },
    projects() {
      return []; // TODO
    },
  },
  watch: {
    $route(to, from) {
      // TODO
    }
  },
  created() {
    // TODO
  },
};
</script>

<style scoped>
</style>
