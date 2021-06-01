addTask = () => {
    let inputValue = document.getElementById("addTask").value // Pegando o valor do input
    
    let list = document.getElementById("list")    //Criando uma variável List  a partir da minha UL
    let newLi = document.createElement("li")  //  Criando A lista a partir do createElement    
    let input = document.createElement("input") // criando o input
    let label = document.createElement("label") // criando um label 
    let button = document.createElement("button") // criando um botão 

    input.setAttribute("type", "checkbox") // setando atributos ao input

    button.innerHTML = "Delete"
    button.className = "button"

    label.innerHTML = inputValue


    newLi.appendChild(input) // Acima, haviamos criado um LI com algumas coisas a mais  
    newLi.appendChild(label)
    newLi.appendChild(button)

    list.appendChild(newLi)  // Escrvendo no " list ", que está na UL ! 

    button.addEventListener("click", function () {
        let parent = this.parentNode
        parent.remove()
    })

    input.addEventListener("change", function () {
        let riscado = this.parentNode;
        riscado.classList.toggle("scratched")
    })

}

deleteAllTasks = () => {
    list.innerHTML = ''
}
