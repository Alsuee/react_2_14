import { PoiskTovarov } from '../Poisk/Poisk';
import { Tovar } from '../tovar/tovar'
import s from './catalogtovarov.module.css'
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Car 1',
        price: 50000,
        image: 'https://i.pinimg.com/564x/d2/10/94/d21094a59e852fe5d2181784f0970799.jpg',
        quantity: 0,
        category: 'Черный'
    },

    {
        id: 2,
        title: 'Car 2',
        price: 200000,
        image: 'https://i.pinimg.com/564x/10/98/f8/1098f8b2b062c15f80db254bd5e566ae.jpg',
        quantity: 7,
        category: 'Белый'
    },
    {
        id: 3,
        title: 'Car 3',
        price: 300000,
        image: 'https://i.pinimg.com/564x/1f/d0/aa/1fd0aa4f5c29ca86838563c9d81124fd.jpg',
        quantity: 4,
        category: 'Розовый'
    },
    {
        id: 4,
        title: 'Car 4',
        price: 44000,
        image: 'https://i.pinimg.com/564x/f0/55/eb/f055eb9917d10773cc07b0bc640cafa3.jpg',
        quantity: 0,
        category: 'Черный'
    },

    {
        id: 5,
        title: 'Car 5',
        price: 130000,
        image: 'https://i.pinimg.com/564x/d4/65/ba/d465ba20f0336ee4b87522e0e8799253.jpg',
        quantity: 2,
        category: 'Белый'
    },
    {
        id: 6,
        title: 'Car 6',
        price: 60000,
        image: 'https://i.pinimg.com/564x/6d/99/39/6d9939b9cd64879270464112400c85fb.jpg',
        quantity: 5,
        category: 'Белый'
    }
];


export function Catalogtovarov() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(''); 

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const sortProducts = (products) => {
        if (sortCriteria === 'priceAsc') {
            return products.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            return products.sort((a, b) => b.price - a.price);
        } else if (sortCriteria === 'quantityAsc') {
            return products.sort((a, b) => a.quantity - b.quantity);
        } else if (sortCriteria === 'quantityDesc') {
            return products.sort((a, b) => b.quantity - a.quantity);
        }
        return products;
    };

    const filterProducts = (products) => {
        if (selectedCategory) {
            return products.filter(product => product.category === selectedCategory);
        }
        return products; 
    };

    const filteredProducts = filterProducts(products).filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <div className={s.catalogszag}>
        <h1 className={s.Zagolovktov}>Каталог товаров</h1>
        <div className={s.PoiskFiltr}>
            <input className={s.Pole}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Поиск товаров..."
            />
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Все категории</option>
                <option value="Черный">Черный</option>
                <option value="Белый">Белый</option>
                <option value="Розовый">Розовый</option>
            </select>
            <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
                <option value="">Без сортировки</option>
                <option value="priceAsc">Цена: по возрастанию</option>
                <option value="priceDesc">Цена: по убыванию</option>
                <option value="quantityAsc">Количество: по возрастанию</option>
                <option value="quantityDesc">Количество: по убыванию</option>
            </select>
        </div>
            <div className={s.catalogs}>
                <div className={s.catalog}>
                    {sortedProducts.map((product) => (
                        <Tovar 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            price={product.price} 
                            image={product.image} 
                            quantity={product.quantity} 
                            category={product.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}