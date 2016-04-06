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

var d1 = [
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

// d = [];
// _d = []
// first = d1[0];
// second = d2[4];
// _first = +($("#first").val())
// _second = +($("#second").val())
// d.push(first);
// d.push(second);
// _d.push(_first);
// _d.push(_second);
// console.log(typeof d)
var initial = []
initial.push(d[0]);
initial.push(d[4]);
RadarChart.draw("#chart-2", initial, mycfg);

$('#first').change(function() {
  d = []
  var val = $(this).val();
  var other = $("#second").val() 
  console.log(d1[val]);
  console.log(d1[other]);
  d.push(d1[val]);
  d.push(d1[other]);
  RadarChart.draw("#chart-2", d, mycfg);
})

$('#second').change(function() {
  d = []
  var val = $(this).val();
  var other = $("#first").val() 
  console.log(d1[val]);
  console.log(d1[other]);
  d.push(d1[val]);
  d.push(d1[other]);
  RadarChart.draw("#chart-2", d, mycfg);
})

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

// $("#0").click(function() {
//     // alert($("#radar-buttons > button").length);
//     var _remove = $(this).html()
//     alert(_remove)
    
//     // if (this)
// });

// $("button").click(function() {
//     // alert($("#radar-buttons > button").length);
//     var _remove = ($("#radar-buttons > button").length)-1
//     alert(_remove)
//     d.splice(_remove, 1);
//     RadarChart.draw("#chart", d, mycfg);

//     $(this).prependTo("#removed-buttons")
//     alert($("#radar-buttons > button").length);
    
//     // if (this)
// });

// $('#radar-buttons').on('click', 'button', function() {
//   move_output = $(this.id)
//   alert(move_output)
  // move_output.parent().removeClass( "half-container" ).addClass( "full-container" ).append("<button class='up'> Up </button>").append("<button class='down'> Down </button>");
  
  // $("#chosen_song").prepend(move_output.parent());
  // $(move_output.parent()).clone().prependTo("#chosen_song").addClass( "full-container" ).append("<button class='up'> Up </button>").append("<button class='down'> Down </button>");
  // move_output.html("Remove");

// })

final = []
d3.select('#rad-opts')
      .on('change', function() {
        // d3.selectAll(".axis").remove();
        // d3.selectAll("path").remove();
        
        ////////////
        // DROPDOWN/
        //////////// 
        //var newData = (d3.select(this).property('value'));
        // console.log(typeof newData);
        //updateRanking(newData);

        ////////////
        // Radio   /
        //////////// 
        // final = []
        var selValue = document.querySelector('input[name="gender"]:checked').value;
        console.log(typeof +selValue)
        final.push(d[+selValue])
        RadarChart.draw("#chart", final, mycfg);
        
    });



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