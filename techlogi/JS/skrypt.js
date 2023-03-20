let i = 0;
function dodaj(){
let newElement = document.createElement('div');
newElement.textContent=i;
console.log(newElement);
if(i%5==0)
{
    newElement.classList.add("kolo");
}
document.body.appendChild(newElement);
i++;
}
