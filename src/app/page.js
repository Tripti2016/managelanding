"use client";
import Footer from "./pages/Footer";
import MainBanner from "./pages/MainBanner";
import NavBar from "./pages/NavBar";
import { useClient } from "./pages/useClient";
import SwiperComponent from "./pages/SwiperComponent";
import { Info } from "./pages/Testmoinal";

export default function Home() {
  const shouldRender = useClient();

  const reviews = [
    {
      img: "/ali.png",
      name: "Ali Bravo",
      review: `  “Manage has supercharged our team’s workflow. The ability to
        maintain visibility on larger milestones at all times keeps everyone
        motivated.”`,
    },
    {
      img: "/anisha.png",
      name: "Anisha Li",
      review: `  “We have been able to cancel so many other
        subscriptions since using Manage. There is no more cross-channel confusion
        and everyone is much more focused.” `,
    },
    {
      img: "/shanai.png",
      name: "Shanai Gough",
      review: ` “Manage allows us to
        provide structure and process. It keeps us organized and focused. I can’t
        stop recommending them to everyone I talk to!” `,
    },
    {
      img: "/richard.png",
      name: "Richard Watts",
      review: ` “Their software
    allows us to track, manage and collaborate on our projects from anywhere. It
    keeps the whole team in-sync without being intrusive.” `,
    },
    {
      img: "/anisha.png",
      name: "Anisha Li",
      review: `  “We have been able to cancel so many other
        subscriptions since using Manage. There is no more cross-channel confusion
        and everyone is much more focused.” `,
    },
    {
      img: "/shanai.png",
      name: "Shanai Gough",
      review: ` “Manage allows us to
        provide structure and process. It keeps us organized and focused. I can’t
        stop recommending them to everyone I talk to!” `,
    },
    {
      img: "/richard.png",
      name: "Richard Watts",
      review: ` “Their software
    allows us to track, manage and collaborate on our projects from anywhere. It
    keeps the whole team in-sync without being intrusive.” `,
    },
  ];
  return (
    <>
      <div className="container">
        <NavBar />
        <MainBanner />
       
      </div>
      <div className="testomonial">
        <h1>What they’ve said</h1>
        {shouldRender && <SwiperComponent reviews={reviews} />}
        <div className="btn-start testo-btn">
          <button className="btn">Get Started</button>
        </div>
      </div>
      <Info/>
      <Footer />
    </>
  );
}
