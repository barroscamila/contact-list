let contactListContainer = document.querySelector('.contactListContainer')

// funcao para apresentar contatos salvos na "API"
async function showContacts() {
    const response = await fetch("http://localhost:3000/contacts")
    
    const contacts = await response.json()
    // console.log(contacts)
    contacts.forEach(contact => {
        console.log(contact)
        createContactCard(contact.fullname, contact.nickname, contact.birthday, contact.number, contact.number2, contact.email, contact.postcode, contact.address, contact.numberAddress, contact.city, contact.state, contact.country, contact.instagram, contact.xtwitter, contact.linkedin)
    })
}

function createContactCard(fullname, nickname, birthday, number, number2, email, postcode, address, numberAddress, city, state, country, instagram, xtwitter, linkedin) {
    const card = document.createElement('div')
    card.classList = 'contactCard'
    card.innerHTML = `
    <p><span>${fullname}</span> <span>(${nickname})</span></p>
    <p>Birthday: <span>${birthday}</span></p>
    <p>Contact numbers: <span>${number}</span>, <span>${number2}</span></p>
    <p>E-mail: <span>${email}</span></p>
    <p>Address:
        <span>${postcode}</span>, 
        <span>${address}</span>
        <span>${numberAddress}</span>, 
        <span>${city}</span>, 
        <span>${state}</span>, 
        <span>${country}</span>
    </p>
    <p>Instagram: @<span>${instagram}</span></p>
    <p>X (twitter): @<span>${xtwitter}</span></p>
    <p>Linkedin: /<span>${linkedin}</span></p>
    `
    contactListContainer.appendChild(card)
}

showContacts()

