accessKey = CnlRuNPRQO_JV9XtItY2IDLp72QaVkgaDkJBJCiMuPw;

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';

    const response = await fetch(url)
    const data = await response.json();
   
    const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image_src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank"; 
        imageLink.appendChild(Image);
        searchResult.appendChild(imageLink);
    })
}


searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages()
});

