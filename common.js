// [ユーザー登録]
const urlSignUp = 'https://teachapi.herokuapp.com/sign_up';
// [ユーザーログイン]
const urlSignIn = 'https://teachapi.herokuapp.com/sign_in';
//[ユーザー一覧]
const urlUsers = 'https://teachapi.herokuapp.com/users';
// [投稿一覧]
const urlPosts = 'https://teachapi.herokuapp.com/posts';


//MDNからコピペしてきた関数
// function postData(url = ``, data = {}) {
const sendData = (url = ``, data = {}, _method = "POST") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
    .then(response => response.json()); // レスポンスの JSON を解析
}

const sendGETData = (url = ``, data = {}, _method = "GET") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer",// no-referrer, *client
  })
    .then(response => response.json()); // レスポンスの JSON を解析
}

const sendDataWithToken = (url = ``, data = {}, _method = "POST") => {
  // 既定のオプションには * が付いています
  return fetch(url, {
    method: _method, // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
  })
    .then(response => response.json()); // レスポンスの JSON を解析
}