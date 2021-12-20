<template>
  <body>
    <main>
      <section>
        <img
          v-bind:src="require('../assets/userAvatar.png')"
          alt="userAvatar"
        />
        <h1>#User name</h1>
        <article>
          <div>
            <h2>Latest</h2>
            <h2>Favourites</h2>
          </div>
          <LatestNews />
          <!-- <FavouritesNews /> -->
        </article>
      </section>
    </main>
    <aside>
      <ChangeUserButton />
    </aside>
  </body>
</template>

<script>
import ChangeUserButton from "../components/changeUserButton.vue";
import LatestNews from "../components/latestNews.vue";
// import FavouritesNews from "../components/favouritesNews.vue";

export default {
  name: "News",
  components: {
    ChangeUserButton,
    LatestNews,
    // FavouritesNews,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-end;
}
main {
  width: 100%;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
article {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid #000;
  width: 80%;
  height: 59vh;
}
div {
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: space-around;
}
img {
  height: 100px;
  width: 100px;
}
aside {
  position: absolute;
}
@media (max-width: 700px) {
  article {
    width: 100%;
  }
  h2 {
    font-size: 20px;
  }
}
</style>
