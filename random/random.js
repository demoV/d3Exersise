var randomNumbers = [23,32,32,32,54,75,65,65,67,76];
var lineInterval;
var barInterval;
var onload = function() {
	randomNumbers = numbers(30, 70, 40);
	drawAxis();
	// setInterval(function(){
	// 	randomNumbers.shift();
	// 	randomNumbers.push(_.random(30, 70));
	// }, 500);
	loadLineChart();
	addBarGroup();
}

var addBarGroup = function() {
	var barG = d3.select('svg').append('g')
		.classed('bar', true);
}

var numbers = function(lower, uper, limit) {
	var numbers = []
	for (var i = 0; i < limit; i++) {
		numbers.push(_.random(lower, uper)); 
	}
	return numbers;
}

const WIDTH = 1180;
const HEIGHT = 700;
const MARGIN = 30;
var _xScale;
var _yScale;
var linearScale = function(domain, range) {
	return d3.scaleLinear()
	    .domain(domain)
	    .range(range);
}

var drawAxis = function() {
	var svg = d3.select('.container').append('svg')
		.attr('width', WIDTH)
		.attr('height', HEIGHT);

	_xScale = linearScale([0, randomNumbers.length-1], [0, WIDTH]);
	_yScale = linearScale([1, 100], [HEIGHT, 0]);

	var xAxis = d3.axisBottom(_xScale).ticks(20);
	svg.append('g')
		.attr('transform', 'translate('+MARGIN+', '+(HEIGHT - MARGIN)+')')
		.call(xAxis)

	var yAxis = d3.axisLeft(_yScale).ticks(50);
	svg.append('g')
		.attr('transform', 'translate('+(MARGIN)+', '+ MARGIN +')')
		.call(yAxis)
}

var loadLineChart = function() {
	var g = d3.select('svg').append('g')
		.attr('transform', 'translate('+MARGIN+', '+MARGIN+')')
		.classed('lineChart', true);

	var line = d3.line()	
				.x(function(d, index){return _xScale(index)})
				.y(function(d){return _yScale(d)});


	var path = g.append('path').classed('number', true);
	setInterval(function(){ updateLine(line); },800);
}

var updateLine = function(line) {
	randomNumbers.push(_.random(30, 70));

	d3.select('.number')
		.datum(randomNumbers)
		.attr('d', line)
		.attr('transform',null)
		.transition()
		.duration(700)
		.ease(d3.easeLinear)
		.attr('transform','translate('+_xScale(-1)+')')
	randomNumbers.shift();
	
}
var loadBarChart = function() {
	var barG = d3.select('.bar');
	barInterval = setInterval(function(){
		var rects = barG.selectAll('rect').data(randomNumbers);

		rects.enter().append('rect')
		.attr('transform', 'translate('+(MARGIN)+', '+ MARGIN +')')
		.attr('width', 25);

		rects
		.attr('y', function(d){return _yScale(d)})
		.attr('x', function(d, index) {return _xScale(index + 1) - 13})
		.attr('height', function(d){return HEIGHT - (2 * MARGIN) - _yScale(d)})

		rects.exit().remove();
	}, 500);
}

var showBarChart = function() {
	d3.select('.number').classed('hidden', true);
	clearInterval(lineInterval);
	loadBarChart()
}

window.onload = onload;