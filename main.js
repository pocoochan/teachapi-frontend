//----------1.ユーザー登録
document.getElementById("signUpSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const urlSignUp = 'https://teachapi.herokuapp.com/sign_up';
  const name = document.getElementById('signUpName').value;
  const bio = document.getElementById('signUpBio').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  const passwordConfirmation = document.getElementById('signUpPasswordConfirmation').value;
  const signUpParams = {
    "sign_up_user_params": {
      "name": name,
      "bio": bio,
      "email": email,
      "password": password,
      "password_confirmation": passwordConfirmation
    }
  };

  fetch(urlSignUp, {
    method: 'POST',
    body: JSON.stringify(signUpParams),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      localStorage.token = response.token
      localStorage.id = response.id;
      const signUpRender = document.createElement("p");
      signUpRender.textContent = JSON.stringify(response);
      const signUp = document.querySelector("#signUp");
      signUp.appendChild(signUpRender);
    })
    .catch(error => {
      console.error(error);
      const signUpRender = document.createElement("p");
      signUpRender.textContent = JSON.stringify(response);
      const signUp = document.querySelector("#signUp");
      signUp.appendChild(signUpRender);
    });
});


//----------2.ユーザーログイン
document.getElementById("signInSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const urlSignIn = 'https://teachapi.herokuapp.com/sign_in';
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  const passwordConfirmation = document.getElementById('signInPasswordConfirmation').value;
  const signInParams = {
    "sign_in_user_params": {
      "email": email,
      "password": password,
      "passwordConfirmation": passwordConfirmation
    }
  };

  fetch(urlSignIn, {
    method: 'POST',
    body: JSON.stringify(signInParams),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      localStorage.token = response.token
      const signInRender = document.createElement("p");
      signInRender.textContent = JSON.stringify(response);
      const signIn = document.querySelector("#signIn");
      signIn.appendChild(signInRender);
    })
    .catch(error => {
      console.error(error);
      const signInRender = document.createElement("p");
      signInRender.textContent = JSON.stringify(response);
      const signIn = document.querySelector("#signIn");
      signIn.appendChild(signInRender);
    });
});


//----------3.ユーザー一覧
document.getElementById("usersSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const urlUsers = 'https://teachapi.herokuapp.com/users';
  const page = document.getElementById('usersPage').value;
  const limit = document.getElementById('usersLimit').value;
  const query = document.getElementById('usersQuery').value;

  var usersParams = {}
  if (query === "") {
    usersParams = {
      "page": page,
      "limit": limit
    }
  } else {
    usersParams = {
      "page": page,
      "limit": limit,
      "query": query
    }
  };

  const usersQs = new URLSearchParams(usersParams);

  fetch(`${urlUsers}?${usersQs}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      // localStorage.token = response.token
      const usersRender = document.createElement("p");
      usersRender.textContent = JSON.stringify(response);
      const users = document.querySelector("#users");
      users.appendChild(usersRender);
    })
    .catch(error => {
      console.error(error);
      const usersRender = document.createElement("p");
      usersRender.textContent = JSON.stringify(response);
      const users = document.querySelector("#users");
      users.appendChild(usersRender);
    });
});

//----------4.ユーザー編集
document.getElementById("userEditSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const myId = localStorage.getItem('id');
  const urlUserEdit = `https://teachapi.herokuapp.com/users/${myId}`;
  const editName = document.getElementById('editName').value;
  const editBio = document.getElementById('editBio').value;
  const userEditParams = {
    "user_params": {
      "name": editName,
      "bio": editBio
    }
  };

  fetch(urlUserEdit, {
    method: 'PUT',
    body: JSON.stringify(userEditParams),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      const userEditRender = document.createElement("p");
      userEditRender.textContent = JSON.stringify(response);
      const usersEdit = document.querySelector("#usersEdit");
      usersEdit.appendChild(userEditRender);
    })
    .catch(error => {
      console.error(error);
      const userEditRender = document.createElement("p");
      userEditRender.textContent = JSON.stringify(response);
      const usersEdit = document.querySelector("#usersEdit");
      usersEdit.appendChild(userEditRender);
    });
});

//----------5.ユーザー削除
document.getElementById("userDeleteSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const myId = localStorage.getItem('id');
  const urlUserDelete = `https://teachapi.herokuapp.com/users/${myId}`;
  // const deleteId= document.getElementById('deleteId').value;

  fetch(urlUserDelete, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      localStorage.clear();
      alert("ユーザー削除完了です！");
    })
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      const userDeleteRender = document.createElement("p");
      userDeleteRender.textContent = JSON.stringify(response);
      const userDelete = document.querySelector("#userDelete");
      userDelete.appendChild(userDeleteRende);
    })
    .catch(error => {
      console.error(error);
      const userDeleteRender = document.createElement("p");
      userDeleteRender.textContent = JSON.stringify(response);
      const userDelete = document.querySelector("#userDelete");
      userDelete.appendChild(userDeleteRende);
    });
});


//----------6.ユーザーのタイムライン
document.getElementById("allTimelineSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const urlAllTimeline = 'https://teachapi.herokuapp.com/posts';
  const page = document.getElementById('timeLinePage').value;
  const limit = document.getElementById('timeLineLimit').value;
  const query = document.getElementById('timeLineQuery').value;

  var timelineParams = {}
  if (query === "") {
    usersParams = {
      "page": page,
      "limit": limit
    }
  } else {
    timelineParams = {
      "page": page,
      "limit": limit,
      "query": query
    }
  };

  const timelineQs = new URLSearchParams(timelineParams);

  fetch(`${urlAllTimeline}?${timelineQs}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      const allTimelineRender = document.createElement("p");
      allTimelineRender.textContent = JSON.stringify(response);
      const allTimeline = document.querySelector("#allTimeline");
      allTimeline.appendChild(allTimelineRender);
    })
    .catch(error => {
      console.error(error);
      const allTimelineRender = document.createElement("p");
      allTimelineRender.textContent = JSON.stringify(response);
      const allTimeline = document.querySelector("#allTimeline");
      allTimeline.appendChild(allTimelineRender);
    });
});


//----------7.投稿作成
document.getElementById("newPostSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const urlNewPost = 'https://teachapi.herokuapp.com/posts';
  const text = document.getElementById('newPostWrite').value;
  const newPostParams = {
    "post_params": {
      "text": text
    }
  };

  fetch(urlNewPost, {
    method: 'POST',
    body: JSON.stringify(newPostParams),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      const newPostRender = document.createElement("p");
      newPostRender.textContent = JSON.stringify(response);
      const newPost = document.querySelector("#newPost");
      newPost.appendChild(newPostRender);
    })
    .catch(error => {
      console.error(error);
      const newPostRender = document.createElement("p");
      newPostRender.textContent = JSON.stringify(response);
      const newPostWrite = document.querySelector("#newPostWrite");
      newPostWrite.appendChild(newPostRender);
    });
});


//----------8.投稿編集
document.getElementById("editPostSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const number = document.getElementById('editPostId').value;
  const text = document.getElementById('editPostWrite').value;
  const urlEditPost = `https://teachapi.herokuapp.com/posts/${number}`;
  const editPostParams = {
    "post_params": {
      "text": text
    }
  };

  fetch(urlEditPost, {
    method: 'PUT',
    body: JSON.stringify(editPostParams),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      const editPostRender = document.createElement("p");
      editPostRender.textContent = JSON.stringify(response);
      const editPost = document.querySelector("#editPost");
      editPost.appendChild(editPostRender);
    })
    .catch(error => {
      console.error(error);
      const editPostRender = document.createElement("p");
      editPostRender.textContent = JSON.stringify(response);
      const editPost = document.querySelector("#editPost");
      editPost.appendChild(editPostRender);
    });
});


//----------9.投稿削除
document.getElementById("deletePostSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const number = document.getElementById('deletePostId').value;
  const urlPostDelete = `https://teachapi.herokuapp.com/posts/${number}`;

  fetch(urlPostDelete, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      localStorage.clear();
      alert("投稿削除完了です！");
    })
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      const postDeleteRender = document.createElement("p");
      postDeleteRender.textContent = JSON.stringify(response);
      const postDelete = document.querySelector("#postDelete");
      postDelete.appendChild(postDeleteRender);
    })
    .catch(error => {
      console.error(error);
      const postDeleteRender = document.createElement("p");
      postDeleteRender.textContent = JSON.stringify(response);
      const postDelete = document.querySelector("#postDelete");
      postDelete.appendChild(postDeleteRender);
    });
});


//----------10.自分のタイムライン
document.getElementById("myTimelineSubmit").addEventListener("click", (event) => {
  event.preventDefault();
  const myId = localStorage.getItem('id');
  const urlMyTimeline = `https://teachapi.herokuapp.com/users/${myId}/timeline`
  const page = document.getElementById('myTimeLinePage').value;
  const limit = document.getElementById('myTimeLineLimit').value;
  const query = document.getElementById('myTimeLineQuery').value;

  console.log(urlMyTimeline)

  var timelineParams = {}
  if (query === "") {
    usersParams = {
      "page": page,
      "limit": limit
    }
  } else {
    timelineParams = {
      "page": page,
      "limit": limit,
      "query": query
    }
  };

  const timelineQs = new URLSearchParams(timelineParams);

  fetch(`${urlMyTimeline}?${timelineQs}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      const myTimelineRender = document.createElement("p");
      myTimelineRender.textContent = JSON.stringify(response);
      const myTimeline = document.querySelector("#myTimeline");
      myTimeline.appendChild(myTimelineRender);
    })
    .catch(error => {
      console.error(error);
      const myTimelineRender = document.createElement("p");
      myTimelineRender.textContent = JSON.stringify(response);
      const myTimeline = document.querySelector("#myTimeline");
      myTimeline.appendChild(myTimelineRender);
    });
});

function follow(id) {

  const url = `https://teachapi.herokuapp.com/users/${id}/follow`;
  // Headersの用意
  const myHeaders = new Headers();
  // Headersにjsonを読み込むものを挿入
  myHeaders.append("Content-Type", "application/json");

  //ログインしているユーザーのtokenを取得してヘッダーに格納する。
  myHeaders.append("Authorization", `Bearer ${localStorage.token}`);


  const requestOptions = {
      method: "POST",
      headers: myHeaders
  };

  fetch(url, requestOptions)
      .then(console.log("フォロー完了"));
}