<template>
  <button @click="showLogin">Not User One?</button>
</template>

<script>
export default {
  name: "ChangeUserButton",
  methods: {
    showLogin() {
      this.$router.push("/");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  border: none;
  text-align: center;
  color: blue;
}
</style>
