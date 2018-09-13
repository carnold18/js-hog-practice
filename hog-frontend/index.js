console.log('ello')
const hogURL = 'http://localhost:3000/hogs'

document.addEventListener('DOMContentLoaded', handleContentLoad)

function handleContentLoad(){
  console.log('oh, ello')
  fetchHogs()
}

function fetchHogs(){
  fetch(hogURL)
  .then(res => res.json())
  .then(addHogsToPage)
  .then(addHogsEventListeners)
}

function addHogsToPage(hogs){
  for (hog of hogs) {
    addHogToPage(hog)
  }
}

function addHogToPage(hog){
  let checked = hog.greased == true ? 'checked' : ''
  let hogEl = document.createElement('div')
  hogEl.innerHTML =
  `<h3>${hog.name}</h3>
 <p>Specialty: ${hog.specialty}</p>
 <p>Award: ${hog.award}</p>
 <p>Weight: ${hog.weight}</p>
 <p>Greased: <input data-id="${hog.id}" class="toggle" type="checkbox" name="greased" value="greased" ${checked}><br></p>
 <button class="delete" data-id="${hog.id}">Delete</button>`

  const hogList = document.getElementById('hog-list')
  hogList.append(hogEl)
}

function addHogsEventListeners(){
  document.getElementById('hog-form').addEventListener('submit', handleSubmitForm)
  document.getElementById('hog-list').addEventListener('click', handleListClick)
}

function handleSubmitForm(e){
  e.preventDefault()
  fetch(hogURL, {
    method: "POST",
    headers: {
      'Accepts': 'application/json',
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      name: e.target.children[0].value,
      specialty: e.target.children[2].value,
      greased: e.target.children[4].checked,
      weight: e.target.children[6].value,
      award: e.target.children[8].value,
    })
  }).then(res => res.json())
  .then(addHogToPage)
}

function handleListClick(e){
  if (e.target.type == "checkbox") {
    updateHogGreasyness(e.target.dataset.id)
    updateCheckBox(e)
  }
  if (e.target.className == "delete") {
    deleteHog(e.target.dataset.id)
    removeHogFromDOM(e)
  }
}

function updateHogGreasyness(hogId) {
  fetch(`${hogURL}/${hogId}`,{
    method: "PATCH",
    headers: {
      'Accepts': 'application/json',
      "Content-Type": "application/json; charset=utf-8",
    }
  }).then(res => res.json())
  .then(console.log)
}

function updateCheckBox(e) {
  e.target.checked == !e.target.checked
}

function deleteHog(hogId) {
  fetch(`${hogURL}/${hogId}`,{
    method: "DELETE",
    headers: {
      'Accepts': 'application/json',
      "Content-Type": "application/json; charset=utf-8",
    }
  }).then(res => res.json())
  .then(console.log)
}

function removeHogFromDOM(e) {
  e.target.parentElement.remove()
}
