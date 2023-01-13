<template>
  <nav class="container size-md" aria-label="breadcrumb">
    <ol class="breadcrumb mb-0 pt-5">
      <li class="breadcrumb-item">
        <a class="text-muted" href="/">
          <i class="bx bx-home-alt fs-lg me-1"></i>Home
        </a>
      </li>
      <li class="breadcrumb-item active text-primary" aria-current="page">먹은 곳({{ data.length }})</li>
    </ol>
  </nav>
  <section class="container size-md mt-4 mb-lg-5 pt-lg-2 pb-5">
    <div class="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
        <div class="col-lg-5 col-md-4">
          <h1 class="mb-2 mb-md-0">Food's List</h1>
        </div>
        <div class="col-lg-7 col-md-8">
          <div class="row gy-2 right">
            <div class="col-lg-5">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center me-sm-4 me-3">
                  <a href="javascript:;" class="nav-link me-2 p-0 active" @click="type = 'list'">
                    <i class="bx bx-list-ul fs-5"></i>
                  </a>
                  <a href="javascript:;" class="nav-link p-0"  @click="type = 'grid'">
                    <i class="bx bx-grid-alt fs-5"></i>
                  </a>
                </div>
                <select class="form-select" @change="selectValue($event)">
                  <option>정렬</option>
                  <option value="point">개인 별점 순</option>
                  <option value="count">방문 횟수 순</option>
                  <option value="date">최근 방문 일자 순</option>
                </select>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div v-if="type == 'list'">
      <article
      v-for="(a, i) in data"
      :key="i"
      class="card border-0 shadow-sm overflow-hidden mb-4"
      >
        <div class="row g-0">
          <div class="col-sm-4 position-relative bg-position-center bg-repeat-0 bg-size-cover" 
          style="min-height: 15rem; background-size: cover; background-repeat: no-repeat; background-position: 50% 50%;"
          :style="`background-image: url(` + data[i].thumbnail[0] + `)`"
          >
            <a href="blog-single.html" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3 right">
                <span class="badge fs-sm text-nav bg-secondary text-decoration-none fw-normal">
                  {{ data[i].category }}
                </span>
                <span class="fs-sm text-muted border-start ps-3 ms-3">
                  <span class="hidden-xs">최근 방문일 : </span>{{ data[i].last_date }}
                </span>
              </div>
              <h3 class="h4">
                <a href="blog-single.html">
                  {{ data[i].restaurant }}
                </a>
              </h3>
              <div>
                <p class="mb-1">{{ data[i].summary }}</p>
                <p class="fs-sm text-muted">
                  <span ref="addressTxt">{{ data[i].address }}</span>
                  <a href="javascript:;" class="py-1 px-1" @click="txtCopy(i)">
                    <i class="bx bx-copy"></i>
                    <input type="hidden" :id="'testing-code'+[i]" :value="data[i].address">
                  </a>
                </p>
              </div>
              <hr class="my-4">
              <div class="d-flex align-items-center justify-content-between">
                <a href="#" class="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                  <div class="me-3 img-wrap rounded-circle">
                    <img 
                    :src="data[i].accompany[0].avatar"
                    alt="Avatar"
                    >
                  </div>
                  <div>
                    <span class="fs-sm text-muted" style="display: block; font-size: 12px !important; font-weight: 400; margin-bottom: -4px;">동행 &middot; 추천</span>
                    {{ data[i].accompany[0]?.name }}
                    <span v-if="data[i].accompany.length > 1"> 
                      외 {{ data[i].accompany.length - 1 }}명
                    </span>
                  </div>
                </a>
                <div class="d-flex align-items-center text-muted">
                  <div class="d-flex align-items-center me-3">
                    <i class="bx bx-run fs-lg me-1 fw-bold"></i>
                    <span class="fs-sm">
                      {{ data[i].count }}
                    </span>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <i class="bx bxs-star fs-lg me-1"></i>
                    <span class="fs-sm ">
                      {{ data[i].point }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <div v-if="type == 'grid'" class="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">
      <div 
      v-for="(b, i) in data"
      :key="i" 
      class="col pb-3"
      >
        <article class="card border-0 shadow-sm h-100">
          <div class="position-relative h-100">
              <a href="blog-single.html" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
            <img :src="data[i].thumbnail[0]" class="card-img-top h-100" alt="Image" style="    object-fit: cover;">
          </div>
          <div class="card-body pb-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <span class="badge fs-sm text-nav bg-secondary text-decoration-none fw-normal">
                  {{ data[i].category }}
                </span>
                <span class="fs-sm text-muted">
                  <span class="hidden-xs">최근 방문일 : </span>{{ data[i].last_date }}
                </span>
              </div>
              <h3 class="h5 mb-0">
                <a href="javascript:;">
                  {{ data[i].restaurant }}
                </a>
              </h3>
            </div>
            <div class="card-footer py-4">
              <a href="#" class="d-flex align-items-center fw-bold text-dark text-decoration-none">
                <div class="me-3 img-wrap rounded-circle">
                    <img 
                    :src="data[i].accompany[0].avatar"
                    alt="Avatar"
                    >
                </div>

                
                <div>
                    <span class="fs-sm text-muted" style="display: block; font-size: 12px !important; font-weight: 400; margin-bottom: -4px;">동행 &middot; 추천</span>
                    {{ data[i].accompany[0]?.name }}
                    <span v-if="data[i].accompany.length > 1"> 
                      외 {{ data[i].accompany.length - 1 }}명
                    </span>
                  </div>
              </a>
            </div>
        </article>
      </div>
    </div>
    <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center pt-lg-3 pt-1">
            <li class="page-item">
              <a 
              href="javascript:;" 
              class="page-link" 
              @click="prevPage"
              :class="pageNum == 0 ? 'disabled' : ''"
              >
                <i class="bx bx-chevron-left mx-n1"></i>
              </a>
            </li>
            <li class="page-item d-none d-sm-block" v-for="c in pageSize" :key="c">
              <a href="javascript:;" class="page-link">
                {{ c }}
              </a>
            </li>
            <li class="page-item">
              <a 
              href="javascript:;" 
              class="page-link" 
              @click="nextPage"
              :class="pageNum == pageSize ? 'disabled' : ''"
              >
                <i class="bx bx-chevron-right mx-n1"></i>
              </a>
            </li>
          </ul>
        </nav>
  </section>
  <!-- <button @click="getMore">더보기</button> -->
</template>

<script>
import foodData from '@/assets/data/foods/data'

export default {
    name: 'FoodList',
    data(){
      return {
        data: foodData,
        dataOriginal: [...foodData],
        type: 'list',
        item: [],
        pageNum: 0,
        pageSize: 6,
      }
    },
    mounted(){
      this.getData();
    },
    computed: {
    },
    methods: {
      getData(){
        this.data = foodData;
      },
      nextPage(){
        this.pageNum += 1;
        console.log(this.pageNum);
      },
      prevPage(){
        this.pageNum -= 1;
      },
      selectValue(e){
        if ( e.target.value == 'point' ) {
          this.pointSort();
        } else if ( e.target.value == 'count' ) {
          this.countSort();
        } else if ( e.target.value == 'date' ) {
          this.dateSort();
        }
      },
      pointSort(){
        this.data.sort(function(a,b){
         return b.point - a.point
        });
      },
      countSort(){
        this.data.sort(function(a,b){
         return b.count - a.count
        });
      },
      dateSort(){
        console.log(this.data);
        this.data.sort(function(a,b){
         return new Date(b.last_date).getTime() - new Date(a.last_date).getTime()
        });
      },
      txtCopy(i){
        let copyText = document.querySelector('#testing-code'+i);
        copyText.setAttribute('type', 'text')
        copyText.select();
        try {
            document.execCommand('copy');
            alert('주소가 복사되었습니다.');
          } catch (err) {
            alert('Oops, unable to copy');
          }
          /* unselect the range */
          copyText.setAttribute('type', 'hidden')
          window.getSelection().removeAllRanges();
      }
    },
}
</script>

<style lang="scss">
.img-wrap {
  width: 48px;
  height: 48px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>