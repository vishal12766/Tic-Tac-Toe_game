let player1="X";
let player2="O";
let box=document.querySelectorAll(".moves");
let strtbtn=document.querySelector("#start");
let rstbtn=document.querySelector("#restart");
let finalwin=document.querySelector("div");
strtbtn.addEventListener("click",()=>{
    console.log(strtbtn.innerHTML);
})


rstbtn.addEventListener("click",()=>{
    console.log(rstbtn.innerHTML);
})

let turn=player1;

let winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]];

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turn==player1){
            box.innerText=player1;
            turn=player2;
        }
        else if(turn==player2){
            box.innerText=player2;
            turn=player1;
        }
        box.disabled=true;
        checkwinner();
    })
});

let checkwinner=()=>{
    for(pattern of winpattern){
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                box.forEach((b) => {
                    b.disabled = true;
            })  
                showwinner(pos1);
            }
                   
            
        }
    }
}

let showwinner = (winner) => {
    finalwin.classList.remove("hide");
    finalwin.classList.add("showwinner");
    finalwin.innerText = `"Congratulation, Winner is ${winner}"`;

    box.forEach((b) => {
        b.disabled = true;
    });
    document.getElementById("start").style.removeProperty("display");

    
};
strtbtn.addEventListener("click", () => {
    location.reload();
});
rstbtn.addEventListener("click",()=>{
    location.reload();
})



