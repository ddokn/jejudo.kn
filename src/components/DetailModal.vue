<template>
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ data[arrayCount].restaurant }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <Carousel :data="data" :arrayCount="arrayCount" :select="select"/>
        </div>
        <div class="modal-footer">
          <div class="d-flex align-items-center text-muted w-100" style="justify-content: space-between;">
            <div class="d-flex align-items-center">
              <i class="bx bxs-map fs-lg me-1"></i>
              <a :href="'https://map.kakao.com/link/map/'+data[arrayCount].id" target="_blank">지도로 보기</a>
            </div>
            <div class="d-flex align-items-center">
              <div class="d-flex align-items-center me-3">
                <i class="bx bx-run fs-lg me-1 fw-bold"></i>
                <span class="fs-sm">
                  {{ data[arrayCount].count }}
                </span>
              </div>
              <div class="d-flex align-items-center me-3">
                <i class="bx bxs-star fs-lg me-1"></i>
                <span class="fs-sm ">
                  {{ data[arrayCount].point }}
                </span>
              </div>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
    name: 'DetailModal',
    data(){
      return {
        sortValue: '',
      }
    },
    props: {
      data: Array,
      arrayCount: Number,
      select: String,
    },
    components: {
      Carousel,
    }
}
</script>

<style>

</style>