import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/store-dashboard.scss';
import Sidebar from './sidebar';
import tagPreview from '../../assets/img/tag-preview.png';

interface ProductNewProps {
}

interface Qleartag {
  name: string;
  colorways: string[];
}

interface ProductNewState {
  colorsCount: number;
  qleartag: Qleartag;
}

function Colorway(clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void, count: number) {
  return(
    <div className="colors columns is-mobile w-100 mx-0 is-flex-wrap-wrap" key={count}>
      <div className="column is-4-desktop is-8-touch">
        <div className="field">COLOUR NAME</div>
        <input className="input is-normal" type="text" placeholder="Black"/>
      </div>
      <div className="column is-2-desktop is-4-touch">
        <div className="field">PICKER</div>
        <input className="input is-normal p-1" defaultValue="#83B7A1" type="color"/>
      </div>
      <div className="column is-4-desktop is-8-touch">
        <div className="field">IMAGE URL</div>
        <input className="input is-normal" type="text" placeholder="url.image.com"/>
      </div>
      <div className="column is-2-desktop is-4-touch">
        <div className="field">DELETE</div>
        <button className="button border-radius-8 is-danger is-light px-3" onClick={clickHandler}>
          <i className="fa fa-times"></i>
        </button>
      </div>
    </div>
  );
}

class ProductNew extends React.Component<ProductNewProps, ProductNewState> {
  constructor(props: ProductNewProps) {
    super(props);

    this.state = {
      colorsCount: 1,
      qleartag: {
        name: "",
        colorways: ["#83B7A1"]
      }
    };

    this.addColor = this.addColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  addColor(e: React.MouseEvent) {
    e.preventDefault();
    this.setState(prevState => ({
      colorsCount: prevState.colorsCount + 1,
    }));
  }

  deleteColor(e: React.MouseEvent) {
    e.preventDefault();
    this.setState(prevState => ({
      colorsCount: prevState.colorsCount - 1,
    }));
  }

  changeName(e: React.FormEvent<HTMLInputElement>) {
    const newName = e.currentTarget.value;
    this.setState(prevState => ({
      qleartag: {
        ...prevState.qleartag,
        name: newName
      }
    }));
  }

  render() {
    const colorways = [];
    for (let i = 0; i < this.state.colorsCount; i++) {
      colorways.push(Colorway(this.deleteColor, i));
    }

    return(
      <div className="is-flex is-flex-direction-row is-flex-direction-column-touch">
        <Sidebar/>
        <div className="main is-flex is-flex-direction-column is-align-items-start w-100 pt-6 px-custom-touch">
          <div className="is-flex w-100 is-flex-direction-row is-flex-direction-column-touch is-justify-content-space-between is-align-items-center">
            <div className="is-flex is-flex-direction-row is-align-items-center my-3 ml-5">
              <Link to="/sell/dashboard">
                <i className="fa fa-lg mr-4 fa-caret-square-left has-text-grey-lighter"></i>
              </Link>
              <div className="title is-size-5 has-text-weight-normal mb-1">Add Product</div>
            </div>
            <div className="is-flex is-flex-direction-row is-align-items-center my-3">
              <button className="button custom-button-beige py-2 mx-2"><span className="mt-1 mx-3">DISCARD</span></button>
              <button className="button custom-button py-2 mx-2"><span className="mt-1 mx-3">SAVE</span></button>
            </div>
          </div>
          <div className="mt-2 columns w-100 mx-0 is-flex-wrap-wrap">
            <div className="column is-full is-two-thirds-fullhd">
              <div className="has-text-left has-text-weight-light has-text-theme-green-1 mt-2 mb-5 mx-2">
                <span className="has-text-weight-bold">Step 1: </span>
                Tell us about your product
              </div>
              <div className="mx-2 has-background-theme-beige border-radius-8 mb-6">
                <div className="p-6 has-text-left">
                  <div className="subtitle">
                    PRODUCT INFORMATION
                  </div>
                  <div className="mb-5">
                    <div className="field">NAME</div>
                    <input className="input is-normal" type="text" onChange={this.changeName} placeholder="Ribbed Knit Henley"/>
                  </div>
                  <div className="mb-5">
                    <div className="field">SERIES</div>
                    <input className="input is-normal" type="text" placeholder="The ReNew Collection"/>
                  </div>
                  <div className="columns is-mobile w-100 mx-0 is-flex-wrap-wrap mb-5">
                    <div className="column pl-0 pr-1 is-half-desktop is-full-touch">
                      <div className="field">UNIT PRICE</div>
                      <input className="input is-normal" type="text" placeholder="$0.00"/>
                    </div>
                    <div className="column pr-0 pl-1 is-half-desktop is-full-touch">
                      <div className="field">SALE PRICE (optional)</div>
                      <input className="input is-normal" type="text" placeholder="$0.00"/>
                    </div>
                  </div>
                  <div className="mb-1">
                    <div className="field">DESCRIPTION</div>
                    <textarea className="textarea is-normal" placeholder=""/>
                  </div>
                </div>
              </div>

              <div className="has-text-left has-text-weight-light has-text-theme-green-1 mt-2 mb-5 mx-2">
                <span className="has-text-weight-bold">Step 2: </span>
                Enter colors, sizes, and upload media
              </div>
              <div className="mx-2 has-background-theme-beige border-radius-8 mb-6">
                <div className="p-6 has-text-left">
                  <div className="subtitle">
                    VARIANTS & MEDIA
                  </div>
                  <div className="header py-2">COLOURWAYS</div>
                  <hr/>
                  {colorways}
                  <div className="is-flex is-align-items-center mb-6">
                    <button className="button border-radius-8 is-light px-3 mx-3" onClick={this.addColor}>
                      <i className="fa fa-plus has-text-grey-light"></i>
                    </button>
                    <div className="has-text-grey-light is-size-6 has-text-weight-light">Add additional colors</div>
                  </div>

                  <div className="header py-2">SIZING CHART</div>
                  <hr/>
                  <div className="has-text-grey-light is-size-6 has-text-weight-light">Enter all corresponding measurements in inches</div>
                  <table className="table is-hoverable mt-5 mb-6 border-radius-8">
                    <tbody>
                      <tr className="has-background-grey-lighter">
                        <td></td>
                        <td className="pt-3 px-4"><div className="pt-2 has-text-centered is-size-6">XS</div></td>
                        <td className="pt-3 px-4"><div className="pt-2 has-text-centered is-size-6">S</div></td>
                        <td className="pt-3 px-4"><div className="pt-2 has-text-centered is-size-6">M</div></td>
                        <td className="pt-3 px-4"><div className="pt-2 has-text-centered is-size-6">L</div></td>
                        <td className="pt-3 px-4"><div className="pt-2 has-text-centered is-size-6">XL</div></td>
                      </tr>
                      <tr>
                        <td className="pt-3 px-4 has-background-grey-lighter has-text-centered"><div className="pt-2 is-size-6">CHEST</div></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                      </tr>
                      <tr>
                        <td className="pt-3 px-4 has-background-grey-lighter has-text-centered"><div className="pt-2 is-size-6">WAIST</div></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                      </tr>
                      <tr>
                        <td className="pt-3 px-4 has-background-grey-lighter has-text-centered"><div className="pt-2 is-size-6">SLEEVE</div></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                        <td><input className="input is-normal" type="number"/></td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="my-6">
                    <div className="header py-2">ADDITIONAL MEDIA</div>
                    <hr/>
                    <div className="header is-size-7 mb-3">ENTER LINKS TO ANY ADDITIONAL PHOTOS YOU WOULD LIKE TO FEATURE</div>
                    <input className="input is-normal my-2" type="text" placeholder="https://featuredphoto.com"/>
                    <input className="input is-normal my-2" type="text" placeholder="Thttps://featuredphoto.com"/>
                    <input className="input is-normal my-2" type="text" placeholder="https://featuredphoto.com"/>
                  </div>

                  <div className="my-6">
                    <div className="header py-2">ADDITIONAL MEDIA</div>
                    <hr/>
                    <div className="header is-size-7 mb-5">ENTER LINKS TO ANY ARTICLES, COMMITMENTS, OR PRESS RELEASES YOU WOULD LIKE TO FEATURE, ALONG WITH A CAPTION.</div>
                    <div className="columns is-mobile w-100 mx-0 is-flex-wrap-wrap">
                      <div className="column py-2 pl-0 pr-1 is-7-desktop is-full-touch">
                        <input className="input is-normal" type="text" placeholder="https://featuredarticle.com"/>
                      </div>
                      <div className="column py-2 pr-0 pl-1 is-5-desktop is-full-touch">
                        <input className="input is-normal" type="text" placeholder="Caption"/>
                      </div>
                    </div>
                    <div className="columns is-mobile w-100 mx-0 is-flex-wrap-wrap">
                      <div className="column py-2 pl-0 pr-1 is-7-desktop is-full-touch">
                        <input className="input is-normal" type="text" placeholder="https://featuredarticle.com"/>
                      </div>
                      <div className="column py-2 pr-0 pl-1 is-5-desktop is-full-touch">
                        <input className="input is-normal" type="text" placeholder="Caption"/>
                      </div>
                    </div>
                    <div className="columns is-mobile w-100 mx-0 is-flex-wrap-wrap">
                      <div className="column py-2 pl-0 pr-1 is-7-desktop is-full-touch">
                        <input className="input is-normal" type="text" placeholder="https://featuredarticle.com"/>
                      </div>
                      <div className="column py-2 pr-0 pl-1 is-5-desktop is-full-touch">
                        <input className="input is-normal" type="text" placeholder="Caption"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="has-text-left has-text-weight-light has-text-theme-green-1 mt-2 mb-5 mx-2">
                <span className="has-text-weight-bold">Step 3: </span>
                How was it made and how should we care?
              </div>
              <div className="mx-2 has-background-theme-beige border-radius-8 mb-6">
                <div className="p-6 has-text-left">
                  <div className="subtitle">
                    CARE & MANUFACTURING
                  </div>
                  <div className="mb-5">
                    <div className="field">MATERIALS</div>
                    <textarea className="textarea is-normal" placeholder=""/>
                  </div>
                  <div className="mb-5">
                    <div className="field">WASH INSTRUCTIONS</div>
                    <textarea className="textarea is-normal" placeholder=""/>
                  </div>
                  <div className="mb-5">
                    <div className="field">ITEM FEATURES</div>
                    <textarea className="textarea is-normal" placeholder="Enter a short description about your product’s features."/>
                  </div>
                  <div className="mb-2">
                    <div className="field">FEATURE #1</div>
                    <input className="input is-normal" type="text" placeholder="Title of feature #1"/>
                  </div>
                  <div className="mb-5">
                    <textarea className="textarea is-normal"/>
                  </div>
                  <div className="mb-2">
                    <div className="field">FEATURE #2</div>
                    <input className="input is-normal" type="text" placeholder="Title of feature #2"/>
                  </div>
                  <div className="mb-5">
                    <textarea className="textarea is-normal"/>
                  </div>
                  <div className="mb-2">
                    <div className="field">FEATURE #3</div>
                    <input className="input is-normal" type="text" placeholder="Title of feature #2"/>
                  </div>
                  <div className="mb-5">
                    <textarea className="textarea is-normal"/>
                  </div>
                </div>
              </div>
              <div className="has-text-left has-text-weight-light has-text-theme-green-1 mt-2 mb-5 mx-2">
                <span className="has-text-weight-bold">Step 4: </span>
                Step 4: Preview your Qleartag and customize
              </div>
              <div className="mx-2 has-background-theme-beige border-radius-8">
                <div className="p-6 has-text-left">
                  <div className="subtitle">
                    QLEARTAG PREVIEW
                  </div>
                  <img src={tagPreview} alt="Qleartag product preview"/>
                </div>
              </div>
              <div className="w-100 is-flex is-justify-content-start">
                <button className="button custom-button py-2 mx-2 my-6"><span className="mt-1 mx-3">CREATE QLEARTAG</span></button>
              </div>
            </div>
            <div className="column is-full is-one-third-fullhd pt-3 mt-2">
              <div className="mx-2 has-background-theme-grey border-radius-8 mt-6">
                <div className="p-6 has-text-left">
                  <div className="subtitle">
                    TAG STATUS
                  </div>
                  <div className="control">
                    <label className="radio is-flex is-align-items-center">
                      <input className="radio-custom" type="radio" name="answer"/>
                      <span className="has-text-theme-green-1 ml-3 mt-1">ACTIVE</span>
                    </label>
                    <div className="mt-2 ml-5 pl-3 has-text-grey-light is-size-7">This QR code will lead to your product’s page.</div>
                    <br/>
                    <label className="radio is-flex is-align-items-center">
                      <input className="radio-custom" type="radio" name="answer"/>
                      <span className="has-text-theme-green-1 ml-3 mt-1">DRAFT</span>
                      <br/>
                    </label>
                    <div className="mt-2 ml-5 pl-3 has-text-grey-light is-size-7">This QR code will not be scannable.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductNew;
