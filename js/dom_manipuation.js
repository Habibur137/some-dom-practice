const list = document.getElementById('list')
// console.log(list.children)
// console.log(list.childNodes);
// const parent = list.parentElement
// console.log(parent)

// const child = list.children
// console.log(child)

// const previousSibling = list.previousElementSibling
// console.log(previousSibling)

// const nextSib = list.nextElementSibling
// console.log(nextSib)

// console.log(list.firstElementChild)
// console.log(list.lastElementChild.innerText)

// const listItem = document.getElementsByTagName('li')
const listItem = document.getElementsByClassName('item')
// console.log(listItem)
// for(const item of listItem){
//     console.log(item)
// }
// if we use foreach than convert into an array because listItem is array like object
const listLi = [...listItem]
listLi.forEach(element => {
    // console.log(element)
});


const p1 = createElement('p', 'p-item')
p1.innerText = 'habib'
const p2 = createElement('p', 'p-item', 'somthidsjjsjksjhsukjdnsjsjk')
let div = createElement('div')
append(div, [p1, p2])
console.log(div)
// document.getElementById('cont').appendChild(div)
list.insertAdjacentElement('beforebegin', div)

function createElement(tagName, className, innerHTML){
    const tag = document.createElement(tagName)
    tag.className = className || ''
    tag.innerHTML = innerHTML || ''
    return tag;
}

function append(parent, children){
    children.forEach(child => parent.appendChild(child))
}
