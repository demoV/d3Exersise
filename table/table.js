var tenNumbers = [1,2,3,4,5,6,7,8,9,10];
var onload = function() {
	showHeader();
}

var showHeader = function() {
	var container = d3.select('.container');
	var titleRow = container.append('tr').classed('row', true);

	titleRow.selectAll('td').data(tenNumbers)
			.enter().append('td')
			.classed('header', true)
			.text(function(d){return d});

	var numberRow = container.append('tr').classed('row', true);
	numberRow.selectAll('td').data(tenNumbers)
				.enter().append('td')
				.text(function(d) { return d;});
	
	var powScale = d3.scalePow().exponent(2);
	var sqrRow = container.append('tr').classed('row', true);
	sqrRow.selectAll('td').data(tenNumbers)
				.enter().append('td')
				.text(function(d) { return powScale(d)});

	var logScale = d3.scaleLog();
	var logRow = container.append('tr').classed('row', true);
	logRow.selectAll('td').data(tenNumbers)
				.enter().append('td')
				.text(function(d) { return logScale(d)});

	var roundOfLogRow = container.append('tr').classed('row', true);
				 
	roundOfLogRow.selectAll('td').data(tenNumbers)
				.enter().append('td')
				.text(function(d) {return })

}
window.onload = onload;