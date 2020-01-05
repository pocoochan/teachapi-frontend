//----------ユーザー登録
const onButtonClickSignUp = () => {
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

  console.log(urlSignUp)

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
    })
    .catch(error => {
      console.error(error);
    });
};


//----------ユーザーログイン
const onButtonClickSignIn = () => {
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
  console.log(urlSignIn)

  fetch(urlSignIn, {
    method: 'POST',
    body: JSON.stringify(signInParams),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      localStorage.token = response.token;
      localStorage.id = response.id;
      localStorage.name = response.name;
      localStorage.bio = response.bio;
      window.location.href = 'mypage.html';
    })
    .catch(error => {
      console.error(error);
    })
};


//----------ユーザー一覧をみる
const onButtonClickGetUsers = () => {
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
    // .then(response => {
    //   console.log('Success:', JSON.stringify(response));
    // })
    .then(json => {
      let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
      json.forEach(element => {
        if (element.is_following === true) {
          timeline += `<li class="userareaBox">
            <div class="userElement">
              ${element.name}
            </div>
            <div class="userElement">
              <div class="">
                <button class="btn btn-secondary btn-sm" onclick="Unfollow(${element.id})">フォロー解除</button>
              </div>
            </div>
          </li>\n`;
        } else if (element.is_following === false) {
          timeline += `<li class="">
          <div class="userElement">
            ${element.name}
          </div>
          <div class="userElement">
            <div class="">
              <button  class="btn btn-danger btn-sm" onclick="follow(${element.id})">フォローする</button>
            </div>
          </div>
        </li>\n`;
        }
      });
      document.getElementById('users_area').innerHTML = timeline;
    })
    .catch(error => {
      console.error(error);
    });
};

//----------ユーザー編集
const onButtonClickPutEdit = () => {
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
    })
    .catch(error => {
      console.error(error);
    });
};
//自分用メモ：
//ローカルストレージに編集後のnameとbioが保存されるようになってる？
//名前、自己紹介どちらかだけ編集したい場合の実装
//編集した際に、上に表示している現在の名前、自己紹介が瞬時に変わらない。ログインしなおしたら変更なってる


//----------ユーザー削除
const onButtonClickDelete = () => {
  const myId = localStorage.getItem('id');
  const urlUserDelete = `https://teachapi.herokuapp.com/users/${myId}`;

  fetch(urlUserDelete, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(json => {
      localStorage.clear();
      alert("ユーザー削除完了です！");
      window.location.href = 'index.html';
    })
    .catch(error => {
      console.error(error);
    });
};


//----------投稿作成
const onButtonClickNewPost = () => {
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
    })
    .catch(error => {
      console.error(error);
    });
};


//---------タイムライン表示
const onButtonClickTimeline = () => {
  const urlAllTimeline = 'https://teachapi.herokuapp.com/posts';
  const page = document.getElementById('timelinePage').value;
  const limit = document.getElementById('timelineLimit').value;
  const query = document.getElementById('timelineQuery').value;

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
    .then(json => {
      let timeline = "";
      json.forEach(element => {
        timeline += `<p>${element.user.name} : ${element.text}</p>`
      });
      document.getElementById('allPosts_area').innerHTML = timeline;
    })
    .catch(error => {
      console.error(error);
    });
};


//----------自分のタイムライン
const showTimeline = () => {
  const myId = localStorage.getItem('id');
  const urlMyTimeline = `https://teachapi.herokuapp.com/users/${myId}/timeline`

  fetch(`${urlMyTimeline}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(json => {
      let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
      json.forEach(element => {
        timeline += `<p>${element.text}</p>`
      });
      document.getElementById('myposts_area').innerHTML = timeline;
    })
    // .then(
    // location.reload() これ１回だけしたいのに
    // )
    .catch(error => {
      console.error(error);
    });
};


//----------投稿編集
const onButtonClickEditPost = () => {
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
    })
    .catch(error => {
      console.error(error);
    });
};


//----------投稿削除
const onButtonClickDeletePost = () => {
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
      console.log('Success:', JSON.stringify(response));
    })
    .then(json => {
      localStorage.clear();
      alert("投稿削除完了です！");
    })
    .catch(error => {
      console.error(error);
    });
};


//----------フォロー
function follow(id)  {
  // const number = document.getElementById('follow').value;
  const urlFollow = `https://teachapi.herokuapp.com/users/${id}/follow`;
  console.log(urlFollow)
  fetch(urlFollow, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(console.log("フォロー完了")
    )
    .catch(error => {
      console.error(error);
    });
};


//----------フォローを外す
function Unfollow (id) {
  // const number = document.getElementById('Unfollow').value;
  const urlUnfollow = `https://teachapi.herokuapp.com/users/${id}/follow`;
  console.log(urlUnfollow)
  fetch(urlUnfollow, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(console.log("フォロー解除完了です！")
    )
    .catch(error => {
      console.error(error);
    });
};
//自分メモ：
//ユーザー一覧とリンクさせてボタンを押したらフォロー&フォロー解除
//できるようにしたけど、アロー関数だとうまくいかなかった。


//----------私がフォロー中のユーザー一覧
const myFollow = () => {
  const number = document.getElementById('myfollow').value;
  const urlFollowUser = `https://teachapi.herokuapp.com/users/${number}/followings`;


  fetch(urlFollowUser, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(json => {
      let userText = "";
      json.forEach(element => {
        userText += `<p>${element.name}</p>`
      });
      document.getElementById('followUsers').innerHTML = userText;
    })
    .catch(error => {
      console.error(error);
    });
};


//----------フォロワー一覧
const follower = () => {
  const number = document.getElementById('follower').value;
  const urlFollower = `https://teachapi.herokuapp.com/users/${number}/followers`;

  fetch(urlFollower, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(json => {
      let userText = "";
      json.forEach(element => {
        userText += `<p>${element.name}</p>`
      });
      document.getElementById('follower').innerHTML = userText;
    })
    .catch(error => {
      console.error(error);
    });
};

//----------チャットルーム作成
const onButtonClickNewChatRooms = () => {
  const urlChatRooms = 'https://teachapi.herokuapp.com/chatrooms';
  const name = document.getElementById('newChatRooms').value;
  const chatRoomsParams = {
    "chatroom_params": {
      "name": name
    }
  };

  fetch(urlChatRooms, {
    method: 'POST',
    body: JSON.stringify(chatRoomsParams),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
    })
    .catch(error => {
      console.error(error);
    });
};

//----------チャット一覧
const onButtonClickAllChatRooms = () => {
  const urlAllChatRooms = 'https://teachapi.herokuapp.com/chatrooms';
  const page = document.getElementById('chatRoomsPage').value;
  const limit = document.getElementById('chatRoomsLimit').value;

  var chatRoomsParams = {
    "Params": {
      "page": page,
      "limit": limit
    }
  };

  const chatRoomsQs = new URLSearchParams(chatRoomsParams);

  fetch(`${urlAllChatRooms}?${chatRoomsQs}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(json => {
      let chatrooms = "";
      json.forEach(element => {
        chatrooms += `<p>${element.name}</p>`
      });
      document.getElementById('chat_area').innerHTML = chatrooms;
    })
    .then(response => {
      console.log('Success:', JSON.stringify(response));
    })
    .catch(error => {
      console.error(error);
    });
};

//----------チャットルームに参加
const onButtonClickjoinChatrooms = () => {
  const number = document.getElementById('chatroomID').value;
  const urlJoinChatRooms = `https://teachapi.herokuapp.com/chatrooms/${number}/join`;
  // const name = document.getElementById('newChatRooms').value;

  console.log(urlJoinChatRooms)

  fetch(urlJoinChatRooms, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
    })
    .catch(error => {
      console.error(error);
    });
};

//----------チャットを送る
const onButtonClickChatMessage = () => {
  const number = document.getElementById('chatroomID').value;
  const urlChatMessage = `https://teachapi.herokuapp.com/chatrooms/${number}/messages`;
  const text = document.getElementById('chatMessage').value;
  const messageParams = {
    "message_params": {
      "text": text
    }
  };

  fetch(urlChatMessage, {
    method: 'POST',
    body: JSON.stringify(messageParams),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
    })
    .catch(error => {
      console.error(error);
    });
};

//----------チャットルームメッセージ一覧
const onButtonClickAllChatMessage = () => {
  // const myId = localStorage.getItem('id');
  const number = document.getElementById('allChatMessage').value;
  const urlAllChatMessage = `https://teachapi.herokuapp.com/chatrooms/${number}/messages`

  fetch(`${urlAllChatMessage}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.token
    }
  }).then(response => response.json())
    .then(json => {
      let timeline = "";
      json.forEach(element => {
        timeline += `<p>${element.text}</p>`
      });
      console.log(json)
      document.getElementById('chatMessage_area').innerHTML = timeline;
    })
    .catch(error => {
      console.error(error);
    });
};


//ログアウト
const onButtonClickLogout = () => {
  localStorage.clear();
  alert("ログアウトしました！");
  window.location.href = './login.html'; //ログイン画面に強制遷移
}