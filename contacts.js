let contactListContainer = document.querySelector('.contactListContainer')

// funcao para apresentar contatos salvos na "API"
async function showContacts() {
    const response = await fetch("http://localhost:3000/contacts")
    
    const contacts = await response.json()
    // console.log(contacts)
    contacts.forEach(contact => {
        // console.log(contact)
        createContactCard(contact.fullname, contact.nickname, contact.birthday, contact.number, contact.number2, contact.email, contact.postcode, contact.address, contact.numberAddress, contact.city, contact.state, contact.country, contact.instagram, contact.xtwitter, contact.linkedin)
    })
}

// funcao para verificar se o campo é null
// function isInfoNull(contactInfos) {
//     contactInfos.forEach(info => { return (info = "" ? "-" : info) });
// }

// funcao para criar card dos contatos cadastrados
function createContactCard(fullname, nickname, birthday, number, number2, email, postcode, address, numberAddress, city, state, country, instagram, xtwitter, linkedin) {
    const card = document.createElement('div')
    card.classList = 'contactCard'

    // const contactInfos = [fullname, nickname, birthday, number, number2, email, postcode, address, numberAddress, city, state, country, instagram, xtwitter, linkedin]
    // const teste = isInfoNull(contactInfos)
    // console.log(teste)

    card.innerHTML = `
    <p><span id="contactName"><strong>${fullname}</strong></span> <span>(${nickname})</span></p>
    <p><strong>Birthday:</strong> <span>${birthday}</span></p>
    <p><strong>Contact numbers:</strong> <span>${number}</span>, <span>${number2}</span></p>
    <p>E-mail: <span>${email}</span></p>
    <p><strong>Address:</strong>
        <span>${postcode}</span>, 
        <span>${address}</span>
        <span>${numberAddress}</span>, 
        <span>${city}</span>, 
        <span>${state}</span>, 
        <span>${country}</span>
    </p>
    <p><strong>Instagram:</strong> @<span>${instagram}</span></p>
    <p><strong>X (twitter):</strong> @<span>${xtwitter}</span></p>
    <p><strong>Linkedin:</strong> /<span>${linkedin}</span></p>
    `
    contactListContainer.appendChild(card)
}

showContacts()

