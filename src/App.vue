<template>

  <PreLoader v-if="isLoading"/>

  <NavBar :link="link" :menu="menu" :weather="weather" :apiLoad="apiLoad" :icons="icons"/>

  <router-view :link="link"></router-view>
  
  <FooterBar/>

  <a id="scrollTopBtn" href="#top" class="btn-scroll-top" data-scroll="">
    <span class="btn-scroll-top-tooltip text-muted fs-sm me-2 text-primary">Top</span>
    <i class="btn-scroll-top-icon bx bx-chevron-up text-white fs-5"></i>
  </a>
    
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import PreLoader from './components/PreLoader.vue'
import axios from 'axios'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'



export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    PreLoader,
  },
  data(){
    return {
      menu: ['먹은 곳', '가본 곳', '준비 중'],
      weather: [],
      apiLoad: false,
      isLoading: false,
      icons: [ 
        'bi-cloud-lightning-fill', // 2xx 뇌우
        'bi-cloud-rain-fill', // 3xx, 5xx 비
        'bi-snow', // 6xx 눈
        'bi-cloud-fog2-fill', // 7xx 안개
        'bi-brightness-high-fill', //800 클리어
        'bi-cloud-fill', //8xx 구름
      ],
      link: [
        '/food',
        '/spot',
        '/record'
      ]
    }
  },
  created(){
  },
  mounted(){
      this.getWeather();
      this.gotoTop();
      setTimeout(()=>{
        this.tooltip();  
      }, 100)
  },
  updated(){
  },
  watch: {
    '$route' () {
      setTimeout(()=>{
        this.tooltip();
      }, 100)
    }
  },
  methods: {
    getWeather(){
      let apiUrl = process.env.VUE_APP_WEATHER_URL;
      let apiKey = process.env.VUE_APP_WEATHER_TOKEN;
      axios.get(apiUrl, {
        params: {
          lat: 33.49,
          lon: 126.53,
          lang: 'kr',
          units: 'metric',
          appid: apiKey,
        },
      })
      .then((res)=>{
        this.weather = res.data;
        const weatherId = this.weather.weather[0].id;
        if (weatherId >= 200 && weatherId < 300) {
          this.icons = this.icons[0];
        } else if (weatherId >= 300 && weatherId < 600) {
          this.icons = this.icons[1];
        } else if (weatherId >= 600 && weatherId < 700) {
          this.icons = this.icons[2];
        } else if (weatherId >= 700 && weatherId < 800) {
          this.icons = this.icons[3];
        } else if (weatherId == 800) {
          this.icons = this.icons[4];
        } else if (weatherId >= 801) {
          this.icons = this.icons[5];
        }
        this.apiLoad = true;
      })
      .catch((error)=>{
        this.apiLoad = false;
        console.log(error);
      });
    },
    gotoTop(){
      const scrollBtn = document.getElementById('scrollTopBtn');
      window.addEventListener('scroll', function(){
        if ( window.scrollY > 60 ) {
          scrollBtn.classList.add('show');
        } else {
          scrollBtn.classList.remove('show');
        }
      })
    },
    tooltip(){
      Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(
        tooltipNode => new Tooltip(tooltipNode)
      )
    },
  },
}
</script>