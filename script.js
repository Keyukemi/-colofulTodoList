const todoItems = document.getElementsByClassName('todoItems')[0];
const userInput = document.getElementById('userInput');
const trashIcon = document.getElementById('trash');

userInput.addEventListener('keydown', function(event){
    if(event.key ==='Enter')
        addItem()
})

addItem = () => {
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');
    var checkIcon = document.createElement('i');
    var trashIcon = document.createElement('i');

    //Add the user input to the block
    divParent.className ='item';
    divParent.innerHTML = '<div> ' + userInput.value + '</div>';

    //Add the check mark Icon
    checkIcon.className ="fa-solid fa-square-check";
    checkIcon.style.color = '#a786df';
    checkIcon.addEventListener('click', function(){
        checkIcon.style.color = 'limegreen';
    })
    divChild.appendChild(checkIcon);

    //Add the trash Icon
    trashIcon.className ="fa-solid fa-trash-can";
    trashIcon.style.color = '#a786df';
    trashIcon.addEventListener('click', function(){
        divParent.remove();
        
    })
    divChild.appendChild(trashIcon)

    //Add everything you have created in divchild to div parent
    divParent.appendChild(divChild);

    //Add everything you have created in div parent to TodoItems Container
    todoItems.appendChild(divParent);

    userInput.value = '';
}

//Next Steps: Update it with a local storage. 