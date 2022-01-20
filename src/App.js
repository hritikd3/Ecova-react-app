import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Icon from "./components/icons";
import Project from "./components/project";
import Team from "./components/team";
import Testimonial from "./components/testimonial";
import Event from "./components/events";
import Donate from "./components/donate";
import Footer from "./components/footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Icon />
      <Project />
      <Donate />
      <Team />
      <Testimonial />
      <Event />
      <Footer />
    </div>
  );
}
