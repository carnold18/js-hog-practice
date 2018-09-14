console.log('ello')
const hogURL = 'http://localhost:3000/hogs'

const parsedJSON = response => response.json()
const hogList = document.getElementById('hog-list')
const hogForm = document.getElementById('hog-form')
const hogSubmit = document.getElementById('hog-submit')
var nameInput = document.getElementById('name-input')
var specialtyInput = document.getElementById('specialty-input')
var greasedInput = document.getElementById('greased-input')
var weightInput = document.getElementById('weight-input')
var awardInput = document.getElementById('award-input')
var editHog = document.getElementById('edit-greased')

// before attaching things to the container, be sure to delete the container.

hogSubmit.addEventListener('click', createNewHog)
hogList.addEventListener('click', editGreasedHog)

function getHogs() {
hogList.innerHTML = ""
 fetch(hogURL)
  	.then(parsedJSON)
  	.then(putHogsOnPage)	
}

function putHogsOnPage(hogs) {
	hogs.map(function(hog) {
		let checked = hog.greased == true ? 'checked' : ''
		hogList.innerHTML += `
			<div>
			<h3>${hog.name}</h3>
			<p>Specialty: ${hog.specialty}</p>
			<p>Award: ${hog.award}</p>
			<p>Weight: ${hog.weight}</p>
			<p>Greased: <input id="edit-greased-${hog.id}" data-id="${hog.id}" class="toggle" type="checkbox" name="greased" value="greased" ${checked}><br></p>
			<button id="delete-greased-${hog.id}" class="delete" data-id="${hog.id}">Delete</button>
			</div>
			`
	})
}

function createNewHog(event) {
	event.preventDefault();
	fetch(hogURL, {
		method: 'POST',
		headers: {
			'Accepts': 'application/json',
    		"Content-Type": "application/json; charset=utf-8",
		},
		body: JSON.stringify({
		    name: nameInput.value,
		    specialty: specialtyInput.value,
		    greased: greasedInput.value,
		    weight: weightInput.value,
		    award: awardInput.value,
  		})
	}).then(getHogs)
	hogForm.reset();

}

function editGreasedHog(event) {
	if (event.target.id.includes('edit')) {
		event.preventDefault();
			fetch(hogURL+'/'+`${event.target.dataset.id}`, {
				method: 'PATCH',
				headers: {
					'Accepts': 'application/json',
		    		"Content-Type": "application/json; charset=utf-8",
				}
			}).then(getHogs)
	}
	else if (event.target.id.includes('delete')) {
			event.preventDefault();
			fetch(hogURL+'/'+`${event.target.dataset.id}`, {
				method: 'DELETE'
			}).then(getHogs)
	}
}

getHogs();

