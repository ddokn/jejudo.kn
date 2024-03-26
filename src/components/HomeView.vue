<template>
    <main class="pt-0 pb-0">
        <section class="bd-masthead">
          <div class="container-xl d-flex flex-column">
            <div class="col-md-8 m-auto text-center h-100">
              <div class="bg-visual d-block mx-auto mb-3"></div>
              <h1 class="mb-1 fw-semibold lh-1">JejuDo.kn</h1>
              <p class="mb-4 fs-6">
                <a class="text-primary fw-bold" rel="noopener" data-bs-toggle="tooltip" data-bs-placement="bottom" title="입도한지">
                  D + {{ dday() }}
                </a>
              </p>
              <p class="lead mb-4 text-secondary">
                육지 토박이가 제주 섬 놈이 되어가는 과정을 담은 곳<br/>
                또는 이것저것 가져다 써보는 연습장
              </p>
            </div>
          </div>
        </section>
  
        <section class="py-lg-20">
          <div class="container-lg size-md">
              <div class="row g-6">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-12" v-for="(a, i) in link" :key="i">
                      <div class="card rounded-3 mb-14">
                          <div class="px-lg-8 px-4 ">
                            <router-link :to="link[i]">
                              <img :src=" cardData[i].image " alt="" class="mt-n8 img-fluid w-100 img-hover rounded-3">
                            </router-link>
                          </div>
                          <div class="card-body px-4 py-4 p-md-8">
                            <div class="pb-3 mb-0">
                                <h2 class="mb-1 fw-bold display-5">
                                  <router-link class="text-inherit" :to="link[i]">
                                    {{ cardData[i].title }}
                                  </router-link>
                                </h2>
                                <p class="fs-4 mb-0 text-sm">{{ cardData[i].sub }}</p>
                            </div>
                            <div class="d-grid">
                              <router-link class="btn btn-outline-white" :to="link[i]">
                                더보기 <i class="bi bi-arrow-right"></i>
                              </router-link>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        <section class="bg-light" style="padding-bottom: 134px">
          <div class="container-lg px-4 pt-5 pb-5 size-md">
            <div class="row text-center">
              <div class="col-12">
                <h2 class="mt-2 mb-2 fw-bold display-5">이 사이트는요</h2>
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
  
       <section class="position-relative">
        <div class="half-section-block container-lg size-md position-absolute top-50 start-0 end-0" style="margin-top: -134px;">
            <div class="shape-parent">
              <div class="py-60 px-30 position-relative rounded-4 overflow-hidden z-index-1">
                <div class="background">
                    <div class="background-image jarallax" data-jarallax="" data-speed="0.8" style="z-index: 0;">
                      <div class="jarallax-container">
                        <img class="jarallax-img" src="../assets/main_section_bg.jpeg" alt="">
                    </div>
                  </div>
                  <div class="background-color" style="background-color: #481FA0; opacity: .9;"></div>
                </div>
                <div class="row">
                  <div class="col-lg-8 offset-lg-2 text-center">
                    <h2 class="mb-2 text-white display-5" >저는 말이죠</h2>
                    <p class="px-lg-70 text-white fs-4" style="--bs-text-opacity: .8;">생산성을 높이는 도구에 대한 관심이 많고,<br class="hidden-lg"/>익히는 속도가 빠른 편입니다.<br/>때때로 꿈에서 문제를 해결하곤 합니다.</p>
                    <div class="animated mt-4">
                        <!-- Button-->
                      <a class="btn btn-md btn-primary rounded-5 py-2 px-5" href="https://ddokn.notion.site/b3d969a158434098b2a6d1d5a17b21d1" target="_blank">이력서(링크)</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </section>

        <section style="padding-top: 134px;">
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
              'image': require("../assets/main01.webp"),
              'title': 'Local Food',
              'sub': '먹은 곳',
            },
            {
              'image': require("../assets/main02.webp"),
              'title': 'Tourist Spot',
              'sub': '가본 곳',
            },
            {
              'image': require("../assets/main03.webp"),
              'title': 'Daily Record',
              'sub': 'Coming Soon',
            },
          ]
        }
    },
    mounted() {
    },
    methods: {
        dday(){
            let now = new Date();
            let start = new Date('2021-09-30');
            let timeDiff = now.getTime() - start.getTime();
            let day = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
            return day
        },
    },
    props: {
      link: Array
    }
  }
  </script>
  
  <style>
  
  </style>