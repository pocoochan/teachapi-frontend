// [ユーザー登録]
const urlSignUp = 'https://teachapi.herokuapp.com/sign_up';
// [ユーザーログイン]
const urlSignIn = 'https://teachapi.herokuapp.com/sign_in';
//[ユーザー一覧]
const urlUsers = 'https://teachapi.herokuapp.com/users';
//[ユーザー編集]
const myId = localStorage.getItem('id');
const urlEdit = `https://teachapi.herokuapp.com/users/${myId}`;
//[アカウント削除]
const urlDelete = `https://teachapi.herokuapp.com/users/${myId}`;

// [投稿一覧]
const urlPosts = 'https://teachapi.herokuapp.com/posts';


//MDNからコピペしてきた関数
// function postData(url = ``, data = {}) {
const sendData = (url = ``, data = {}, _method = "POST") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
    .then(response => response.json()); // レスポンスの JSON を解析
}

const sendGETData = (url = ``, data = {}, _method = "GET") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(response => response.json()); // レスポンスの JSON を解析
}

const sendDataWithToken = (url = ``, data = {}, _method = "POST") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
    .then(response => response.json()); // レスポンスの JSON を解析
}

const sendPUTData = (url = ``, data = {}, _method = "PUT") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify(data || "null"),
  })
    .then(response => response.json()); // レスポンスの JSON を解析
}

const sendDeleteData = (url = ``, _method = "DELETE") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
    .then(response => response.json()) // レスポンスの JSON を解析
    .then(json =>{
      localStorage.clear();
      alert("ユーザー削除完了です！");
    })
}
