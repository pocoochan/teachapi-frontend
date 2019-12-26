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
//[タイムライン表示]
const urlTimeline = `https://teachapi.herokuapp.com/users/${myId}/timeline`
// [新規投稿]
const urlNewPost = 'https://teachapi.herokuapp.com/posts';
// [投稿編集]
// const postId = localStorage.getItem('postId');
// const urlEditPost = `https://teachapi.herokuapp.com/posts/${number}`;


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
    .then(response => response.json()) // レスポンスの JSON を解析
    .then(json =>{
      let timeline = ""; // 指定した数のオブジェクトを入れる箱ができました
      json.forEach( element => {
        timeline += `<p>${element.text}</p>`
      });
      document.getElementById('posts_area').innerHTML = timeline;
    })
    .catch(error => console.log(`Error: $(error)`)); // エラー内容が出力される
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
      window.location.href = './index.html'; //アカウント登録画面に強制遷移
    })
}

const sendDeletePOST = (url = ``, _method = "DELETE") => {
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
      alert("投稿削除完了です！");
      window.location.href = './login.html'; //ログイン画面に強制遷移
    })
}

