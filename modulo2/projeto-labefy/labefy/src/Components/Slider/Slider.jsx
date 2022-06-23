import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

export default class Carrosel extends React.Component {

    // state={
    //     playlists: [],
    // }

    // componentDidMount() {
    //     this.getPlayLists()
    // }

    // getPlayLists = () => {
    //     axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
    //         headers: {
    //             Authorization: "jonatas-felix-freire"
    //         }
    //     }).then(response => {
    //         this.setState({playlists: response.data.result.list})
    //         console.log(response.data.result.list)
    //     })
    // }


    render() {
        

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3.5,
                slidesToSlide: 3 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };
        return (
            <Carousel responsive={responsive}>
               <div>1</div>
               <div>2</div>
               <div>3</div>
            </Carousel>
        )
    }
}