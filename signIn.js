/**
 * ログインボタン押下時の処理
 */
const onButtonClickSignIn = () => {
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
  });
}