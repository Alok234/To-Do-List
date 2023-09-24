console.log("hey prince");
const add= document.querySelector(".btn");
const input = document.querySelector(".input");
const inputValue= document.querySelector(".outPutText");
const dataList= document.querySelector(".list-container");
add.addEventListener("click",addBtn);
function addBtn(){
    console.log("amni");
    console.log(input.value);
   
    if(input.value ===""){
        alert("Please write your work");

    }else{
       
        let addList = document.createElement("li");
        addList.innerHTML = input.value;
        dataList.appendChild(addList);
        
        

        let span = document.createElement("span");
        span.innerHTML="x";
        addList.appendChild(span);
    }    
    input.value="";
    saveData();
    
}


dataList.addEventListener("click",

function(e){
  
   if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove();
          saveData();
    }
    
});

function saveData(e){
    localStorage.setItem("data", dataList.innerHTML);
}
function showData(){
    dataList.innerHTML= localStorage.getItem("data");
}
showData();




