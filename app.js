console.log("hello");
let newac = document.getElementById('newac');
//a788a01ae8694006a7a72eea351b02c9
let key = 'a788a01ae8694006a7a72eea351b02c9'
let source = 'bbc-news';
const xhr = new XMLHttpRequest();

xhr.open('GET', ` https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`, true);
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        let newsHtml = "";
        articles.forEach(function(element, index) {




            let news = `<div class="accordion-item">
            <h2 class="accordion-header" id="headinf${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
      ${element.title}
    </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse hide" aria-labelledby="headinf${index}data-bs-parent="#newac">
                <div class="accordion-body">
                    ${element.content}  <a href="${element['url']}" target="_blank" >Read more here</a>
                </div>
            </div>
        </div>`

            newsHtml += news;


        });
        newac.innerHTML = newsHtml;


    } else {
        console.log("Some error occured")
    }
}


xhr.send();