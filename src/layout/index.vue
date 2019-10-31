<template>
	<el-container class="app-wrapper">
		<el-header class='header' style='height: 40px;'>
			
		</el-header>
		<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" >
			<el-submenu index="1">
				<template slot="title">工作管理</template>
				<el-menu-item index="1-1">读取项目</el-menu-item>
				<el-menu-item index="1-2">提交项目</el-menu-item>
			</el-submenu>
			<el-menu-item index="2">项目管理</el-menu-item>
			<el-submenu index="3">
				<template slot="title">权限设置</template>
				<el-menu-item index="3-1">用户管理</el-menu-item>
				<el-menu-item index="3-2">角色管理</el-menu-item>
			</el-submenu>
			<el-menu-item index="4">系统设置</el-menu-item>
		</el-menu>
		<el-container>
			<el-aside class='siderbar'>
				<el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
				 active-text-color="#ffd04b">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span>项目列表</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">项目1</el-menu-item>
							<el-menu-item index="1-2">项目2</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">项目列表二</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-main>
			
			</el-main>
		</el-container>
		<!-- <el-footer class='footer'></el-footer> -->
	</el-container>
</template>

<script>
</script>

<style lang="scss" scoped="scoped">
	@import "~@/styles/mixin.scss";
	@import "~@/styles/variables.scss";

	.app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;

		.siderbar {
			padding: 0px;
			margin: 0px;
			background: #545c64;
			border-radius: 0px;
		}

		.header {
			background: rgb(213,215,234);
			padding: 0px;
			
		}

		.header-logo {
			padding: 0px;
			margin: 0px;
			background: #000;
			border-radius: 0px;
			text-align: center;
			line-height: 60px;
			font-size: 20px;
			font-family:"PingFang SC";
			font-weight: bold;
			color: #fff;
		}

		.header-navbar {
			padding: 0px;
			box-shadow: 1px 0px 1px #304156;
		}

		.footer {
			background: #409EFF;
		}
	}
</style>
