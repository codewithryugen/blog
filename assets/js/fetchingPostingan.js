'use strict';
const postinganWrapper = document.querySelector('.items-wrapper');

(async()=>{
    try{
        const res = await fetch('/postingan');
        const posts = await res.json();
        posts.forEach(element => {
            console.log(element);
            const post = `<div class="item-container">
                <div class="image-container">
                    <img src="/img/${element.image}" alt="" class="blog-img" />
                </div>
                <div class="title-container">
                    <span class="time">${element.createdAt}</span>
                    <a class="link" href="/blog/${element._id}">
                        <h3 class="title">${element.title}</h3>
                    </a>
                    <p class="excerpt">${element.excerpt}<p>
                </div>
            </div>`;
        postinganWrapper.innerHTML += post;
        });
    }catch(err){
        console.error(err.message);
    }
})();