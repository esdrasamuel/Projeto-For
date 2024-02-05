let p = document.querySelector("p");
let input = document.querySelector("input");

const contacts = [
    { name: 'Esdras', number: '(51) 986254832' },
    { name: 'Larissa', number: '(51) 986254832' },
    { name: 'Pepe', number: '(51) 986254832' },
    { name: 'Paulo', number: '(51) 986254832' },
    { name: 'Matheus', number: '(51) 986254832' },
    { name: 'Samuel', number: '(51) 986254832' },
];

function search() {
    let contactFound = false;
    let i = 0;

    while (i < contacts.length) {
        let contact = contacts[i];

        if (input.value.toLowerCase() === contact.name.toLowerCase()) {
            p.innerHTML = `Contato encontrado Nome: ${contact.name} Tell: ${contact.number}`;
            contactFound = true;
            break;
        }

        i++;
    }

    if (!contactFound) {
        p.innerHTML = "Contato Não Encontrado";
    }
}
