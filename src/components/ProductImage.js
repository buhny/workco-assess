import React from 'react';
import images from '../api/productImages'

const ProductImage = ({prodId, alt}) => {
  const imgId = images.find( (img) => img.productId === prodId);
  const urlXS = "https://picsum.photos/568/412?image="+imgId.photoId;
  const urlSm = "https://picsum.photos/731/389?image="+imgId.photoId;
  const urlLg = "https://picsum.photos/672/434?image="+imgId.photoId;
  const urlXL = "https://picsum.photos/910/564?image="+imgId.photoId;

  return (
    <picture className="product__img-wrapper">
      <source media="(max-width: 479px)" srcSet={urlXS} />
      <source media="(max-width: 767px)" srcSet={urlSm} />
      <source media="(max-width: 1279px)" srcSet={urlLg} />
      <source media="(min-width: 1280px)" srcSet={urlXL} />
      <img className="product__img" src={urlLg} alt={alt} />
    </picture>
  )
}

export default ProductImage;
