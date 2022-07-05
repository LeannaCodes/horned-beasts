import { Component } from "react";
import HornedBeast from "./HornedBeast";


class Main extends Component {
    render () {
        return (

        <div className="main">
            <HornedBeast title="Narwhal" />
            <HornedBeast title="Unicorn"/>
        </div>
        )
    }
}

export default Main;