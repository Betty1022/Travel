<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
		    <!-- slides -->
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<img class="swiper-img" :src="item.imgUrl" />
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	    </swiper>
	</div>
</template>
<script>
	export default{
		name:'HomeSwiper',
		props: {
			list:Array
		},
		data (){
			return{
				swiperOption: {
					pagination:'.swiper-pagination',
					loop:true
				},

				/*swiperList:[{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
				},{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
				},{
					id:'0003',
					imgUrl:'http://img1.qunarzz.com/piao/fusion/1806/de/df09fa61aed2d502.jpg_750x200_67472739.jpg'
				}]*/
			}

		},
		computed:{
			showSwiper (){
				return this.list.length
			}
		}
	}


</script>
<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
			background:#fff !important	
	.wrapper
		overflow:hidden
		width:100%
		height:0
		padding-bottom:26.7%
		background:#ccc
	
		.swiper-img
			width:100%
</style>