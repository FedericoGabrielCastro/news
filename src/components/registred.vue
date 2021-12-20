<template>
  <main>
    <h1>Create profile</h1>
    <form @submit.prevent="addUsers">
      <div>
        <label for="name">User Name:</label>
        <input id="userName" type="text" v-model="user" required autofocus />
        <label for="email">Email:</label>
        <input id="email" type="email" />
      </div>
      <input id="button" type="submit" value="Save" required />
    </form>
  </main>
</template>

<script>
export default {
  name: "Registred",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    addUsers() {
      this.$store.state.user = this.user;
      this.$store.dispatch("addUserAction");
      this.$router.push("/");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 80vh;
  align-items: center;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
div {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
#button {
  font-size: 20px;
  width: 60%;
  background-color: #000;
  /* padding: 10px; */
  /* border: 3px solid #000; */
  color: #fff;
}
</style>
