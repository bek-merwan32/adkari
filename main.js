newDkr = document.querySelector('.ajouter input');
btnDkr = document.querySelector('.ajouter button');
dkr = document.querySelector('.adkar div');
const list = document.querySelector('.adkar'); 
btn = document.querySelector('.adkar button');
read = document.querySelector('.read');
readt = document.querySelector('.read h1');
container = document.querySelector('.container');
calc = document.querySelector('.calc');
rtr = document.querySelector('.rtr');



calc.innerHTML = 0 ;
var l = 1 ;


calc.onclick=()=>{
    l++;
    calc.innerHTML = l;
} 




newDkr.onkeyup = ()=> {
    let usreData = newDkr.value;
    if (usreData.trim() != 0 ){
        btnDkr.classList.add('active');
        btnDkr.onclick = ()=>{
            let usreData = newDkr.value;
            localStorage.setItem(usreData, usreData);
            list.innerHTML = '';
            for (i = 0; i < localStorage.length; i++) {
               x = localStorage.key(i);
               if (x != '') {
                  myfunction();
               }
            }
            newDkr.value='';
            btnDkr.classList.remove('active');
        }
    }else{
        btnDkr.classList.remove('active');
    }
}


myfunc();
function myfunc() {
    list.innerHTML = '';
    for (i = 0; i < localStorage.length; i++) {
       x = localStorage.key(i);
       if (x != '') {
             myfunction();
       }
    }
}



function myfunction() {
    list.innerHTML += `<div >${x}   </div>`;
    creatBtn = document.createElement('button');
    creatBtn.setAttribute("value", i);
    creatOption = document.createElement('option');
    creatBtn.setAttribute("class", "btn");
    creatBtn.innerHTML = "أذكر";
    creatBtn2 = document.createElement('button');
    creatBtn2.setAttribute("value", i);
    creatBtn2.setAttribute("type", "button");
    creatBtn2.setAttribute("class", "btn");
    creatBtn2.innerHTML = "حذف";
    z = localStorage.key(i);
    rtr.setAttribute("onclick", `y = readt.textContent; result = 'لقد ذكرت ' + y +' '+ l + ' مرة '; ;alert(result); read.style.display = 'none'; container.style.display = 'block';  l=0;  calc.innerHTML=0;`);
    creatBtn.setAttribute("onclick", `readt.innerHTML = localStorage.key(${i}); read.style.display = 'flex'; container.style.display = 'none';`);
    creatBtn2.setAttribute("onclick", `readt.innerHTML = localStorage.removeItem(localStorage.key(${i})); myfunc(); `);
    divbtn = document.createElement('section');
    list.lastChild.appendChild(divbtn);
    divbtn.appendChild(creatBtn);
    divbtn.appendChild(creatBtn2);
    
}