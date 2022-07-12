let elSearchBar = document.getElementById('search')
let elList = document.querySelector('.list')
let elRusult = document.querySelector('.resutSpan')

elRusult.textContent = search.length

const filterSearch = function(array, element){
    array.forEach(row => {
        let newItem = document.createElement('li')

        newItem.textContent = row.title

        element.appendChild(newItem)
    })
}
  2

filterSearch(search, elList)



elSearchBar.addEventListener('keyup', (evt) => {
  const searchString = evt.target.value

  let hpCharacters = search.filter(row => row.title.toLowerCase().includes(searchString.toLowerCase()), elList.innerHTML = null)
  // title.toLowerCase().includes()
  elRusult.textContent = hpCharacters.length
  filterSearch(hpCharacters, elList)
})