const getLatestNews = async () => {
  // let url = new URL(`http://eventregistry.org/api/v1/article/getArticles`);
  // let header = new Headers({
  //   apiKey: "74117c8d-284a-462f-97b3-480f8908d2d3",
  // });
  await fetch(
    "http://eventregistry.org/api/v1/article/getArticles?apiKey=74117c8d-284a-462f-97b3-480f8908d2d3",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Test", body: "hello", userId: 1 }),
    }
  ).then((response) => {
    console.log(response);
    // response.json();
  });
};
getLatestNews();
console.log(location.origin);
