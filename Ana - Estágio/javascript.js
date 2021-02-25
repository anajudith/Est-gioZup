let data = document.querySelector('.box')
let seatch_input = document.querySelector('#search_input')

let contact = [{
        image: 'pessoa1.jpeg',
        name: 'Lorraine',
        email: 'lorraine.beck22@example.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'pessoa2.jpeg',
        name: 'Lorem',
        email: 'loremipsum@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'pessoa3.jpeg',
        name: 'Dolor',
        email: 'dolorsit123@mail.com',
        cell: '(960)-861-1890',
        city: 'São Paulo - SP'
    },
    {
        image: 'pessoa4.jpeg',
        name: 'Consectut',
        email: 'consectutor123@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'pessoa4.jpeg',
        name: 'Adipiscing',
        email: 'adipiscing@mail.com',
        cell: '(960)-861-1890',
        city: '	São Paulo - SP'
    },
    {
        image: 'pessoa6.jpeg',
        name: 'Ipsum',
        email: 'ipsumdolor12345@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'pessoa7.jpeg',
        name: 'Beck Elit',
        email: 'beckelitsit@mail.com',
        cell: '(960)-861-1890',
        city: '	Belo Horizonte - MG'
    },
    {
        image: 'pessoa8.jpeg',
        name: 'Consectut',
        email: 'consectutor123@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'pessoa7.jpeg',
        name: 'Ipsum',
        email: 'ipsumdolor12345@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
    {
        image: 'pessoa1.jpeg',
        name: 'Lorem',
        email: 'loremipsum@mail.com',
        cell: '(960)-861-1890',
        city: '	Uberlândia - MG'
    },
]


seatch_input.addEventListener('keyup', function(e) {
    console.log(e.target.value.toLowerCase())
    let search_item = e.target.value.toLowerCase()
    let name = document.querySelectorAll(".table .name ")


    name.forEach((item) => {
        if (item.textContent.toLowerCase().indexOf(search_item) != -1) {
            item.closest("tr").style.display = 'table-row';
        } else {
            item.closest("tr").style.display = 'none'
        }
    })
})
    

document.getElementById('Contact').innerHTML = contact.map((contact) => {
    console.log(contact)
    return `
    <tr>
    <td><img class="imagePeople" src="${contact.image}" alt="Imagem pessoa 1" srcset=""></td>
      <td class="name">${contact.name}</td>
      <td>${contact.email}</td>
      <td>${contact.cell}</td>
      <td class="city">${contact.city}</td>
      <td class="buttonTable">
      <button class="buttonIcon" type="submit"><i class="far fa-trash-alt"></i></button>
      <button class="buttonIcon" type="submit"><i class="far fa-square"></i></button>
      <button class="buttonIcon" type="submit"><i class="fas fa-check"></i></button>
    </td>
    </tr>
`
}).join('')