
function buscarCep(){
    const cep = document.querySelector("#cep").value
    const url = "https://brasilapi.com.br/api/cep/v2/"+cep

    fetch(url).then(response => response.json())
    .then(response => {
      if (response.cep){
        console.log(response)
        document.getElementById("estado").value = response.state
        document.getElementById("endereço").value = response.street
        document.getElementById("cidade").value = response.city
        document.getElementById("bairro").value = response.neighborhood

      }  
      else {
        document.getElementById("estado").setAttribute = response.state
        document.getElementById("endereço").setAttribute = response.street
        document.getElementById("cidade").setAttribute = response.city
        document.getElementById("bairro").setAttribute = response.neighborhood

      }
        
    })
} 


// fetch(url).then(response => response.json())
// .then(response => {
//     console.log(response)
//     document.getElementById("estado").value = response.state
//     document.getElementById("endereço").value = response.street
//     document.getElementById("cidade").value = response.city
//     document.getElementById("bairro").value = response.neighborhood