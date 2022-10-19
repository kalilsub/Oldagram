import { posts } from "./data.js";

function handleLikes(id){
    const targetPost = posts.filter(post=>post.id === id)[0]
    targetPost.likes++
    render()
}

function getFeedHtml(){
    let feedHtml = ``

    posts.forEach(user =>{
        feedHtml += `
    <section>
        <div class="post-header">
            <img class="avatar" src="${user.avatar}"/>
            <div class="name-location">
                <p class="bold-txt">${user.name}</p>
                <p>${user.location}</p>
            </div>
        </div>
        
        <img class="post-img" src="${user.post}" data-like="${user.id}"/>
        <div class="post-info">
            <div class="icon-container">
                <img class="icon" src="images/icon-heart.png"/>
                <img class="icon" src="images/icon-comment.png"/>
                <img class="icon" src="images/icon-dm.png"/>
            </div>
            <p><span class="bold-txt">${user.likes} likes</span></p>
            <p><span class="bold-txt">${user.username}</span> ${user.comment}</p>
        </div> 
    </section>`
    })
    return feedHtml
}

function render(){
    document.getElementById("feed").innerHTML = getFeedHtml()
    
}

render()

document.addEventListener("dblclick", (event)=>{
    if(event.target.dataset.like){
        handleLikes(event.target.dataset.like)
    }
})


