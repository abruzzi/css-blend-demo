const input = document.querySelector('#file-upload')
const container = document.querySelector('#container')
const modes = document.querySelectorAll('.thumb')

const renderImage = (file) => {
	const reader = new FileReader()

	reader.onload = (e) => {
		const url = e.target.result
		container.style.setProperty('background-image', 'url("'+url+'")')

		for(let i = 0, len = modes.length; i < len; i++) {
			const mode = modes[i]
			const text = mode.innerText
			mode.style.setProperty('background-image', 'url("'+url+'")')
		}
	}

	reader.readAsDataURL(file)
}

input.addEventListener('change', (e) => {
	renderImage(e.target.files[0])
})

for(let i = 0, len = modes.length; i < len; i++) {
	const mode = modes[i]
	const text = mode.innerText
	mode.style.setProperty('background-blend-mode', text)
}