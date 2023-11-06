const container = document.querySelector('.container');

for (let i = 0; i < 16; i++){
    let row = document.createElement('div');
    container.appendChild(row);
    row.style.width = "400px";
    row.style.height = "400px";
    row.style.float = "left"
    row.style.border = "1px solid black";
    row.style.backgroundColor = setBg();

    row.addEventListener('mouseover', ()=>{
        row.style.backgroundColor = setBg();
        console.log('paspaust')
    })
}

function setBg() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
    
  }