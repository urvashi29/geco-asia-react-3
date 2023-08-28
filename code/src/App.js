import React, { Component } from "react";
import AddInfo from "./AddInfo";
import Display from "./Display";
import image from "./images/download.png";
import CardTemplate from "./CardTemplate";
class App extends Component {
  state = {
    personData: [],
  };

  addData = (user) => {
    console.log(user);
    let personData = [...this.state.personData, user];

    this.setState({
      personData,
    });
  };

  render() {
    return (
      <>
        <AddInfo addData={this.addData} />
        <Display personData={this.state.personData} />

        {/* <h2>Material Ui</h2> */}
        <CardTemplate />

        <h2>Bootstrap 5</h2>

        <div className="container">
          <div className="row">
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div class="card" style={{ width: "18rem" }}>
                <img src={image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col"></div>
            <div class="card" style={{ width: "18rem" }}>
              <img src={image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

{
  /* <button onclick=""></button> */
}

// appbar, image list, tabs, carousel, card, buttons, form
// grid, box, container