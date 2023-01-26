<template>
   <nav class="container-lg size-md" aria-label="breadcrumb">
    <ol class="breadcrumb mb-0 pt-5">
      <li class="breadcrumb-item">
        <router-link class="text-muted" to="/">
          <i class="bx bx-home-alt fs-lg me-1"></i>Home
        </router-link>
      </li>
      <li class="breadcrumb-item active text-primary fw-bold" aria-current="page">가본 곳({{ data.length }})</li>
    </ol>
  </nav>
  <section class="container-lg size-md mt-4 mb-lg-5 pt-lg-2 pb-5">
    <div class="row align-items-center gy-3 mb-4 pb-lg-3 pb-1">
      <div class="col-lg-5 col-md-4">
        <h1 class="mb-2 mb-md-0 fw-bold">Spot List</h1>
      </div>
    </div>
    <div v-for="(a, i) in data" :key="i">
      <div class="row pb-5 mb-md-4 mb-lg-5 food-item">
        <div class="rellax col-md-6 pb-1 mb-3 pb-md-0 mb-md-0" :class="i %2==0 ? '' : 'order-md-2' ">
          <div :id="'spotCarousel_' + i" class="carousel slide" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="10000000">
            <div class="carousel-indicators">
              <button
              v-for="button in data[i].thumbnail.length"
              :key="button"
              type="button" 
              :data-bs-target="'#spotCarousel_' + i" 
              :data-bs-slide-to="button - 1" 
              aria-current="true"
              :aria-label="'Slide ' + (button)"
              >
            </button>
            </div>
            <div class="carousel-inner rounded-3"> 
              <div 
              class="carousel-item"
              v-for="thumbnail in data[i].thumbnail"
              :key="thumbnail"
              >
                <img :src="thumbnail" class="d-block w-100 " alt="">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" :data-bs-target="'#spotCarousel_' + i" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" :data-bs-target="'#spotCarousel_'  + i" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="rellax col-md-6 d-flex align-items-center" :class="i %2==0 ? '' : 'order-md-1'">
          <div :class="i %2==0 ? 'ps-md-4 ms-md-2' : 'pe-md-4 me-md-2'">
            <div class="fs-sm text-muted mb-1">{{ data[i].date }}</div>
            <h2 class="h3" style="word-break: keep-all">{{ data[i].title }}</h2>
            <a href="#" class="d-table badge bg-faded-primary text-primary fs-sm mb-3 fw-normal">{{ data[i].category }}</a>
            <p class="d-md-none d-lg-block pb-3 mb-2 mb-md-3" style="word-break: keep-all;">{{ data[i].contents }}</p>
            <a href="javascript:;" class="btn btn-outline-primary" @click="showMap(i)" ref="mapButton">
            지도 펼치기
            </a>
          </div>
        </div>
        <div class="rellax rellax-map col-md-12 mt-5" :class="i %2==0 ? '' : 'order-md-3'"
        style="position: absolute; left: -99999px" ref="mapContainer">
          <div class="rounded-3" :id="'map_' + i" style="max-width:1100px; max-height:800px;"></div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import spotData from '@/assets/data/spot/data'

export default {
  components: { 
  },
  name: 'SpotList',
  data(){
    return {
      data: spotData,
      count: 1,
      order: false,
      map: null,
      carousel: null,
    }
  },
  mounted(){
    this.findFirst();
    this.initCarousel();
    if ( !window.kakao || !window.kakao.maps ) {
      const script = document.createElement('script');
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + process.env.VUE_APP_KAKAKO_JS_KEY;
      /* global kakao */
      script.addEventListener('load', ()=>{
        kakao.maps.load(this.initMap);
      })
      document.head.appendChild(script);
    } else {
      this.initMap();
    }
  },
  methods: {
    findFirst(){
      for(let i = 0; i < this.data.length; i++ ) {
        let container = document.getElementById('spotCarousel_' + i);
        let firstChild = container.querySelector('.carousel-inner').firstElementChild;
        let button = container.querySelector('.carousel-indicators').firstElementChild;
        firstChild.classList.add('active');
        button.classList.add('active');
        container.classList.add('pointer-event');
      }
    },
    initCarousel(){
    },
    initMap(){
      for(let i = 0; i < this.data.length; i++ ) {
        let container = document.getElementById("map_" + i);
        let options = {
          center: new kakao.maps.LatLng(this.data[i].urlX, this.data[i].urlY),
          level: 3
        };
        this.map = new kakao.maps.Map(container, options);
        let markerPosition  = new kakao.maps.LatLng(this.data[i].urlX, this.data[i].urlY); 
        let marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(this.map);
      }
    },
    showMap(i){
      if ( this.$refs.mapButton[i].innerText == '지도 펼치기' ) {
        this.$refs.mapContainer[i].style = '';
        this.$refs.mapButton[i].innerText = '지도 접기'
      } else {
        this.$refs.mapContainer[i].style = 'position: absolute; left: -99999px';
        this.$refs.mapButton[i].innerText = '지도 펼치기'
      }
    }
  }
}
</script>

<style lang="scss">
.food-item {
  .carousel-inner {
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 138px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
      opacity: .6;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      border-radius: 0 0 0.5rem 0.5rem;
    }
    .carousel-item {
      min-height: 400px;
    }
  }
  .carousel-control-prev, .carousel-control-next {
    width: 15% !important;
  }
  .rellax-map {
    > div {
      min-height: 400px;
    }
  }
}
@media (max-width: 991px) {
  .food-item {
    .btn-outline-primary {
      width: 100%;
    }
  }
  .rellax-map {
    &.mt-5 {
      margin-top: 2rem !important
    }
    > div {
      min-height: 200px !important;
    }
  }
}

</style>