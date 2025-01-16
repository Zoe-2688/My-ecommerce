import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [startIndexMenuItems, setStartIndexMenuItems] = useState(0); // Agregado estado para los elementos del menú
    const [currentCategory, setCurrentCategory] = useState('hamburguesas');

    const categories = [
        { name: 'hamburguesas', icon: '/images/burguer-icon.png' },
        { name: 'starters', icon: '/images/fries-icon.png' },
        { name: 'hotdog', icon: '/images/hotdog-icon.png' },
        { name: 'phillys & sandwiches', icon: '/images/sandwich-icon.png' },
        { name: 'ensaladas', icon: '/images/salad-icon.png' },
        { name: 'shakes', icon: '/images/shake-icon.png' },
        { name: 'postres', icon: '/images/dessert-icon.png' },
        { name: 'bebidas & tragos', icon: '/images/drink-icon.png' },
        { name: 'Kids menus', icon: '/images/kid-icon.png' }
    ];

    const menuItems = {
        hamburguesas: [
            { name: 'Spicy Houston Double', image: '/images/2hamburguerpre.jpg', description: '¡Doblemente ardiente! Esta hamburguesa incluye dos jugosas hamburguesas de carne de res Angus certificada, 100% fresca y nunca congelada, a la parrilla a la perfección y cubierta con jalapeños, queso pepperjack, lechuga, tomate y nuestro aderezo casero Smokin Chipotle Ranch.' },
            { name: 'Spicy Houston Double', image: '/images/2hamburguerpre.jpg', description: '¡Doblemente ardiente! Esta hamburguesa incluye dos jugosas hamburguesas de carne de res Angus certificada, 100% fresca y nunca congelada, a la parrilla a la perfección y cubierta con jalapeños, queso pepperjack, lechuga, tomate y nuestro aderezo casero Smokin Chipotle Ranch.' },
            { name: 'Spicy Houston Double', image: '/images/2hamburguerpre.jpg', description: '¡Doblemente ardiente! Esta hamburguesa incluye dos jugosas hamburguesas de carne de res Angus certificada, 100% fresca y nunca congelada, a la parrilla a la perfección y cubierta con jalapeños, queso pepperjack, lechuga, tomate y nuestro aderezo casero Smokin Chipotle Ranch.' },
            { name: 'Spicy Houston Double', image: '/images/2hamburguerpre.jpg', description: '¡Doblemente ardiente! Esta hamburguesa incluye dos jugosas hamburguesas de carne de res Angus certificada, 100% fresca y nunca congelada, a la parrilla a la perfección y cubierta con jalapeños, queso pepperjack, lechuga, tomate y nuestro aderezo casero Smokin Chipotle Ranch.' },
            { name: 'Spicy Houston Double', image: '/images/2hamburguerpre.jpg', description: '¡Doblemente ardiente! Esta hamburguesa incluye dos jugosas hamburguesas de carne de res Angus certificada, 100% fresca y nunca congelada, a la parrilla a la perfección y cubierta con jalapeños, queso pepperjack, lechuga, tomate y nuestro aderezo casero Smokin Chipotle Ranch.' }

        ],
        starters: [
            { name: 'Fries', image: '/images/2starterpre.jpg', description: 'Con piel y fritos extra crujientes, son el acompañamiento favorito de nuestras hamburguesas. ¡Pídelo a tu manera con chili de carne, queso o tocino!' },
            { name: 'Fries', image: '/images/2starterpre.jpg', description: 'Con piel y fritos extra crujientes, son el acompañamiento favorito de nuestras hamburguesas. ¡Pídelo a tu manera con chili de carne, queso o tocino!' },
            { name: 'Fries', image: '/images/2starterpre.jpg', description: 'Con piel y fritos extra crujientes, son el acompañamiento favorito de nuestras hamburguesas. ¡Pídelo a tu manera con chili de carne, queso o tocino!' },
            { name: 'Fries', image: '/images/2starterpre.jpg', description: 'Con piel y fritos extra crujientes, son el acompañamiento favorito de nuestras hamburguesas. ¡Pídelo a tu manera con chili de carne, queso o tocino!' },
            { name: 'Fries', image: '/images/2starterpre.jpg', description: 'Con piel y fritos extra crujientes, son el acompañamiento favorito de nuestras hamburguesas. ¡Pídelo a tu manera con chili de carne, queso o tocino!' }
        ],
        hotdog: [
            { name: 'Rocket Dog', image: '/images/2hotdogpre.jpg', description: '¡Despega y disfruta de este jugoso hot dog, cargado con cualquiera de los siguientes toppings: ketchup, mostaza, relish o cebolla!' },
            { name: 'Rocket Dog', image: '/images/2hotdogpre.jpg', description: '¡Despega y disfruta de este jugoso hot dog, cargado con cualquiera de los siguientes toppings: ketchup, mostaza, relish o cebolla!' },
            { name: 'Rocket Dog', image: '/images/2hotdogpre.jpg', description: '¡Despega y disfruta de este jugoso hot dog, cargado con cualquiera de los siguientes toppings: ketchup, mostaza, relish o cebolla!' },
            { name: 'Rocket Dog', image: '/images/2hotdogpre.jpg', description: '¡Despega y disfruta de este jugoso hot dog, cargado con cualquiera de los siguientes toppings: ketchup, mostaza, relish o cebolla!' },
            { name: 'Rocket Dog', image: '/images/2hotdogpre.jpg', description: '¡Despega y disfruta de este jugoso hot dog, cargado con cualquiera de los siguientes toppings: ketchup, mostaza, relish o cebolla!' }
        ],
        'phillys & sandwiches': [
            { name: 'Bacon, Lettuce & Tomato Sandwich', image: '/images/2sandwichpre.jpg', description: 'El clásico sándwich estadounidense con tocino grueso ahumado con madera de manzano, cubierto con lechuga, tomate y mayonesa en pan tostado de masa madre.' },
            { name: 'Bacon, Lettuce & Tomato Sandwich', image: '/images/2sandwichpre.jpg', description: 'El clásico sándwich estadounidense con tocino grueso ahumado con madera de manzano, cubierto con lechuga, tomate y mayonesa en pan tostado de masa madre.' },
            { name: 'Bacon, Lettuce & Tomato Sandwich', image: '/images/2sandwichpre.jpg', description: 'El clásico sándwich estadounidense con tocino grueso ahumado con madera de manzano, cubierto con lechuga, tomate y mayonesa en pan tostado de masa madre.' },
            { name: 'Bacon, Lettuce & Tomato Sandwich', image: '/images/2sandwichpre.jpg', description: 'El clásico sándwich estadounidense con tocino grueso ahumado con madera de manzano, cubierto con lechuga, tomate y mayonesa en pan tostado de masa madre.' },
            { name: 'Bacon, Lettuce & Tomato Sandwich', image: '/images/2sandwichpre.jpg', description: 'El clásico sándwich estadounidense con tocino grueso ahumado con madera de manzano, cubierto con lechuga, tomate y mayonesa en pan tostado de masa madre.' }
        ],
        ensaladas: [
            { name: 'Grilled Chicken Club Salad', image: '/images/2saladpre.jpg', description: 'El clásico sándwich, estilo ensalada, con pechuga de pollo a la parrilla sobre una cama de hojas verdes de temporada, cubierto con tocino desmenuzado, tomates en cubos, queso cheddar rallado y tu elección de aderezo.' },
            { name: 'Grilled Chicken Club Salad', image: '/images/2saladpre.jpg', description: 'El clásico sándwich, estilo ensalada, con pechuga de pollo a la parrilla sobre una cama de hojas verdes de temporada, cubierto con tocino desmenuzado, tomates en cubos, queso cheddar rallado y tu elección de aderezo.' },
            { name: 'Grilled Chicken Club Salad', image: '/images/2saladpre.jpg', description: 'El clásico sándwich, estilo ensalada, con pechuga de pollo a la parrilla sobre una cama de hojas verdes de temporada, cubierto con tocino desmenuzado, tomates en cubos, queso cheddar rallado y tu elección de aderezo.' },
            { name: 'Grilled Chicken Club Salad', image: '/images/2saladpre.jpg', description: 'El clásico sándwich, estilo ensalada, con pechuga de pollo a la parrilla sobre una cama de hojas verdes de temporada, cubierto con tocino desmenuzado, tomates en cubos, queso cheddar rallado y tu elección de aderezo.' },
            { name: 'Grilled Chicken Club Salad', image: '/images/2saladpre.jpg', description: 'El clásico sándwich, estilo ensalada, con pechuga de pollo a la parrilla sobre una cama de hojas verdes de temporada, cubierto con tocino desmenuzado, tomates en cubos, queso cheddar rallado y tu elección de aderezo.' }
        ],
        shakes: [
            { name: 'Oreo® Strawberry Crumble Shake', image: '/images/2shakepre.jpg', description: '¡Una versión divertida de un clásico! Nuestro Batido de Oreo® con Crumble de Fresa presenta la combinación imbatible de fresas y trozos de galleta Oreo®, mezclados a la perfección para un batido dulce, afrutado y delicioso.' },
            { name: 'Oreo® Strawberry Crumble Shake', image: '/images/2shakepre.jpg', description: '¡Una versión divertida de un clásico! Nuestro Batido de Oreo® con Crumble de Fresa presenta la combinación imbatible de fresas y trozos de galleta Oreo®, mezclados a la perfección para un batido dulce, afrutado y delicioso.' },
            { name: 'Oreo® Strawberry Crumble Shake', image: '/images/2shakepre.jpg', description: '¡Una versión divertida de un clásico! Nuestro Batido de Oreo® con Crumble de Fresa presenta la combinación imbatible de fresas y trozos de galleta Oreo®, mezclados a la perfección para un batido dulce, afrutado y delicioso.' },
            { name: 'Oreo® Strawberry Crumble Shake', image: '/images/2shakepre.jpg', description: '¡Una versión divertida de un clásico! Nuestro Batido de Oreo® con Crumble de Fresa presenta la combinación imbatible de fresas y trozos de galleta Oreo®, mezclados a la perfección para un batido dulce, afrutado y delicioso.' },
            { name: 'Oreo® Strawberry Crumble Shake', image: '/images/2shakepre.jpg', description: '¡Una versión divertida de un clásico! Nuestro Batido de Oreo® con Crumble de Fresa presenta la combinación imbatible de fresas y trozos de galleta Oreo®, mezclados a la perfección para un batido dulce, afrutado y delicioso.' }
        ],
        postres: [
            { name: '3 Pack of Freshly-Baked Chocolate Chip Cookies', image: '/images/2postrepre.jpg', description: 'Un paquete de 3 de nuestras galletas con chispas de chocolate recién horneadas. Crujientes en los bordes, suaves en el centro y cargadas de chispas de chocolate derretido. Pura felicidad en cada bocado.' },
            { name: '3 Pack of Freshly-Baked Chocolate Chip Cookies', image: '/images/2postrepre.jpg', description: 'Un paquete de 3 de nuestras galletas con chispas de chocolate recién horneadas. Crujientes en los bordes, suaves en el centro y cargadas de chispas de chocolate derretido. Pura felicidad en cada bocado.' },
            { name: '3 Pack of Freshly-Baked Chocolate Chip Cookies', image: '/images/2postrepre.jpg', description: 'Un paquete de 3 de nuestras galletas con chispas de chocolate recién horneadas. Crujientes en los bordes, suaves en el centro y cargadas de chispas de chocolate derretido. Pura felicidad en cada bocado.' },
            { name: '3 Pack of Freshly-Baked Chocolate Chip Cookies', image: '/images/2postrepre.jpg', description: 'Un paquete de 3 de nuestras galletas con chispas de chocolate recién horneadas. Crujientes en los bordes, suaves en el centro y cargadas de chispas de chocolate derretido. Pura felicidad en cada bocado.' },
            { name: '3 Pack of Freshly-Baked Chocolate Chip Cookies', image: '/images/2postrepre.jpg', description: 'Un paquete de 3 de nuestras galletas con chispas de chocolate recién horneadas. Crujientes en los bordes, suaves en el centro y cargadas de chispas de chocolate derretido. Pura felicidad en cada bocado.' }
        ],
        'bebidas & tragos': [
            { name: 'Bebidas & tragos', image: '/images/2bebidapre.jpg', description: '¡Consigue tus refrescos aquí! Desde sodas burbujeantes hasta té helado y tragos en Rockets sabemos cómo saciar tu sed.' },
            { name: 'Bebidas & tragos', image: '/images/2bebidapre.jpg', description: 'Consigue tus refrescos aquí! Desde sodas burbujeantes hasta té helado y tragos en Rockets sabemos cómo saciar tu sed.' },
            { name: 'Bebidas & tragos', image: '/images/2bebidapre.jpg', description: 'Consigue tus refrescos aquí! Desde sodas burbujeantes hasta té helado y tragos en Rockets sabemos cómo saciar tu sed.' },
            { name: 'Bebidas & tragos', image: '/images/2bebidapre.jpg', description: 'Consigue tus refrescos aquí! Desde sodas burbujeantes hasta té helado y tragos en Rockets sabemos cómo saciar tu sed.' },
            { name: 'Bebidas & tragos', image: '/images/2bebidapre.jpg', description: 'Consigue tus refrescos aquí! Desde sodas burbujeantes hasta té helado y tragos en Rockets sabemos cómo saciar tu sed.' }
        ],
        'Kids menus': [
            { name: 'Kids Chicken Strips', image: '/images/2menukidpre.jpg', description: 'Perfectos para mojar, nuestros tiernos de pollo ligeramente empanizados se sirven con tu salsa para mojar favorita.' },
            { name: 'Kids Chicken Strips', image: '/images/2menukidpre.jpg', description: 'Perfectos para mojar, nuestros tiernos de pollo ligeramente empanizados se sirven con tu salsa para mojar favorita.' },
            { name: 'Kids Chicken Strips', image: '/images/2menukidpre.jpg', description: 'Perfectos para mojar, nuestros tiernos de pollo ligeramente empanizados se sirven con tu salsa para mojar favorita.' },
            { name: 'Kids Chicken Strips', image: '/images/2menukidpre.jpg', description: 'Perfectos para mojar, nuestros tiernos de pollo ligeramente empanizados se sirven con tu salsa para mojar favorita.' },
            { name: 'Kids Chicken Strips', image: '/images/2menukidpre.jpg', description: 'Perfectos para mojar, nuestros tiernos de pollo ligeramente empanizados se sirven con tu salsa para mojar favorita.' }

        ]
    };

    const visibleCategories = categories.slice(startIndex, startIndex + 4); // Muestra 4 categorías a la vez

    const scrollCategories = (direction) => {
        const categoriesPerPage = 4;
        const newIndex = direction === 'right' ? startIndex + categoriesPerPage : startIndex - categoriesPerPage;

        if (newIndex >= 0 && newIndex < categories.length) {
            setStartIndex(newIndex);
            setCurrentCategory(categories[newIndex]?.name || currentCategory); // Cambiar a la categoría correspondiente
        }
    };

    const scrollMenuItems = (direction) => {
        const itemsPerPage = 4;
        const newIndex = direction === 'right' ? startIndexMenuItems + itemsPerPage : startIndexMenuItems - itemsPerPage;

        if (newIndex >= 0 && newIndex < menuItems[currentCategory].length) {
            setStartIndexMenuItems(newIndex);
        }
    };

    return (
        <div className="menu-container">
            <div className="menu-text-container">
                <div className="menu-header">
                    <img src="/images/stars.png" alt="Estrellas" className="stars-image top-left" />
                    <h2 className="menu-explora pacifico-regular">---Explora---</h2>
                </div>
                <div className="menu-text">Nuestro Menu</div>
                <img src="/images/stars.png" alt="Estrellas" className="stars-image bottom-right" />
            </div>

            {/* Carrusel de categorías */}
            <div className="carousel-containerCategorias">
    <button className="carousel-arrow left" onClick={() => scrollCategories('left')} disabled={startIndex === 0}>
        <img src="/images/flechaizquierda.png" alt="Left Arrow" />
    </button>
    <div className="carousel">
        {visibleCategories.map((category) => (
            <div
                key={category.name}
                className="carousel-item-text"
                onClick={() => setCurrentCategory(category.name)} // Cambiar la categoría actual
            >
                <img src={category.icon} alt={category.name} className="category-icon" />
                <span>{category.name}</span>
            </div>
        ))}
    </div>
    {startIndex + 4 < categories.length && ( // Condición para mostrar la flecha
        <button className="carousel-arrow right" onClick={() => scrollCategories('right')}>
            <img src="/images/flechaderecha.png" alt="Right Arrow" />
        </button>
    )}
</div>


            {/* Carrusel de elementos del menú */}
            <div className="carousel-container-menu">
                <button className="carousel-arrow left2" onClick={() => scrollMenuItems('left')}>
                    <img src="/images/flechaizquierda.png" alt="Left Arrow" />
                </button>
                <div id="menu-carousel" className="carousel">
                    {menuItems[currentCategory] && menuItems[currentCategory].slice(startIndexMenuItems, startIndexMenuItems + 4).map((item, index) => (
                        <div key={index} className="carousel-item">
                            <div className="carousel-item-image">
                                <img src={item.image} alt={item.name} className="item-image" />
                            </div>
                            <h2 className="item-title">{item.name}</h2>
                            <div className="carousel-item-description">
                                <p>{item.description}</p>
                            </div>
                            <a href="#" className="menu-button">
                                Pide Online
                            </a>
                        </div>
                    ))}
                </div>
                <button className="carousel-arrow right2" onClick={() => scrollMenuItems('right')}>
                    <img src="/images/flechaderecha.png" alt="Right Arrow" />
                </button>
            </div>
        </div>
    );
};

export default Menu;