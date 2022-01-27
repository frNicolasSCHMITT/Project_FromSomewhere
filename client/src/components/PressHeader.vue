<template>

<div class="press-header">
  <div class="press-nav">
    <PressBtn btnName="2021"/>
    <PressBtn btnName="2020"/>
    <PressBtn btnName="Other"/>
  </div>
</div>
  
</template>

<script>

import PressBtn from "@/components/PressBtn.vue";

export default {
  name: "PressHeader",
  components: {
    PressBtn,
  }
}

</script>

<style scoped>

.press-nav {
  border-bottom: solid black 1px;
  height: 50px;
  padding-left: 15%;
}

.press-nav button {
  margin-right: 30px;
  font-size: 1.5rem;
}

</style>
