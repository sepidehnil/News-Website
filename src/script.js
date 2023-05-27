const html = document.getElementById("container");
const btn = document.getElementById("btn-search");
const categoryChoose = document.getElementById("category");
const countryChoose = document.getElementById("country");
const aboutChoose = document.getElementById("about");

let articles = [];

//1
class Article {
  urlToImage = "";
  title = "";
  description = "";
  publishedAt = "";
  constructor(obj) {
    this.urlToImage = obj.urlToImage;
    this.title = obj.title;
    this.description = obj.description;
    const date = new Date(obj.publishedAt);
    this.publishedAt = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;
  }
  //The class also has four getter methods: "title," "description," "urlToImage," and "publishedAt." These getter methods allow access to the properties of the class.
  get Title() {
    return this.title;
  }
  get Description() {
    return this.description;
  }
  get UrlToImage() {
    return this.urlToImage;
  }
}

function generateArticles(article) {
  return `<div
  class=" flex-1 flex flex-col justify-between min-w-[200px] bg-white text-center p-3 border border-gray-300 rounded-md"
  >
  <div class="w-full rounded-md h-[200px] overflow-hidden">
    <img
      class="w-full h-full object-cover"
      h
      src="${article.urlToImage}"
      alt=""
    />
  </div>
  <p class="font-bold my-4 text-lg line-clamp-2 text-ellipsis">${article.title}</p>
  <div class="w-full h-[1px] bg-gray-200"></div>
  <p class="my-4 line-clamp-3 text-ellipsis">${article.description}</p>
  <div class="w-full h-[1px] bg-gray-200"></div>
  <p class="bg-blue-500 text-white rounded-sm mt-4">${article.publishedAt}:تاریخ انتشار</p>
  </div>`;
}

function init() {
  html.innerHTML = "";
  articles.forEach((article) => {
    html.innerHTML += generateArticles(new Article(article));
  });
}

btn.addEventListener("click", () => {
  const aboutInput = aboutChoose.value;
  const categoryInput = categoryChoose.value;
  const countryInput = countryChoose.value;
  getArticles(aboutInput);
});
function getArticles(about = "", category = "", country = "") {
  const news = fetch(
    `https://newsapi.org/v2/everything?q=${about}&country=${country}&category=${category}&apiKey=bfcabf1d736d4612841c462aebef3495`
  );
  news
    .then((response) => response.json())
    .then((data) => {
      articles = [...data.articles];
      console.log(data);
      init();
    })
    .catch((err) => console.log(err));
}
