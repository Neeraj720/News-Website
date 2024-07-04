// Variable
const generalBtn=document.getElementById('general')
const businessBtn=document.getElementById('business')
const sportsBtn=document.getElementById('sports')
const entertainmentBtn=document.getElementById('entertainment')
const technologyBtn=document.getElementById('technology')
const searchBtn=document.getElementById('search')
const newsQuery=document.getElementById('newsQuery')
const newsType=document.getElementById('newsType')
const newsdetails=document.getElementById('newsdetails')

//Create Array To Save Data Which Comes From Api

var newsDataArr=[];
//Apis

const API_KEY = "7b75b7888eaf473099a6497695cbe928";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload=function(){
    newsType.innerHTML="<h4>Headlines</h4>"
    fetchHeadlines();
}

generalBtn.addEventListener('click' ,function(){
    newsType.innerHTML="<h4>General News</h4>"
    fetchGeneralNews()
})
businessBtn.addEventListener('click' ,function(){
    newsType.innerHTML="<h4>Business News</h4>"
    fetchBusinessNews()
})
sportsBtn.addEventListener('click' ,function(){
    newsType.innerHTML="<h4>Sports  News</h4>"
    fetchSportNews()
})
entertainmentBtn.addEventListener('click' ,function(){
    newsType.innerHTML="<h4>Entertainment News</h4>"
    fetchEntertainmentNews()
})
technologyBtn.addEventListener('click' ,function(){
    newsType.innerHTML="<h4>Technology News</h4>"
    fetchTechnologyNews()
})
searchBtn.addEventListener('click' ,function(){
    newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>"
    fetchQueryNews()
})

const fetchGeneralNews= async() =>{
    let response= await fetch(GENERAL_NEWS+API_KEY)
    newsDataArr=[]
    if(response.status >=200 && response.status < 300){
        const myJson= await response.json()
        // console.log(myJson)
        newsDataArr=myJson.articles
        // console.log(newsDataArr)
    }
    //handle err
    else{
        console.log(response.status,response.statusText)
    }
    displayNews()
}
const fetchBusinessNews= async() =>{
    let response= await fetch(BUSINESS_NEWS+API_KEY)
    newsDataArr=[]
    if(response.status >=200 && response.status < 300){
        const myJson= await response.json()
        // console.log(myJson)
        newsDataArr=myJson.articles
    }
    //handle err
    else{
        console.log(response.status,response.statusText)
    }
    displayNews()
}
const fetchSportNews= async() =>{
    let response= await fetch(SPORTS_NEWS+API_KEY)
    newsDataArr=[]
    if(response.status >=200 && response.status < 300){
        const myJson= await response.json()
        // console.log(myJson)
        newsDataArr=myJson.articles
    }
    //handle err
    else{
        console.log(response.status,response.statusText)
    }
    displayNews()
}
const fetchEntertainmentNews= async() =>{
    let response= await fetch(ENTERTAINMENT_NEWS+API_KEY)
    newsDataArr=[]
    if(response.status >=200 && response.status < 300){
        const myJson= await response.json()
        // console.log(myJson)
        newsDataArr=myJson.articles
    }
    //handle err
    else{
        console.log(response.status,response.statusText)
    }
    displayNews()
}
const  fetchTechnologyNews= async() =>{
    let response= await fetch(TECHNOLOGY_NEWS+API_KEY)
    newsDataArr=[]
    if(response.status >=200 && response.status < 300){
        const myJson= await response.json()
        // console.log(myJson)
        newsDataArr=myJson.articles
    }
    //handle err
    else{
        console.log(response.status,response.statusText)
    }
    displayNews()
}
const  fetchHeadlines= async() =>{
    let response= await fetch(TECHNOLOGY_NEWS+API_KEY)
    newsDataArr=[]
    if(response.status >=200 && response.status < 300){
        const myJson= await response.json()
        // console.log(myJson)
        newsDataArr=myJson.articles
    }
    //handle err
    else{
        console.log(response.status,response.statusText)
    }
    displayNews()
}
const  fetchQueryNews= async() =>{

    if(newsQuery.value==null){
        return;
    }
    let response= await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
    newsDataArr=[]
    if(response.status >=200 && response.status < 300){
        const myJson= await response.json()
        newsDataArr=myJson.articles
    }
    //handle err
    else{
        console.log(response.status,response.statusText)
    }
    displayNews()
}

// Display News on Html Page

function displayNews(){
    newsdetails.innerHTML=''
    if(newsDataArr.length==0){
        newsdetails.innerHTML="<h5>No data found </h5>"
        return;
    }

    newsDataArr.forEach(news =>{

        var date=news.publishedAt.split("T")
        var col=document.createElement('div')
        col.className="col-sm-12 col-lg-3 p-2"

        var card=document.createElement('div')
        card.className="p-2"

        var image=document.createElement('img')
        image.setAttribute("height","matchparnt")
        image.setAttribute("width","100%")
        image.src=news.urlToImage


        var cardBody=document.createElement('div')


        var newsHeading=document.createElement('h5')
        newsHeading.className="card-title"
        newsHeading.innerHTML=news.title

        var dateHeading=document.createElement('h6')
        dateHeading.className="text-primary"
        dateHeading.innerHTML=date


        var discription=document.createElement('p')
        discription.className="text-muted"
        discription.innerHTML=news.description


        var link=document.createElement('a')
        link.className="btn btn-dark"
        link.setAttribute("target","_blank")
        link.href=news.url
        link.innerHTML="Read More."

        cardBody.appendChild(newsHeading)
        cardBody.appendChild(dateHeading)
        cardBody.appendChild(discription)
        cardBody.appendChild(link)

        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card)

        newsdetails.appendChild(col)
    })
}