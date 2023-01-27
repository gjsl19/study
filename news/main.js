let news = [];
let menus = document.querySelectorAll(".menus button");

console.log(location.origin);

const getLatestNews = async () => {
  let url =
    "https://newsapi.org/v2/everything?" +
    "q=Apple&" +
    "from=2022-05-19&" +
    "sortBy=popularity&" +
    "apiKey=e556f84eaf3f41129a1cc6bce089b6fb";

  let req = new Request(url);

  fetch(req)
    .then((response) => response.json())
    .then((data) => console.log(data));
  // console.log(data);

  render();
};
const getNewsByTopic = (event) => {
  console.log("click", EventTarget);
};

const render = () => {
  let newsHTML = "";
  console.log(newsHTML);
  newsHTML = news
    .map((item) => {
      return `<div class="articles-item">
      <a href="${item.url}">
    <figure class="news-img">
      <img
        src="${item.urlToImage}"
      />
    </figure></a>
    <a href="${item.url}">
    <div class="articles-box">
      <h2 class="title">${item.title}</h2>
      <p class="content">${item.content}</p>
      <div>
        <span class="date">${item.source.name}</span>
        <span class="writer">${item.author}</span>
      </div>
    </div></a>
  </div>`;
    })
    .join("");

  document.getElementById("listArticles").innerHTML = newsHTML;
};
getLatestNews();
