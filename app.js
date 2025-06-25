let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let playero=true;

let winpatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText===""){
            box.innerText=playero?"O":"X";
            playero=!playero;
        } else {
            alert("Box already filled");
        }
        checkwin();
    });
});

resetbtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.style.backgroundColor="antiquewhite";
    });
    playero=true;
});

function checkwin(){
    winpatterns.forEach((pattern)=>{
        let [a,b,c]=pattern;
        if(boxes[a].innerHTML && boxes[a].innerHTML===boxes[b].innerHTML && boxes[a].innerHTML===boxes[c].innerHTML){
            alert(`${boxes[a].innerHTML} wins!`);
            boxes[a].style.backgroundColor="green";
            boxes[b].style.backgroundColor="green";
            boxes[c].style.backgroundColor="green";
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            });
        }
    });
}