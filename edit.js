// ユーザー情報を編集する
const onButtonClickPutEdit = () => {
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


// アカウント削除
const onButtonClickDelete = () => {

  // 登録APIを呼び出す
  sendDeleteData(urlDelete).then(result => {
  });
}