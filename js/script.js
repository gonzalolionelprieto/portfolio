/*------- MENU MOSTRAR Y ESCONDER-------------*/

const navMenu = document.getElementById('nav-menu'),
	  toggleMenu = document.getElementById('nav-toggle'),
	  closeMenu = document.getElementById('nav-close'),
	  animarA1 = document.getElementById('a-1'),
	  animarA2 = document.getElementById('a-2'),
	  animarA3 = document.getElementById('a-3'),
	  animarA4 = document.getElementById('a-4'),
	  animarA5 = document.getElementById('a-5')


/*MOSTRAR*/

toggleMenu.addEventListener('click',()=>{


			navMenu.classList.toggle('show');
			animarA1.classList.toggle('a-1');
			animarA2.classList.toggle('a-2');
			animarA3.classList.toggle('a-3');
			animarA4.classList.toggle('a-4');
			animarA5.classList.toggle('a-5');

})

/*ESCONDER*/
closeMenu.addEventListener('click',()=>{

			navMenu.classList.remove('show');
			animarA1.classList.toggle('a-1');
			animarA2.classList.toggle('a-2');
			animarA3.classList.toggle('a-3');
			animarA4.classList.toggle('a-4');
			animarA5.classList.toggle('a-5');
})

const navLink =document.querySelectorAll('.nav-link')

function linkAccion(){


	navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click',linkAccion));
AOS.init();

