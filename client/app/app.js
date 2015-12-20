'use strict';

angular.module('meanStackWeatherDemoApp', [
  'meanStackWeatherDemoApp.auth',
  'meanStackWeatherDemoApp.admin',
  'meanStackWeatherDemoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
