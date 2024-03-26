async function saveNewContact(ev) {
    ev.preventDefault()

    const fullname = document.querySelector('#fullname').value
    const nickname = document.querySelector('#nickname').value

    const response = await fetch("http://localhost:3000/contact", {
        method: 'POST',
        body: JSON.stringify({ fullname, nickname }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // const newContact = await response.json()
    // console.log(newContact)
    // ev.target.reset()
}

document.querySelector('form').addEventListener('submit', saveNewContact)

