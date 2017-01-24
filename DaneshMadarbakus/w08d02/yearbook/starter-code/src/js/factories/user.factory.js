angular
  .module('wdiYearbook')
  .factory('UserFac', UserFac);

UserFac.$inject = ['API', '$resource'];
function UserFac(API, $resource){
  return $resource(`${API}/users/:id`, { id: '@_id' }, { 'update': { method: 'PUT'}});
}
