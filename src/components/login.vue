<template>
  <main>
    <h1>Select your profile</h1>
    <section>
      <!-- <userLogin /> -->
      <article v-for="(user, index) in $store.state.users" :key="index">
        <span>
          <h4>{{ user }}</h4>
        </span>
        <img v-bind:src="require('../assets/avatar.png')" alt="avatar" />
      </article>
    </section>
    <h3 v-if="$store.state.users < 1">No profiles added yet</h3>
    <button @click="showRegistred">+</button>
  </main>
</template>

<script>
// import UserCard from "./userCard.vue";

export default {
  name: "Login",
  methods: {
    addUsers() {
      this.$store.dispatch("addNewProfile");
    },
    showRegistred() {
      this.$router.push("/registred");
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
  gap: 10px;
  align-items: center;
  justify-content: center;
}
section {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
button {
  border-radius: 50%;
  font-size: 20px;
  border: 3px solid #000;
  color: #000;
}
/* userLogin */
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #000;
  height: 200px;
  width: 200px;
  background-color: #2f2f2f;
}
span {
  background-color: #000;
  width: 100%;
}
h4 {
  color: #fff;
  text-align: center;
}
img {
  padding: 10px;
  height: 100px;
  width: 100px;
}
@media (max-width: 700px) {
  article {
    height: 100px;
    width: 100px;
  }
  img {
    padding: 0;
    height: 50px;
    width: 50px;
  }
  h4 {
    font-size: 10px;
  }
}
</style>
