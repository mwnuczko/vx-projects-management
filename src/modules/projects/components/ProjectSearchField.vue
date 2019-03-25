<template>
<v-text-field
  :value="value"
  @keyup.enter="handleSearchChange($event)"
  append-icon="search"
  label="Search"
  single-line
  hide-details
/>
</template>

<script>
export default {
  name: 'ProjectSearchField',
  props: {
    value: {
      type: String,
      default() {
        return '';
      },
    },
  },
  methods: {
    handleSearchChange(event) {
      this.$emit('search', event.target.value);
    }
  },
};
</script>

<style scoped>
</style>
