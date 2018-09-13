

## Objectives
* render list of hogs on page load
* Be able to create a new hog
  * Post hog to server, pessimistically add hog to DOM (wait for response from server before adding to DOM)
* Be able to update whether the hog is greased or not (you'll have to look at the API to figure out which route to use, remember ```$ rails routes```)
  * checkbox should update optimistically
* Be able to delete a hog

HTML for Hog Card:
```
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

```
Example for create hog:

```
{
  method: "POST",
  headers: {
    'Accepts': 'application/json',
    "Content-Type": "application/json; charset=utf-8",
  },
  body: JSON.stringify({
    name: value,
    specialty: value,
    greased: value,
    weight: value,
    award: value,
  }
```
Update can be done using PATCH and no body is needed.
