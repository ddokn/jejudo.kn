<template>
  <nav class="container size-md" aria-label="breadcrumb">
    <ol class="breadcrumb mb-0 pt-5">
      <li class="breadcrumb-item">
        <a class="text-muted" href="/">
          <i class="bx bx-home-alt fs-lg me-1"></i>Home
        </a>
      </li>
      <li class="breadcrumb-item active text-primary" aria-current="page">먹은 곳</li>
    </ol>
  </nav>
  <section class="container size-md mt-4 mb-lg-5 pt-lg-2 pb-5">
    <div class="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
        <div class="col-lg-5 col-md-4">
          <h1 class="mb-2 mb-md-0">Blog List</h1>
        </div>
        <div class="col-lg-7 col-md-8">
          <div class="row gy-2">
            <div class="col">
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center me-sm-4 me-3">
                  <a href="blog-list-no-sidebar.html" class="nav-link me-2 p-0 active">
                    <i class="bx bx-list-ul fs-5"></i>
                  </a>
                  <a href="blog-grid-no-sidebar.html" class="nav-link p-0">
                    <i class="bx bx-grid-alt fs-5"></i>
                  </a>
                </div>
                <select class="form-select">
                  <option>All categories</option>
                  <option value="processes-and-tools">Processes &amp; Tools</option>
                  <option value="startups">Startups</option>
                  <option value="digital">Digital</option>
                  <option value="strategy">Strategy</option>
                  <option value="business">Business</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <article
      v-for="(a, i) in data"
      :key="i"
      class="card border-0 shadow-sm overflow-hidden mb-4"
      >
        <div class="row g-0">
          <div class="col-sm-4 position-relative bg-position-center bg-repeat-0 bg-size-cover" 
          style="min-height: 15rem;"
          :style="`background-image: url(` + data[i].thumbnail + `)`"
          >
            <a href="blog-single.html" class="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></a>
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <a href="#" class="badge fs-sm text-nav bg-secondary text-decoration-none">
                  {{ data[i].category }}
                </a>
                <span class="fs-sm text-muted border-start ps-3 ms-3">
                  최근 방문일 : {{ data[i].last_date }}
                </span>
              </div>
              <h3 class="h4">
                <a href="blog-single.html">
                  {{ data[i].restaurant }}
                </a>
              </h3>
              <p>
                {{ data[i].summary }}              
              </p>
              <hr class="my-4">
              <div class="d-flex align-items-center justify-content-between">
                <a href="#" class="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                  <img src="assets/img/avatar/01.jpg" class="rounded-circle me-3" width="48" alt="Avatar">
                  Jerome Bell
                </a>
                <div class="d-flex align-items-center text-muted">
                  <div class="d-flex align-items-center me-3">
                    <i class="bx bx-run fs-lg me-1"></i>
                    <span class="fs-sm">
                      {{ data[i].count }}
                    </span>
                  </div>
                  <div class="d-flex align-items-center me-3">
                    <i class="bx bx-star fs-lg me-1"></i>
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
  </section>
</template>

<script>
import foodData from '@/assets/data/foods/food'

export default {
    name: 'FoodList',
    data(){
      return {
        data: [],
      }
    },
    mounted(){
      this.getData();
    },
    methods: {
      getData(){
        this.data = foodData;
        // console.log(require(foodData[0].thumbnail));
      }
    },
}
</script>

<style>

</style>