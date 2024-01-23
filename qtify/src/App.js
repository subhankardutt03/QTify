import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        text1={"100 Thousand Songs, ad-free"}
        text2={"Over thousands podcast episodes"}
      />
    </>
  );
}

export default App;
