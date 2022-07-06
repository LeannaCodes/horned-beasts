import { Component } from "react";
import HornedBeast from "./HornedBeast";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <HornedBeast
          title="Narwhal"
          imageUrl="https://i.natgeofe.com/k/57ae9fdd-2aae-45b8-9e14-af7299fdebcb/narwhal_alone-crop_4x3.jpg"
          description="The Narwhal is actually a real creature, would you believe it?!"
        />
        <HornedBeast
          title="Unicorn"
          imageUrl="https://www.sciencenewsforstudents.org/wp-content/uploads/2020/03/1030_onwardunicorns-1-1028x579.png"
          description="I also believe that Unicorns are real, we just haven't found any yet..."
        />
      </div>
    );
  }
}

export default Main;
