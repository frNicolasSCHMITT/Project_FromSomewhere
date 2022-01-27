<template>
<div class="title-bloc">
  <router-link to="/"><h1>FROMSOMEWHERE</h1></router-link>
  <h2>{{ pageName }}</h2>
</div>
  
</template>

<script>

export default{
  name: "PageTitle",
  props: {
    pageName: String
  }
}

</script>

<style scoped>

.title-bloc{
  width: 100%;
}

.title-bloc h1 {
  padding-left: 2vw;
  color: #000;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 30px;
  font-family: var(--logo);
  text-transform: uppercase;
  margin: 10px;
  letter-spacing: -2.5px;
  pointer-events: none;
}

.title-bloc h2 {
  color: #000;
  font-size: 2.5rem;
  font-weight: 300;
  padding-left: 3vw;
  text-transform: uppercase;
  margin-bottom: 25px;
  pointer-events: none;
}

@media screen and (max-width: 1000px) {
  .title-bloc h1{
    font-size: 25px;
  }
  .title-bloc h2{
    font-size: 25px;
  }
}

@media screen and (max-width: 500px){
  .title-bloc h2 {
    text-align: center;
    padding: 0;
  }
}

</style>