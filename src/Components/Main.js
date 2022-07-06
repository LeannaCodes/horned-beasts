import { Component } from "react";
import HornedBeast from "./HornedBeast";

class Main extends Component {
  render() {
    const beasts = [
      {
        _id: 1,
        image_url:
          "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        title: "UniWhal",
        description: "A unicorn and a narwhal nuzzling their horns",
        keyword: "narwhal",
        horns: 1,
      },

      {
        _id: 2,
        image_url:
          "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
        title: "Rhino Family",
        description: "Parent rhino with two babies",
        keyword: "rhino",
        horns: 2,
      },

      {
        _id: 3,
        image_url:
          "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
        title: "Unicorn Head",
        description: "Someone wearing a very silly unicorn head mask",
        keyword: "unicorn",
        horns: 1,
      },
    ];
    return (
      <div className="main">
        {beasts.map((beast) => {
          return (
            <HornedBeast
              title={beast.title}
              description={beast.description}
              imageUrl={beast.image_url}
            />
          );
        })}

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
