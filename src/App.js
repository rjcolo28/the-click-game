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
  // create a function that shuffles the images
  handleClicks = event => {
    const newState = { ...this.state }
    let clickedIndex = newState.images.findIndex(image => image.id === parseInt(event.target.id));
    console.log(clickedIndex);
    let clickedImage = event.target.getAttribute("clicked");
    console.log(clickedImage)
    // if clicked === "false" => run handleIncrement, clicked === "true", shuffle imgs
    if(clickedImage === "false") {
      this.setState({
        score: this.state.score + 1,
        totalScore: this.state.totalScore + 1
      })
      clickedImage = "true"
      // else => set score === 0, clicked === "false", shuffle imgs
    } else {
      this.setState({ score: 0 })
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
            />
            ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
