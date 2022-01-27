<template>

<div class="bloc-modal" v-if="reveal">
  <div class="overlay" @click="toggleInfo"></div>
  <div v-for="article in articles" :key="article.id" class="modal">
    <div v-html="article.body" class="modal-body"></div>
  </div>
</div>

</template>

<script>

  export default {
    name: "PressModal",
    props: ['reveal', 'toggleInfo', 'reqID']
    // props: {
    //   reveal : Boolean,
    //   toggleModal: Function,
    // }
  };

</script>

<style scoped>

.bloc-modal{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal{
  background: #f1f1f1;
  padding: 50px;
  position: fixed;
  top: 30%;
}

.btn-modal{
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>