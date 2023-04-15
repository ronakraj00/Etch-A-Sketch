//DOM manipulation
const main=document.querySelector('#main');
const container=document.querySelector('#container');


//create div's
function createDiv(id){

    for(let i=1;i<=id;i++){

        const rowDiv=document.createElement('div');
        rowDiv.classList.add('row');

        for( let j=1;j<=id;j++){

            const divCol=document.createElement('div');
            divCol.classList.add('col');
            divCol.classList.add(`col${id}`);
            rowDiv.appendChild(divCol);
        }

        container.appendChild(rowDiv);
    }
}
//dom rows and cols selector




//hover effect
//Mouse Over
function changeColor(){
    const rows=document.querySelectorAll('.row');
    const cols=document.querySelectorAll('.col');
    cols.forEach(col=>{col.addEventListener('mouseover',()=>{
    col.classList.add('colColor');

})});
//Mouse Out
cols.forEach(col=>{col.addEventListener('mouseout',()=>{
    col.classList.remove('colColor');
})})}

//working start from here
//Size button working
const boxSizes=document.querySelectorAll('.boxSize');
boxSizes.forEach(boxSize=>{boxSize.addEventListener('click',(evt)=>{
    console.log(evt.target.id);

    resetDiv();
    
    createDiv(evt.target.id);
    changeColor();
    evt.stopPropagation();
})});

//function to reset div
function resetDiv(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
}