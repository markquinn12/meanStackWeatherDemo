'use strict';

angular.module('meanStackWeatherDemoApp.auth', [
  'meanStackWeatherDemoApp.constants',
  'meanStackWeatherDemoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
