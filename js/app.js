var app = angular.module('bryanProfile', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider

    .when('/home', {
       templateUrl:'/routes/home.html'
    })

    .when('/about',{
      templateUrl:'/routes/about.html'

    })
    .when('/familyAndCommunity',{
      templateUrl:'/routes/familyAndCommunity.html'

    })
    .when('/jobQuestions',{
      templateUrl:'/routes/jobQuestions.html'


    })
    .when('/legalIssues',{
      templateUrl:'/routes/legalIssues.html'


    })
    .when('/stories',{
      templateUrl:'/routes/stories.html'


    })
.otherwise({redirectTo: '/home'});
  })
