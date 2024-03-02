import React from 'react';
import { FC } from 'react';

import { cnProductCard } from './ProductCard.classname';
import iconSrc from '../../assets/icons/Vector.svg';

import './ProductCard.css';

type ProductCardProps = {
    srcProduct: string;
    discountPercent?: string;
    price: number;
    title: string;
    discountPrice?: number;
    ratingStarNumber?: number;
    countSold?: number;
}

const ProductCard: FC<ProductCardProps> = ({ srcProduct, discountPercent, price, discountPrice, title, ratingStarNumber, countSold }) => {
    let countSoldText;
    let isDiscount = true;

    if (countSold !== undefined) {
        countSoldText = countSold > 1 ? ' купили' : ' купил/а';
    }

    if (discountPrice === undefined) {
        isDiscount = false;
    }

    return (
        <div className={cnProductCard()}>
            <div className={cnProductCard('Top')}>
                <a className={cnProductCard('Link')} href="/">
                    <img className={cnProductCard('Image')} src={srcProduct} alt="product-card" />
                </a>
                {discountPercent && <div className={cnProductCard('Label')}>{discountPercent} </div>}
            </div>
            <div className={cnProductCard('Bottom')} >
                <a href="/" className={cnProductCard('Title')} >{title}</a>
                <div className={cnProductCard('Rating')}>
                    {ratingStarNumber && <div className={cnProductCard('RatingStar')}>
                        <p className={cnProductCard('Text', { ratingStarNumber: true })}>
                            {ratingStarNumber}
                        </p>
                        <img className={cnProductCard('icon', { icon: true })} src={iconSrc} alt="icon" />
                    </div>}
                    {countSold && <div className={cnProductCard('CountSold')}>
                        <p className={cnProductCard('CountSold')}>
                            {countSold}
                            <span className={cnProductCard('CountSoldText')}>{countSoldText}</span>
                        </p>
                    </div>}
                </div>
                <div className={cnProductCard('Prices')}>
                    {discountPrice && <div className={cnProductCard('Price', { discount: true })}>
                        {discountPrice + "₽"}
                    </div>}
                    {price &&
                        <div className={cnProductCard('Price', { common: isDiscount })}>{price + "₽"}</div>}
                </div>
            </div>
        </div>
    );
}

export { ProductCard };