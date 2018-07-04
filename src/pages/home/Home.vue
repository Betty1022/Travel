<template>
	<div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		
	</div>
</template>
<script>
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	export default{
		name:'Home',
		components:{
			HomeHeader:HomeHeader,
			HomeSwiper:HomeSwiper   //键值一样时，可以只写一个HomeSwiper
		}
	}
</script>
<style>
	
</style>