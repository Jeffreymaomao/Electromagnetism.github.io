let darkToogle = document.querySelector("#dark-mode-toggle");

var background = {
	style: 'dark',
	toggle: function(){
		if(this.style=='dark'){
			this.style = 'light';
			arrow.color = 'white';
		}
		else{
			this.style = 'dark';
			arrow.color = 'black';
			
		}
	}
}


darkToogle.addEventListener('click', () => {
	darkToogle.classList.toggle("sun");
	darkToogle.classList.toggle("moon");
	background.toggle();
	document.body.classList.toggle("latex-dark");
});
