// []　配列
// {} オブジェクト


// サインアップを押されたらフェッチを実行するミドルウェア
/**
 * 登録ボタン押下時の処理
 */
const onButtonClickSignUp = () => {
  // HTMLから値を取得する
  const name = document.getElementById('signUpName').value;
  const bio = document.getElementById('signUpBio').value;
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  const passwordConfirmation = document.getElementById('signUpPasswordConfirmation').value;

  //ばーちーさんのスラックより
  const data = {
    "sign_up_user_params": {
      "name": name,
      "bio": bio,
      "email": email,
      "password": password,
      "password_confirmation": passwordConfirmation
    }
  }


  console.log(urlSignUp, data)


  // 登録APIを呼び出す
  sendData(urlSignUp, data).then(result => {
    // ユーザー登録に成功して付与されたtokenをローカルストレージに保存する
    localStorage.token = result.token;
    localStorage.id = result.id;
    localStorage.name = result.name;
    localStorage.bio = result.bio;
    localStorage.postId = result.postId;
    console.log(result)
  });
}


// あとから書き換えられないように安全のためにconstでかこう！

// console.log( 'start' )

// //使ってみる
// sendData(urlSignUp, data)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   })

// console.log( 'end' )



  // function OnButtonClick() {
  //   target = document.getElementById("output");
  //   target.innerHTML = "Penguin";
  // }

  // ボタンを押したらAPIがフェッチされるようにする
// ミドルウェア
// ボタンを押したらミドルウェアを呼び出す
// ボタン押されました
// 間の関数をつくる
// フェッチします
