<template>
  <div class="press-container">
    <div class="press-nav">
      <button @click="req2020">2020</button>
      <button @click="req2021">2021</button>
      <button @click="reqAll">TOUS</button>
    </div>
    <div class="articles-container">
      <div
        class="press-article"
        v-for="(article, index) in articles"
        :key="index"
      >
        <div class="articleBody">
          <img
            class="article-image"
            :src="require('../assets/img/' + article.imageName)"
            alt=""
          />
          <div
            class="articleCheck article-txt"
            :id="index"
            @click="toggleActive(index), toggleHidden(index)"
            v-bind:class="{ Hide: isHidden(index) }"
          >
            <div class="article-title">{{ article.title }}</div>
            <br />
            <div class="article-excerpt">{{ article.excerpt }}</div>
            <div class="article-link">
              <a>Cliquer pour charger l'article</a>
            </div>
          </div>
          <div
            :id="index"
            v-html="article.body"
            class="articleCheck article-full hidden"
            v-bind:class="{ Active: isActive(index) }"
            @click="toggleActive(index), toggleHidden(index)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API = "/api/press/";

export default {
  name: "PressContent",
  components: {},
  data() {
    return {
      articles: [],
      articleView: [],
      activeKey: null,
      hiddenKey: null,
    };
  },
  methods: {
    req2020: function () {
      axios.get(API).then((response) => {
        this.articles = Object.values(response.data).filter((user) =>
          user.date.includes(2020)
        );
      });
    },
    req2021: function () {
      axios.get(API).then((response) => {
        this.articles = Object.values(response.data).filter((user) =>
          user.date.includes(2021)
        );
      });
    },
    reqAll: function () {
      axios.get(API).then((response) => {
        this.articles = response.data;
      });
    },
    isHidden(i){
      return this.hiddenKey === i;
    },
    isActive(i) {
      return this.activeKey === i;
    },
    toggleHidden(i){
      this.hiddenKey = this.isHidden(i) ? null : i;
    },
    toggleActive(i) {
      this.activeKey = this.isActive(i) ? null : i;
    },
  },
  created() {
    axios
      .get(API)
      .then((response) => {
        this.articles = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {},
};
</script>

<style scoped>

.Hide{
  display: none !important;
}

.Active {
  display: block !important;
}

.hidden {
  display: none;
}

.press-nav {
  border-bottom: solid black 1px;
  height: 50px;
  display: flex;
  justify-content: center;
}

button {
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  cursor: pointer;
  border: 0;
  font-size: 1.5rem;
}

button:hover {
  color: #42b983;
}

button:not(:last-child) {
  margin-right: 30px;
}

.press-container {
  height: 100%;
  width: 100%;
}

.articles-container {
  width: 100%;
  padding: 0 20%;
}

.articleBody {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.articleBody a {
  color: #42b983;
}

.article-image {
  width: 150px;
  height: 150px;
  margin-right: 50px;
}

.article-title {
  text-align: center;
  align-items: center;
  justify-content: center;
}

.article-txt {
  width: calc(100% - 150px);
  flex-direction: column;
  margin-top: 10px;
  padding: 0 20px;
  cursor: pointer;
}

.article-link {
  margin-top: 10px;
  text-align: right;
}

.article-full {
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  cursor: pointer;
}

@media (max-width: 1000px) {
  button {
    width: 100px;
  }
  button:not(:last-child) {
    margin-right: 15px;
  }

  .articles-container {
    padding: 0 15%;
  }

  .articleBody {
    margin-top: 30px;
  }
}

@media (max-width: 750px) {
  .articleBody {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
  }
  .articles-container {
    padding: 0 10%;
  }
  .article-txt {
    width: 100%;
    padding: 0;
  }
  .article-image {
    margin: 20px 0;
    width: 200px;
    height: 150px;
  }
}

@media (max-width: 500px) {
  .articles-container {
    padding: 0 5%;
  }
}
</style>
