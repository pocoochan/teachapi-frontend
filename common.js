// //MDNからコピペしてきた関数
// // function postData(url = ``, data = {}) {
// const sendData = (url = ``, data = {}, _method = "POST") => {
//   // 既定のオプションには * が付いています
//   return fetch(url, {
//     method: _method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json; charset=utf-8"
//     },
//     body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
//   })
//     .then(response => response.json()) // レスポンスの JSON を解析
//     .then(json => {
//       window.location.href = './mypage.html';
//     })
//   // .then(json =>{
//   //   console.log(json)
//   //window.location.href = './mypage.html'; //アカウント登録画面に強制遷移
//   // });
// }

// //---------★投稿一覧Click用
// const sendGETData = (url = ``, data = {}, _method = "GET") => {
//   // 既定のオプションには * が付いています
//   return fetch(url, {
//     method: _method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "Authorization": "Bearer " + localStorage.getItem("token")
//     }
//   })
//     .then(response => response.json()) // レスポンスの JSON を解析
//     .then(json => {
//       let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
//       json.forEach(element => {
//         console.log(element);
//         timeline += `<p>${element.text}</p>`
//       });
//       document.getElementById('posts_area').innerHTML = timeline;
//     })
//   // .catch(error => console.log(`Error: $(error)`)); // エラー内容が出力される
// }

// //---------★ユーザー一覧Click用
// const sendGETDataUsers = (url = ``, data = {}, _method = "GET") => {
//   // 既定のオプションには * が付いています
//   return fetch(url, {
//     method: _method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "Authorization": "Bearer " + localStorage.getItem("token")
//     }
//   })
//     .then(response => response.json()) // レスポンスの JSON を解析
//     .then(json => {
//       let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
//       console.log(json);
//       json.forEach(element => {
//         console.log(element);
//         timeline += `<p>${element.name}</p>`
//       });
//       document.getElementById('users_area').innerHTML = timeline;
//     })
//   // .catch(error => console.log(`Error: $(error)`)); // エラー内容が出力される
// }

// //---------★Show用
// const sendGETData02 = (url = ``, data = {}, _method = "GET") => {
//   // 既定のオプションには * が付いています
//   return fetch(url, {
//     method: _method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "Authorization": "Bearer " + localStorage.getItem("token")
//     }
//   })
//     .then(response => response.json()) // レスポンスの JSON を解析
//     .then(json => {
//       let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
//       json.forEach(element => {
//         timeline += `<p>${element.text}</p>`
//       });
//       document.getElementById('myposts_area').innerHTML = timeline;
//     })
//   // .catch(error => console.log(`Error: $(error)`)); // エラー内容が出力される
// }

// // const sendDataWithToken = (url = ``, data = {}, _method = "POST") => {
// //   // 既定のオプションには * が付いています
// //   return fetch(url, {
// //     method: _method, // *GET, POST, PUT, DELETE, etc.
// //     headers: {
// //       "Content-Type": "application/json; charset=utf-8",
// //       "Authorization": "Bearer " + localStorage.getItem("token")
// //     },
// //     body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
// //   })
// //   .then(
// //     () => location.reload()
// //   )
// // }

// const sendPUTData = (url = ``, data = {}, _method = "PUT") => {
//   // 既定のオプションには * が付いています
//   return fetch(url, {
//     method: _method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "Authorization": "Bearer " + localStorage.getItem("token")
//     },
//     body: JSON.stringify(data || "null"),
//   })
//     .then(response => response.json()); // レスポンスの JSON を解析
// }

// const sendDeleteData = (url = ``, _method = "DELETE") => {
//   // 既定のオプションには * が付いています
//   return fetch(url, {
//     method: _method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "Authorization": "Bearer " + localStorage.getItem("token")
//     }
//   })
//     .then(response => response.json()) // レスポンスの JSON を解析
//     .then(json => {
//       localStorage.clear();
//       alert("ユーザー削除完了です！");
//       window.location.href = './index.html'; //アカウント登録画面に強制遷移
//     })
// }

// const sendDeletePOST = (url = ``, _method = "DELETE") => {
//   // 既定のオプションには * が付いています
//   return fetch(url, {
//     method: _method, // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       "Authorization": "Bearer " + localStorage.getItem("token")
//     }
//   })
//     .then(response => response.json()) // レスポンスの JSON を解析
//     .then(json => {
//       localStorage.clear();
//       alert("投稿削除完了です！");
//       window.location.href = './login.html'; //ログイン画面に強制遷移
//     })
// }


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

//----------フォロー
const follow = () => {
  const number = document.getElementById('follow').value;
  const urlFollow = `https://teachapi.herokuapp.com/users/${number}/follow`;

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
const Unfollow = () => {
  const number = document.getElementById('Unfollow').value;
  const urlUnfollow = `https://teachapi.herokuapp.com/users/${number}/follow`;

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

