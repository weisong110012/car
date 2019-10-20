<template>
	<el-container class="app-wrapper">
		<el-header class='header'>
			<el-container>
				<el-aside class='header-logo'>
					汽车项目
				</el-aside>
				<el-main class='header-navbar'>
					<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" 
					 >
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
				</el-main>
			</el-container>
		</el-header>
		<el-container>
			<el-aside class='siderbar'>
				<el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
				 active-text-color="#ffd04b">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>导航一</span>
						</template>
						<el-menu-item-group>
							<template slot="title">分组一</template>
							<el-menu-item index="1-1">选项1</el-menu-item>
							<el-menu-item index="1-2">选项2</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="分组2">
							<el-menu-item index="1-3">选项3</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
						<el-submenu index="1-5">
							<template slot="title">
								<i class="el-icon-location"></i>
								<span>导航一</span>
							</template>
							<el-menu-item-group>
								<template slot="title">分组一</template>
								<el-menu-item index="1-5-1">选项1</el-menu-item>
								<el-menu-item index="1-5-2">选项2</el-menu-item>
							</el-menu-item-group>
							<el-menu-item-group title="分组2">
								<el-menu-item index="1-5-3">选项3</el-menu-item>
							</el-menu-item-group>
							<el-submenu index="1-5-4">
								<template slot="title">选项4</template>
								<el-menu-item index="1-5-4-1">选项1</el-menu-item>
							</el-submenu>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3" disabled>
						<i class="el-icon-document"></i>
						<span slot="title">导航三</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">导航四</span>
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
			background: #fff;
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
