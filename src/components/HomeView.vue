<template>
    <main class="pt-0 pb-0">
        <section class="bd-masthead">
          <div class="container-xl d-flex flex-column">
            <div class="col-md-8 m-auto text-center h-100">
              <div class="bg-visual d-block mx-auto mb-3"></div>
              <h1 class="mb-1 fw-semibold lh-1">JejuDo.kn</h1>
              <p class="mb-4 fs-6">
                <strong class="text-primary">D + {{ dday() }}</strong> Rest in JEJU
              </p>
              <p class="lead mb-4 text-secondary">
                육지 토박이가 제주 섬 놈이 되어가는 과정을 담은 곳<br/>
                또는 이것저것 가져다 써보는 연습장
              </p>
            </div>
          </div>
        </section>
  
        <section class="py-lg-20">
          <div class="container-lg px-lg-0 size-md">
              <div class="row g-6">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12" v-for="(a, i) in link" :key="i">
                      <div class="card rounded-3 mb-14">
                          <div class="px-lg-8 px-4 ">
                              <a :href="link[i]">
                                <img :src=" cardData[i].image " alt="" class="mt-n8 img-fluid w-100 img-hover rounded-3">
                              </a>
                          </div>
                          <div class="card-body px-4 py-4 p-md-8">
                              <div class="pb-3 mb-0">
                                  <h2 class="mb-1 fw-bold display-5"> <a :href="link[i]" class="text-inherit">{{ cardData[i].title }}</a>
                                  </h2>
                                  <p class="fs-4 mb-0 text-sm">{{ cardData[i].sub }}</p>
                              </div>
                              <div class="d-grid">
                                  <a :href="link[i]"  class="btn btn-outline-white">
                                    더보기 <i class="bi bi-arrow-right"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- <div class="col-lg-4 col-12">
                      <div class="card  rounded-3 mb-14">
                          <div class="px-lg-8 px-4 ">
                              <a href="https://geeksui.codescandy.com/geeks/pages/dashboard/dashboard-analytics.html" target="_blank"> <img src="../assets/main02.jpeg" alt="" class="mt-n8 img-fluid w-100 img-hover rounded-3 "></a>
                          </div>
                          <div class="card-body px-4 py-4 p-md-8">
                              <div class="pb-3 mb-0">
                                  <h2 class="mb-1 fw-bold display-5"> <a href="#" class="text-inherit">Tourist Spot</a></h2>
                                  <p class="fs-4 mb-0 text-sm">가본 곳</p>
                              </div>
                              <div class="d-grid">
                                  <a href="https://geeksui.codescandy.com/geeks/pages/dashboard/dashboard-analytics.html" target="_blank" class="btn btn-outline-white">
                                      더보기 <i class="bi bi-arrow-right"></i>
                                  </a>
                              </div>
  
                          </div>
  
                      </div>
                  </div>
                  <div class="col-lg-4 col-12">
                      <div class="card rounded-3 mb-14">
                          <div class="px-lg-8 px-4">
                              <a href="https://geeksui.codescandy.com/geeks/pages/landings/course-lead.html" target="_blank"> <img src="../assets/main03.jpeg" alt="" class="mt-n8 img-fluid w-100 img-hover rounded-3 ">
                              </a>
                          </div>
                          <div class="card-body px-lg-8 px-4 py-4 p-md-8">
                              <div class="pb-3 mb-0">
                                  <h2 class="mb-1 fw-bold display-5"> <a href="#" class="text-inherit ">Daily Record</a></h2>
                                  <p class="fs-4 mb-0 text-sm">느낀 것(준비 중)</p>
                              </div>
                              <div class="d-grid">
                                  <a href="https://geeksui.codescandy.com/geeks/pages/landings/course-lead.html" target="_blank" class="btn btn-outline-white">
                                    더보기 <i class="bi bi-arrow-right"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div> -->
              </div>
          </div>
        </section>
        <!-- <hr> -->
        <section class="bg-light "> <!-- bg-light -->
          <div class="container-lg px-4 px-lg-0 pt-3 pb-5 size-md">
            <div class="row text-center">
              <div class="col-12">
                <h2 class="mt-4 mb-1 fw-bold display-5">이 사이트는요</h2>
                <p class="fs-4 mb-4">이런 것들로 뚝딱뚝딱 만들었음</p>
              </div>
            </div>
            <div class="row text-center">
              
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-2 mb-grid-gutter pb-2 image-wrap">
                <figure>
                  <img class="inline-block" src="../assets/vue.svg" alt="">
                </figure>
                <h5>Vue3</h5>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-2 mb-grid-gutter pb-2 image-wrap">
                <figure>
                  <img class="inline-block" src="../assets/bootstrap.svg" alt="">
                </figure>
                <h5>Bootstrap5</h5>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-2 mb-grid-gutter pb-2 image-wrap">
                <figure>
                  <img class="inline-block" src="../assets/npm.svg" alt="">
                </figure>
                <h5>npm</h5>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-2 mb-grid-gutter pb-2 image-wrap">
                <figure>
                  <img class="inline-block" src="../assets/sass.svg" alt="">
                </figure>
                <h5>Sass</h5>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-2 mb-grid-gutter pb-2 image-wrap">
                <figure>
                  <img class="inline-block" src="../assets/javascript.svg" alt="">
                </figure>
                <h5>JavaScript</h5>
              </div>
              <div class="col-lg-2 col-md-4 col-sm-4 col-xs-2 mb-grid-gutter pb-2 image-wrap">
                <figure>
                  <img class="inline-block" src="../assets/html5.svg" alt="">
                </figure>
                <h5>HTML5</h5>
              </div>
            
            </div>
          </div>
        </section>
  
        <!-- <section class="bg-light">
          <div class="container-lg py-6">
            <div class="row">
              <div class="col-lg-1 d-none d-lg-block order-lg-2"></div>
              <div class="col-lg-5 col-xl-4 pt-100 pb-60 pb-lg-160 order-lg-3">
                <h2 class="mb-2 fw-bold display-5">teststetests</h2>
                <p class="mb-12">Themebau is designed to look great on desktop computers, tablets and mobile devices. Every element 100% responsive &amp; retina ready.</p>
              </div>
              <div class="col-lg-6 order-lg-1">
                <img class="w-100 mb-n60" src="../assets/bootstrap.svg" alt="">
              </div>
            </div>
          </div>
        </section> -->

        <section>
          <div class="container-lg py-6">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="mb-2 fw-bold display-5">함께 나누고 싶은 얘기가 있다면</h2>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=k.ddokn@gmail.com" class="display-1 mb-2 fw-semibold lh-1 contact_mail text-primary" target="_blank" >k.ddokn@gmail.com</a>
                <p class="fs-4 mb-0">메일을 보내주세요. 빠른 시일 내로 답장할게요</p>
              </div>
            </div>
          </div>
        </section>
      </main>
  </template>
  
  <script>

  export default {
    name: 'HomeView',
    data(){
        return {
          cardData:[
            {
              'image': require("../assets/main01.jpeg"),
              'title': 'Local Food',
              'sub': '먹은 곳',
            },
            {
              'image': require("../assets/main02.jpeg"),
              'title': 'Tourist Spot',
              'sub': '가본 곳',
            },
            {
              'image': require("../assets/main03.jpeg"),
              'title': 'Daily Record',
              'sub': '느낀 것',
            },
          ]
        }
    },
    mounted() {
      // this.test();
    },
    methods: {
        dday(){
            let now = new Date();
            let start = new Date('2021-09-30');
            let timeDiff = now.getTime() - start.getTime();
            let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);

            return day
        },
        // test(){
        //   console.log(this.link);
        // }
    },
    props: {
      link: Array
    }
  }
  </script>
  
  <style>
  
  </style>