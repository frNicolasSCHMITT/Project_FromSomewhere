<template>
  <form @submit.prevent="mailTo" method="post">
    <div>
      <input v-model="firstName" type="text" placeholder="first name" />
      <input v-model="lastName" type="text" placeholder="last name" />
    </div>
    <input v-model="email" type="text" placeholder="email" />
    <textarea v-model="message" rows="20" placeholder="Message"></textarea>
    <input type="submit" value="Envoyer" />
  </form>
</template>
<style scoped>
form {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form * {
  margin-top: 20px;
}
form > div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
form > div > input {
  width: 49%;
}
form input {
  width: 100%;
  height: 30px;
}
textarea,
input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding: 10px;
  resize: none;
  border: none;
  background: #efefef;
  color: #111;
}
form input[type="submit"] {
  height: 50px;
  width: 150px;
  cursor: pointer;
  background: #ccc;
}
textarea::placeholder,
input::placeholder {
  background: transparent;
  color: #111;
  text-transform: capitalize;
}
textarea {
  min-width: 100%;
}

@media screen and (max-width: 1000px) {
  form {
    width: 100%;
    height: auto;
  }
  form > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: unset;
  }
  form > div > input {
    width: 100%;
  }
  form input {
    height: 50px;
  }
  textarea,
  input {
    text-align: center;
  }
}
</style>
<script>
import axios from "axios";
export default {
  name: "Form",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  },
  methods: {
    mailTo() {
      axios
        .post("api/mail", {
          from: this.firstName + " " + this.lastName + " : " + this.email,
          subject: "Ticket Support FromSomewhere",
          content: this.message,
        })
        .then((res) => {
          location.reload();
        });
    },
  },
};
</script>
