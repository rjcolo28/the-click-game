import React, { Component } from 'react';
import Titlebar from "./components/TitleBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import images from "./assets/images.json";
import Pics from "./components/Pics";
import Footer from "./components/Footer";


class App extends Component {
  state =  {
    images,
    score: 0,
    totalScore: 0
  };

  handleIncrement = event => {
    this.setState({ score: this.state.score + 1, totalScore: this.state.totalScore + 1})
  };

  handleClicks = event => {
    let currentImages = this.state.images
    let currentScore = this.state.score
    
    // if clicked === "false" => run handleIncrement, clicked === "true", shuffle imgs
    // else => set score === 0, clicked === "false", shuffle imgs
    if(currentImages.clicked === "false") {
      this.handleIncrement();
      this.setState(currentImages.clicked === "true");
    } else {
      return(currentScore === 0)
    }
  }

  render() {
    return (
      <div>
        <Titlebar 
          score= {this.state.score}
          totalScore= {this.state.totalScore}
        />
        <Header />
        <Wrapper>
          {this.state.images.map(image => (
            <Pics
              id= {image.id}
              key= {image.id}
              name= {image.name}
              source= {image.source}
              clicked= {image.clicked}
              handleClicks= {this.handleClicks}
              handleIncrement= {this.handleIncrement}
            />
            ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
