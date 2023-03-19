//ibg
function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();

//бургер
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .collection__bg, .header__logo, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

//табы в меню
function openCategory(evt, category) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("menu__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("menu__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(category).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


//swiper
let myImageSlider = new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next-unique',
		prevEl: '.swiper-button-prev-unique',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},
	slidesPerView: 'auto',
	watchOverflow: true,
	spaceBetween: 18.5,
	loop: true,
	effect: 'slide',
	breakpoints: {
		320: {
			slidesPerView: 1,
			},
		768: {
			slidesPerView: 2,
		},
		1100: {
			slidesPerView: 'auto',
		},
	},
});