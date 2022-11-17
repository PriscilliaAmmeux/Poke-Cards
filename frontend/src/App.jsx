import NavBar from "@components/Navbar/NavBar";
import background from "@assets/background.jpg";

function App() {
  return (
    <div>
      <NavBar />
      <img src={background} alt="background" />
    </div>
  );
}

export default App;
