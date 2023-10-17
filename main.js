$(document).ready(function() {


  const followers = $('#cep').val();
  const following = $('#cep').val();
  const link = $('#cep').val();

  const endpoint = `https://api.github.com/users/wandersonmanto`;

  fetch(endpoint)
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
    $('#name').text(json.name);
    $('#userName').text(json.login);
    $('#avatar').prop('src', json.avatar_url);
    $('#repos').text(json.public_repos);
    $('#followers').text(json.followers);
    $('#following').text(json.following);
    $('#link').prop('href', json.html_url);
    
    
  })
  
})