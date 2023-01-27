<template>
	<a href="javascript:;" role="button" @click="kakaoLogin">
		<img src="@/assets/kakao_login_medium_wide.png" alt="카카오 로그인 버튼">
	</a>
</template>

<script>
export default {
	name: 'KakaoLogin',
	data(){
		return {
			isLogin: false
		}
	},
	mounted(){
	},
	methods: {
		kakaoLogin() {
			if (window.Kakao.Auth.getAccessToken()) { // 토큰 할당하기
        window.Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
            console.log(response)
          },
          fail: function (error) {
            console.log('error', error)
          },
        })
        window.Kakao.Auth.setAccessToken(undefined)
      }

			window.Kakao.Auth.login({
				success: function () {
					window.Kakao.API.request({
						url: '/v2/user/me',
						success: async function (response) {
							console.log(response);
							window.Kakao.Auth.authorize({
								redirectUri: 'http://localhost:8080',
							});
						},
						fail: function (error) {
							console.log(error)
						},
					})
				},
				fail: function (error) {
					console.log(error)
				},
			})
		}
	}
}
</script>

<style>

</style>