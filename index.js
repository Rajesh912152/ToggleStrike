let rootEl=document.getElementById('root');
rootEl.classList.add('m-5','text-center')

let inputEl=document.createElement('input');
inputEl.type="checkbox";
inputEl.id="checkboxId";
rootEl.appendChild(inputEl);

let labelEl=document.createElement('label');
labelEl.textContent="Iam a label";
labelEl.setAttribute('for','checkboxId')
labelEl.setAttribute('id','labelId')
rootEl.appendChild(labelEl)

inputEl.onclick=function(){
    strike();
}
function strike(){
    let labelIdEl=document.getElementById('labelId')
    labelIdEl.classList.toggle('checked')
}