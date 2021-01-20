import React from 'react';

// import child component(s)
import ProductTile from './ProductTile';

const TileSlider = ({ relatedProducts }) => {
  let pageCount = relatedProducts.length / 6;
  if (pageCount % 2 !== 0) pageCount = Math.floor(pageCount + 1);


  console.log(pageCount);
  return (
    <div className="image-slider-contain">
      <div className="image-slider-header">
        <h2 className="slider-header">Customers also bought these products</h2>
      </div>
      <ul className="slider">
        <a id="slide-pagination-prev" href="#slide-1">1</a>
        <a id="slide-pagination-next" href="#slide-12">2</a>
        {relatedProducts.map((product, index) => (

          <ProductTile
            index={index}
            product={product}
            dataId={product.id}
            key={product.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TileSlider;