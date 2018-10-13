import Header from "./Header.js"
import MovieList from "./MovieList.js"
import Loader from "./Loader.js"

import data from "./data.json"

class App{
	constructor(){
		this.store = {}
		let movieList = []
		const _this = this
		Object.defineProperty(this.store, "movieList", {
			get(){
				return movieList
			}, 
			set(data){
				movieList = data
				_this.movieList.render()
			}
		})

		let loading = false
		Object.defineProperty(this.store, "loading", {
			get(){
				return loading
			}, 
			set(data){
				loading = data
				_this.loader.render()
			}
		})

		let searchval = ""
		Object.defineProperty(this.store, "searchval", {
			get(){
				return searchval
			}, 
			set(data){
				searchval = data
				_this.movieList.render()
			}
		})

		let sort = "descending"
		Object.defineProperty(this.store, "sort", {
			get(){
				return sort
			}, 
			set(data){
				sort = data
				_this.movieList.render()
			}
		})

		let countryfilter = ""
		Object.defineProperty(this.store, "countryfilter", {
			get(){
				return countryfilter
			}, 
			set(data){
				countryfilter = data
				_this.movieList.render()
			}
		})

		let languagefilter = ""
		Object.defineProperty(this.store, "languagefilter", {
			get(){
				return languagefilter
			}, 
			set(data){
				languagefilter = data
				_this.movieList.render()
			}
		})

		this.store.checkedFields = [true, false, false, false]
		window.store = this.store
	}

	fetchData(){
		debugger
		this.store.loading = true
		//mock api call
		setTimeout(()=>{
			this.store.movieList = data
			this.store.loading = false
		}, 1000)

		// fetch("http://starlord.hackerearth.com/movieslisting").then(d=>d.json()).then(d=>{
		// 	this.store.movieList = d
		// 	this.store.loading = false
		// })
	}

	forceUpdate(){
		this.movieList.render()
	}

	render(){
		const app = document.createElement("section")
		app.setAttribute("class", "section app")
		app.innerHTML = `
			<div class="container">
			  <div class="tile is-ancestor is-vertical header">
			  </div>
			  <div class="tile is-ancestor is-vertical body">
			  	<div class="tile movieList is-vertical"></div>
			  	<div class="tile loaderWrapper"></div>
			  </div>
			</div>
		`
		const header = this.header = new Header(app.querySelector(".header"), this.store, this.forceUpdate.bind(this))
		const movieList = this.movieList = new MovieList(app.querySelector(".movieList"), this.store)
		const loader = this.loader = new Loader(app.querySelector(".loaderWrapper"), this.store)
		this.fetchData()
		return app
	}
}


export default App