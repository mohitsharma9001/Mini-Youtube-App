let getDataDiv = document.getElementById("import");

async function getData(){
    

    try {
        let searchParam = document.getElementById("searchParam").value;
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchParam}&type=video&key=AIzaSyAMjU5KvjETeycpR-3F9lfx3R6BEl_z6GA`

        let searchResuelt = await fetchData(url);
        displayData(searchResuelt)
    } catch (err) {
        console.log(err);
    }
}
const fetchData = async(url) =>{
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        return data.items;
    } catch (err) {
        console.log(err)
    }
}

function displayData(searchData){
    getDataDiv.innerHTML = "";
    searchData.forEach( video=> {
   
    var box=document.createElement("div");

var img=document.createElement("img");
img.setAttribute("src",video.snippet.thumbnails.high.url)

var title=document.createElement("h4");
title.innerText=video.snippet.title

var channel=document.createElement("h5");
channel.innerText=video.snippet.channelTitle

      box.addEventListener("click",function(){
        window.location.href="showVideo.html";
        localStorage.setItem("video",JSON.stringify(video))
      })
box.append(img,title,channel);
getDataDiv.append(box)
    });
}