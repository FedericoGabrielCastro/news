<template>
  <div>
    <!-- dataFromAxios.map() -->
    <ul>
      <li>
        <h4>Title from api</h4>
        <button>+</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <button>+</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <button>+</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <button>+</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <button>+</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <button>+</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <button>+</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LatestNews",
  methods: {
    async getNews() {
      const baseUrl = "https://hacker-news.firebaseio.com/v0/";
      const newStoriesUrl = `${baseUrl}newstories.json`;
      let datos = await axios.get(newStoriesUrl);
      console.log(datos.data);
    },
  },
  created() {
    this.getNews();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  width: 80%;
  flex-direction: row;
  overflow-y: scroll;
  height: 250px;
}
li {
  padding: 0px 10px;
  display: flex;
  align-items: center;
  border: 1px solid #000;
  justify-content: space-between;
}
button {
  border-radius: 50%;
  font-size: 10px;
  border: 3px solid #000;
  color: #000;
}
</style>
