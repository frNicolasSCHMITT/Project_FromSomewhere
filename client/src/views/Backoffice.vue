<template>
  <main>
    <Navbar />
    <div class="wrapper">
      <header>
        <PageTitle pageName="Back Office" />
        <BackoffBody />
      </header>
      <div class="bottom">
        <PageFooter />
      </div>
    </div>
  </main>
</template>
<style scoped>
/* Composants */

main {
  display: flex;
}
.wrapper {
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.bottom {
  height: 100%;
  display: flex;
  align-items: flex-end;
  width: 100%;
}

@media screen and (max-width: 1000px) {
  main {
    display: block;
  }
  .wrapper {
    width: 100vw;
    height: calc(100vh - 60px);
  }
}
</style>
<script>
import Navbar from "@/components/Navbar.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageTitle from "@/components/PageTitle.vue";
import BackoffBody from "@/components/BackoffBody.vue";
export default {
  name: "Backoffice",
  components: {
    BackoffBody,
    PageFooter,
    PageTitle,
    Navbar,
  },
};
</script>
