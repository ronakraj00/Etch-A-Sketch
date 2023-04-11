//DOM manipulation
const main=document.querySelector('#main');
const container=document.querySelector('#container');
//create div's
function createDiv(id){

    const container = document.createElement("div");
    container.setAttribute('id','container');
    main.appendChild(container);

    for(let i=1;i<=id;i++){

    const rowDiv=document.createElement('div');
    rowDiv.classList.add('row');

    for( let j=1;j<=id;j++){

        const divCol=document.createElement('div');
        divCol.classList.add('col');
        rowDiv.appendChild(divCol);
    }

    container.appendChild(rowDiv);
}
}


//hover effect
//Mouse Over
const cols=document.querySelectorAll('.col');
cols.forEach(col=>{col.addEventListener('mouseover',()=>{
    col.classList.add('colColor')

})});
//Mouse Out
cols.forEach(col=>{col.addEventListener('mouseout',()=>{
    col.classList.remove('colColor')

})});


//Size button working
const boxSizes=document.querySelectorAll('#boxSize');
boxSizes.forEach(boxSize=>{boxSize.addEventListener('click',(evt)=>{
    console.log(evt.target.id);
    resetDiv();
    createDiv(evt.target.id);
    dimAdjust(evt.target.id);
})});


//width adjustor 
const rows=document.querySelectorAll('.row');
function dimAdjust(id){
    let width=100/id;
    let height=100/id;
    
    dimAdjust2(width,height);

}
//function for styling width and height
function dimAdjust2(width,height){
    cols.forEach(col=>{
        col.setAttribute('style',`width:${width}px;height:${height}px;`)
        })
    rows.forEach(row=>{
        row.setAttribute('style',`height:${height}px`)
    })
}

//function to reset div
function resetDiv(){
    main.removeChild(container);
}