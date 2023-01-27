let news = [];
let menus = document.querySelectorAll(".menus button");

console.log(location.origin);

const getLatestNews = async () => {
  const apiKey = "e556f84eaf3f41129a1cc6bce089b6fb";
  let url = `https://newsapi.org/v2/everything?q=top-headlines?country=us&apiKey=${apiKey}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.articles.forEach((article) => {
        console.log("kekeke");
      });
    });

  // let header = new Headers({ "X-Api-Key": "e556f84eaf3f41129a1cc6bce089b6fb" });
  // let response = await fetch(url);
  // let data = await response.json();
  // news = data.articles;
  // console.log(news);

  render();
};
const getNewsByTopic = (event) => {
  console.log("click", EventTarget);
};

const render = () => {
  const newsHTML = document.getElementById("listArticles");
  newsHTML.innerHTML = "";
};
getLatestNews();
