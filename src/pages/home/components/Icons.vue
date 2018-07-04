<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-image-content" :src="item.imgUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			<!--<swiper-slide>
				<div class="icon">
					<div class="icon-img">
						<img class="icon-image-content" src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png">
					</div>
					<p class="icon-desc">必游榜单</p>
				</div>
			</swiper-slide>
			<div class="icon">
				<div class="icon-img">
					<img class="icon-image-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png">
				</div>
				<p class="icon-desc">游乐场</p>
			</div>
			<div class="icon">
				<div class="icon-img">
					<img class="icon-image-content" src="http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png">
				</div>
				<p class="icon-desc">夏日玩水</p>
			</div>
			<div class="icon">
				<div class="icon-img">
					<img class="icon-image-content" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png">
				</div>
				<p class="icon-desc">动植物园</p>
			</div>
			<div class="icon">
				<div class="icon-img">
					<img class="icon-image-content" src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png">
				</div>
				<p class="icon-desc">一日游</p>
			</div>
			<div class="icon">
				<div class="icon-img">
					<img class="icon-image-content" src="http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png">
				</div>
				<p class="icon-desc">周边游</p>
			</div>
			<div class="icon">
				<div class="icon-img">
					<img class="icon-image-content" src="http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png">
				</div>
				<p class="icon-desc">自然风光</p>
			</div>-->
		</swiper>
	</div>
</template>
<script>
	export default{
		name:"HomeIcon",
		props:{
			list:Array
		},
		data (){
			return{
				swiperOption: {
						autoplay:false
					},
				/*iconList:[{
					id:"0001",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
					desc:"景点门票"
				},{
					id:"0002",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
					desc:"必游榜单"
				},{
					id:"0003",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
					desc:"游乐场"
				},{
					id:"0004",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
					desc:"夏日玩水"
				},{
					id:"0005",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
					desc:"动植物园"
				},{
					id:"0006",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
					desc:"一日游"
				},{
					id:"0007",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png",
					desc:"周边游"
				},{
					id:"0008",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png",
					desc:"自然风光"
				},{
					id:"0009",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
					desc:"演出"
				},{
					id:"0010",
					imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
					desc:"全部玩乐"
				}]*/
			}
		},
		computed:{
			pages (){
				const pages = []
				this.list.forEach((item,index) => {
					const page = Math.floor(index/8)
					if(!pages[page]){
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages;
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	@import '~styles/mixins.styl'
	.icons >>> .swiper-container
		height:0
		padding-bottom:50%
	.icons
		margin-top:.1rem
	.icon
		position:relative
		overflow:hidden
		width:25%
		height:0
		float:left
		padding-bottom:25%
		.icon-img
			position:absolute
			top:0
			left:0
			right:0
			bottom:.44rem
			box-sizing:border-box
			padding:.1rem
			.icon-image-content
				display:block
				margin:0 auto
				height:100%
		.icon-desc
			position:absolute
			left:0
			right:0
			bottom:0
			line-height:.44rem
			height:.44rem
			text-align:center
			color:$darkTextColor
			ellipsis()
</style>