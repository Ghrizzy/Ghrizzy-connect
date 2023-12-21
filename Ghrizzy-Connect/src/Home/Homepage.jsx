import "./Homepage.css";
import MusicImage from "../images/Music.jpg";
import ComedyImage from "../images/Comedy.jpg";
import SocialImage from "../images/s0cials.jpg";
import ConcertImage from "../images/Concert.jpg";


const Homepage = (props) => {
  const {Eventinfo} = props
  const CategoryBox = [
    {
      image: MusicImage,
      title: "Music",
    },
    {
      image: ComedyImage,
      title: "Comedy",
    },
    {
      image: SocialImage,
      title: "Socials",
    },
    {
      image: ConcertImage,
      title: "Concert",
    },
  ];
  return (
    <div className="home">
      <div className="homepage-top"></div>
      <div className="Categories">
        {CategoryBox.map((items, index) => (
          <div key={index} className="category-box">
            <img src={items.image} alt="" />
            <p>{items.title}</p>
          </div>
        ))}
      </div>
      <div className="event-header">
        <p>Upcoming Event</p>
      </div>
      
    </div>
  );
};

export default Homepage;
