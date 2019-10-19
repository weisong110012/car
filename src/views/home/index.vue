<template>
	<div>
		<el-button type="danger" @click.native='logout'>
			登出
		</el-button>
	</div>
</template>

<script>
	export default {
		methods: {
		  async logout() {
		    await this.$store.dispatch('user/logout')
		    this.$router.push(`/login?redirect=${this.$route.fullPath}`)
		  }
		}
	}
</script>

<style>
</style>
