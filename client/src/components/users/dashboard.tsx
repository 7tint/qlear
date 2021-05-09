import React from 'react';
import axios from 'axios';
import ProductCard from './product-card';
import '../../assets/css/customer-dashboard.scss';

interface ProductsProps {
}

interface Qleartag {
  id: string,
  companyId: string,
  companyName: string,
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

interface ProductsState {
  recentTags: Qleartag[];
  wishlistTags: Qleartag[];
}

class Dashboard extends React.Component<ProductsProps, ProductsState> {
  constructor(props: ProductsProps) {
    super(props);

    this.state = {
      recentTags: [],
      wishlistTags: []
    }

    this.myPopulate = this.myPopulate.bind(this);
  }

  myPopulate(arrTagIds: string[]) {
    const newArr : any[] = [];
    arrTagIds.forEach((tagId) => {
      axios.get(`http://qlear-env.eba-2hmwrpmh.us-east-2.elasticbeanstalk.com/tags/${tagId}`)
      .then(res => {
        newArr.push(res.data);
      });
    });
    const arr = Object.entries(newArr).map((e) => ( { [e[0]]: e[1] } ));
    const qleartagsNew : any[] = [];
    arr.forEach((el, i) => {
      let key = Object.keys(arr[i]);
      let obj : any;
      obj = el[key.toString()];
      let newTag = {
        id: key[0],
        companyId: obj.companyId,
        companyName: "",
        name: obj.name,
        series: obj.series,
        unitPrice: obj.unitPrice,
        salePrice: obj.salePrice,
        description: obj.description,
        colourways: obj.colourways,
        sizeChart: obj.sizeChart,
        media: obj.media,
        stories: obj.stories,
        materials: obj.materials,
        instructions: obj.instructions,
        itemFeatures: obj.itemFeatures,
      }
      axios.get(`http://qlear-env.eba-2hmwrpmh.us-east-2.elasticbeanstalk.com/companies/${obj.companyId}`)
      .then(res => {
        newTag.companyName = res.data.data.name;
        qleartagsNew.push(newTag);
        this.setState({ recentTags: qleartagsNew });
      });
    });
  }

  componentDidMount() {
    axios.get(`http://qlear-env.eba-2hmwrpmh.us-east-2.elasticbeanstalk.com/consumers/6363c590-2b22-4cbe-af9f-862b5b2cc2e0`)
    .then(res => {
      this.myPopulate(res.data.data.tags);
      //const wishlist = res.data.data.wishlist;
      // console.log(recent);
      //console.log(wishlist);
      // const arr = Object.entries(qleartags).map((e) => ( { [e[0]]: e[1] } ));
      // const qleartagsNew : any[] = [];
      // arr.forEach((el, i) => {
      //   let key = Object.keys(arr[i]);
      //   let obj : any;
      //   obj = el[key.toString()];
      //   let newTag = {
      //     id: key[0],
      //     companyId: obj.companyId,
      //     companyName: "",
      //     name: obj.name,
      //     series: obj.series,
      //     unitPrice: obj.unitPrice,
      //     salePrice: obj.salePrice,
      //     description: obj.description,
      //     colourways: obj.colourways,
      //     sizeChart: obj.sizeChart,
      //     media: obj.media,
      //     stories: obj.stories,
      //     materials: obj.materials,
      //     instructions: obj.instructions,
      //     itemFeatures: obj.itemFeatures,
      //   }
      //   axios.get(`http://qlear-env.eba-2hmwrpmh.us-east-2.elasticbeanstalk.com/companies/${obj.companyId}`)
      //   .then(res => {
      //     newTag.companyName = res.data.data.name;
      //     qleartagsNew.push(newTag);
      //     this.setState({ qleartags: qleartagsNew });
      //   });
      // });
    });
  }

  render() {
    console.log(this.state.recentTags);
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
              {this.state.recentTags.map((tag, i) => {
                console.log(tag);
                return(
                  <ProductCard key={i} company={tag.companyName} product="Women's Better Sweater® Fleece Jacket" image="https://cdn.discordapp.com/attachments/758449650403115059/840388729092440074/image0.jpg"/>
                );
              })}
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
