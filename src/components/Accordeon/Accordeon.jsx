import React, { useState } from 'react';
import s from './Accardeon.module.css'

export function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.accordion_item}>
            <div className={s.accordion_header} onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className={s.accordion_content}>
                    {children}
                </div>
            )}
        </div>
    );
}

export function Accordion() {
    return (
        <div className={s.accordion}>
            <AccordionItem title="Ингридиенты для блинов">
                <p>Вода - 750 мл, Яйца - 2 шт., Мука - 300 г, Сахар - 1 ст. ложка, Соль - 1 щепотка, Масло растительное для жарки - 2 ст. ложки</p>
            </AccordionItem>
            <AccordionItem title="Ход действий">
                <p>
                Подготовить продукты по рецепту → 
                К просеянной муке добавить яйца, сахар и соль. Хорошо перемешать → Понемногу, по полстакана, добавлять воду. Тщательно размешивать и растирать тесто, чтобы оно было однородным, без комков → Лучше всего замешивать тесто миксером (можно использовать блендер) → Оставить блинное тесто на 15-20 минут</p>
            </AccordionItem>
            <AccordionItem title="Финал">
                <p>Ну жарьте короче на сковородке</p>
            </AccordionItem>
        </div>
    );
}