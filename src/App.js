import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import images from "./assets/images.json";
import Pics from "./components/Pics";
import Footer from "./components/Footer";

class App extends Component {
  state =  {
    images
  };

  // handleClicks= event => {

  // }
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Wrapper>
          {this.state.images.map(image => (
            <Pics
              id= {image.id}
              key= {image.id}
              name= {image.name}
              source= {image.source}
            />
            ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
