<template>

<button @click="reqPress">{{ btnName }}</button>
  
</template>

<script>

export default {
  name: "PressBtn",
  methods: {
    reqPress() {
      // send request with date param (===> as stated by btnName)
    }
  },
  props: {
    btnName: String
  }
}

</script>

<style scoped>

button {
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  cursor: pointer;
  border: 0;
}

</style>
