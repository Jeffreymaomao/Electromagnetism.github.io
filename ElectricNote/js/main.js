
/**
 * 
 * toogle the background style.
 * 
 **/
let btns = document.querySelector("#btn-container");
let darkToogle = document.querySelector("#dark-mode-toggle");
var background = {
	style: 'dark',
	toggle: function(){
		if(this.style=='dark'){
			this.style = 'light';
		}
		else{
			this.style = 'dark';
		}
	}
}
btns.addEventListener('click', e=>{
    var btn = e.target;
    if(btn.id == 'dark-mode-toggle'){
        btn.classList.toggle("sun");
        btn.classList.toggle("moon");
        btns.querySelectorAll('button').forEach((bt)=>{
            bt.classList.toggle("dark");
            bt.classList.toggle("light");
        })
        background.toggle();
        document.body.classList.toggle("latex-dark");
    }
})


// darkToogle.addEventListener('click', () => {
// 	darkToogle.classList.toggle("sun");
// 	darkToogle.classList.toggle("moon");
// 	background.toggle();
// 	document.body.classList.toggle("latex-dark");
// });



/**
 * 
 * import json into the file, then graph the state by Desmos claculator.
 * 
 **/
function Graph(id, file) {
    fetch(file)
        .then((response) => response.json())
        .then((json) => {
            let state = json;
            let grapher = document.getElementById(id);
            let calculator = Desmos.GraphingCalculator(grapher,{
                expressions: true,
                expressionsCollapsed: true,
                border: false,
                lockViewport: true,
            });
            calculator.setState(state);
    });
}

function GraphID(id){
	Graph(id, `../json/${id}.json`)
}
