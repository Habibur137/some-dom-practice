document.getElementById('item').addEventListener('click', function (event){
    console.log('li clicked')
    event.stopPropagation()
})
// event buble only parent event
document.getElementById('list-container').addEventListener('click', function (event){
    console.log('ul clicked')
})

const items = document.getElementsByClassName('item');
console.log(items)
for(const item of items){
    item.addEventListener('click', function (event){
        // item.parentNode.removeChild(item)
        // item.style.display = 'none'
        // event.target.parentNode.removeChild(event.target)
    })
}

document.getElementById('add-button').addEventListener('click', function (){
    const p = document.createElement('p');
    p.innerText = 'new Item added'
    document.getElementById('item-container').appendChild(p)
})

document.getElementById('item-container').addEventListener('click', function (event){
    event.target.parentNode.removeChild(event.target)
})
