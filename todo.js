var ul=document.getElementById('list')
var li;
var addButton=document.getElementById('add')
addButton.addEventListener('click', addItem)

var removeButton=document.getElementById('remove')
removeButton.addEventListener('click', removeItem)

function addItem(){
    var inp=document.querySelector('input')
    var item=inp.value
    ul=document.getElementById('list')
    var textnode=document.createTextNode(item)

    if(item==''){

        var newp=document.createElement('p')
        var newc=document.createTextNode("enter your todo")

        newp.appendChild(newc)
         
        var current=document.querySelector('input')
        document.body.insertBefore(newp, current)
    }else{
        li=document.createElement('li')
        var checkbox=document.createElement('input')
        checkbox.type='checkbox';
        checkbox.setAttribute('id', 'check')

        var label=document.createElement('label')
        label.setAttribute('for','item')

        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className='visual'
        }, 3);

        inp.value='';

    }
}

function removeItem(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])

        } 
        
    }
}