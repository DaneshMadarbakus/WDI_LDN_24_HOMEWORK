angular
  .module('wdiYearbook')
  .config(Router);

Router.$inject = [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('usersIndex', {
      url: '/users',
      templateUrl: '/js/views/users/index.html',
      controller: 'UsersIndexCtrl as users'
    })
    .state('usersNew', {
      url: '/users/new',
      templateUrl: '/js/views/users/new.html',
      controller: 'UsersNewCtrl as usersNew'
    })
    .state('usersEdit', {
      url: '/users/:id/edit',
      templateUrl: '/js/views/users/edit.html',
      controller: 'UsersNewCtrl as usersNew'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: '/js/views/users/show.html',
      controller: 'UsersShowCtrl as usersShow'
    });

  $urlRouterProvider.otherwise('/users');
}
