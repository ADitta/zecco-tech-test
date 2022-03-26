import {
  Nav,
  Hero,
  AboutUs,
  Services,
  GetInTouch,
  Footer,
} from "./components/index";

function App() {
  return (
    <main className="container">
      <Nav />
      <Hero />
      <AboutUs />
      <Services />
      <GetInTouch />
      <Footer />
    </main>
  );
}

export default App;
