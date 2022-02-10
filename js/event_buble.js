document.getElementById('item').addEventListener('click', function (event){
    console.log('li clicked')
    event.stopPropagation()
})
document.getElementById('list-container').addEventListener('click', function (event){
    console.log('ul clicked')
})