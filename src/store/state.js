let defaultCity = "武汉"
try{
	if(localStorage.city){ //使用localStorage最好使用try...catch
		defaultCity = localStorage.city
	}
}catch (e) {}

export default{
	city:defaultCity
}