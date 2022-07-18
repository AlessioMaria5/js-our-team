let Team = [

    { 
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO	 ',
        'foto': 'wayne-barnett-founder-ceo.jpg'
    },
    { 
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto':  'angela-caroll-chief-editor.jpg' 
    },
    { 
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto':  'walter-gordon-office-manager.jpg'
    },
    { 
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto':  'angela-lopez-social-media-manager.jpg'
    },

    { 
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto':  'scott-estrada-developer.jpg'
    },

    { 
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto':  'barbara-ramos-graphic-designer.jpg' 
    }
]

console.log(Team);

for (let i = 0; i < Team.length; i++ ){

    console.log(Team[i].nome);
    console.log(Team[i].ruolo);
    console.log(Team[i].foto);

    let membersWrap = document.getElementById('membersWrap');
    let card = document.createElement('div');
    card.classList.add('card');
    membersWrap.append(card);

    card.innerHTML = `${Team[i].nome} ` + `${Team[i].ruolo} ` + `${Team[i].foto} `;
}

console.log()

// function card (Foto,Nome,Ruolo)