const form = document.getElementById('form-desafio')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const valorA = document.getElementById('valor-a')
    const valorB = document.getElementById('valor-b')
    const message = document.getElementById('message')
    
    console.log("🚀 ~ valorA.value < valorB.value:", valorA.value < valorB.value)
    console.log("🚀 ~ valorB.value:", valorB.value)
        console.log("🚀 ~ valorA.value:", valorA.value)
    
    if (Number(valorA.value) < Number(valorB.value)) {
        

        message.innerHTML = 'Parabéns, você descobriu a regra do jogo! O valor B deve ser maior que o valor A'
        message.className = 'success-message'

        valorA.value = ''
        valorB.value = ''

    } else {
        message.innerHTML = 'Xii... algo de errado não está certo...'
        message.className = 'error-message'
    }

})
