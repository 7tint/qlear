import React from 'react';
import axios from 'axios';
import '../../assets/css/product.scss';

interface ProductProps {
}

interface ProductState {
  isModalOpen: boolean;
  activeColorIndex: number;
  qleartag: Qleartag;
}

interface Qleartag {
  name: string;
  series: string;
  unitPrice: number;
  salePrice: number;
  description: string;
  colourways: string[][];
  sizeChart: number[][];
  media: string[];
  stories: string[][];
  materials: string;
  instructions: string;
  itemFeatures: string[];
}

class ProductView extends React.Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    super(props);

    this.state = {
      isModalOpen: true,
      activeColorIndex: 0,
      qleartag: {
        name: "",
        series: "",
        unitPrice: 0,
        salePrice: 0,
        description: "",
        colourways: [["", "", ""]],
        sizeChart: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
        media: [],
        stories: [["", ""]],
        materials: "",
        instructions: "",
        itemFeatures: []
      }
    }

    this.toggleModal = this.toggleModal.bind(this);
    this.changeColors = this.changeColors.bind(this);
  }

  componentDidMount() {
    const id = window.location.href.split("dashboard/")[1];
    axios.get(`http://api.qlear.info/tags/${id}`)
    .then(res => {
      const qleartag = res.data.data;
      this.setState({ qleartag });
      console.log(this.state.qleartag);
    });
  }

  toggleModal(e: React.MouseEvent) {
    e.preventDefault();
    this.setState(prevState => ({
      isModalOpen: !(prevState.isModalOpen)
    }));

    const sizeChart = document.getElementById("sizeChart")!;

    if (this.state.isModalOpen) {
      console.log("open");
      sizeChart.classList.add("is-active");
    } else {
      console.log("close");
      sizeChart.classList.remove("is-active");
    }
  }

  changeColors(e: React.MouseEvent) {
    e.preventDefault();
    const target = e.target as HTMLInputElement;
    console.log(target.id);
    this.setState({activeColorIndex: parseInt(target.id, 10)});
  }

  render() {
    return(
      <div className="navbar-offset pt-6">
        <div className="container mt-6 container-custom">
          <div className="columns mt-6 mb-4 w-100 mx-0 is-flex-wrap-wrap">
            <div className="column is-6-desktop is-full-mobile">
              <div className="product-image-container mx-5">
                <img className="product-image" src={this.state.qleartag.colourways[this.state.activeColorIndex][2]} alt="Product preview"/>
              </div>
            </div>
            <div className="column is-6-desktop is-full-mobile has-text-left px-5">
              <div className="title is-size-4 has-text-theme-green-1">{this.state.qleartag.name}</div>
              <div className="collection pt-3 pb-4">{this.state.qleartag.series}</div>
              <hr/>
              <div className="is-size-6 is-text-centered-touch has-text-theme-green-1 has-text-weight-light opacity-60">{this.state.qleartag.colourways[this.state.activeColorIndex][0]}</div>
              <div className="is-flex is-justify-content-center-touch w-100 mt-2 mb-5 pb-3">
              {this.state.qleartag.colourways.map((colour, i) => {
                if (i === this.state.activeColorIndex) {
                  return (
                    <label key={i} id={i.toString()} className="color-radio active mr-4" style={{backgroundColor: colour[1]}} onClick={this.changeColors}></label>
                  );
                } else {
                  return(
                    <label key={i} id={i.toString()} className="color-radio mr-4" style={{backgroundColor: colour[1]}} onClick={this.changeColors}></label>
                  );
                }
              })}
              </div>
              <hr/>
              <div className="is-flex is-flex-direction-row is-flex-direction-column-touch w-100 mt-2 mb-5 is-justify-content-space-between is-align-items-center">
                <div className="is-flex">
                  <label className="is-flex is-justify-content-center is-align-items-center size-radio mr-4 pt-1">XS</label>
                  <label className="is-flex is-justify-content-center is-align-items-center size-radio mr-4 pt-1">S</label>
                  <label className="is-flex is-justify-content-center is-align-items-center size-radio mr-4 pt-1">M</label>
                  <label className="is-flex is-justify-content-center is-align-items-center size-radio mr-4 pt-1">L</label>
                  <label className="is-flex is-justify-content-center is-align-items-center size-radio mr-4 pt-1">XL</label>
                </div>
                <div className="underline-click is-size-7 has-text-theme-green-1 has-text-weight-light mt-3" onClick={this.toggleModal}>Size Chart</div>
                <div className="modal" id="sizeChart">
                  <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title is-size-6 mb-0 pb-0 pt-1">Size Chart</p>
                      <button className="delete" aria-label="close" onClick={this.toggleModal}></button>
                    </header>
                    <section className="modal-card-body">
                      <table className="table is-hoverable mt-5 mb-6 border-radius-8 w-100">
                        <tbody>
                          <tr className="has-background-grey-lighter">
                            <td></td>
                            <td className="pt-2 px-4"><div className="pt-2 has-text-centered is-size-6">XS</div></td>
                            <td className="pt-2 px-4"><div className="pt-2 has-text-centered is-size-6">S</div></td>
                            <td className="pt-2 px-4"><div className="pt-2 has-text-centered is-size-6">M</div></td>
                            <td className="pt-2 px-4"><div className="pt-2 has-text-centered is-size-6">L</div></td>
                            <td className="pt-2 px-4"><div className="pt-2 has-text-centered is-size-6">XL</div></td>
                          </tr>
                          <tr>
                            <td className="pt-2 px-4 has-background-grey-lighter has-text-centered"><div className="pt-2 is-size-6">CHEST</div></td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[0][0]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[0][1]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[0][2]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[0][3]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[0][4]}</td>
                          </tr>
                          <tr>
                            <td className="pt-2 px-4 has-background-grey-lighter has-text-centered"><div className="pt-2 is-size-6">WAIST</div></td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[1][0]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[1][1]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[1][2]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[1][3]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[1][4]}</td>
                          </tr>
                          <tr>
                            <td className="pt-2 px-4 has-background-grey-lighter has-text-centered"><div className="pt-2 is-size-6">SLEEVE</div></td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[2][0]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[2][1]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[2][2]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[2][3]}</td>
                            <td className="pt-3 has-text-centered">{this.state.qleartag.sizeChart[2][4]}</td>
                          </tr>
                        </tbody>
                      </table>
                    </section>
                  </div>
                  <button className="modal-close is-large" aria-label="close" onClick={this.toggleModal}></button>
                </div>
              </div>
              <div className="description-title pt-3 pb-4">DESCRIPTION</div>
              <div className="description is-size-7 has-text-grey has-text-weight-light">
                {this.state.qleartag.description}
                <br/><br/>
                {this.state.qleartag.materials}
                <br/><br/>
                {this.state.qleartag.instructions}
              </div>
            </div>
          </div>
          <div className="has-text-left mx-5">
            <div className="description-title pt-3 pb-4">FEATURES</div>
            <hr/>
            <div className="is-size-7 has-text-grey has-text-weight-light">
              {this.state.qleartag.itemFeatures[0]}
              <br/>
            </div>
            <div className="columns my-5 mx-0 w-100 is-flex-wrap-wrap">
              <div className="column is-one-third-desktop is-full-touch">
                <div className="px-2 feature-box p-5">
                  <div className="is-size-5 mb-3">{this.state.qleartag.itemFeatures[1]}</div>
                  <div className="is-size-7 has-text-grey has-text-weight-light">
                    {this.state.qleartag.itemFeatures[2]}
                  </div>
                </div>
              </div>
              <div className="column is-one-third-desktop is-full-touch">
                <div className="px-2 feature-box p-5">
                  <div className="is-size-5 mb-3">{this.state.qleartag.itemFeatures[3]}</div>
                  <div className="is-size-7 has-text-grey has-text-weight-light">
                    {this.state.qleartag.itemFeatures[4]}
                  </div>
                </div>
              </div>
              <div className="column is-one-third-desktop is-full-touch">
                <div className="px-2 feature-box p-5">
                  <div className="is-size-5 mb-3">{this.state.qleartag.itemFeatures[5]}</div>
                  <div className="is-size-7 has-text-grey has-text-weight-light">
                    {this.state.qleartag.itemFeatures[6]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.qleartag.media.map(function(el, i) {
            return(
              <div key={i} className="w-100">
                <img className="my-6" src={el} alt="Additional media"/>
              </div>
            );
          })}
          <div className="has-text-left mx-5 mb-6">
            <div className="description-title pt-3 pb-4">EXPLORE OUR COMMITMENTS</div>
            <hr/>
            <div className="columns my-5 mx-0 w-100 is-flex-wrap-wrap">
            {this.state.qleartag.stories.map(function(story, i) {
              return(
                <div key={i} className="column is-one-third-desktop is-full-touch">
                  <div className="is-flex is-flex-direction-column">
                    <div className="square-img-container">
                      <img className="product-img" src={story[i][0]} alt="Product commitment"/>
                    </div>
                  </div>
                  <div className="has-text-theme-green-1 is-size-6 mt-4">{story[i][1]}</div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductView
