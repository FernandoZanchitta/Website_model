// procurar o botao
// quando clicar no botao executar uma acao
    // duplicar campos
    // Colocar na pag 

document.querySelector("#add-time")
.addEventListener('click',cloneField)


function cloneField(){
    
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)
    
    // limpar campos
    const fields = newFieldsContainer.querySelectorAll('input')
    // para cada campo limpar
    fields.forEach(function(field){
        field.value = ""
    })
    document.querySelector("#schedule-items").appendChild(newFieldsContainer)   
}