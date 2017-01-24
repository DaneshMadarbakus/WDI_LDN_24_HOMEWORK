angular
  .module('wdiYearbook')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['$http', 'API'];
function UsersIndexCtrl($http, API) {
  const vm = this;
  $http
    .get(`${API}/users`)
    .then(response => {
      vm.users = response.data;
    });
}
