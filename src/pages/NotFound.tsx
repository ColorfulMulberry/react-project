import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <div>
      <Navbar />
      <br />
      <h1 className="ms-2">Error 404: Page Not Found</h1>
      <br />
      <div className="ms-2">
        Use the navbar at the top of the screen to go back to the website.
      </div>
    </div>
  );
}

export default NotFound;
