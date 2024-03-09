
document.getElementById('submit').addEventListener('click', function () {
  const name = document.getElementById('name').value;
  const text = document.getElementById('message').value;

  const postsDiv = document.querySelector('.posts');

  const newPost = document.createElement('div');

  const newPostText = document.createElement('p');
  const newPostTextNode = document.createTextNode(text);
  newPostText.append(newPostTextNode);

  const newPostName = document.createElement('p');
  const newPostNameNode = document.createTextNode('Posted By: ' + name);
  newPostName.appendChild(newPostNameNode);

  const newPostHr = document.createElement('hr');

  newPost.append(newPostText);
  newPost.append(newPostName);
  newPost.append(newPostHr);

  postsDiv.append(newPost);

  console.log(name, text);
});

