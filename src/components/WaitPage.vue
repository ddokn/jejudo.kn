<template>
  <section class="d-flex align-items-center min-vh-100 py-5 bg-light" style="background: radial-gradient(144.3% 173.7% at 71.41% 94.26%, rgba(99, 102, 241, 0.1) 0%, rgba(218, 70, 239, 0.05) 32.49%, rgba(241, 244, 253, 0.07) 82.52%);">
        <div class="container my-5 text-md-start text-center">
            <div class="row align-items-center">

            <!-- Animation -->
            <div class="col-xl-6 col-md-7 order-md-2 ms-n5">
                <img src="../assets/wait.svg" style="width: 100%">
            </div>

            <!-- Text -->
            <div class="col-md-5 offset-xl-1 order-md-1">
                <h1 class="display-1 mb-sm-4 mt-n4 mt-sm-n5 fw-bold">Coming Soon</h1>
                <p class="mb-md-5 mb-4 mx-md-0 mx-auto pb-2 lead">언젠가.. 만들 예정</p>
                <router-link to="/" class="btn btn-lg btn-primary shadow-primary w-sm-auto w-100">
                    <i class="bx bx-home-alt me-2 ms-n1 lead"></i>
                    Go to homepage
                </router-link>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'WaitPage'
}
</script>

<style>

</style>