/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "ChartCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
    .when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // Blog
    .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
    .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
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
                    enabled: true
                },
                pointWidth:60
            }            
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33,
            }, {
                name: 'Chrome',
                y: 24.03,
            }, {
                name: 'Firefox',
                y: 10.38,
            }, {
                name: 'Safari',
                y: 4.77,
            }, {
                name: 'Opera',
                y: 0.91,
            }]
        }]
    });
});
    
    
    // Activates the Carousel
  // $('.carousel').carousel({
  //   interval: 5000
  // });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});



/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function ( $scope, $location, $http ) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  // $('.carousel').carousel({
  //   interval: 5000
  // });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
