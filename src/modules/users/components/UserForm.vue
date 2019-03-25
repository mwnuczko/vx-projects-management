<template>
<v-form
  ref="form"
  lazy-validation
>
  <v-text-field
    v-model="tmpUser.first_name"
    :counter="15"
    label="First Name"
    required
  ></v-text-field>

  <v-text-field
    v-model="tmpUser.last_name"
    :counter="20"
    label="Last Name"
    required
  ></v-text-field>

  <v-text-field
    v-model="tmpUser.email"
    label="E-mail"
    required
  ></v-text-field>

  <v-select
    v-model="selectedProjects"
    :items="projects"
    item-text="name"
    item-value="id"
    label="Projects"
    multiple
    required
  ></v-select>

  <v-btn
    color="success"
    @click.prevent="handleSubmit()"
  >
    Submit
  </v-btn>

  <v-btn
    color="error"
    @click.prevent="handleReset()"
  >
    Reset Form
  </v-btn>

</v-form>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      default() {
        return {};
      },
    },
    projects: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {
      selectedProjects: [], // TODO
    };
  },

  methods: {
    handleSubmit() {
      // TODO
      console.log('handleSubmit TODO', this.tmpUser, this.selectedProjects);
    },
    handleReset() {
      this.$refs.form.reset();
    },
  },

  computed: {
    tmpUser() {
      return { ...this.user };
    }
  },
}
</script>

<style scoped>
</style>
