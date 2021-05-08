import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/store-dashboard.scss';
import Sidebar from './sidebar';
import StatCard from './stat-card';
import ProductCard from './product-card';
import sampleQR from '../../assets/img/sample-QR.png';

class ProductIndex extends React.Component {
  render() {
    return(
      <div className="is-flex is-flex-direction-row is-flex-direction-column-touch">
        <Sidebar/>
        <div className="main is-flex is-flex-direction-column w-100 pt-6 px-custom-touch">
          <div className="columns w-100 mx-0 is-mobile is-flex-wrap-wrap">
            <StatCard number="11,890" text="QLEARTAGS CREATED" icon="fa-tags"/>
            <StatCard number="5,390" text="QLEARTAGS SCANNED" icon="fa-qrcode"/>
            <StatCard number="-44%" text="REDUCED PACKAGING" icon="fa-leaf"/>
          </div>
          <div className="is-flex is-flex-direction-column is-align-items-start mt-5 mx-2">
            <div className="is-flex is-flex-direction-column-touch is-justify-content-space-between w-100">
              <div className="title is-size-4 mt-2 mb-5 has-text-theme-green-1 has-text-weight-normal">
                My Qleartags
              </div>
              <Link to="/sell/dashboard/new">
                <button className="button custom-button py-2">
                  <span className="mt-1 mx-3">CREATE A QLEARTAG</span>
                </button>
              </Link>
            </div>
            <div className="is-flex my-3">
              <div className="dropdown mr-4">
                <div className="dropdown-trigger">
                  <button className="button custom-filter">
                    <span className="mt-1 mr-3">SORT BY</span>
                    <span className="icon is-small">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="dropdown">
                <div className="dropdown-trigger">
                  <button className="button custom-filter">
                    <span className="mt-1 mr-3">FILTERS</span>
                    <span className="icon is-small">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 columns w-100 mx-0 is-mobile is-flex-wrap-wrap">
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
            <ProductCard name="Sexy Man Evan" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg" price="$69.99" qr={sampleQR} scanned={522} wishlisted={121} purchased={86}/>
          </div>
          <div className="is-flex justify-content-start mx-2 mb-6">
            <button className="button custom-button py-2 mx-2">
              <span className="mt-1 mx-3">SHOW ALL TAGS</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductIndex;
