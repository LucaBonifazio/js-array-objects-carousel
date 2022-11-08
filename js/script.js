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

const eleSliderViewer = document.querySelector('.slider-viewer');
renderInterface(eleSliderViewer);
const eleSliderThumbs = document.querySelector('.thumbs');
const eleBtnLeft = document.querySelector('.btn-left');
const eleBtnRight = document.querySelector('.btn-right');

function renderInterface(eleSliderViewer) {
	arrImages.forEach(objImage => eleSliderViewer.innerHTML += geneateSlider(objImage));
}

function geneateSlider(obj) {
	return `
			<div class="slider-img">
				<img src="img/${obj.image}" alt="${obj.title}">
				<h2>${obj.title}</h2>
				<h3>${obj.text}</h3>
			</div>
		`;
}

function renderInterface(eleSliderThumbs) {
	arrImages.forEach(objImageSmall => eleSliderThumbs.innerHTML += geneateSliderSmall(objImageSmall));
}

function geneateSliderSmall(obj) {
	return `
			<div class="thumbs-img">
				<img src="img/${obj.image}" alt="${obj.title}">
			</div>
		`;
}

// aggiungere gli event listeners ai due bottoni
// eleBtnRight.addEventListener('click', function () {
// 	// togliere la classe active dall'elemento attivo corrente
// 	listEleImg[activeIndex].classList.remove('active');
// 	listThumbs[activeIndex].classList.remove('active');

// 	// incrementare l'active index con reset per slider infinito
// 	/*
// 	if (activeIndex === listEleImg.length - 1) {
// 		activeIndex = 0;
// 	} else {
// 		activeIndex++;
// 	}
// 	*/

// 	activeIndex++;
// 	if (activeIndex === listEleImg.length) {
// 		activeIndex = 0;
// 	}

// 	// aggiungere la classe active all'elemento successivo
// 	listEleImg[activeIndex].classList.add('active');
// 	listThumbs[activeIndex].classList.add('active');
// 	document.body.style.backgroundImage = `url('${arrImages[activeIndex]}')`;
// 	document.body.style.backgroundSize = 'cover';
// });

// eleBtnLeft.addEventListener('click', function () {
// 	// togliere la classe active dall'elemento attivo corrente
// 	listEleImg[activeIndex].classList.remove('active');
// 	listThumbs[activeIndex].classList.remove('active');

// 	// decrementare l'active index con reset per slider infinito
// 	/*
// 	if (activeIndex === 0) {
// 		activeIndex = listEleImg.length - 1;
// 	} else {
// 		activeIndex--;
// 	}
// 	*/

// 	if (activeIndex === 0) {
// 		activeIndex = listEleImg.length;
// 	}
// 	activeIndex--;
