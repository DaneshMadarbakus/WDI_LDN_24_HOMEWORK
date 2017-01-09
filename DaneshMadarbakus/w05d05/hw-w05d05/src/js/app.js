const App = App || {};

App.init = function() {
  console.log(this);
  this.$main = $('main');
  this.apiUrl = 'http://localhost:3000/api';
  $('.register').on('click', this.register.bind(this));
  this.$main.on('submit', 'form', this.handleForm);
};

$(App.init.bind(App));

App.register = function(e){
  if (e) e.preventDefault();
  console.log('you clicked register');
  this.$main.html(`
  <h2>Register</h2>
  <form method="post" action="/register">
    <div class="form-group">
      <input class="form-control" type="text" name="user[username]" placeholder="Username">
    </div>
    <div class="form-group">
      <input class="form-control" type="email" name="user[email]" placeholder="Email">
    </div>
    <div class="form-group">
      <input class="form-control" type="password" name="user[password]" placeholder="Password">
    </div>
    <div class="form-group">
      <input class="form-control" type="password" name="user[passwordConfirmation]" placeholder="Password Confirmation">
    </div>
    <input class="btn btn-primary" type="submit" value="Register">
  </form>
  `);
};

App.handleForm = function(e){
  if (e) e.preventDefault();

  const url = `${App.apiUrl}${$(this).attr('action')}`;
  const method = $(this).attr('method');
  const data = $(this).serialize();

  $.ajax({
    url,
    method,
    data
  }).done((data) => {
    if (data.token) App.setToken(data.token);
  }).fail((data) => {
    console.log(data);
  });
};

App.setToken = function(token) {
  return window.localStorage.setItem('token', token);
};
