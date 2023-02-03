let news = [];
let menus = document.querySelectorAll(".menus button");
menus.forEach((menu) => {
  menu.addEventListener("click", (event) => getNewsByCategory(event));
});
let srchBtn = document.getElementById("srch-btn");
let url;

const getNews = async () => {
  try {
    let header = new Headers({
      "X-Api-Key": "e556f84eaf3f41129a1cc6bce089b6fb",
    });

    let response = await fetch(url, { headers: header });
    let data = await response.json();
    if (response.status == 200) {
      if (data.totalResults == 0) {
        throw new Error("결과값이 없습니다.");
      }
      news = data.articles;
      totalPages = data.totalResults;

      // console.log("데이터는?", totalPages);
      render();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    errorRender(error.message);
  }
};
const getLatestNews = async () => {
  url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&pageSize=10`);
  getNews();
};
const getNewsByCategory = async (event) => {
  let category = event.target.textContent;
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&pageSize=10`
  );
  getNews();
};

const getNewsByKyword = async () => {
  let keyword = document.getElementById("serch-input").value;
  url = new URL(`https://newsapi.org/v2/everything?q=${keyword}&pageSize=10`);
  getNews();
};
const render = () => {
  let newsHTML = "";
  newsHTML = news
    .map((items) => {
      return `<div class="articles-item">
      <a href="${items.url}" target="_balnk">
    <figure class="news-img">
      <img
        src="${items.urlToImage}"
      />
    </figure></a>
    
    <div class="articles-box">
    <a href="${items.url}" target="_balnk"><h2 class="title">${items.title}</h2></a>
      <p class="content">${items.description}</p>
      <div>
        <span class="date">${items.publishedAt}</span>
        
      </div>
    </div>
  </div>`;
    })
    .join("");

  document.getElementById("listArticles").innerHTML = newsHTML;
};

const errorRender = (message) => {
  let errorHtml = `<div class="alert alert-danger" role="alert">${message}</div>`;
  document.getElementById("listArticles").innerHTML = errorHtml;
};

srchBtn.addEventListener("click", getNewsByKyword);
getLatestNews();
