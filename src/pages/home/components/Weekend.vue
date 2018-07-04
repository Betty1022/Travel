<template>
	<div>
		<div class="title">
			周末去哪儿
		</div>
		<ul>
			<li class="item border-bottom" v-for="item of list" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		name:"HomeWeekend",
		props:{
			list:Array
		},
		/*data (){
				return{
					recommendList:[{
						id:"0001",
						imgUrl:"http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg",
						title:"武汉必游",
						desc:"到武汉感受神奇的热干面之都"
					},{
						id:"0002",
						imgUrl:"http://img1.qunarzz.com/sight/source/1505/4f/95a94c90ef3521.jpg_r_640x214_345412f9.jpg",
						title:"开启亲子时光",
						desc:"这些都是宝贝们的最爱"
					},{
						id:"0003",
						imgUrl:"http://img1.qunarzz.com/sight/source/1505/ce/0dd5b8b5f5fd2a.jpg_r_640x214_929b1bec.jpg",
						title:"玩遍楚河街",
						desc:"现代版的“清明上河图"
					},{
						id:"0004",
						imgUrl:"http://img1.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg",
						title:"周末出游乐翻天",
						desc:"这是当地人最爱的休闲时光"
					}]
				}
			}*/
	}
</script>
<style lang="stylus" scoped>
	@import '~styles/mixins.styl'
	.title
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item-img-wrapper
		height:0
		ovreflow:hidden
		padding-bottom:37.09%
	.item-img
		width:100%
	.item-info
		padding:.1rem
		.item-title
			line-height:.54rem
			font-size:.28rem
			ellipsis()
		.item-desc
			line-height:.4rem
			color:#ccc
			ellipsis()
</style>