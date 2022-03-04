import {
  FaDotCircle,
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <header
        id="header"
        className="app-header h-screen w-full flex items-end justify-start"
      >
        <div className="containerMain max-w-6xl m-0 px-8">
          <div className="header-content pb-16">
            <h1 className="text-xl font-black text-white uppercase">
              Photographer
            </h1>
            <h3 className="text-4xl mb-8 text-white uppercase pt-6 tracking-wider">
              Full Name
            </h3>
            <ul className="social-links flex text-4xl">
              <li>
                <a href="#" className="flex">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="flex">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="flex">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <section id="about">
          <div className="containerabout">
            <div className="about_content text-center pt-12 w-full grid md:grid-cols-2 lg:grid-cols-2">
              <div className="p-12">
                <img
                  src={require("./assets/person.jpg")}
                  alt="oh no"
                  className="rounded-lg"
                />
              </div>
              <div className="about_right text-left flex flex-col gap-24 mx-8">
                <div className="title w-full text-left">
                  <h2 className="text-5xl font-medium uppercase tracking-wider">
                    About Me
                  </h2>
                </div>
                <p className="text-lg text-slate-600 my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Diam maecenas sed enim ut sem viverra aliquet. Interdum
                  consectetur libero id faucibus nisl tincidunt eget nullam non.
                  Laoreet non curabitur gravida arcu ac. Consectetur a erat nam
                  at lectus. In hendrerit gravida rutrum quisque non tellus
                  orci. Eu augue ut lectus arcu bibendum at varius vel. Tellus
                  pellentesque eu tincidunt tortor aliquam nulla facilisi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="work" className="flex flex-col justify-center">
          <div className="containerwork  mt-12 m-2">
            <div className="work_content flex flex-col mx-8">
              <div className="title w-full text-left">
                <h2 className="text-5xl font-medium uppercase tracking-wider">
                  What am i doing?
                </h2>
              </div>
              <ul className="work_top w-full mt-8">
                <li className="flex">
                  <FaDotCircle className="mr-2" />
                  Lore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </li>
                <li className="flex">
                  <FaDotCircle className="mr-2" />
                  Diam maecenas sed enim ut sem viverra aliquet.
                </li>
                <li className="flex">
                  <FaDotCircle className="mr-2" />
                  Interdum consectetur libero id faucibus nisl tincidunt eget
                  nullam non. Laoreet non curabitur gravida arcu ac.
                </li>
              </ul>
              <div
                className="
                  work_bottom 
                  grid
                  lg:grid-cols-4
                  md:grid-cols-2
                  sm:grid-cols-1
                  w-full
                  mt-12
                  justify-items-center
                  text-center
                  "
              >
                <div className="p-8">
                  <img
                    src={require("./assets/wildlife.png")}
                    alt="oh no"
                    className="rounded-lg"
                  />
                  Wildlife
                </div>
                <div className="p-8">
                  <img
                    src={require("./assets/travel.png")}
                    alt="oh no"
                    className="rounded-lg"
                  />
                  Travel
                </div>
                <div className="p-8">
                  <img
                    src={require("./assets/city.png")}
                    alt="oh no"
                    className="rounded-lg"
                  />
                  City
                </div>
                <div className="p-8">
                  <img
                    src={require("./assets/abstract.jpg")}
                    alt="oh no"
                    className="rounded-lg"
                  />
                  Abstract
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="samples">
          <div className="containersample mt-12 m-2">
            <div className="sample_content">
              <div className="title my-8">
                <h2 className="text-5xl font-medium uppercase tracking-wider">
                  Recent Work Samples
                </h2>
              </div>
              <div
                className="
                sample_bottom
                grid
                lg:grid-cols-3
                md:grid-cols-2
                sm:grid-cols-1
                "
              >
                <div>
                  <img src={require("./assets/sample1.jpg")} alt="oh no" />
                </div>
                <div>
                  <img src={require("./assets/sample2.jpg")} alt="oh no" />
                </div>
                <div>
                  <img src={require("./assets/sample3.jpg")} alt="oh no" />
                </div>
                <div>
                  <img src={require("./assets/sample4.jpg")} alt="oh no" />
                </div>
                <div>
                  <img src={require("./assets/sample5.jpg")} alt="oh no" />
                </div>
                <div>
                  <img src={require("./assets/sample6.jpg")} alt="oh no" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id="footersection" className="bg-gray-100">
          <div className="containerfooter p-2">
            <div className="footer-content text-center flex justify-between w-full">
              <div className="text-center">
                <img
                  src={require("./assets/person.jpg")}
                  className=" w-44 m-8 rounded-full"
                />
              </div>
              <div>
                <div className="flex w-1/2">
                  <h3 className="text-4xl justify-start">Links</h3>
                  <ul className="flex items-center justify-center m-8">
                    <li className="p-2 text-lg">
                      <a href="#" className="flex m-2">
                        <FaMailBulk />
                        abc@gmail.com
                      </a>
                    </li>
                    <li className="p-2 text-lg">
                      <a href="#" className="flex">
                        <FaPhone />
                        +919999999999
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
