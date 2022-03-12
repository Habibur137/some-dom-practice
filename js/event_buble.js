document.getElementById('item').addEventListener('click', function (event){
    console.log('li clicked')
    event.stopPropagation()
})
// event buble only parent event
document.getElementById('list-container').addEventListener('click', function (event){
    console.log('ul clicked')
})

// item add button 
document.getElementById('add').addEventListener('click', function (){
    const li = document.createElement('li');
    li.innerText = 'brand new Item '
    document.getElementById('list-container').appendChild(li)
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


// event delegate apply
document.getElementById('add-button').addEventListener('click', function (){
    const p = document.createElement('p');
    p.innerText = 'new Item added'
    document.getElementById('item-container').appendChild(p)
})

document.getElementById('item-container').addEventListener('click', function (event){
    event.target.parentNode.removeChild(event.target)
})
