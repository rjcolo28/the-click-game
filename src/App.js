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
  
  // game mechanics
  handleClicks = event => {
    // assign the array of image objects to a variable
    let imageArray = this.state.images;

    console.log(imageArray);
    
    // assign the click's target to a variable
    let clickedImage = event.target;

    // set the "clicked" attribute of the clicked pic to a variable and log it in console of testing
    let clickState = clickedImage.getAttribute("clicked");
    console.log(clickState);

    // attribute check
    if(clickState === "false") {
      // add one point to both game score and total score
      this.setState({
        score: this.state.score + 1,
        totalScore: this.state.totalScore + 1
      })

      // set attribute of clicked image to "true"
      clickedImage.setAttribute("clicked", "true");

      // randomize order of images
      imageArray.sort( () => Math.random() - 0.5 );

      // if "clicked" attribute is true
    } else {
      // reset game score to 0
      this.setState({ score: 0 })
      // reset "clicked" attribute to true
      clickedImage.setAttribute("clicked", "false");
      // randomize images again
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
