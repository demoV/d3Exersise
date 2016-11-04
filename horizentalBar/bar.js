var randomNumbers = [{val:23, seq_id:1},23,54,45,56,65,67,23,4];
var _colorScale;

var linearScale = function(domain, range) {
	return d3.scaleLinear()
	    .domain(domain)
	    .range(range);
}

var updateChart = function() {
	randomNumbers.push(randomNumber(1, 100));
	var container = d3.select('.container');
	var divs = container.selectAll('div').data(randomNumbers, function(d, i){return d + '' + i});

	divs.enter().append('div')
		.classed('bar', true)
		.style('height', 25 + "px")
		.style('width', function(d){return d * randomNumbers.length  + "px" })
		.text(function(d){return d})
		.style('background-color', function(d, i){return _colorScale(d)});

	randomNumbers.shift();
	divs.exit().remove();
}

var loadBarChart = function() {
	_colorScale = d3.scaleLinear()
					.domain([1, 100])
					.range(["#F8F8FF" , "#003399"]);	
	setInterval(updateChart, 500);

}

var randomNumber = function(lower, uper) {
	return Math.floor(Math.random() * (uper - lower))
}
var onload = function() {
	loadBarChart();
}

window.onload = onload;