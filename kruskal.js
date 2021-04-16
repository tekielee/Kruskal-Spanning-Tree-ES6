function kruskal(graph) {
	let len = graph.length;
	let tree = [];
	let set = [];
	for(let k = 0; k < len; k++) {
		set[k] = [k];
	}
	let edges = [];
	for(let i = 0; i < len; i++) {
		for(j = 0; j < i; j++) {
			if(graph[i][j]) {
				edges.push([[i + ',' + j], [graph[i][j]]]);
			}
		}
	}
	edges.sort(function(a, b) {
		return a[1] - b[1];
	});
	for(let v = 0; v < edges.length; v++) {
		let k = edges[v][0];
		const [i, j] = k[0].split(',');
		iSet = findSet(set, i);
		jSet = findSet(set, j);
		if(iSet != jSet) {
			tree.push({from: i, to: j, cost: graph[i][j]});
			unionSet(set, iSet, jSet);
		}
	}
	return tree;
}

function findSet(set, index) {
	for(let k = 0; k < set.length; k++) {
		if(index.includes(set[k])) {
			return k;
		}
	}
	return false;
}

function unionSet(set, i, j) {
	a = set[i];
	b = set[j];
	delete set[i];
	delete set[j];
	set.push(a.concat(b));
}

let graph = [
	[0, 3, 1, 6, 0, 0],
	[3, 0, 5, 0, 3, 0],
	[1, 5, 0, 5, 6, 4],
	[6, 0, 5, 0, 0, 2],
	[0, 3, 6, 0, 0, 6],
	[0, 0, 4, 2, 6, 0]
];

let mst = kruskal(graph);
let minimumCost = 0;
for(let v = 0; v < mst.length; v++) {
	console.log('From ' + mst[v]['from'] + ' to ' + mst[v]['to'] + ' cost is ' + mst[v]['cost']);
	minimumCost += mst[v]['cost'];
}
console.log('Minimum cost: ' + minimumCost);