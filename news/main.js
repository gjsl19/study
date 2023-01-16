let news = [];

let menus = document.querySelectorAll(".menus button");
menus.forEach((menu) =>
  menu.addEventListener("click", () => getNewsByTopic(event))
);

const getLatestNews = async () => {
  let url = new URL(
    "https://newsapi.org/v2/everything?q=tesla&from=2023-01-13&sortBy=publishedAt&apiKey=e556f84eaf3f41129a1cc6bce089b6fb"
    // "https://api.newscatcherapi.com/v2/latest_headlines?countries=kr&topic=business&page_size=10"
  );
  let header = new Headers({
    "x-api-key": "e556f84eaf3f41129a1cc6bce089b6fb",
  });

  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;

  console.log(response);
  render();
};
const getNewsByTopic = (event) => {
  console.log("click", EventTarget);
};

const render = () => {
  let newsHTML = "";

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
