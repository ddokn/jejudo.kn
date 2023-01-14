<template>
    <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div 
            class="carousel-item"
            v-for="thumbnail in data[arrayCount].thumbnail"
            :key="thumbnail"
            data-bs-interval="10000000"
            >
                <img :src="thumbnail" class="d-block w-100" alt="">
            </div>
        </div>
        <button @click="getPrev" class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button @click="getNext" class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        <div class="image-count">
            <span class="text-white fs-sm">
            {{ this.count }} / {{ data[arrayCount].thumbnail.length }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CareselItem',
    data(){
        return {
            count: 1,
        }
    },
    props: {
      data: Array,
      arrayCount: Number,
      select: String,
    },
    mounted(){
        this.findFirst();
    },
    watch: {
        arrayCount(){
            this.findFirst();
            this.count = 1
        },
        select(){
            this.findFirst();
        }
    },
    methods: {
        findFirst(){
            setTimeout(function(){
                let firstChild = document.querySelector('.carousel-inner').firstElementChild;
                firstChild.classList.add('active');
            }, 100)
        },
        getPrev(){
            this.count = this.count-1
            if ( 0 >= this.count ) {
                this.count = this.data[this.arrayCount].thumbnail.length
            }
        },
        getNext(){
            this.count = this.count+1
            if ( this.data[this.arrayCount].thumbnail.length < this.count ) {
                this.count = 1
            }
        }
    }
}
</script>

<style lang="scss">
.carousel-item {
    min-height: 600px;
    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        object-fit: cover;
    }
}
.carousel-control,
.carousel-control {
    &-next,
    &-prev {
        width: 6% !important;
        &:hover,
        &:focus {
            opacity: 1;
        }
    }
}
@media (max-width: 991px) {
    .carousel-item {
        min-height: 400px;
    }
}
</style>