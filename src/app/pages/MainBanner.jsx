
import { Chart } from "./Chart";

const MainBanner = () => {
  return (
    <>
      <main>
        <div className="main-container">
          <div className="main-conatiner-one">
            <h1>Bring everyone together to build better products. </h1>
            <p>
              {" "}
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <div className="btn-start">
              <button className="btn">Get Started</button>
            </div>
          </div>
          <div className="main-container-chart">
            <Chart />
          </div>
          <div className="main-conatiner-three">
            <h1>What’s different about Manage? </h1>
            <p>
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <div className="main-container-four">
            <div className="about-box">
              <div className="about-box-text">
                <h2 className="number">01</h2>

                <h1>Track company-wide progress</h1>
                <p>
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
              <div className="about-box-text">
                <h2 className="number">02</h2>
                <h1>Advanced built-in reports</h1>
                <p>
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
              <div className="about-box-text">
                <h2 className="number">03</h2>
                <h1>Everything you need in one place </h1>
                <p>
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainBanner;
