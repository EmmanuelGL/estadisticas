// /////*graficas 

// $(document).ready( function() {
// // 	//if(this.title!='Alumnos Graduados por Departamento y Grado' && this.title !='Alumnos Graduados por Especialidad y Departamento'){
	
// 	 $(function () {
			
// 		 Highcharts.chart('graficaA', {
// 			 data: {
// 				 table: 'datatable'
// 			 },
// 			 chart: {
// 				 type: 'column'
// 			 },
// 			 title: {
// 				 text: 'prueba'
// 			 },
// 			 xAxis: {
// 				 type: 'category',
// 				 title: {
// 					 text: 'prueba'
// 				 }
// 			 },
// 			 yAxis: {
// 				 // allowDecimals: false,
// 				 title: {
// 					 text: 'Total'
// 				 }
// 			 },
// 			 tooltip: {
// 				 headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
// 				 pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} </b><br/>'
// 			 },
// 			 legend: {
// 				 //enabled: true
// 				 shadow: true
// 			 },
// 			 plotOptions: {
// 					 series: {
// 						 borderWidth: 0,
// 						 dataLabels: {
// 							 enabled: true,
// 							 format: '{point.y:.1f}'
// 						 }
// 					 }
// 				 },
// 				 //series:this.title
// 				 /*series: [{
// 					data :this.title
// 					}]*/

// 				 //series: 
// 		 });
// 	 });
	
// })
// ////////////////////////////////////////////////////////////////////////////////

//  $(document).ready(function(){
// 	 Highcharts.chart('graficaB', {
// 		 data: {
// 			 table: 'datatable'
// 		 },
// 		 chart: {
// 			 plotBackgroundColor: null,
// 			 plotBorderWidth: null,
// 			 plotShadow: false,
// 			 type: 'pie'
// 		 },
// 		 title: {
// 			 text: this.title
// 		 },
// 		 tooltip: {
// 			 pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
// 		 },
// 		 plotOptions: {
// 			 pie: {
// 				 allowPointSelect: true,
// 				 cursor: 'pointer',
// 				 dataLabels: {
// 					 enabled: false
// 				 },
// 				 showInLegend: true
// 			 }
// 		 },
// 		 legend: {
// 			 align: 'left',
// 			 layout: 'vertical',
// 			 verticalAlign: 'middle',
// 			 x: 40,
// 			 y: 0,
// 			 shadow: true
// 		 }
// 	 });
//    })
 
// // }
// //////////////////////
// if(this.title =='Alumnos Graduados por Departamento y Grado' || this.title =='Alumnos Graduados por Especialidad y Departamento'){ 
	 
// 		 $(document).ready(function(){

			 
// 			 Highcharts.chart('graficaA1', {
// 				 data: {
// 					 table: 'datatable2'
// 				 },
// 				 chart: {
// 					 type: 'column',  // tipo de gráfica
// 					 borderWidth: 0 // ancho del borde de la gráfica
// 				 },
// 				 title: {
// 					 text: this.title// título
// 					 //x: -20 
// 				 },
// 				 xAxis: {
// 					 type: 'category',
// 				 title: {
// 					 text: this.title
// 				 }
// 				 },
// 				 yAxis: {
// 					 title: {
// 						 text: 'Total' // nombre del eje de Y
// 					 },
// 					/* plotLines: [{
// 						 color: '#808080'
// 					 }]*/
// 				 },
// 				 tooltip: {
// 					 pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
// 					 shared: true
// 				 },
// 				 legend: { // configuración de la leyenda
// 					 layout: 'horizontal',
// 					 align: 'center',
// 					 verticalAlign: 'bottom',
// 					 borderWidth: 1
// 				 },
// 				//  series: [
					 
					
// 				// 	 {"data": [{"name": "Bioquímica","y": 5},{"name": "CIENCIAS BIOLOGIA CELULAR","y": 9},{"name": "Bioquímica","total": 5}],"name": "maestria"},
// 				// 	 {"data": [{"name": "Bioquímica","y": 1},{"name": "CIENCIAS BIOLOGIA CELULAR","y": 1}],"name": "doctorado"}]
					
			 
 
// 	 })
 
//  })
 
 
//  }
// //////////////////////////////////////////////
// });


var app = angular.module('estadisticas', []);
app.controller('graficas', function($scope, $http) {
	$scope.tipo = [
        {value : "v_departamentoa", select : "Departamento"},
        // {value : "v_especialidada", select : "Especialidad"},
		{value : "v_gradoa", select : "Grado"},
		{value : "v_generoa", select : "Género"},
		{value : "v_deptogradoa", select : "Departamento y Grados"},
		// {value : "v_especialidaddeptoa", select : "Especialidad y Departamentos"},
	];
	
	$scope.selectgraficas = function(){
		console.log($scope.selectActas);
		if($scope.selectActas !==undefined){
			$scope.grafica={
				grafica : $scope.selectActas
			}
			var pathname = window.location.pathname;
			// $.ajax({
			// 	url: pathname,
			// 	method: 'POST',
			// 	data:  $scope.grafica,
			// 	success: function(response) {
				
			// 	$scope.grafica1 = response;	
			// 	console.log('-----------------');
			// 	console.log($scope.grafica1);
			// 	},
			// 	error: function (err) {
			// 		console.log(err);
					
			// 	}
			// });
			// $http.post(pathname, $scope.grafica)
			// .then(function(response) {
			// 	// success handler
			// 	$scope.grafica1 = response;	
			// 	console.log($scope.grafica1);
			// }, function(response) {
			// 	// error handler
			// 	console.log(response);
			// })
			// .then(function(response) {
			// 	// success handler
			// }
			$http.post(pathname, $scope.grafica)
			.then(function onSuccess(response) {
				// Handle success
				var data = response.data;
				$scope.grafica1 = response.data;
				Highcharts.chart('graficaA', {
					data: {
						table: 'datatable'
					},
					chart: {
						type: 'column'
					},
					title: {
						text: $scope.selectActas
					},
					xAxis: {
						type: 'category',
						title: {
							text: $scope.selectActas
						}
					},
					yAxis: {
						// allowDecimals: false,
						title: {
							text: 'Total'
						}
					},
					tooltip: {
						headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
						pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f} </b><br/>'
					},
					legend: {
						//enabled: true
						shadow: true
					},
					plotOptions: {
							series: {
								borderWidth: 0,
								dataLabels: {
									enabled: true,
									format: '{point.y:.1f}'
								}
							}
						},
						//series:this.title
						/*series: [{
						   data :this.title
						   }]*/
	   
						//series: 
				});
				// var status = response.status;
				// var statusText = response.statusText;
				// var headers = response.headers;
				// var config = response.config;
				console.log(data);
			}, function onError(response) {
				// Handle error
				var data = response.data;
				// var status = response.status;
				// var statusText = response.statusText;
				// var headers = response.headers;
				// var config = response.config;
				console.log(data);
			});

		}
		
	}
});