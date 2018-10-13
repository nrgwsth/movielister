class Header {
	constructor(parent, store, forceUpdate){
		this.parent = parent
		this.store = store
		this.forceUpdate = forceUpdate
		this.render()
	}

	onKeyUp(e){
		if(e.keyCode === 13){
			this.store.searchval = this.input.value
		}
	}

	onChecked(i, e){
		this.store.checkedFields[i] = e.target.checked
		this.forceUpdate()
	}

	render(){
		this.parent.innerHTML = `
			<div class="tile">
				<div class="logoContainer">
					<div class="logoIcon has-text-white is-capitalized">
						<i class="fas fa-film"></i>
					</div>
					<div class="headingText is-vertical has-text-white">
							<div class="title is-5 has-text-white">Movie Lister</div>
							<div class="subtitle is-6 has-text-white">Let's make world a better place</div>
						</div>
					</div>
				</div>

				<div class="searchWrapper">
					<div class="field searchInput">
					  <div class="control">
					    <input class="input" type="text" placeholder="Press enter to search...">
					  </div>
					</div>
					<div class="searchoptions">
						Search in : 
						<label class="checkbox">
						  <input type="checkbox">
						  	Movie title
						</label>
						<label class="checkbox">
						  <input type="checkbox">
						  	Movie Actors
						</label>
						<label class="checkbox">
						  <input type="checkbox">
						  	Director
						</label>
						<label class="checkbox">
						  <input type="checkbox">
						  	All
						</label>
					</div>
				</div>
			</div>
		`

		const input = this.input = this.parent.querySelector("input")
		input.addEventListener("keyup", this.onKeyUp.bind(this))

		const checkboxes = this.parent.querySelectorAll("input[type='checkbox']")
		for(let i =0;i<this.store.checkedFields.length;i++){
			checkboxes[i].checked = this.store.checkedFields[i]
		}

		checkboxes.forEach((checkbox, i)=>{
			checkbox.addEventListener("change", this.onChecked.bind(this, i))
		})
	}
}

export default Header