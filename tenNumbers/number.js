var tenNumbers = [0,1,2,3,4,5,6,7,8,9,10];
var onload = function() {
	showDiffrentWidthNumbers();
}

var showDiffrentWidthNumbers = function() {
	var container = d3.select('.container');

	var fontScale = d3.scaleLinear().domain([0, 10]).range(['italic bold 12px/30px sens-serif', 'italic bold 120px/180px sens-serif']);
	container.selectAll('div').data(tenNumbers)
			.enter().append('div')
			.classed('number', true)
			.style('font', function(d) {return fontScale(d)})
			.text(function(d){return d});
}
window.onload = onload;