
const keyApi = '43132236-79366def8c3717e7f2673ddae';
let numPage = 1;
const searchForm = document.querySelector(".input-search");
let imgEl = ``;
console.log(imgEl)
const Api = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${imgEl}&page=${numPage}&per_page=12&key=${keyApi}`;
const listEl = document.querySelector(".gallery");
const btnEl = document.querySelector(".download__more");

searchForm.addEventListener("input", () => {
    textInput()
    console.log(imgEl)
});



function textInput() {
    console.log(imgEl)
    return imgEl = `${searchForm.value}`;
};

async function fetchUrl(Api) {
    const data = await fetch(Api);
    return data;
};

function getPost() {
    fetchUrl(Api)
        .then(data =>
            data.json()
        ).then(data =>
            // console.log(data),
            createEl(data, listEl)
        );
};

loadPost()


function loadPost() {
    getPost();
};

function createEl(data, listEl) {
    data.hits.map(el => {
        listEl.insertAdjacentHTML(
            "beforeend",
            `<li class="photo-card">
            <img src="${el.largeImageURL}" alt="img" />
          
            <div class="stats">
              <p class="stats-item">
                <i class="material-icons">thumb_up</i>
                ${el.likes}
              </p>
              <p class="stats-item">
                <i class="material-icons">visibility</i>
                ${el.views}
              </p>
              <p class="stats-item">
                <i class="material-icons">comment</i>
                ${el.comments}
              </p>
              <p class="stats-item">
                <i class="material-icons">cloud_download</i>
                ${el.downloads}
              </p>
            </div>
          </li`
          );
        });
};

btnEl.addEventListener("click", () => {
    numPage++;
    loadPost();

});
