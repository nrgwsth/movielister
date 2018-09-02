class Loader{
	constructor(parent, store){
		this.parent = parent
		this.store = store
		this.setup()
		this.render()
	}

	setup(){
		this.parent.innerHTML = `
			<div class="loadericon">
				<div class="loader"></div>
			</div>
			<div class="loaderoverlay"></div>
		`
	}
	render(){
		const loading = this.store.loading
		if(loading){
			this.parent.classList.remove("hidden")
		} else{
			this.parent.classList.add("hidden")
		}
	}
}

export default Loader