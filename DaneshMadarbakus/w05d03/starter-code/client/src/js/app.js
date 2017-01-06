$(init);

const API = 'http://localhost:4000';

function init() {
  usersIndex();

  $('.usersIndex').on('click', usersIndex);
  $('.usersNew').on('click', usersNew);
  $('body').on('submit', '.usersCreate', usersCreate);
  $('body').on('click', '.usersShow', usersShow);
  $('body').on('click', '#deletebutton', usersDelete);
  $('body').on('click', '#editbutton', usersEdit);
  $('body').on('submit', '.usersUpdate', usersUpdate);
}

function usersDelete() {
  console.log('delete button');
  $.ajax({
    url: `${$(this).attr('data-url')}`,
    type: 'delete'
  }).done(() => {
    usersIndex();
  });
}

function usersUpdate(e){
  e.preventDefault();
  console.log(`${$(this).attr('action')}`);
  $.ajax({
    url: `${$(this).attr('action')}`,
    type: 'put',
    data: $(this).serialize()
  }).done((user) => {
    console.log(user);
    usersShow.bind(this)(e);
    $('.modal').modal('hide');
  });
}

function usersEdit(){
  console.log('edit homie');
  console.log(`${$(this).attr('data-url')}`);
  $.ajax({
    url: `${$(this).attr('data-url')}`,
    type: 'get'
  }).done((user) => {
    $('.modal-content').html(`
      <form method="put" action="${$(this).attr('data-url')}" class="usersUpdate">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">Add User</h4>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="user_name">Name</label>
            <input class="form-control" type="text" name="user[name]" id="user_name" placeholder="Name" value="${user.name}">
          </div>
          <div class="form-group">
            <label for="user_image">Image</label>
            <input class="form-control" type="text" name="user[image]" id="user_image" placeholder="Image" value="${user.image}">
          </div>
          <div class="form-group">
            <label for="user_github">Github</label>
            <input class="form-control" type="text" name="user[github]" id="user_github" placeholder="Github" value="${user.github}">
          </div>
          <div class="form-group">
            <label for="user_bio">Bio</label>
            <textarea class="form-control" name="user[bio]" id="user_bio" placeholder="Bio" value="${user.bio}"></textarea>
          </div>
          <div class="form-group">
            <label for="user_website">Website</label>
            <input class="form-control" type="text" name="user[website]" id="user_website" placeholder="Website" value="${user.website}">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" data-url="${$(this).attr('data-url')}" id="usersUpdate">Save</button>
        </div>
      </form>`);

    $('.modal').modal('show');
  });

}

function usersIndex() {
  $.ajax({
    url: `${API}/users`,
    type: 'get'
  }).done(data => {
    $('main').html('<div class="users"></div>');
    $.each(data, (index, user) => {
      $('main').prepend(`<div class='user-tile'>
      <img src='${user.image}'>
      <a class='usersShow' href='/users/${user._id}'>
        <h2>${user.name}</h2>
      </a>
      <p>${user.bio}</p>
    </div>`);
    });
  });
}

function usersNew(){
  $('.modal-content').html(`
    <form method="post" action="${API}/users" class="usersCreate">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Add User</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="user_name">Name</label>
          <input class="form-control" type="text" name="user[name]" id="user_name" placeholder="Name">
        </div>
        <div class="form-group">
          <label for="user_image">Image</label>
          <input class="form-control" type="text" name="user[image]" id="user_image" placeholder="Image">
        </div>
        <div class="form-group">
          <label for="user_github">Github</label>
          <input class="form-control" type="text" name="user[github]" id="user_github" placeholder="Github">
        </div>
        <div class="form-group">
          <label for="user_bio">Bio</label>
          <textarea class="form-control" name="user[bio]" id="user_bio" placeholder="Bio"></textarea>
        </div>
        <div class="form-group">
          <label for="user_website">Website</label>
          <input class="form-control" type="text" name="user[website]" id="user_website" placeholder="Website">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>`);

  $('.modal').modal('show');
}

function usersCreate(e){
  e.preventDefault();
  $.ajax({
    url: $(this).attr('action'),
    type: $(this).attr('method'),
    data: $(this).serialize()
  }).done(user => {
    $('.users').prepend(`<div class='user-tile'>
    <img src='${user.image}'>
    <a class='usersShow' href='/users/${user._id}'>
      <h2>${user.name}</h2>
    </a>
    <p>${user.bio}</p>
  </div>`);
    $('.modal').modal('hide');
  });
}

function usersShow(e){
  e.preventDefault();
  console.log('usersShow is connected');
  console.log(`${API}${$(this).attr('href')}`);
  let url = '';

  if(`${API}${$(this).attr('href')}` === 'http://localhost:4000undefined') {
    url = `${$(this).attr('action')}`;
  } else {
    url = `${API}${$(this).attr('href')}`;
  }

  var data = {};
  data.urlinfo = url;
  $.ajax({
    url: data['urlinfo'],
    type: 'get'
  }).done(user => {
    console.log('we here homie');
    $('main').html('<div class="users"></div>');
    $('main').prepend(`<div class='user-tile'>
      <img src='${user.image}'>
      <a class='usersShow' href='/users/${user._id}'>
        <h2>${user.name}</h2>
      </a>
      <p>${user.bio}</p>
      <button data-url="${API}${$(this).attr('href')}" id="editbutton" class="btn btn-primary">Edit</button>
      <button data-url="${API}${$(this).attr('href')}" id="deletebutton" class="btn btn-primary">Delete</button>
    </div>`);
  });
}
