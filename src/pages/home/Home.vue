<template>
	<div>
		<!--<home-header :city="city"></home-header>-->
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :list="iconList"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
</template>
<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomeWeekend from './components/Weekend'
	import axios from 'axios'
	import { mapState } from 'vuex'
	export default{
		name:'Home',
		components:{
			HomeHeader:HomeHeader,
			//HomeHeader: () => import('./components/Header'),
			HomeSwiper:HomeSwiper, //键值一样时，可以只写一个HomeSwiper
			HomeIcons:HomeIcons,
			HomeRecommend:HomeRecommend,
			HomeWeekend:HomeWeekend
		},
		data (){
			return{
				//city:'',
				lastCity:'',
				swiperList:[],
				iconList:[],
				recommendList:[],
				weekendList:[]

			}
		},
		computed:{
			...mapState(['city'])
		},
		methods:{
			getHomeInfo (){
				axios.get('/api/index.json?city=' + this.city)
				.then(this.getHomeInfoSucc)
			},
			getHomeInfoSucc (res){
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					//this.city = data.city
					this.swiperList = data.swiperList
					this.iconList = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}
				console.log(res)
			}
		},
		mounted (){
			this.lastCity = this.city
			this.getHomeInfo()
		},
		activated (){  //当城市改变时，重新来一次ajax请求
			if(this.lastCity !== this.city){
				this.lastCity = this.city
				this.getHomeInfo()
			}
		}

	}
</script>
<style>
</style>