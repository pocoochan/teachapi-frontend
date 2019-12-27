// ----------ユーザー情報を編集する
const onButtonClickPutEdit = () => {
  //[ユーザー編集]
const myId = localStorage.getItem('id');
const urlEdit = `https://teachapi.herokuapp.com/users/${myId}`;

  console.log('onButtonClickPutEdit');

  // HTMLから値を取得する
  const name = document.getElementById('editName').value;
  const bio = document.getElementById('editBio').value;

  const data = {
    "user_params": {
      "name": name,
      "bio": bio
    }
  }

  console.log(urlEdit, data)


  // 登録APIを呼び出す
  sendPUTData(urlEdit, data).then(result => {
    console.log(result)
  });
}


// ----------アカウント削除
const onButtonClickDelete = () => {

  //[アカウント削除]
const urlDelete = `https://teachapi.herokuapp.com/users/${myId}`;

  // 登録APIを呼び出す
  sendDeleteData(urlDelete).then(result => {
  });
}