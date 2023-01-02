<template>
    
    <NavBar :menu="menu" :weather="weather" :apiLoad="apiLoad" :icons="icons"/>

    <main class="pt-0 pb-0">
      <section class="bd-masthead">
        <div class="container-xl d-flex flex-column">
          <div class="col-md-8 m-auto text-center h-100">
            <div class="bg-visual d-block mx-auto mb-3"></div>
            <h1 class="mb-1 fw-semibold lh-1">JejuDo.kn</h1>
            <p class="mb-4 fs-6 text-secondary">
              <strong class="text-primary">D + {{  dday()  }}</strong> Rest in JEJU
            </p>
            <p class="lead mb-4 ">
              육지 토박이가 제주 섬 놈이 되어가는 과정을 담은 곳<br/>
              자타공인 막입의 소유자가 도민과 다녀온 검증된 맛집과 명소를<br/>
              주변인들에게 공유하려 만든 지극히 개인적인 공간<br/> 
            </p>
            <!-- <p class="text-secondary">만들다 욕심나서 이것저것 가져다 써보는 연습장</p> -->
          </div>
        </div>
        <!-- <span class="scroll-down"></span> -->
      </section>
      <hr>
      <section class="py-lg-20">
        <div class="container-lg px-4 px-lg-0">
            <div class="row g-6">
                <div class="col-lg-4 col-12">
                    <div class="card rounded-3 mb-14">

                        <div class="px-lg-8 px-4 ">
                            <a href="https://geeksui.codescandy.com/geeks/pages/landings/home-academy.html" target="_blank"> <img src="./assets/main01.jpeg" alt="" class="mt-n8 img-fluid w-100 img-hover rounded-3">
                            </a>
                        </div>
                        <div class="card-body px-4 py-5 p-md-8">
                            <div class="border-bottom pb-3 mb-5">
                                <h2 class="mb-2 fw-bold display-5"> <a href="#" class="text-inherit">Course Design.</a>
                                </h2>
                                <p class="fs-4">When setting up a site or app for your university
                                    or school, Geeks courses and education
                                    template is an ideal tool to start.</p>
                            </div>
                            <div class="d-grid">
                                <a href="https://geeksui.codescandy.com/geeks/index.html" target="_blank" class="btn btn-outline-white">
                                    Live demo <i class="fe fe-arrow-right"></i>

                                </a>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="card  rounded-3 mb-14">
                        <div class="px-lg-8 px-4 ">
                            <a href="https://geeksui.codescandy.com/geeks/pages/dashboard/dashboard-analytics.html" target="_blank"> <img src="./assets/main02.jpeg" alt="" class="mt-n8 img-fluid w-100 img-hover rounded-3 "></a>
                        </div>
                        <div class="card-body px-4 py-5 p-md-8">
                            <div class="border-bottom pb-3 mb-5">
                                <h2 class="mb-2 fw-bold display-5"> <a href="#" class="text-inherit">Admin
                                        Dashboard.</a></h2>
                                <p class="fs-4">Dashboard is designed to be the perfect
                                    starting point for sites focused on analytics,
                                    data-heavy</p>
                            </div>
                            <div class="d-grid">
                                <a href="https://geeksui.codescandy.com/geeks/pages/dashboard/dashboard-analytics.html" target="_blank" class="btn btn-outline-white">
                                    Live demo <i class="fe fe-arrow-right"></i>

                                </a>
                            </div>

                        </div>

                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="card rounded-3 mb-14">
                        <div class="px-lg-8 px-4">
                            <a href="https://geeksui.codescandy.com/geeks/pages/landings/course-lead.html" target="_blank"> <img src="./assets/main03.jpeg" alt="" class="mt-n8 img-fluid w-100 img-hover rounded-3 ">
                            </a>
                        </div>
                        <div class="card-body px-lg-8 px-4 py-5 p-md-8">
                            <div class="border-bottom pb-3 mb-5">
                                <h2 class="mb-2 fw-bold display-5"> <a href="#" class="text-inherit">Landings.</a></h2>
                                <p class="fs-4">High-converting landing page templates &amp;
                                    marketing page for developer, digital agency
                                    and designer.</p>
                            </div>
                            <div class="d-grid">

                                <a href="https://geeksui.codescandy.com/geeks/pages/landings/course-lead.html" target="_blank" class="btn btn-outline-white">
                                    Live demo <i class="fe fe-arrow-right"></i>

                                </a>
                            </div>

                        </div>

                    </div>
                </div>
                
            </div>

        </div>
    

      </section>
       

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
