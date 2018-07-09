<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">
							{{this.currentCity}}
						</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hotCities" 
					:key="item.id" @click="handleCityClick(item.name)">
						<div class="button">
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
			<div class="area"  v-for="(item,key) of cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div 
						class="item border-bottom"
						 v-for="innerItem of item" 
						:key="innerItem.id" 
						 @click="handleCityClick(innerItem.name)" 
						>
						{{innerItem.name}}
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import Bscroll from 'better-scroll'
	import { mapState, mapMutations } from 'vuex'
	export default{
		name:"CityList",
		computed: {
			...mapState({
				currentCity:'city'
			})
		},
		props:{ //接收父组件传来的数据
			hotCities:Array,
			cities:Object,
			letter:String
		},
		methods:{
			handleCityClick (city){
				//this.$store.dispatch('changeCity',city) //组件通过dispatch调用action,异步
				//this.$store.commit('changeCity',city) //组件通过commit调用mutations，同步
				this.changeCity(city)
				this.$router.push('/') //城市改变后，跳转到首页
			},
			...mapMutations(['changeCity'])
		},
		mounted (){
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		watch:{
			letter() {
				if(this.letter){
					const element = this.$refs[this.letter][0] //获取到字母所在区域的第一项
					this.scroll.scrollToElement(element)//better-scroll方法，滚动到指定区域
				}
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~styles/varibles.styl"
	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
	.list
		position:absolute
		overflow:hidden
		top:1.58rem
		left:0
		right:0
		bottom:0
		.title
			line-height:.54rem
			background:#eee
			padding-left:.2rem
			color:#666
			font-size:.26rem
		.button-list
			overflow:hidden
			padding:.1rem .6rem .1rem .1rem
			.button-wrapper
				width:33.33%
				float:left
				.button
					text-align:center
					padding:.1rem 0
					border-radius:.06rem
					margin:.1rem
					border:.01rem solid #ccc
		.item-list
			.item
				line-height:.76rem
				color:#666
				padding-left:.2rem
			
	
</style>