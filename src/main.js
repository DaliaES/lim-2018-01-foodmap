const containerName = document.getElementById("container-name")
const ListRestaurants = (value) => {
	xhrData(urlRestaurantes, () => {
		const dataRest = getData()
		for (element in dataRest) {
			if (element === value) {
				const objectRest = dataRest[element]
				objectRest.forEach(element => {
					const cardRest = `
    <div class="col l3 s12 m6" data-value = "" class= "rest">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <h2 class="center name">${element.name}</h2>
        </div>
      </div>
    </div>
					`
					containerName.innerHTML = cardRest + containerName.innerHTML
				});
			}
		}
	});
}
const selectRest = document.getElementById("select-type")
selectRest.addEventListener('change', e => {
	containerName.innerHTML = ''
	ListRestaurants(e.target.value)
})
const showModal = () => {
	xhrData(urlRestaurantes, () => {
		const dataRest = getData()
		for (element in dataRest) {
			const objectRest = dataRest[element]
			objectRest.forEach(element => {
				console.log(element.name)
			});
		}
	});
	console.log('hola')
}