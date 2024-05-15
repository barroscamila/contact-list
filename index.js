// funcao para salvar novo contato na "API"
async function saveNewContact(ev) {
    ev.preventDefault()

    const fullname = document.querySelector('#fullname').value
    const nickname = document.querySelector('#nickname').value
    const birthday = document.querySelector('#birthday').value
    const number = document.querySelector('#number').value
    const number2 = document.querySelector('#number2').value
    const email = document.querySelector('#email').value
    const postcode = document.querySelector('#postcode').value
    const address = document.querySelector('#address').value
    const numberAddress = document.querySelector('#numberAddress').value
    const city = document.querySelector('#city').value
    const state = document.querySelector('#state').value
    const country = document.querySelector('#country').value
    const instagram = document.querySelector('#instagram').value
    const xtwitter = document.querySelector('#xtwitter').value
    const linkedin = document.querySelector('#linkedin').value

    const response = await fetch("http://localhost:3000/contacts", {
        method: 'POST',
        body: JSON.stringify({ fullname, nickname, birthday, number, number2, email, postcode, address, numberAddress, city, state, country, instagram, xtwitter, linkedin }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // const newContact = await response.json()
    // console.log(newContact)

    ev.target.reset()
}

// Limpar campos do cadastro 
function reset() {
    document.querySelector('#fullname').value = ""
    document.querySelector('#nickname').value = ""
    document.querySelector('#birthday').value = ""
    document.querySelector('#number').value = ""
    document.querySelector('#email').value = ""
    document.querySelector('#number2').value = ""
    document.querySelector('#postcode').value = ""
    document.querySelector('#address').value = ""
    document.querySelector('#numberAddress').value = ""
    document.querySelector('#city').value = ""
    document.querySelector('#state').value = ""
    document.querySelector('#country').value = ""
    document.querySelector('#instagram').value = ""
    document.querySelector('#xtwitter').value = ""
    document.querySelector('#linkedin').value = ""
}

// 

document.querySelector('form').addEventListener('submit', saveNewContact)
document.querySelector('#cancelBtn').addEventListener('click', reset)
