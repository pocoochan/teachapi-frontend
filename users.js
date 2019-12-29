// ----------ここからユーザー一覧をみる
const onButtonClickGetUsers = () => {
  console.log('onButtonClickGetUsers');


  // HTMLから値を取得する
  const page = document.getElementById('usersPage').value;
  const limit = document.getElementById('usersLimit').value;
  const query = document.getElementById('usersQuery').value;

  //[ユーザー一覧]
const urlUsers = 'https://teachapi.herokuapp.com/users';
console.log(urlUsers);

  var params = {}
  if (query === "" ) {
    params = {
      "page": page,
      "limit": limit
    }
  } else {
    params = {
      "page": page,
      "limit": limit,
      "query": query
    }
  }

  const qs = new URLSearchParams(params);
  sendGETDataUsers(`${urlUsers}?${qs}`, {}, "GET").then(result => {
    console.log(result)
  })

}