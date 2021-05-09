import React from 'react';
import ProductCard from './product-card';
import '../../assets/css/customer-dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return(
      <div className="dashboard-main pt-5">
        <div className="container container-custom">
          <div className="is-size-4 title has-font-weight-400 pt-6 mb-6">Welcome back, Elliot!</div>

          <div className="mb-6">
            <div className="is-flex is-flex-direction-column-touch w-100 is-align-items-center mb-6">
              <div className="is-size-5 title has-font-weight-400 mb-2">Recently Scanned</div>
              <div className="is-flex-grow-1 pl-5">
                <hr className="w-100"/>
              </div>
            </div>
            <div className="columns mx-0 w-100 is-flex-wrap-wrap">
              <ProductCard company="Patagonia" product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
              <ProductCard company="Patagonia" product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
              <ProductCard company="Patagonia" product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
              <ProductCard company="Patagonia" product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
            </div>
          </div>

          <div className="mb-6 pt-6">
            <div className="is-flex is-flex-direction-column-touch w-100 is-align-items-center mb-6">
              <div className="is-size-5 title has-font-weight-400 mb-2">My Wishlist</div>
              <div className="is-flex-grow-1 pl-5">
                <hr className="w-100"/>
              </div>
            </div>
            <div className="columns mx-0 w-100 is-flex-wrap-wrap">
              <ProductCard company="Patagonia" product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
              <ProductCard company="Patagonia" product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
              <ProductCard company="Patagonia" product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
              <ProductCard company="Patagonia" product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
