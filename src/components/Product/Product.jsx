import { useParams } from 'react-router-dom';
import s from './Product.module.css';
import { OrderFormModal } from '../Modal/Modal';
import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: 'Car 1',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 50000,
        image: 'https://i.pinimg.com/564x/d2/10/94/d21094a59e852fe5d2181784f0970799.jpg',
        quantity: 0
    },

    {
        id: 2,
        title: 'Car 2',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 200000,
        image: 'https://i.pinimg.com/564x/10/98/f8/1098f8b2b062c15f80db254bd5e566ae.jpg',
        quantity: 7
    },
    {
        id: 3,
        title: 'Car 3',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 300000,
        image: 'https://i.pinimg.com/564x/1f/d0/aa/1fd0aa4f5c29ca86838563c9d81124fd.jpg',
        quantity: 4
    },
    {
        id: 4,
        title: 'Car 4',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 44000,
        image: 'https://i.pinimg.com/564x/f0/55/eb/f055eb9917d10773cc07b0bc640cafa3.jpg',
        quantity: 0
    },

    {
        id: 5,
        title: 'Car 5',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 130000,
        image: 'https://i.pinimg.com/564x/d4/65/ba/d465ba20f0336ee4b87522e0e8799253.jpg',
        quantity: 2
    },
    {
        id: 6,
        title: 'Car 6',
        description: 'React — это JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. Она помогает быстро и легко реализовать реактивность — явление, когда в ответ на изменение одного элемента меняется всё остальное. Основная идея React — создание компонентов. React используют для создания одностраничных и многостраничных приложений, разработки крупных сайтов.',
        price: 60000,
        image: 'https://i.pinimg.com/564x/6d/99/39/6d9939b9cd64879270464112400c85fb.jpg',
        quantity: 5
    }
    
];

export function ProductPage() {
    const { id } = useParams();
    const product = products.find((product) => product.id === Number(id));
    
    const [isModalOpen, setModalOpen] = useState(false);

    if (!product) {
        return <h2>Товар не найден</h2>;
    }

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    return (
        <div className={s.Productda}>
            <img className={s.ProductImage} src={product.image} alt={product.title} />
            <div className={s.Producttext}>
                <h1 className={s.ProductTitle}>{product.title}</h1>
                <p className={s.ProductDesc}>{product.description}</p>
                <div className={s.btnopis}>
                    <h3 className={s.ProductTsena}>{product.price}₽</h3>
                    {product.quantity === 0 ? (
                        <button onClick={handleOrderClick} className={s.AddKorzin}>Заказать</button>
                    ) : (
                        <button className={s.AddKorzin}>Добавить в корзину</button>
                    )}
                </div>
            </div>
            <OrderFormModal   
                isOpen={isModalOpen} 
                onClose={() => setModalOpen(false)} 
                product={product} 
            />
        </div>
    );
}