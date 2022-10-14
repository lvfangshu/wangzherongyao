(function () {
	let ost_add = document.querySelector('.ost_add'),
		bigimg = document.querySelector('.bigimg'),
		header = document.querySelector('.header'),
		sub_nav=document.querySelector('.sub_nav');
	ost_add.onmouseenter = function () {
		ost_add.style.display = "none";
		bigimg.style.display = "block"
	}

	ost_add.onmouseleave = function () {
		bigimg.style.display = "none";
		ost_add.style.display = "block"
	}


})()