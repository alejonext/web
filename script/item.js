export const name = 'item';
export default class app {
	links = [];

	constructor() {
	}

	css(image){
		var css = {}
		if(image){
			css.backgroundImage = `url(${image})`;
		}

		return css;
	}

	connect(data){
		if(data){
			console.log(data);
		}
		this.links = [];
		for (let i in data) {
			this.links.push({ name : i, url : data[i] });
		}

		return this.links;
	}

}