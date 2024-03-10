const countElement = document.getElementById('contadorVisitas')
const resetButton = document.getElementById('btnReestablecer')

const countKey = 'count'

let countValue = getCountValueFromLocalStorage()

incrementCount()

resetButton.addEventListener('click', handleReset)

function handleReset() {
	countValue = 0
	update()
}

function incrementCount() {
	countValue++
	update()
}

function update() {
	render()
	saveCountValueToLocalStorage()
}

function render() {
	countElement.textContent = countValue
}

function getCountValueFromLocalStorage() {
	const value = +localStorage.getItem(countKey)

	return value ? value : 0
}

function saveCountValueToLocalStorage() {
	localStorage.setItem(countKey, countValue)
}