import { Component } from "react";
import { createApi } from "unsplash-js";
import styles from "./App.module.css";

const COUNT: number = 12;

const unsplashApi = createApi({
  accessKey: "CmYTeujUphznd_5yCjXbRsBDEb3DA1XpshuSLfiq-s8",
});

interface Photo {
  id: string;
  urls: {
    thumb: string;
  };
}

interface Photos {
  photos: Photo[];
}

class App extends Component {
  state: Photos = {
    photos: [
      {
        id: "",
        urls: {
          thumb: "",
        },
      },
    ],
  };

  getRandomPhotos(count: number) {
    unsplashApi.photos.getRandom({ count }).then((result) => {
      if (result.errors) {
        console.log("error occurred: ", result.errors[0]);
      } else {
        const photos = result.response;
        this.setState(() => ({ photos }));
      }
    });
  }

  componentDidMount() {
    this.getRandomPhotos(COUNT);
  }

  render() {
    const photos = this.state.photos;

    return (
      <div className={styles.container}>
        {photos.map((item) => (
          <img key={item.id} src={item.urls.thumb} alt=""></img>
        ))}
      </div>
    );
  }
}

export default App;
