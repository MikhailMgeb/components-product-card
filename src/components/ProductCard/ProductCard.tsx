import React from 'react';
import { FC } from 'react';

import { cnProductCard } from './ProductCard.classname';
import iconSrc from '../../assets/icons/Vector.svg'

import './ProductCard.css';

type ProductCardProps = {
    srcProduct: string;
    discount: string;
    price: string;
    title: string;
    discountPrice: string;
    ratingStarNumber: string;
    countSold: number;
}

const ProductCard: FC<ProductCardProps> = ({ srcProduct, discount, price, discountPrice, title, ratingStarNumber, countSold }) => {

    const countSoldText = countSold > 1 ? ' купили' : ' купил/а';

    return (
        <div className={cnProductCard()}>
            <div className={cnProductCard('Top')}>
                <a className={cnProductCard('Link')} href='/'>
                    <img className={cnProductCard('Image')} src={srcProduct} alt="product-card" />
                </a>
                {discount ? <div className={cnProductCard('Label')}>
                    {discount} </div> : ''}
            </div>
            <div className={cnProductCard('Bottom')} >
                <a href='/' className={cnProductCard('Title')} >{title}</a>
                <div className={cnProductCard('Rating')}>
                    <div className={cnProductCard('RatingStar')}>
                        <p className={cnProductCard('Text', { ratingStarNumber: true })}>
                            {ratingStarNumber}
                        </p>
                        <img className={cnProductCard('icon', { icon: true })} src={iconSrc} alt='icon' />
                    </div>
                    <div className={cnProductCard('CountSold')}>
                        <p className={cnProductCard('CountSold')}>{countSold}
                            <span className={cnProductCard('CountSoldText')}>{countSoldText}</span>
                        </p>

                    </div>

                </div>
                <div className={cnProductCard('Prices')}>
                    <div className={cnProductCard('Price', { discount: true })}>
                        {discountPrice + '₽'}
                    </div>
                    {price ? <div className={cnProductCard('Price', { common: true })}>
                        {price + '₽'}
                    </div> : ''}
                </div>
            </div>
        </div>
    );
}

export { ProductCard };