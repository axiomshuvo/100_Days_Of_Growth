const panels = document.querySelectorAll('.panel');

// console.log(panels);

// remove the active class

function removeActiveClasses(){
    panels.forEach( panel =>{
        panel.classList.remove('active');
    })
}

// remove the active class and initial the current panel active

panels.forEach((panel)=>{
    // console.log(panel);
    panel.addEventListener('click',()=>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})


