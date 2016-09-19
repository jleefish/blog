/**
 * Main AngularJS Web Application
 */
var app = angular.module('myWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "ChartCtrl"})
    /* To be developed Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})*/
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    /*.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
    */ 
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
// app.controller('BlogCtrl', function ( $scope, $location, $http ) {
//   console.log("Blog Controller reporting for duty.");
// });

/**
 * Controls home Page
 */
app.controller('ChartCtrl', function ( $scope, $location, $http ) {
  console.log("Page Controller reporting for duty.");

    $(function () {
    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'category',
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                enabled: true
            },
            minorTickLength: 0,
            tickLength: 0
        },
        yAxis: {
            lineWidth: 0,
            minorGridLineWidth: 0,
            gridLineColor: 'transparent',
            title: {
                text: ''
            },
            labels: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.level}'
                },
                pointWidth:55
            }            
        },

        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.desc}<br/>'
        },

        series: [{
            name:'',
            colorByPoint: true,
            data: [{
                name: 'Javascript',
                y: 51.33,
                level:'Novice',
                desc:'AngularJS/Node.js'
            }, {
                name: 'Android',
                y: 65.03,
                level:'Jedi',
                desc:''
            }, {
                name: 'Objective-c',
                y: 67.05,
                level:'Jedi',
                desc:''
            }, {
                name: 'Drinking coffee',
                y: 88.91,
                level:'Master',
                desc:'Nespresso/Hand Drip'
            }, {
                name: 'Inline hockey',
                y: 71.77,
                level:'Jedi',
                desc:'Left-handed'
            },]
        }]
    });
});
});



/**
 * Controls all other Pages
 */
// app.controller('PageCtrl', function ( $scope, $location, $http ) {
//   console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  // $('.carousel').carousel({
  //   interval: 5000
  // });

  // Activates Tooltips for Social Links
//  $('.tooltip-social').tooltip({
//    selector: "a[data-toggle=tooltip]"
//  })
// });
