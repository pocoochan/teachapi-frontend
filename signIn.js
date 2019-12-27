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
  });
}

// .catch(error => console.log(`Error: ${error}`));


// ----------ここから新規投稿
const onButtonClickNewPost = () => {
  // [新規投稿]
  const urlNewPost = 'https://teachapi.herokuapp.com/posts';

  // HTMLから値を取得する
  const text = document.getElementById('newPost').value;

  //ばーちーさんのスラックより
  const data = {
    "post_params":{
      "text": text
      }
  }

  console.log(urlNewPost, data)

  // 登録APIを呼び出す
  sendDataWithToken(urlNewPost, data).then(result => {

    console.log(result);
  });
}

 //----------自分の投稿一覧を表示
const showTimeline = () =>{

  // [MyTimeline表示]
  const myId = localStorage.getItem('id');
  const urlMyTimeline = `https://teachapi.herokuapp.com/users/${myId}/timeline`

  sendGETData02(`${urlMyTimeline}`, {}, "GET").then(result => {
  });
}

// ----------ここから投稿編集
const onButtonClickEditPost = () => {
  console.log('onButtonClickEditPost');

  // [投稿編集]
const urlEditPost = `https://teachapi.herokuapp.com/posts/${number}`;

  // HTMLから値を取得する
  const number = document.getElementById('postId').value;
  const text = document.getElementById('editPost').value;


  const data = {
    "post_params": {
      "text": text
    }
  }

  console.log(urlEditPost, data)

  // 登録APIを呼び出す
  sendPUTData(urlEditPost, data).then(result => {
    console.log(result)
  });
}

// ----------ここから投稿削除
const onButtonClickPostDelete = () => {
  // [URL]
  const urlPostDelete = `https://teachapi.herokuapp.com/posts/${number}`;

  const number = document.getElementById('deletePostId').value;

  // 登録APIを呼び出す
  sendDeletePOST(urlPostDelete).then(result => {
  });
}