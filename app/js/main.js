const input = document.querySelector('#file-upload')
const container = document.querySelector('#container')

const renderImage = (file) => {
	const reader = new FileReader()

	reader.onload = (e) => {
		const url = e.target.result
		container.style.setProperty('background-image', 'url("'+url+'")')
	}

	reader.readAsDataURL(file)
}

input.addEventListener('change', (e) => {
	renderImage(e.target.files[0])
})

