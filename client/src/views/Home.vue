<template>
  <header class="fs-header">
    <router-link to="/">
      <p class="fs-header__logo">
        FROM <span>SOMEWHERE</span>
      </p>
    </router-link>
    <nav class="fs-header__navbar">
      <ul class="fs-header__navbar__nav">
        <router-link to="/">
          <li class="fs-header__navbar__nav__items">
            HOME
          </li>
        </router-link>
        <router-link to="/press">
          <li class="fs-header__navbar__nav__items">
            PRESS
          </li>
        </router-link>
        <router-link to="/support">
          <li class="fs-header__navbar__nav__items">
            SUPPORT
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
  <div class="fs-wrapper">
    <section class="fs-games">
      <div v-for="game in games" :key="game.date" class="fs-games__item" :class="'game'+(games.indexOf(game)+1)">
        <img :src="require('../assets/img/'+game.imageName)" alt="" draggable="false">
        <img :src="require('../assets/img/'+game.gameTitleName)" class="title" alt="" draggable="false">
        <div class="fs-games__item__desc"><span>{{game.body.charAt(0)}}</span>{{game.body.slice(1)}}</div>
        <button class="fs-games__item__close">
          <svg xmlns="http://www.w3.org/2000/svg"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
        </button>
        <ul class="fs-games__item__meta">
          <li v-for="(metacritique, index) in game.metacritique" :key="metacritique" :class="'meta'+(index+1)">
            {{metacritique.body}}<span>{{metacritique.author}}</span>
          </li>
        </ul>
      </div>
      
    </section>
    <footer class="fs-footer">
      <div class="fs-footer__socials">
        <a href="https://twitter.com/fromsoftware_pr" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
        <a href="https://www.facebook.com/fromsoftware.jp/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
        </a>
        <a href="https://www.instagram.com/fromsoftware/?hl=fr" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://www.youtube.com/channel/UCCkxMbfZ80VFwwiRlIG5P5g" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
        </a>
      </div>
      <p class="fs-footer__credits">» <a href="https://github.com/frNicolasSCHMITT" target="_blank">SCHMITT Nicolas</a> » <a href="https://github.com/Jonathan-Caillon" target="_blank">CAILLON Jonathan</a> » <a href="https://github.com/AlexandreHamm" target="_blank">HAMM Alexandre</a></p>
      <p class="fs-footer__inspiration">Inspired by <a href="https://www.fromsoftware.jp/ww/" target="_blank">https://www.fromsoftware.jp/ww/</a></p>
    </footer>
  </div>
    <!-- built files will be auto injected -->
    
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: "Home",
  data(){
    return {
      games: [],
    }
  },
  created(){
    axios
    .get("/api/game/")
    .then((response) => {
      this.games = response.data;
    })

    .catch((error) => {
      console.log(error);
    });
    setTimeout(function(){
        document.querySelector('.game2').classList.add('hovered');
    

        document.querySelectorAll(".fs-games__item").forEach(function(e){
            let enlarge = false;
            e.querySelector('img').addEventListener("click", function(){
                if(enlarge == false){
                    e.classList.toggle("active");
                    document.querySelectorAll(".fs-games__item").forEach(function(element){
                        if(element.classList.contains("active")){
                            element.classList.remove("hovered");
                            setTimeout(function(){
                                element.querySelector(".fs-games__item__close").style.display = "block";
                            }, 200);
                            element.classList.add('large');
                            enlarge = true;
                        }else{
                            element.classList.add("mobile");
                            element.style.opacity = "0";
                        }
                        document.querySelector(".fs-games").classList.add('enlarged');
                    });
                }
            })
            e.querySelector(".fs-games__item__close").addEventListener('click', function(){
                document.querySelectorAll(".fs-games__item").forEach(function(element){
                    if(element.classList.contains("active")){
                        document.querySelector(".fs-games").classList.remove("enlarged");
                        element.querySelector(".fs-games__item__close").style.display = "none";
                        element.classList.remove("large");
                        element.classList.remove("active");
                        element.classList.add("hovered");
                    }else{
                        enlarge = false;
                        element.style.opacity = "1";
                        element.classList.remove("mobile");
                    }
                });
            });
            e.addEventListener("mouseenter", function(){
                if(!e.classList.contains("active")){
                    document.querySelectorAll(".fs-games__item").forEach(function(el){
                        el.classList.remove("hovered");
                    });
                    e.classList.add("hovered");
                }
            })
            
        })
    }, 100);
  }
};
</script>
