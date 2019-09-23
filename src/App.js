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
  // shuffleImages = () => {
    // take all of the images and put them into a new array
    // use a .Math function to randomly sort the images by id
    // push the new sorted array to the render Wrapper
    // }
    
  
  handleClicks = event => {
    const newState = { ...this.state };
    let clickedIndex = newState.images.findIndex(image => image.id === parseInt(event.target.id));
    console.log(clickedIndex);
    let imageArray = this.state.images;
    console.log(imageArray);
    let clickedImage = event.target;
    let clickState = clickedImage.getAttribute("clicked");
    console.log(clickState);
    // if clicked === "false" => run handleIncrement, changed clicked === "true", shuffle imgs
    if(clickState === "false") {
      this.setState({
        score: this.state.score + 1,
        totalScore: this.state.totalScore + 1
      })
      clickedImage.setAttribute("clicked", "true");
      imageArray.sort( () => Math.random() - 0.5 );
      // else => set score === 0, change clicked === "false", reshuffle imgs
    } else {
      this.setState({ score: 0 })
      clickedImage.setAttribute("clicked", "false");
      imageArray.sort( () => Math.random() - 0.5 );
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
