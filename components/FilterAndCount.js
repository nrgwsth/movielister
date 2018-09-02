class FilterAndCount{
	constructor(movieList, store){
		this.movieList = movieList
		this.store = store
	}

	onSortUpClick(){
		if(this.store.sort !== "descending"){
			this.store.sort = "descending"
			this.sortup.classList.add("active")
			this.sortdown.classList.remove("active")
		}
	}

	onSortDownClick(){
		if(this.store.sort !== "ascending"){
			this.store.sort = "ascending"
			this.sortdown.classList.add("active")
			this.sortup.classList.remove("active")
		}
	}

	onKeyUp(type, e){
		if(e.keyCode === 13){
			if(type === "language"){
				this.store.languagefilter = this.languagefilter.value
			} else if(type==="country"){
				this.store.countryfilter = this.countryfilter.value
			}
		}
	}

	render(){
		const div = document.createElement("div")
		div.setAttribute("class", "level")
		div.innerHTML = `
			<div class="level-left">
				<div class="count"><span class="tag is-white">${this.movieList.length + " items"}</span></div>
			</div>
			<div class="level-right" style="flex-direction: column;">
				<div class="actions box">
					<div class="sortup">
						<i class="fas fa-sort-amount-up"></i>
					</div>
					<div class="sortdown">
						<i class="fas fa-sort-amount-down"></i>
					</div>
				</div>
				<div class="filters">
					<div class="language">
						<input type="text" placeholder="Language Filter" class="languageinput input is-small" />
					</div>
					<div class="country">
						<input type="text" placeholder="Country Filter" class="countryinput input is-small" />
					</div>
				</div>
			</div>
		`
		const sortup = this.sortup = div.querySelector(".sortup"),
			  sortdown = this.sortdown = div.querySelector(".sortdown"),
			  languagefilter = this.languagefilter = div.querySelector(".languageinput"),
			  countryfilter = this.countryfilter = div.querySelector(".countryinput")

		if(this.store.sort === "descending"){
			sortup.classList.add("active")
			sortdown.classList.remove("active")
		}

		if(this.store.sort === "ascending"){
			sortdown.classList.add("active")
			sortup.classList.remove("active")
		}

		sortup.addEventListener("click", this.onSortUpClick.bind(this))
		sortdown.addEventListener("click", this.onSortDownClick.bind(this))

		languagefilter.addEventListener("keyup", this.onKeyUp.bind(this, "language"))
		countryfilter.addEventListener("keyup", this.onKeyUp.bind(this, "country"))
		return div
	}
}


export default FilterAndCount