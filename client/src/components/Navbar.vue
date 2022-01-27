<template>
  <nav id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/press">Press</router-link>
    <router-link to="/support">Support</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
#nav {
  padding: 30px;
  width: 20vw;
  height: 100vh;
  padding-top: 5vh;
  z-index: 9;
  background-color: rgb(24, 24, 24);
  display: flex;
  flex-direction: column;
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  margin-bottom: 10vh;
  text-transform: uppercase;
  font-weight: 500;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (max-width: 1000px) {
  #nav {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    padding: 0;
    background: #fff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  #nav a {
    position: relative;
    width: calc(100vw / 3);
    height: 100%;
    font-size: 18px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 500;
    color: #000 !important;
  }

  #nav > a:nth-child(2):after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 50%;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    pointer-events: none;
  }
}
</style>
