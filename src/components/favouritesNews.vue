<template>
  <div>
    <!-- added data from latestNews list from api  -->
    <ul>
      <li>
        <h4>Title from api</h4>
        <a href="" target="_blank" alt="t"> Link </a>
        <button>x</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <a href="" target="_blank" alt="t"> Link </a>
        <button>x</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <a href="" target="_blank" alt="t"> Link </a>
        <button>x</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <a href="" target="_blank" alt="t"> Link </a>
        <button>x</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <a href="" target="_blank" alt="t"> Link </a>
        <button>x</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <a href="" target="_blank" alt="t"> Link </a>
        <button>x</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <a href="" target="_blank" alt="t"> Link </a>
        <button>x</button>
      </li>
      <li>
        <h4>Title from api</h4>
        <a href="" target="_blank" alt="t"> Link </a>
        <button>x</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FavouritesNews",
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
a {
  text-decoration: none;
  color: #000;
}
button {
  border-radius: 50%;
  font-size: 10px;
  border: 3px solid #000;
  color: #000;
}
</style>
