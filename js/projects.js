
let count = 0;
document.getElementById('add-item-btn').addEventListener('click', function(){
    count++;
    const textField = document.getElementById('text-field')
    if(textField.value == ''){
        alert('Please Enter A Value')
    }
    else{
        
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <th>${count}</th>
            <td>${textField.value}</td>
            <td>
                <button class='btn btn-danger delete-btn'>Delete</button>
                <button id='done-btn' class='btn btn-success'>Done</button>
            </td>
        `
        document.getElementById('item-container').appendChild(tr)
      
        const deleteBtn = document.getElementsByClassName('delete-btn')
        for(const btn of deleteBtn){
            btn.addEventListener('click', function(e){
                e.target.parentNode.parentNode.style.display = 'none'
            })
        }
            
    }
})

