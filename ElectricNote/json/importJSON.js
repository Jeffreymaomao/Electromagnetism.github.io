function Graph(id, file) {
    import(file, { assert: { type: 'json' } }).then(module => {
        let state = module.default;
        let grapher = document.getElementById(id);
        let calculator = Desmos.GraphingCalculator(grapher, {
            expressions: true,
            expressionsCollapsed: true
        });
        calculator.setState(state);
    });
}

function GraphID(id){
	Graph(id, `./${id}.json`)
}

GraphID('onlyRing')
GraphID('dQ')
GraphID('symmetry')
GraphID('degree')