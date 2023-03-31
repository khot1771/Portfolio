const projects = [
    {
        name: "Todo", 
        image : "https://images.unsplash.com/photo-1680208281019-8642d20405f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        url : "Lorem",
        decs : "Lorem"
    },
    {
        name: "Game", 
        image : "https://images.unsplash.com/photo-1680208281019-8642d20405f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        url : "Lorem",
        decs : "Lorem"
    },
    {
        name: "Money", 
        image : "https://images.unsplash.com/photo-1680208281019-8642d20405f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        url : "Lorem",
        decs : "Lorem"
    },
    {
        name: "Red Bus", 
        image : "https://images.unsplash.com/photo-1680208281019-8642d20405f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        url : "Lorem",
        decs : "Lorem"
    }
]

let src = ""
for (const item of projects) {
    src +=      `
    <div class="card">
    <img src="${item.image}" alt="">
    <div class="card-body">
    <h1>${item.name}</h1>
    <p>${item.desc}</p>
    <a href="${item.url}">Visit</a>
    </div>
    </div>
        `
}

document.getElementById("projects").innerHTML=src

gsap.registerPlugin(ScrollTrigger)

gsap.from(".card", {  
    scrollTrigger: {
        trigger:".card",
        // scrub: 1,
        end  :"+=300" 
    },
    
scale:0, 
// rotation:360, 
stagger:0.5

}) 