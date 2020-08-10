//alert('coraaa');
/*

const addButton= document.querySelector('.plus');
const container = document.getElementById('container');
console.log(addButton);

addButton.onclick = function (e){
    const readInput= this.querySelector('.list').value;
   
   // console.log('%O', input);
   e.preventDefault();
    //readInput.createElement('div')
    console.log('readInput',readInput.value);

    const form = document.createElement('form');

    form.classList.add('card');
    form.innerHTML =`
               
                    <label> <input type="checkbox"> ${readInput}</label>
                    
               `
        container.appendChild(form);   
        readInput.innerHTML ='';   
    console.log('%O', form);
   // this.remove();

}
//readInput.va  */

const addButton= document.querySelector('.js_add');
const container = document.getElementById('container');
const readInput= document.querySelector('.list');
console.log(addButton);



addButton.onclick = function (e){
    if(readInput.value === ''){
        
       return false;
       }

   
   // console.log('%O', input);
   e.preventDefault();
    //readInput.createElement('div')
    //console.log('readInput',readInput.value);

    const form = document.createElement('form');

    form.classList.add('card');
    form.innerHTML =`
                    <div>
                    <input class="check" type="checkbox" id="checkId">
                    <label for="checkId" class="label"> ${readInput.value}</label>
                    </div>
                    <button type="button" onclick="removeCard(this)" class="removeList"></button>
               `
        container.appendChild(form);   
        
    //console.log('%O', form);
    readInput.value = '';
}

function removeCard(e){
    e.parentNode.remove();
   // console.log(e);
}

