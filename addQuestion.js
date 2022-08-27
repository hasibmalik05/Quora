document.querySelector("form").addEventListener("submit",postQues)
let data = JSON.parse(localStorage.getItem('questionData')) || [];
let container = document.getElementById('post')

function postQues(event){
    event.preventDefault();

    let qn  = document.getElementById("askQuestion").value;
    data.push(qn);

    localStorage.setItem('questionData',JSON.stringify(data))
    append(data);
    document.getElementById('askQuestion').value = "";
}
function append(data) {
    container.innerHTML = null;
    data.map(ele=>{
        let line = document.createElement('h3')
        line.innerText = ele;
        let btn = document.createElement("button");
        btn.className = "delPost"
        btn.innerText = "Delete Post"
        btn.addEventListener('click',function(){
            removeFn(ele)
        })
        let div = document.createElement('div');
        div.id = "homie" 
        div.append(line,btn)
        container.append(div)
    })
}
append(data);
function removeFn(ele){
    data = data.filter(e => e!=ele)
    append(data)
}

