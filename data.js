const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//mi riferisco al container
const container = document.getElementById("container");

//visualizzare in container tutti i box(icona e nome icona)

showCards(icons);

//quindi creo una funzione che prenda array come argomento e faccia comparire tutte le cards
function showCards(array) {
	let content ="";
	array.forEach(element => {
		content += `
        <div class="card">
        <i style="color:${element.color}" class="${element.family} ${element.prefix}${element.name}"></i>
        <div class="icon-text">${element.name}</div>
        </div>
        `;
	});

	container.innerHTML = content;
	return true;
}

//adesso creo un riferimento al select
const select = document.getElementById("filter-type");



//evento di click su select
select.addEventListener("change", function() {

	//se valore è diverso da "all" allora esegue il filtraggio
	if (this.value !== "all") {
		showCards(icons);

			const filtered = icons.filter((element) => {
				if (element.type == this.value) {
					return true;
				}
			});
		showCards(filtered);
		//pezzo di codice che viene eseguito nel caso il valore sia "all"
	} else {
		showCards(icons)
	}

});