const inputEl = document.getElementById('add-todo')
const allTodosContainer = document.querySelector('.todo-items')
let allTodos = []

function addNewTodo(event) {
    event.preventDefault()
    if (inputEl.value != "") {
    allTodos.push(inputEl.value)
    console.log(allTodos)
    renderNewTodo() 
    inputEl.value = ""
    } else {
        alert('INPUT REAL SHIT')
    }
    
}


function renderNewTodo() {
    let newTodo = ""
    for (let i = 0; i < allTodos.length; i++) {
        newTodo = `<div class="todo-title"> <span class="checkmark"></span>${allTodos[i]}</div> <button class="delete"><img src="./assets/images/icon-cross.svg" alt="delete"></button> `
        // console.log(newTodo)
    }
    let addTodo = document.createElement('li')
    addTodo.innerHTML = newTodo
    allTodosContainer.append(addTodo)
    console.log(addTodo)

    let deleteBtn = document.querySelectorAll('.delete')
    deleteBtn.forEach(function (button) {
        button.addEventListener('click', function () {
            for (let i = 0; i < allTodos.length; i++) {
                let deleteItem = this.parentElement
                deleteItem.style.display = 'none'
            }
        })
    })

   const checkmarkEl = document.querySelectorAll('.checkmark')

    checkmarkEl.forEach(function (span) {
        // span.addEventListener('click', function () {
        //         for (let i = 0; i < allTodos.length; i++) {
        //             let completeItem = this.parentElement
        //             completeItem.classList.toggle('completed')
                    
        //         }
        //         span.addEventListener('click', function () {
        //                 span.parentElement.classList.remove('complete')
        //             })
        // })
        const classes = span.parentElement.classList
        span.addEventListener('click', function() {
            const result = classes.contains('todo-title')
            if (result) {
                span.parentElement.parentElement.classList.toggle('completed', allTodos.length)
            } else if (classes.contains('completed') == true) {
                console.log('mimo')
                span.parentElement.parentElement.classList.remove('completed')
            }
          })
    }) 

}

