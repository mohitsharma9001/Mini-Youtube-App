let clickVideoId = JSON.parse(localStorage.getItem("video"))
console.log(clickVideoId)
 let videos = document.getElementById("fram");
videos.innerHTML = "";
let videofram = document.createElement("iframe");
  videofram.src = `https://www.youtube.com/embed/${clickVideoId.id.videoId}`

  var title=document.createElement("h4");
title.innerText=clickVideoId.snippet.title

var description=document.createElement("p");
description.innerText=clickVideoId.snippet.description

  videos.append(videofram,title)