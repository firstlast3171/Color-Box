const squares = document.querySelectorAll(".square")
const answer = document.querySelector(".correct")
const colortext = document.querySelector(".h1")
const colorGenerate = document.querySelector("button")

let color = []
GenerateRamdomColor()
color.forEach(assign_color)
squares.forEach(ClickColor)
function GenerateRamdomColor(){
    
    for(let i=0; i<squares.length;i++){
        color.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        )
    }
}

function assign_color(boxcolor,index){
    squares[index].style.background = boxcolor
    squares[index].setAttribute("data-color",boxcolor)
}
   
function TopickColor(){
    const topick =  color[Math.floor(Math.random()*color.length)]
    colortext.textContent = topick
    return topick
}
 


function ClickColor(square){
  square.addEventListener("click", fun => {
    if(fun.target.dataset.color === pick){
        answer.textContent = "Correct"
    }
    else{
        answer.textContent = "Wrong"
        fun.target.classList.add('fade')
    }
  })
}

let pick = TopickColor()

function reset(){
    color = [];
    GenerateRamdomColor();
    squares.forEach((square)=>square.classList.remove("fade"));
    color.forEach(assign_color)
    squares.forEach(ClickColor)
    pick = TopickColor()
}

colorGenerate.addEventListener('click',reset)