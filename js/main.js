const assetList = [
    {
        "id": 1,
        "asset_name": 'Defaults for global nav (one color/trim)',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 2,
        "asset_name": 'Exterior angles (all colors + all trims)',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 3,
        "asset_name": 'Interior 360s (all colors + all trims)',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 4,
        "asset_name": 'Model Data',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 5,
        "asset_name": 'Price List',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 6,
        "asset_name": 'Default Colors & Trims',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 7,
        "asset_name": 'Chrome Compare IDs',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 8,
        "asset_name": 'Model Lineup',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 9,
        "asset_name": 'Color Mapping Doc',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 10,
        "asset_name": 'Color Values Doc',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 11,
        "asset_name": 'Interior Color Chips',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 12,
        "asset_name": 'STARLINK Safety & Security Packages Doc',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 13,
        "asset_name": 'SOA Head Unit Spreadsheet',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 14,
        "asset_name": 'Fleet Features',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 15,
        "asset_name": 'Packages Doc',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 16,
        "asset_name": 'Packages Images',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 17,
        "asset_name": 'Trim Selector Doc',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 18,
        "asset_name": 'Trim Selector Images',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 19,
        "asset_name": 'Accessories Application Chart',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 20,
        "asset_name": 'Accessories Images + Tags',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 21,
        "asset_name": 'Transmission Selector doc',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 22,
        "asset_name": 'VSP Overview & Features Layout',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 23,
        "asset_name": 'VSP Overview & Features Copy',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id":24,
        "asset_name": 'VSP Overview Images',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 25,
        "asset_name": 'VSP Features Images',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 26,
        "asset_name": 'VSP Gallery Cutlines (All, Interior, Exterior)',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 27,
        "asset_name": 'VSP Gallery Images',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 28,
        "asset_name": 'VSP Gallery Videos & Titles',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 29,
        "asset_name": 'VSP & Awards | Metadata',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 30,
        "asset_name": 'VSP Social Share Copy',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 31,
        "asset_name": 'VSP Social Share Imag A image, copy, alt text',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 32,
        "asset_name": 'All Vehicles FMA image, copy, alt text',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 33,
        "asset_name": 'Master Disclaimers',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 34,
        "asset_name": 'SEO Category Page | SUVs | Performance',
        "tickets_related": [],
        "delivered": false
    },
    {
        "id": 35,
        "asset_name": 'Vehicles Nav Content Doc',
        "tickets_related": [],
        "delivered": false
    }
];

const projectData = {
    model: '',
    masterTicket: '',
    projServer: '',
    branchProject: '',
    year: '',
    rollOwner: '',
};

// Esta funcion obtiene los datos del formulario
function createProject() {

    const form = document.getElementById('form');


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        projectData.rollOwner  = document.querySelectorAll('form__input--radio').value;

        projectData.masterTicket = document.getElementById('project-master').value;
        projectData.branchProject = document.getElementById('project-branch').value;
        projectData.projServer = document.getElementById('project-server').value;
        
        projectData.model = document.getElementById('modelo').value;

        console.log(projectData);

        createList(assetList);
    });
}

createProject();
  
const arrayOfObjects = assetList.map((asset, index) => {
    return {
        id: index,
        asset_name: asset,
        ticket_related: [],
        delivered: false
    };
});

const app = document.getElementById('app');

// Funcion que crea la lista de assets
function createList(arrayList) {
    const list = document.createElement('ul');
    list.classList = ('assets__container');

    const title = document.createElement('h3');
    title.innerHTML = 'Assets list';

    const container = document.getElementById('assetList');

    arrayList.forEach(element => {

        const li = document.createElement('li');
        li.classList = ('asset__item');
        console.log(element);

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `asset-${element.id}`;
        checkbox.name = element.asset_name;
        checkbox.classList = ('asset__item--check');

        let label = document.createElement('label');
        label.htmlFor = `asset-${element.id}`;

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(element.asset_name));
        
        li.appendChild(label);
        list.appendChild(li);
    })

    app.appendChild(title);
    app.appendChild(list);

    container.classList.add('visible');
    container.classList.remove('hidden');

}
