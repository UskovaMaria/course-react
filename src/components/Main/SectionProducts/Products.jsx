import React from 'react';
import "./products.css";
import { Product } from './Product';
import { useSelector } from 'react-redux';
import { selectFilteredProducts } from '../../../store/selectors';

export const Products = () => {
    // const prodsList = useSelector(state => state.products.prodsList.filter(prod => prod.type === 'product'));
    const prodsList = useSelector(selectFilteredProducts);
    return (
        <section className="products section">
            <div className="container section__inner">
                <div className="products__descr section__descr">
                    <h2 className="products__title title">
                        Наші товари
                    </h2>
                    <p className="products__text section__text">
                        Ми використовуємо тільки найкращі якісні матеріали:
                        соєвий віск, віскові барвники, високоякісні ароматичні
                        олії та бавовняні фітільці. Відтінки свічок дуже гармонійно
                        поєднуються з ароматом, створюючи незабутню атмосферу у вашому домі.
                    </p>
                </div>
                <div className="products__content section__content-descr section--decor">
                    {
                        prodsList.map(prod => <Product key={prod.id} data={prod} />)
                    }
                </div>
            </div>
        </section>
    );
};

