const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const headerMain = document.querySelector('.headerMain');
const headerRedub = document.querySelector('.headerRedub');
const headerContacts = document.querySelector('.headerContacts');
const navs = document.querySelectorAll('.nav');

navs.forEach((item)=>{
	item.addEventListener('mouseover', function (e) {
		e.target.style.backgroundColor = '#572419';
	});
	item.addEventListener('mouseout', function (e) {
		e.target.style.backgroundColor = '';
	});
})
