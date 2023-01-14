<template>
  <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ this.data[arrayCount].restaurant }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <Carousel :data="this.data" :arrayCount="this.arrayCount"/>
          {{ this.data[arrayCount] }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
export default {
    name: 'DetailModal',
    props: {
      data: Array,
      arrayCount: Number
    },
    components: {
      Carousel,
    }
}
</script>

<style>

</style>