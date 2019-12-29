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
    console.log(result);
  });
}

// ----------ここから投稿編集
const onButtonClickEditPost = () => {
  console.log('onButtonClickEditPost');

  // HTMLから値を取得する
  const number = document.getElementById('postId').value;
  const text = document.getElementById('editPost').value;

  // [投稿編集]
const urlEditPost = `https://teachapi.herokuapp.com/posts/${number}`;

console.log(urlEditPost);

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

  const number = document.getElementById('deletePostId').value;

  // [URL]
  const urlPostDelete = `https://teachapi.herokuapp.com/posts/${number}`;

  // 登録APIを呼び出す
  sendDeletePOST(urlPostDelete).then(result => {
    console.log(result)
  });
}
//投稿削除できない問題
// エラー内容　Cannot access 'number' before initialization
//HTMLからの値を先にとってきたら治った。なんで？