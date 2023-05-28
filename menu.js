const menuItemsData = [
    {
        name: 'Croquetas caseras de paella',
        digit: 8,
        description: 'Handmade paella croquettes with meat and fish',
        category: 'Meat',
        tag: 'Nuevo'
    },
    {
        name: 'Pinchitos con roquefort',
        digit: 9.25,
        description: '2 tenderloin skewers with roquefort sauce',
        category: 'Meat',
        tag: 'Nuevo'
    },
    {
        name: 'Helado de naranja',
        digit: 8.5,
        description: '3 scoops of ice cream with orange',
        category: 'Dessert',
        tag: 'Nuevo'
    },
    {
        name: 'Pan de ajo',
        digit: 5.5,
        description: 'Grilled bread with garlic oil',
        category: 'Bread',
    },
    {
        name: 'Pan con alioli',
        digit: 6,
        description: 'Bread with alioli',
        category: 'Bread',
    },
    {
        name: 'Pan con tomate',
        digit: 7,
        description: 'Grilled bread with homemade tomato salsa',
        category: 'Bread'
    },
    {
        name: 'Verduras a la Barraca',
        digit: 7.5,
        description: 'Grilled vegetables',
        category: 'Vegetables + Cheese',
    },
    {
        name: 'Pimentos de Padrón',
        digit: 8,
        description: 'Grilled Spanish Padrón peppers with sea salt',
        category: 'Vegetables + Cheese',
    },
    {
        name: 'Aceitunas',
        digit: 6,
        description: 'Mixed olives',
        category: 'Vegetables + Cheese',
    },
    {
        name: 'Nachos sin carne',
        digit: 7.75,
        description: 'Nachos, tomato salsa, cheese and sourcream',
        category: 'Vegetables + Cheese',
    },
    {
        name: 'Verduras a la parrilla',
        digit: 8,
        description: 'Grilled courgette, grilled sweet pepper, grilled tomato, gratin with goat cheese.',
        category: 'Vegetables + Cheese',
    },
    {
        name: 'Gambas al ajillio',
        digit: 9.5,
        description: 'Large prawns in red garlic oil',
        category: 'Fish',
    },
    {
        name: 'Calamares fritos',
        digit: 9,
        description: 'Hand-cut, deep-fried squid rings in beer batter with alioli',
        category: 'Fish',
    },
    {
        name: 'Flan Catalan',
        digit: 6,
        description: 'Catalan flan with caramel sauce,',
        category: 'Dessert',
    },
    {
        name: 'Tiramisu de la barraca',
        digit: 8,
        description: 'Our Homemade Tiramisu with salted caramel,',
        category: 'Dessert',
    },
    {
        name: 'Carpaccio de carne',
        digit: 11.5,
        description: 'Hand-cut beef carpaccio with homemade truffle cream',
        category: 'Meat',
    },
    {
        name: 'Solomillo de pimienta',
        digit: 9.5,
        description: 'Medium grilled sirloin steaks with homemade pepper cream sauce',
        category: 'Meat',
    },
    {
        name: 'Alitas de pollo de la casa',
        digit: 7.75,
        description: 'Homemade spiced chicken wings with honey',
        category: 'Meat',
    },
    {
        name: 'Pinchos EspaÑa',
        digit: 9,
        description: '2 tenderloin skewers, Spanish marinated',
        category: 'Meat',
    },
    {
        name: 'Gambas a la langosta',
        digit: 9,
        description: 'grilled gambas with homemade lobster mayonnaise',
        category: 'Fish',
    },
    {
        name: 'Jamón serrano',
        digit: 9,
        description: 'Serrano ham with truffle cream',
        category: 'Meat',
    },
    {
        name: 'Queso manchego',
        digit: 6.5,
        description: 'Spanish sheep cheese with honey',
        category: 'Vegetables + Cheese',
    },
    {
        name: 'Tortilla Española',
        digit: 9,
        description: 'Spanish potato tortilla, freshly made | preparation time +/- 20 minutes',
        category: 'Vegetables + Cheese',
    }
];



function populateMenuItems(menuItemsData) {
    let menuItemsContainer = document.querySelector('.menu-main')
    //clear existing menu items, if any
    menuItemsContainer.innerHTML = '';

    //looping thru the menu items data
    menuItemsData.forEach(item => {
        const menuItem = document.createElement('div')
        menuItem.classList.add('menu-main-content')
        // menuItem.classList.add(item.category)
        menuItem.innerHTML = `
                                <div class="menu-main-content-some">
                                <div class="menu-main-content-nuevo">
                                    <p>${item.tag ? item.tag : ''}</p>
                                    <h4 class="menu-main-content-h4">${item.name}</h4>    
                                </div>
                                <span>${item.digit}</span>
                                </div>
                                <p>${item.description}</p>`

        menuItemsContainer.appendChild(menuItem)
    });
};

const filterButtons = document.querySelectorAll('input[name="category"]')

filterButtons.forEach((button) => {
    button.addEventListener('change', () => {
        let category = button.value;
        let filteredItems = menuItemsData.filter(item => item.category === category);
        populateMenuItems(filteredItems);
    })
})

window.addEventListener('load', () => {
    populateMenuItems(menuItemsData)
})

