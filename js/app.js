// const container = document.querySelector('.container');

// for (let i = 0; i < 16; i++){
//     let row = document.createElement('div');
//     container.appendChild(row);
//     row.style.width = "400px";
//     row.style.height = "400px";
//     row.style.float = "left"
//     row.style.border = "1px solid black";
//     row.style.backgroundColor = setBg();

//     row.addEventListener('mouseover', ()=>{
//         row.style.backgroundColor = setBg();
//         console.log('paspaust')
//     })
// }

// function setBg() {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     return "#" + randomColor;
    
//   }

  //------------------------------------------------------------------------------
const photoNumber = 12;
const photoContainer = document.querySelector('.photo-container')
const hide = document.querySelector('.show');
hide.addEventListener('click', (e)=>{
    e.preventDefault();
    for (let i = 0; i < photoNumber; i++){
        let img = document.createElement('img');
        img.src=`photo/${i}.jpeg`;
        photoContainer.appendChild(img);
        img.addEventListener('dblclick', (e)=>{
            img.src=`photo/20.png`;
        })
    }hide.style.display='none';
})


// const hide = document.querySelector('.show');
// hide.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let photoContainer = document.querySelector(".photo-container");
//     if (photoContainer.style.display === "none") {
//         photoContainer.style.display = "block";
//         console.log("rodyti");
//     } else {
//         photoContainer.style.display = "none";
//         console.log("slepti");
//     }
// })

const shuffle = document.querySelector(".shuffle");
shuffle.addEventListener('click', (e)=>{
    e.preventDefault();
    let container = document.querySelector('.photo-container');
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
})

