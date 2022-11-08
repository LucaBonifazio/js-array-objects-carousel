const arrImages = [
	{
		image: '01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: '02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: '03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: '04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: '05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-Image, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

const eleSlider = document.querySelector('.slider');
renderInterface(eleSlider);
// const eleVerticalSlider = document.querySelector('.vertical-slider');
// renderInterface(eleVerticalSlider);
const eleBtnUp = document.querySelector('.btn-up');
const eleBtnDown = document.querySelector('.btn-down');
const listEleImg = document.querySelectorAll('.slider-img');
let activeIndex = 0;


function renderInterface(eleSlider) {
	arrImages.forEach(objImage => eleSlider.innerHTML += generateSlider(objImage));
}

function generateSlider(obj) {
	return `
        <div class="slider-img">
            <img src="img/${obj.image}" alt="${obj.title}">
            <h2>${obj.title}</h2>
            <p>${obj.text}</p>
        </div>
    `;
}

// function renderInterfaceSmall(eleVerticalSlider) {
// 	arrImages.forEach(objImageSmall => eleVerticalSlider.innerHTML += geneateSliderSmall(objImageSmall));
// }

// function geneateSliderSmall(obj) {
// 	return `
// 			<div class="thumbs-img">
// 				<img src="img/${obj.image}" alt="${obj.title}">
// 			</div>
// 		`;
// }

eleBtnDown.addEventListener('click', function () {

	listEleImg[activeIndex].classList.remove('active');
	
	if (activeIndex === listEleImg.length -1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}

	listEleImg[activeIndex].classList.add('active');
});

eleBtnUp.addEventListener('click', function () {
	
	listEleImg[activeIndex].classList.remove('active');

	if (activeIndex === 0) {
		activeIndex = listEleImg.length -1;
	} else {
		activeIndex--;
	}

	listEleImg[activeIndex].classList.add('active');
});
