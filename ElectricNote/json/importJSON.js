function Graph(id, file) {
    fetch(file)
        .then((response) => response.json())
        .then((json) => {
            let state = json;
            let grapher = document.getElementById(id);
            let calculator = Desmos.GraphingCalculator(grapher, {
                expressions: true,
                expressionsCollapsed: true
            });
            calculator.setState(state);
    });


    /*
    import(file).then(module => {
        console.log(module.default)
        let state = module.default;
        let grapher = document.getElementById(id);
        let calculator = Desmos.GraphingCalculator(grapher, {
            expressions: true,
            expressionsCollapsed: true
        });
        calculator.setState(state);
    });
    */
}

function GraphID(id){
	Graph(id, `../json/${id}.json`)
}

GraphID('onlyRing')
GraphID('dQ')
GraphID('symmetry')
GraphID('degree')


