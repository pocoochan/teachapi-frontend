// タイムライン表示
const onButtonClickTimeline = () => {

    // [投稿一覧]
const urlTimeline = 'https://teachapi.herokuapp.com/posts';

  // HTMLから値を取得する
  const page = document.getElementById('timelinePage').value;
  const limit = document.getElementById('timelineLimit').value;
  const query = document.getElementById('timelineQuery').value;

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
  sendGETData(`${urlTimeline}?${qs}`, {}, "GET").then(result => {
    console.log(result)
  })
}