import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <nav>
          <a href="index.html">
            <img
              src="https://astract9.tradebigfx.com/wp-content/uploads/2021/06/jrs-logo-footer.png"
              alt="logo"
              width="70px"
              height="40px"
            />
          </a>

          <div className="nav-links">
            <ul>
              <li>
                <a href="/">Farmers</a>
              </li>
              <li>
                <a href="/">Factories</a>
              </li>
              <li>
                <a href="/">Technology</a>
              </li>
              <li>
                <a href="/">SDG</a>
              </li>
              <li>
                <a href="/">Companies</a>
              </li>
            </ul>
          </div>

          <button className="nav-btn">Call For A Demo</button>
        </nav>

        <div className="nav-text">
          <h1>
            Earn Income <br /> Empower Farmers
          </h1>
          <p>
            With alone, our farmers have the ability to improve their monthly
            income by 3x. Alone does this by enabling them to <br /> spend their
            time on the most profitable aspects of palm production & financing
            increased to local processing <br /> capacity.
          </p>
        </div>
      </div>
      <div>
        <div>
          <div className="hero">
            <div>
              <img
                src="https://astract9.tradebigfx.com/wp-content/uploads/2022/05/countryside-woman-holding-plant-leaves-1024x819.jpg"
                alt="logo"
                height="300px"
              />
            </div>

            <div>
              <h5>SAVE TIME</h5>
              <h5>Reduce Time Spent On Manual Deshelling And Separation</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div>
            <div className="hero">
              <div>
                <h5>SAVE TIME</h5>
                <h5>Reduce Time Spent On Manual Deshelling And Separation</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                  mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
                  nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
              <div>
                <img
                  src="https://astract9.tradebigfx.com/wp-content/uploads/2022/05/countryside-woman-holding-plant-leaves-1024x819.jpg"
                  alt="logo"
                  height="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third slide */}

      <div className="third-page">
        <h5>GO DIGITAL</h5>
        <h5>Keep track of product and process orders</h5>
      </div>
    </div>
  );
}

export default App;
