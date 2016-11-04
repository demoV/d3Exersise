var STUDENTS = [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
];

var colorScale;
var loadStudents = function() {
	var colorScale  = d3.scaleOrdinal(d3.schemeCategory20);
	var container = d3.select('.container');
	var students = container.selectAll('div').data(STUDENTS);
	students.enter().append('div')
			.classed('bar', true)
			.style('height', 25 + "px")
			.style('width', function(s) {return s.score * 10 + "px"})
			.style('background-color', function(d){
				return colorScale(d.subject)
			})
			.text(function(s){return s.name + ' ' + s.score});

	showSubs(colorScale);
	

}


var sortBy = function(key) {
	d3.selectAll('.bar').sort(function(a, b){return d3.ascending(a[key], b[key])});
}
var showSubs = function(colorScale) {
	var subs = d3.select('.subs');
	subs.selectAll('button').data(colorScale.domain())
					.enter().append('button')
					.text(function(s) {return s})
					.style('background-color', function(s) {
						return colorScale(s);
					})
					.classed('subject', true);

}
var onload = function() {
	colorScale  = d3.scaleOrdinal(d3.schemeCategory20);
	loadStudents()
}
window.onload = onload;