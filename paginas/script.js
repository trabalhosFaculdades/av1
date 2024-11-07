const restaurants = [
    {
        name: "Pizzaria do Samba",
        category: "Pizza",
        price: 2,
        rating: 4,
        image: "fotos/pizza.jpg",
    },
    {
        name: "Sushi da Praça",
        category: "Sushi",
        price: 3,
        rating: 5,
        image: "fotos/sushi.jpg",
    },
    {
        name: "OBurgês",
        category: "Hamburguer",
        price: 1,
        rating: 4,
        image: "fotos/hamburguer.jpg",
    },
    {
        name: "Restaurante Chinês",
        category: "Chinesa",
        price: 2,
        rating: 5,
        image: "fotos/chines.jpg",
    },
    {
        name: "Pizzaria do Samba",
        category: "Pizza",
        price: 2,
        rating: 4,
        image: "fotos/pizza.jpg",
    },
    {
        name: "Sushi da Praça",
        category: "Sushi",
        price: 3,
        rating: 5,
        image: "fotos/sushi.jpg",
    },
    {
        name: "OBurgês",
        category: "Hamburguer",
        price: 1,
        rating: 4,
        image: "fotos/hamburguer.jpg",
    },
    {
        name: "Restaurante Chinês",
        category: "Chinesa",
        price: 2,
        rating: 5,
        image: "fotos/chines.jpg",
    },
    {
        name: "Pizzaria do Samba",
        category: "Pizza",
        price: 2,
        rating: 4,
        image: "fotos/pizza.jpg",
    },
    {
        name: "Sushi da Praça",
        category: "Sushi",
        price: 3,
        rating: 5,
        image: "fotos/sushi.jpg",
    },
    {
        name: "OBurgês",
        category: "Hamburguer",
        price: 1,
        rating: 4,
        image: "fotos/hamburguer.jpg",
    },
    {
        name: "Restaurante Chinês",
        category: "Chinesa",
        price: 2,
        rating: 5,
        image: "fotos/chines.jpg",
    },
    {
        name: "Pizzaria do Samba",
        category: "Pizza",
        price: 2,
        rating: 4,
        image: "fotos/pizza.jpg",
    },
    {
        name: "Sushi da Praça",
        category: "Sushi",
        price: 3,
        rating: 5,
        image: "fotos/sushi.jpg",
    },
    {
        name: "OBurgês",
        category: "Hamburguer",
        price: 1,
        rating: 4,
        image: "fotos/hamburguer.jpg",
    },
    {
        name: "Restaurante Chinês",
        category: "Chinesa",
        price: 2,
        rating: 5,
        image: "fotos/chines.jpg",
    },{
        name: "Pizzaria do Samba",
        category: "Pizza",
        price: 2,
        rating: 4,
        image: "fotos/pizza.jpg",
    },
    {
        name: "Sushi da Praça",
        category: "Sushi",
        price: 3,
        rating: 5,
        image: "fotos/sushi.jpg",
    },
    {
        name: "Restaurante Chinês",
        category: "Chinesa",
        price: 2,
        rating: 5,
        image: "fotos/chines.jpg",
    },{
        name: "Pizzaria do Samba",
        category: "Pizza",
        price: 2,
        rating: 4,
        image: "fotos/pizza.jpg",
    },
    {
        name: "Sushi da Praça",
        category: "Sushi",
        price: 3,
        rating: 5,
        image: "fotos/sushi.jpg",
    },
    
];

function renderRestaurants(filteredRestaurants) {
    const restaurantList = document.getElementById('restaurant-list');
    restaurantList.innerHTML = '';

    filteredRestaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.classList.add('restaurant-card');
        
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" />
            <h3>${restaurant.name}</h3>
            <p>${restaurant.category}</p>
            <p class="price">R$ ${restaurant.price}</p>
            <p class="rating">${restaurant.rating}★</p>
        `;
        
        restaurantList.appendChild(card);
    });
}

function searchRestaurant() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const filtered = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchQuery) ||
        restaurant.category.toLowerCase().includes(searchQuery)
    );

    renderRestaurants(filtered);
}

function filterResults() {
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const rating = document.getElementById('rating').value;

    let filtered = restaurants;

    if (category) {
        filtered = filtered.filter(restaurant => restaurant.category === category);
    }

    if (price) {
        filtered = filtered.filter(restaurant => restaurant.price === parseInt(price));
    }

    if (rating) {
        filtered = filtered.filter(restaurant => restaurant.rating >= parseInt(rating));
    }

    renderRestaurants(filtered);
}

renderRestaurants(restaurants);
