var w = 500,
    h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['California Institute of Technology','University of Wisconsin-Madison','University of Basel','University of Twente',"Queen's University Belfast"];

//Data
var d = [
          [
            {axis:"Teaching",value:95.6},
            {axis:"Research",value:97.6},
            {axis:"Citations",value:99.8},
            {axis:"Income",value:97.8},
            {axis:"Total Score",value:95.2},
          ],[
            {axis:"Teaching",value:65.1},
            {axis:"Research",value:68.2},
            {axis:"Citations",value:86.6},
            {axis:"Income",value:48.5},
            {axis:"Total Score",value:69.7},
           ],[
            {axis:"Teaching",value:39.5},
            {axis:"Research",value:33.1},
            {axis:"Citations",value:88.3},
            {axis:"Income",value:99.9},
            {axis:"Total Score",value:57.9},
           ],[
            {axis:"Teaching",value:34.1},
            {axis:"Research",value:45.6},
            {axis:"Citations",value:68.8},
            {axis:"Income",value:91.2},
            {axis:"Total Score",value:52.9},
           ],[
            {axis:"Teaching",value:34.1},
            {axis:"Research",value:33.3},
            {axis:"Citations",value:68.9},
            {axis:"Income",value:35.7},
            {axis:"Total Score",value:48.8},
          ]
        ];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body-chart')
    .selectAll('svg')
    .append('svg')
    .attr("width", w+300)
    .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
    .attr("class", "title")
    .attr('transform', 'translate(90,0)') 
    .attr("x", w - 70)
    .attr("y", 10)
    .attr("font-size", "12px")
    .attr("fill", "#404040")
    .text("Top 1, 50, 100, 150 and 200 schools");
        
//Initiate Legend   
var legend = svg.append("g")
    .attr("class", "legend")
    .attr("height", 100)
    .attr("width", 200)
    .attr('transform', 'translate(90,20)') 
    ;
    //Create colour squares
    legend.selectAll('rect')
      .data(LegendOptions)
      .enter()
      .append("rect")
      .attr("x", w - 65)
      .attr("y", function(d, i){ return i * 20;})
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", function(d, i){ return colorscale(i);})
      ;
    //Create text next to squares
    legend.selectAll('text')
      .data(LegendOptions)
      .enter()
      .append("text")
      .attr("x", w - 52)
      .attr("y", function(d, i){ return i * 20 + 9;})
      .attr("font-size", "12px")
      .attr("fill", "#737373")
      .text(function(d) { return d; })
      ; 