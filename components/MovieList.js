import MovieBox from "./MovieBox"
import FilterAndCount from "./FilterAndCount"

class MovieList {
	constructor(parent, store){
		this.parent = parent
		this.store = store
		this.render()
	}

	render(){
		const searchval = this.store.searchval.toLowerCase()
		const checkedFields = this.store.checkedFields
		let movieList = this.store.movieList.filter(item=>{
			if(checkedFields[0] || checkedFields[3]){
				if(item.movie_title.toLowerCase().indexOf(searchval)!==-1){
					return true
				}
			}
			if(checkedFields[1] || checkedFields[3]){
				if((item.actor_1_name.toLowerCase().indexOf(searchval)!==-1) || (item.actor_2_name.toLowerCase().indexOf(searchval)!==-1)){
					return true
				}
			}
			if(checkedFields[2] || checkedFields[3]){
				if(item.director_name.toLowerCase().indexOf(searchval)!==-1){
					return true
				}
			}
			return false
		})

		if(this.store.sort === "ascending"){
			movieList = movieList.sort((a, b)=>{
				if(isNaN(a.title_year)){
					a.title_year = 0
				}
				if(isNaN(b.title_year)){
					b.title_year = 0
				}
				return Number(a.title_year) - Number(b.title_year)
			})
		}
		if(this.store.sort === "descending"){
			movieList = movieList.sort((a, b)=>{
				return Number(b.title_year) - Number(a.title_year)
			})
		}

		if(this.store.languagefilter !== ""){
			movieList = movieList.filter(item=>((item.language || "").toLowerCase().indexOf(this.store.languagefilter.toLowerCase()) !== -1))
		}

		if(this.store.countryfilter !== ""){
			movieList = movieList.filter(item=>((item.country || "").toLowerCase().indexOf(this.store.countryfilter.toLowerCase()) !== -1))
		}

		this.parent.innerHTML = ""

		this.parent.appendChild((new FilterAndCount(movieList, this.store)).render())
		if(movieList.length > 0){
			movieList.forEach(item=>{
				this.parent.appendChild((new MovieBox(item).render()))
			})
		} else{
			const div = document.createElement("div")
			div.setAttribute("class", "noResultsMsg")
			div.textContent = "No results found."
			this.parent.appendChild(div)
		}
	}
}

export default MovieList