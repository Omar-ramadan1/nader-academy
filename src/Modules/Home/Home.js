import axios from "axios";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // axios({
    //     method: "get",
    //     url: "http://shall.flyfox-eg.com/api/general/areas/ar",
    //   })
    //     .then((res) => {
    //       if (res) {
    //         console.log(res);
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    fetch("http://shall.flyfox-eg.com/api/general/cities/ar", {
      method: "get",
   
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Home</div>;
}
