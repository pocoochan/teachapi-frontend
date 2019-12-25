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

  //URLとIDを結合する


  // 登録APIを呼び出す
  sendPUTData(urlEdit, data).then(result => {
    // ユーザー登録に成功して付与されたtokenをローカルストレージに保存する
    //ユーザー登録に成功したIDをローカルストレージに保存する
    console.log(result)

  });
}


// PUT https://teachapi.herokuapp.com/users/{id}
// body parameterで
// ```
// {
// 	"user_params": {
// 		"name": "名前を入れてね",
// 		"bio": "自己紹介を入れてね",
// 	}
// }
// ```
// headerにtoken入れる