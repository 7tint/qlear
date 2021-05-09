import React from 'react';
import '../assets/css/home.scss';
import landing from '../assets/img/landing.png';

interface Props {
}

interface State {
  scrollTop: number;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      scrollTop: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (document.documentElement.scrollTop < 600) {
      this.setState({scrollTop: document.documentElement.scrollTop});
    }
  };

  render() {
    return (
      <div className="home">
        <img className="my-0 py-0" src={landing} alt="Landing page"/>
      </div>
    );
  }
}

export default Home;
