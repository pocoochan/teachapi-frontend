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

    if (localStorage.token) {
      document.getElementById('login_data').innerHTML = 'ただいまログイン中です<br> <a href="" onclick="log_out();" class="btn btn-danger btn mb-4">ログアウト</a>';
    }
  });
}

// .catch(error => console.log(`Error: ${error}`));


// 新規投稿
const onButtonClickNewPost = () => {
  // HTMLから値を取得する
  const email = document.getElementById('newPost').value;

  //ばーちーさんのスラックより
  const data = {
    "post_params":{
      "text": "text"
      }
  }

  console.log(urlNewPost, data)


  // 登録APIを呼び出す
  sendDataWithToken(urlNewPost, data).then(result => {
    // ユーザー登録に成功して付与されたtokenをローカルストレージに保存する
    localStorage.token = result.token;

    // if (localStorage.token) {
    //   document.getElementById('login_data').innerHTML = 'ただいまログイン中です<br> <a href="" onclick="log_out();" class="btn btn-danger btn mb-4">ログアウト</a>';
    // }
    console.log(result);
  });
}

// .catch(error => console.log(`Error: ${error}`));
