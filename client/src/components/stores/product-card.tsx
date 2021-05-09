import React from 'react';
import { Link } from 'react-router-dom';
import CSS from 'csstype';

interface CardProps {
  id: string;
  name: string;
  image: string;
  price: string;
  qr: string;
  scanned: number;
  wishlisted: number;
  purchased: number;
}

const ProductCard: React.SFC<CardProps> = (props) => {
  const customCard: CSS.Properties = {
    borderRadius: "0",
    backgroundColor: "#F5F5F5",
    boxShadow: "none"
  };

  const productImageContainer: CSS.Properties = {
    position: "relative",
    paddingBottom: "75%",
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

  const qrCode: CSS.Properties = {
    width: "45%",
    height: "45%"
  };

  const infoSection: CSS.Properties = {
    width: "55%",
  };

  const rounded: CSS.Properties = {
    borderRadius: "3rem"
  };

  return (
    <Link to={`/buy/dashboard/${props.id}`} className="column mb-6 is-one-quarter-fullhd is-one-third-desktop is-half-tablet is-full-touch">
      <div className="card mx-2" style={customCard}>
        <div className="card-content p-0">
          <div className="content">
            <div className="is-flex is-flex-direction-column">
              <div style={productImageContainer}>
                <img style={productImage} src={props.image} alt="Product preview"/>
              </div>
              <div className="mx-4">
                <div className="is-flex is-justify-content-space-between mt-4 mb-3">
                  <div className="is-size-6 has-text-weight-normal">{props.name}</div>
                  <div className="is-size-6 has-text-weight-bold">${props.price}</div>
                </div>
                <div className="is-flex is-justify-content-space-between mb-3">
                  <img style={qrCode} src={props.qr} alt="QR code"/>
                  <div className="w-100 is-flex is-flex-direction-column is-align-items-center is-justify-content-center ml-3" style={infoSection}>
                    <div className="has-background-theme-green-2 has-text-theme-beige is-size-7 py-1 px-4 mb-2" style={rounded}>
                      Active Now
                    </div>
                    <div className="is-flex is-flex-direction-column is-align-items-start">
                      <div className="is-size-7 my-1 has-text-weight-light">
                        <span className="has-text-theme-green-2 has-text-weight-bold">{props.scanned}</span> Scanned
                      </div>
                      <div className="is-size-7 my-1 has-text-weight-light">
                        <span className="has-text-theme-green-2 has-text-weight-bold">{props.wishlisted}</span> Wishlisted
                      </div>
                      <div className="is-size-7 my-1 has-text-weight-light">
                        <span className="has-text-theme-green-2 has-text-weight-bold">{props.purchased}</span> Purchased
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
