import Navbar from "../components/Navbar";
import Card from "../components/Card";
import leaves from "../assets/leaves.jpg";
import coffee from "../assets/coffee.jpg";
import desk from "../assets/workspace.jpg";

function Showcase() {
  const images = [leaves, coffee, desk];
  const titles = ["Leaf & Book", "Coffee & Notes", "Desk"];
  const texts = [
    "A leaf on top of a book.",
    "A cup of coffee paired with a notebook.",
    "A pleasant image of a workspace.",
  ];

  return (
    <div>
      <Navbar />
      <br />
      <h1 className="mx-3">Showcase</h1>
      <br />
      <div className="row">
        <Card image={images[0]} title={titles[0]} text={texts[0]} />
        <Card image={images[1]} title={titles[1]} text={texts[1]} />
        <Card image={images[2]} title={titles[2]} text={texts[2]} />
      </div>
    </div>
  );
}

export default Showcase;
