// function submitValue(){
//     const inputValue = document.getElementById('input-field')
//     const p = document.getElementById('text')
//     p.innerText = inputValue.value;
//     inputValue.value = '';
// }

// document.getElementById('submit-btn').addEventListener('click', function(){
//     const inputValue = document.getElementById('input-field')
//     const p = document.getElementById('text')
//     p.innerText = inputValue.value;
//     inputValue.value = '';
// })

/* document.getElementById('comment-submit-btn').addEventListener('click', function (e){
    // console.log(e.target.value)
    const textField = document.getElementById('comment-field')
    // console.log(textField)
    const p = document.createElement('p')
    p.innerText = textField.value
    // console.log(p)
    const div = document.createElement('div')
    div.appendChild(p)
    document.getElementById('comment-container').appendChild(div)
})

document.getElementById('comment-field').addEventListener('keyup', function (e){
    console.log(e.target.value)
})
 */

let count = 0;
function add(){
    count++;
    getCountElement('count-element');
}
function sub(){
    count--;
    if(count < 0){
        count = 0;
    }
    getCountElement('count-element');
}

function getCountElement(id){
    document.getElementById(id).innerText = count;
}

document.getElementById('unorder-list').addEventListener('click', function (){
    console.log('ul clicked')
})

document.getElementById('second-item').addEventListener('click', function (event){
    console.log(event)
    event.stopPropagation()
    console.log('li clicked')
})

// const allItem = document.getElementsByClassName('item');
// for(const item of allItem){
//     item.addEventListener('click', function (event){
//         document.getElementById('list-container').removeChild(item)
//         // event.target.parentNode.removeChild(event.target)
//     })
// }

document.getElementById('add-button').addEventListener('click', function (){
    const li = document.createElement('li')
    li.innerText = 'New Item Added'
    // li.classList.add('item')
    document.getElementById('list-container').appendChild(li)
})

document.getElementById('list-container').addEventListener('click', function (event){
    event.target.parentNode.removeChild(event.target)
})