
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
            <th scope="row">${count}</th>
            <td>Mark</td>
            <td>
                <button id='delete-btn' class='btn btn-danger'>Delete</button>
                <button id='done-btn' class='btn btn-success'>Done</button>
            </td>
        `
        document.getElementById('item-container').appendChild(tr)

        document.getElementById('item-container').addEventListener('click', function (event){
            console.log(event.target)
        })
    }
})

