/*
 Highcharts JS v6.0.7 (2018-02-16)

 (c) 2009-2017 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){
    "object"===typeof module&&module.exports?module.exports=a:a(Highcharts)
})
(function(a){
    a.createElement("link",
    {href:"https://fonts.googleapis.com/css?family\x3dUnica+One",rel:"stylesheet",type:"text/css"},
    null,document.getElementsByTagName("head")[0]);
    a.theme={colors:"#2b908f #90ee7e #f45b5b #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee"
    .split(" "),chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],
    [1,"#3e3e40"]]},style:{fontFamily:"lato"},
    plotBorderColor:"#606063"},
    title:{style:{color:"#E0E0E3",
    textTransform:"uppercase",
    fontSize:"18px",fontFamily:"lato"}},
    subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase",fontFamily:"lato"}},
    xAxis:{gridLineColor:"#707073",
    labels:{style:{color:"#E0E0E3", fontFamily:"lato"}},
    lineColor:"#707073",
    minorGridLineColor:"#505053",
    tickColor:"#707073",
    title:{style:{color:"#A0A0A3", fontFamily:"lato"}}},
    yAxis:{gridLineColor:"#707073",
    labels:{style:{color:"#E0E0E3", fontFamily:"lato"}},
    lineColor:"#707073",
    minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3", fontFamily:" lato"}}},
    tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0", fontFamily:"lato"}},
    plotOptions:{series:{dataLabels:{color:"#B0B0B3"},marker:{lineColor:"#333"}},
    boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},
    legend:{itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"}},
    credits:{style:{color:"#666", fontFamily:"lato"}},labels:{style:{color:"#707073", fontFamily:"lato"}},
    drilldown:{activeAxisLabelStyle:{color:"#F0F0F3", fontFamily:"lato"},
    activeDataLabelStyle:{color:"#F0F0F3", fontFamily:"lato"}},
    navigation:{buttonOptions:{symbolStroke:"#DDDDDD",
    theme:{fill:"#505053"}}},rangeSelector:{buttonTheme:{fill:"#505053",stroke:"#000000",
    style:{color:"#CCC", fontFamily:"lato"},
    states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white", fontFamily:"lato"}},
    select:{fill:"#000003",stroke:"#000000",style:{color:"white" , fontFamily:"lato"}}}},inputBoxBorderColor:"#505053",
    inputStyle:{backgroundColor:"#333",color:"silver", fontFamily:"lato"},
    labelStyle:{color:"silver", fontFamily:"lato"}},
    navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA",fontFamily:"lato"},
    outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED",fontFamily:"lato"},
    xAxis:{gridLineColor:"#505053",fontFamily:"lato"}},
    scrollbar:{barBackgroundColor:"#808083",
    barBorderColor:"#808083",buttonArrowColor:"#CCC",
    buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",
    rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"},
    legendBackgroundColor:"rgba(0, 0, 0, 0.5)",background2:"#505053",
    dataLabelsColor:"#B0B0B3",textColor:"#C0C0C0",contrastTextColor:"#F0F0F3",
    maskColor:"rgba(255,255,255,0.3)"};a.setOptions(a.theme)});
