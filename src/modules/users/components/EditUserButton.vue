<template>
<v-btn
  :disabled="disabled"
  @click.prevent="handleButtonClick()"
  flat color="orange"
>
  {{label}}
</v-btn>
</template>

<script>
export default {
  name: 'EditUserButton',
  props: {
    userId: Number,
    disabled: Boolean,
    label: String
  },
  methods: {
    handleButtonClick() {
      if (!this.disabled) {
        this.$router.push({ name: 'editUser', params: { id: this.userId } });
      }
    }
  }
};
</script>

<style scoped>
</style>
