<template>
    
    <NavBar :menu="menu" :weather="weather" :apiLoad="apiLoad" :icons="icons"/>

    <main class="pt-0 pb-0">
      <div class="bd-masthead">
        <div class="container-xl min-vh-100 d-flex flex-column">
          <div class="col-md-8 m-auto text-center h-100">
            <div class="bg-visual d-block mx-auto mb-3"></div>
            <h1 class="mb-1 fw-semibold lh-1">JejuDo.kn</h1>
            <p class="mb-4 fs-6">
              <strong class="text-primary">D + {{  dday()  }}</strong> Rest in JEJU
            </p>
            <p class="lead mb-4 ">
              육지 토박이가 제주 섬 놈이 되어가는 과정을 담은 곳<br/>
              자타공인 막입의 소유자가 도민과 다녀온 검증된 맛집과 명소를<br/>
              주변인들에게 공유하려 만든 지극히 개인적인 공간<br/> 
            </p>
            <p class="text-secondary">또는 만들다 욕심나서 각종 API, 프레임워크 등 이것저것 가져다 쓰는 연습장</p>
          </div>
        </div>
        <!-- <span class="scroll-down"></span> -->
      </div>
      
      <div class="container-lg py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
            <span class="fs-4">Jumbotron example</span>
          </a>
        </header>

        <div class="p-5 mb-4 bg-light rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Custom jumbotron</h1>
            <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
            <button class="btn btn-primary btn-lg" type="button">Example button</button>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3">
              <h2>Change the background</h2>
              <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
              <button class="btn btn-outline-light" type="button">Example button</button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-light border rounded-3">
              <h2>Add borders</h2>
              <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
              <button class="btn btn-outline-secondary" type="button">Example button</button>
            </div>
          </div>
        </div>
      </div>

    </main>
</template>

<script>
import NavBar from './components/NavBar.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data(){
    return {
      menu: ['먹은 곳', '가본 곳', '느낀 것'],
      weather: [],
      apiLoad: false,
      icons: [ 
        'bi-cloud-lightning-fill', // 2xx 뇌우
        'bi-cloud-rain-fill', // 3xx, 5xx 비
        'bi-snow', // 6xx 눈
        'bi-cloud-fog2-fill', // 7xx 안개
        'bi-brightness-high-fill', //800 클리어
        'bi-cloud-fill', //8xx 구름
      ],
    }
  },
  mounted(){
      this.getWeather();
  },
  methods: {
    dday(){
      let now = new Date();
      let start = new Date('2021-09-30');
      let timeDiff = now.getTime() - start.getTime();
      let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
      
      return day
    },
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

        if ( this.weather.weather[0].id >= 200 && this.weather.weather[0].id < 300 ) {
          this.icons = this.icons[0];
          console.log(111);
        } else if ( this.weather.weather[0].id >= 300 && this.weather.weather[0].id < 600 ) {
          this.icons = this.icons[1];
          console.log(222);
        } else if ( this.weather.weather[0].id >= 600 && this.weather.weather[0].id < 700 ) {
          this.icons = this.icons[2];
          console.log(333);
        } else if ( this.weather.weather[0].id >= 700 && this.weather.weather[0].id < 800 ) {
          this.icons = this.icons[3];
          console.log(444);
        } else if ( this.weather.weather[0].id == 800  ) {
          this.icons = this.icons[4];
          console.log(555);
        } else if ( this.weather.weather[0].id >= 801  ) {
          this.icons = this.icons[5];
        }

        this.apiLoad = true;
      })
      .catch((error)=>{
        this.apiLoad = false;
        console.log(error);
      });
    }
  },
}
</script>

<style>
</style>
