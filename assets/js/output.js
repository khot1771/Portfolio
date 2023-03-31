const frontEndSkills =  [
    { name :"html" , percent : 80 },
    { name :"css" , percent : 35 },
    { name :"js" , percent : 15 },
    { name :"React" , percent : 10 }
]
const backEndSkills =  [
    { name :"Node Js" , percent : 70 },
    { name :"Mango DB" , percent : 45 },
    { name :"SQL" , percent : 25 },
    { name :"Express Js" , percent : 90 }
]

const fe = document.getElementById("frontend")
const be = document.getElementById("backend")

display(frontEndSkills,fe)
display(backEndSkills,be)


function display(arr ,el) {
    for (const item of arr) {
       el.innerHTML += `
        <div class="progress-bar">
        <div class="progess" style="width:${item.percent}%">${item.name}</div> 
    </div>
        `
    };
}

gsap.registerPlugin(ScrollTrigger)

gsap.from(".progress", {width: 0, duration:2, ScrollTrigger: ".progress"})