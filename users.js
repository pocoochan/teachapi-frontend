const onButtonClickGetUsers = () => {
  console.log('onButtonClickGetUsers');

  // HTMLから値を取得する
  const page = document.getElementById('usersPage').value;
  const limit = document.getElementById('usersLimit').value;
  const query = document.getElementById('usersQuery').value;

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
  sendGETData(`${urlUsers}?${qs}`, {}, "GET").then(result => {
    console.log(result)
  })


}



// page: ページの番号(数字)
// limit: 1ページあたり何個あるか
// query: 単語を入れると検索できる
// headerにtoken入れる