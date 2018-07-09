<template>
	<ul class="list">
		<li class="item" v-for="item of letters" :key="item" 
			@touchstart.prevent="handleTouchStart" 
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleLetterClick" 
			:ref="item">
			{{item}}
		</li>
	</ul>
</template>
<script>
	export default{
		name:"CityAlphabet",
		props:{
			cities:Object
		},
		computed:{
			letters (){
				const letters = [] //这个数组中放的是['A','B','C',....]
				for(let i in this.cities){
					letters.push(i)
				}
				return letters
			}

		},
		data (){
			return{
				touchStatus:false,
				startY:0,
				timer:null
			}
		},
		updated (){
			this.startY = this.$refs['A'][0].offsetTop //获得A距离顶部的高度
		},
		methods:{
			handleLetterClick (e){
				this.$emit('change',e.target.innerText)
			},
			//滚动事件
			handleTouchStart (){
				this.touchStatus = true
			},
			handleTouchMove (e){
				if(this.touchStatus){
					if(this.timer){
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => { //延迟16ms之后执行
						const touchY = e.touches[0].clientY - 79 //求你当前手指所在位置，79是上面header的高度
						const index = Math.floor((touchY-this.startY)/20)//index是求对应字母下标，20是每个字母的高度
						if(index >= 0 && index < this.letters.length){
							this.$emit('change',this.letters[index])
						}
					},16)		
				}
			},
			handleTouchEnd (){
				this.touchStatus = false
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import "~styles/varibles.styl"
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position:absolute
		right:0
		top:1.58rem
		bottom:0
		width:.4rem
		.item
			text-align:center
			line-height:.4rem
			color:$bgColor
	
</style>