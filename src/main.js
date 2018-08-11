const containerName = document.getElementById("container-name")
const ListRestaurants = (value) => {
	xhrData(urlRestaurantes, () => {
		const dataRest = getData()
		for (element in dataRest) {
			if (element === value) {
				const objectRest = dataRest[element]
				objectRest.forEach(element => {
					containerName.innerHTML += `
    <div class="col l3 s12 m6 info-rest" class= "rest"  onclick="showModal('${element.name}')">
      <div class="card yellow lighten-3">
				<div class="card-content white-text">
				<a class="modal-trigger indigo-text text" href="#modalInfo">
        ${element.name}</a>
        </div>
      </div>
    </div>
					`
				});
			}
		}
	});
}
const containerInfo= document.getElementsByClassName("info-rest");
const selectRest = document.getElementById("select-type")
selectRest.addEventListener('change', e => {
	containerName.innerHTML = ''
	ListRestaurants(e.target.value)
})
const showModal = (name) => {
	xhrData(urlRestaurantes, () => {
		const dataRest = getData()
		for (element1 in dataRest) {
			const objectRest = dataRest[element1]
			objectRest.forEach(element => {
				if (element.name===name){
					ShowInfo(element.name,element.direccion,element.horario)
				}

			});
		}
	});
}
const ShowInfo =(name,direction,horario)=>{
const nameRest = document.getElementById("name-rest")
const infoRest = document.getElementById("info-rest")
nameRest.innerHTML = `<h3>${name}</h3>`
infoRest.innerHTML= `
<h5>Dirección: ${direction}</h5>
<h5>Horario de atención: ${horario}</h5>
`
}
document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.modal');
	var instances = M.Modal.init(elems, 'opacity');
});