const divContainer = document.querySelector('#container')

const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('#value')
const changeGrid = document.querySelector('#change-grid-btn')

changeGrid.addEventListener('click', () => {
    organiseNewGrid(slider.value)
}) 

slider.oninput = function () {
    sliderValue.textContent = slider.value
}

function makeNewGrid(size) {
    for (let i = 0; i<(size * size); i++) {
        const newBox = document.createElement('div')
        newBox.setAttribute('class', 'sub-div')
        newBox.textContent = ''
        let newWidth = 64 / size
        let newBorderWidth = newWidth / 30
        newBox.style.width = `${newWidth}vh`
        newBox.style.borderWidth = `${newBorderWidth}px`
        newBox.addEventListener('mouseover', () => {
            newBox.classList.add('hovered')
        })
        divContainer.appendChild(newBox)
    }

    console.log(window.innerWidth)
    
    const boxes = document.getElementsByClassName('sub-div')
    boxes.array.forEach(box => {
        box.style.backgroundColor = 'pink'
    });
}


function organiseNewGrid(size) {
    divContainer.innerHTML = ''
    makeNewGrid(size)
}



makeNewGrid(16)