// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    // Get references to HTML elements
    let greeting = document.getElementById("greeting")
    let message = document.getElementById("message")
    let nameInput = document.getElementById("nameInput")
    let messageInput = document.getElementById("messageInput")
    let colorSelect = document.getElementById("colorSelect")
    let updateButton = document.getElementById("updateButton")
    let todoInput = document.getElementById("todoInput")
    let addTodoButton = document.getElementById("addTodoButton")
    let todoList = document.getElementById("todoList")
  

    updateButton.addEventListener("click", () => {

      let userName = nameInput.value.trim()
      if (userName) {
        greeting.textContent = `Hello, ${userName}!`
      } 
      else 
      {
        greeting.textContent = "Hello, Madridista!"
      }
  
      let userMessage = messageInput.value.trim()
      if (userMessage) 
        {
        message.textContent = userMessage
      } 
      else 
      {
        message.textContent = "Welcome to Real Madrid fan page."
      }
      document.body.style.backgroundColor = colorSelect.value
    })
  
    addTodoButton.addEventListener("click", addTodoItem)
  
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") 
        {
        addTodoItem()
      }
    })
  
    // to do items
    function addTodoItem() {
      let todoText = todoInput.value.trim()
      if (todoText) 
        {
        let li = document.createElement("li")
        li.textContent = todoText
  
        li.addEventListener("click", function () {
          this.classList.toggle("completed")
        })
  
      
        let deleteButtotn = document.createElement("button")
        deleteButtotn.textContent = "×"
        deleteButtotn.className = "delete-btn"
        deleteButtotn.addEventListener("click", (e) => {
          e.stopPropagation() 
          li.remove()
        })

        li.appendChild(deleteButtotn)

        todoList.appendChild(li)

        todoInput.value = ""

        todoInput.focus()
      }
    }
  })
  