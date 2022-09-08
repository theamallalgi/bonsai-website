const burger = document.querySelector('.burger');
const navigation = document.querySelector('nav');
const links = document.querySelector('nav li a');
const preloader = document.querySelector('.preloader');

navBar = () => {
	navigation.classList.toggle('open');
}

linkClick = () => {
	navigation.classList.toggle('open');
}

window.addEventListener('load', () => {
	preloader.classList.add('preloader--done');
})