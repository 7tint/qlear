import React from 'react';
import CSS from 'csstype';

interface CardProps {
  company: string;
  product: string;
  image: string;
}

const ProductCard: React.SFC<CardProps> = (props) => {
  const customCard: CSS.Properties = {
    borderRadius: "0",
    backgroundColor: "#F5F5F5",
    boxShadow: "none"
  };

  const productImageContainer: CSS.Properties = {
    position: "relative",
    paddingBottom: "85%",
    height: "0",
    overflow: "hidden"
  };

  const productImage: CSS.Properties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  return (
    <div className="column is-one-quarter-fullhd is-one-third-desktop is-half-tablet is-full-touch">
      <div className="card mx-1" style={customCard}>
        <div className="card-content p-0">
          <div className="content">
            <div style={productImageContainer}>
              <img style={productImage} src={props.image} alt="Product preview"/>
            </div>
            <div className="is-flex w-100 is-justify-content-space-between px-4 pt-4 pb-2">
              <div className="opacity-60 company has-text-theme-green-1 has-font-weight-bold">{props.company}</div>
              <div className="is-flex">
                <i className="fa fa-sm fa-plus mr-1 has-text-theme-green-1"/>
                <i className="fa fa-sm fa-heart ml-1 has-text-danger"/>
              </div>
            </div>
            <div className="is-size-7 has-font-weight-normal px-4 pb-5 has-text-left">{props.product}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
