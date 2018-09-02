class MovieBox {
	constructor(item){
		this.item = item
	}

	iconClick(){
		console.log("clicked", this.item)
		window.open(this.item.movie_imdb_link, "_blank")
	}

	render(){
		const item = this.item
		const box = document.createElement("div")
		box.setAttribute("class", "tile box moviebox")
		box.innerHTML = `
			<div class="tile is-vertical box moviebox">
				<div class="subtitle is-4">
					${item.movie_title}
					<div class="imdb"><i class="fab fa-imdb icon"></i></div>
					${item.genres.split("|").map(genre=>(`<span class="tag is-light smallerTags">${genre}</span>`)).join("")}
				</div>
				<div>
					<small>${((item.title_year == 0 || item.title_year == "") ? "NA" : item.title_year) + ", " + (item.language == "" ? "NA" : item.language) + ", " + (item.content_rating == "" ? "NA" : item.content_rating)}</small>
				</div>
				<div class="level movieboxlevel">
					<div class="level-left">
						<small>Actor : </small><small>${item.actor_1_name + ", " + item.actor_2_name}</small>
					</div>
					<div class="level-right">
						<small>Director : </small><small>${item.director_name}</small>
					</div>
				</div>
				<div class="level">
					<div class="level-left">
						<small>Actor : </small><small>${item.actor_1_name + ", " + item.actor_2_name}</small>
					</div>
					<div class="level-right">
						<small>Director : </small><small>${item.director_name}</small>
					</div>
				</div>
			</div>
		`
		const icon = box.querySelector(".imdb")
		icon.addEventListener("click", this.iconClick.bind(this))
		return box
	}
}

export default MovieBox