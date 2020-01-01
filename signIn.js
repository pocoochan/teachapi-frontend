/**
 * ログインボタン押下時の処理
 */
const onButtonClickSignIn = () => {
  // [ユーザーログイン]
const urlSignIn = 'https://teachapi.herokuapp.com/sign_in';

  // HTMLから値を取得する
  const email = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  const passwordConfirmation = document.getElementById('signInPasswordConfirmation').value;

  //ばーちーさんのスラックより
  const data = {
    "sign_in_user_params": {
      "email": email,
      "password": password,
      "passwordConfirmation": passwordConfirmation
      }
  }
  console.log(urlSignIn, data)

  // 登録APIを呼び出す
  sendDataWithToken(urlSignIn, data).then(result => {
    // ユーザー登録に成功して付与されたtokenをローカルストレージに保存する
    localStorage.token = result.token;
    localStorage.id = result.id;
    localStorage.name = result.name;
    localStorage.bio = result.bio;
    window.location.href = 'mypage.html';
  });
}

// .catch(error => console.log(`Error: ${error}`));


