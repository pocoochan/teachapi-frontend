// [ユーザー登録]
const urlSignUp =  'https://teachapi.herokuapp.com/sign_up';
// [ユーザーログイン]
const urlSignIn =  'https://teachapi.herokuapp.com/sign_in';
// [投稿一覧]
const urlPosts =  'https://teachapi.herokuapp.com/posts';

fetch

// []　配列
// {} オブジェクト

//MDNからコピペしてきた関数
function postData(url = ``, data = {}) {
  // 既定のオプションには * が付いています
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
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



//ばーちーさんのスラックより
const data = {
	"sign_up_user_params": {
		"name": "名前を入れてね",
		"bio": "自己紹介を入れてね",
    "email": "email",
    "password": "password",
    "password_confirmation": "password"
	}
}// あとから書き換えられないように安全のためにconstでかこう！

console.log( 'start' )

//使ってみる
postData(urlSignUp, data)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })

console.log( 'end' )