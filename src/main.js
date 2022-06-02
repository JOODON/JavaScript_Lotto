const numbersDiv=document.querySelector(".numbers");
const drawButton=document.querySelector("#draw");
const resetButton=document.querySelector("#reset");

const lottoNumbers=[]
const colors=["tomato","teal","orange","purple","blue"]
function paintNumber(number){
    const eachNumbDiv=document.createElement("div");
    let colorIndex=Math.floor(number/10);
    eachNumbDiv.classList.add('eachnum');
    eachNumbDiv.style.backgroundColor=colors[colorIndex]
    eachNumbDiv.textContent=number;
    numbersDiv.appendChild(eachNumbDiv);
}
drawButton.addEventListener("click",function (){
    while (lottoNumbers.length<6){
        let ran=Math.floor(Math.random() * 45)+1;
        if(lottoNumbers.indexOf(ran) === -1){
            lottoNumbers.push(ran)
            paintNumber(ran)
        }
    }
})

resetButton.addEventListener("click",function (){
    lottoNumbers.splice(0,6);
    numbersDiv.innerHTML=""
})