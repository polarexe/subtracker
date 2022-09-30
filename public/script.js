let nextPageToken = ""
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxh8bWAqI3TgQUGJtOWKVnw&maxResults=10&order=date&key=AIzaSyAa7RkheBHNZ6bjxNu_yJiXZExvrCIM-1Q"+nextPageToken)
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    nextPageToken = data.nextPageToken
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += ` <h2 style="color:white">${video.snippet.title}</h2> <a href="https://www.youtube.com/watch?v=${video.id.videoId}"><img src="${video.snippet.thumbnails.high.url}"></a>`
    }
})
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCsvn_Po0SmunchJYOWpOxMg&maxResults=10&order=date&key=AIzaSyAa7RkheBHNZ6bjxNu_yJiXZExvrCIM-1Q&pageToken="+nextPageToken)
.then((result)=>{
    return result.json()
}).then((data)=>{
    console.log(data)
    let videos = data.items
    nextPageToken = data.nextPageToken
    let videoContainer = document.querySelector(".youtube-container")
    for(video of videos){
        videoContainer.innerHTML += ` <h2 style="color:white">${video.snippet.title}</h2> <a href="https://www.youtube.com/watch?v=${video.id.videoId}"><img src="${video.snippet.thumbnails.high.url}"></a>`
    }
})