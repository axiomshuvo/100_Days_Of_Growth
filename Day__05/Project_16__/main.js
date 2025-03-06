const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click',()=> highlightCups(idx))
});

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;
    if(fullCups === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
        // console.log(fullCups);
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 300}px`; 
        // console.log(fullCups);
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
        // remained.style.height = 0;
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
    }

}

function highlightCups(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
        idx--
    }
    smallCups.forEach((cup,idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })
    updateBigCup();
}

 