<template>
  <main>
    <Navbar />
    <div class="wrapper">
      <header>
        <PageTitle pageName="Press Release" />
        <PressBody />
      </header>
      <div class="bottom">
        <PageFooter />
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import PageFooter from "@/components/PageFooter.vue";
import PageTitle from "@/components/PageTitle.vue";
import PressHeader from "@/components/PressHeader.vue";
import PressBody from "@/components/PressBody.vue";

export default {
  name: "Press",
  components: {
    PageFooter,
    PageTitle,
    PressHeader,
    PressBody,
    Navbar,
  },
};
</script>

<style scoped>
main {
  display: flex;
  overflow: hidden;
}
.bottom {
  height: 100%;
  display: flex;
  align-items: flex-end;
  width: 100%;
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

/* Hide scrollbar for Chrome, Safari and Opera */
header::-webkit-scrollbar {
  display: none;
}

@media (max-width: 1000px) {
  .wrapper {
    width: 100vw;
  }
}
</style>
