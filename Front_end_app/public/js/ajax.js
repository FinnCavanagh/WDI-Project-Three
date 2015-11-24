$(init);

var currentUser = null;

function init(){
  console.log(localStorage);
  $("form").on("submit", submitGroupForm);


// checkLoginState(); 
//functions to trigger on initialize
}

function checkIfAdmin(){
//checks to see if  a user is admin
}

function checkLoginState(){
  if (getToken()) {
    return loggedInState();
  } else {
    return loggedOutState();
  }
}
//check a token to confirm logged in or out

function loggedInState(){
  //maybe slap this on the page
  console.log("you logged in");
  var profile_picture = localStorage.getItem("profile_picture");
  $('.nav-wrapper img').attr('src', profile_picture);
  getUsersGroups();

  // var currentUser = 

//set view for logged in
}

function loggedOutState(){
  console.log("logged out")

//set view for logged out
}

function onGroupCreate(){
  ajaxRequest("POST", 'http://localhost:3000/api/groups', data, authenticationSuccessful);
}

function getUsersGroups(){
  console.log("getUsersGroups user is ", currentUser)
  groups = currentUser.groups
  
  // groups.populate('groups');
  console.log(groups);
  // return ajaxRequest("get", "http://localhost:3000/api/groups", null, showUsersGroups)

//get users current groups
}

function showUsersGroups(data) {
  console.log("users group")

  //chuck in the activity and profile stuff
  // return $.each(data.groups, function(index, group){
  //   $.groups
  // })
  // show all user groups using underscore rendering
}

function submitGroupForm(){
    event.preventDefault();

    var method = $(this).attr("method");
    var url    = "http://localhost:3000/api" + $(this).attr("action");
    var data   = $(this).serialize();


    return ajaxRequest(method, url, data, authenticationSuccessful);
  }

function submitActivityForm(){

}

function getAppFriends(){

}

function addUsersToGroup(){

}

function getActivities(){
//get a groups activities
}

function displayActivities(data){
//diaplay group activities underneth group header
}

function getUsersInGroup(){
//get all friends in group
}

function displayUsersInGroup(data){
//to show friends inside group
}

function getCurrentGroup(){
  return ajaxRequest("get", "http://localhost:3000/api/groups", null, function(){
    
  })
}


function displayCurrentGroup(data){
  //display group info
  getActivities()
}

function voteOnActivity(){
//user vote on activity
//click once for vote, twice to cancel
}

function commentOn(){
//add comment to activity
}

function instantMessageOn(){
//trigger instant message app
}

function instantMessageOff(){

}

function displayErrors(data){
//show any errors that come up on the app
}

function authenticationSuccessful(data) {
  currentUser = data.user;
  localStorage.setItem("profile_picture", data.user.profile_picture);
  localStorage.setItem("first_name", data.user.first_name);

  setToken(data.token);
  checkLoginState();
}

function setRequestHeader(xhr, settings) {
//for the token so we can see things that require a token
  var token = getToken();
  if(token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
}

function setToken(token) {
  return localStorage.setItem("token", token);
}

function getToken() {
  return localStorage.getItem("token");
}

function removeToken() {
  localStorage.clear();
}

function ajaxRequest(method, url, data, callback) {
  return $.ajax({
    method: method,
    url: url,
    data: data,
    beforeSend: setRequestHeader
  }).done(function(data){
    console.log("ajaxRequestReturn", data);
    callback(data);
  }).fail(function(data) {
    displayErrors(data.responseJSON.message);
  });
}