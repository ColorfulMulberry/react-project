import Navbar from "../components/Navbar";
import leaves from "../assets/leaves.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <h2 className="text-center">Welcome to my website!</h2>
      <br />
      <div className="text-center">
        This website contains a list of events and a showcase.
      </div>
      <div className="text-center">You can also log in to the website.</div>
      <br />
      <div>
        <img
          src={leaves}
          className="d-block w-80 mx-auto mb-2 c-img"
          alt="Image of a book and leaves"
        />
      </div>
    </div>
  );
}

export default App;
