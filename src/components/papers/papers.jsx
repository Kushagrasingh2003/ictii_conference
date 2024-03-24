import "./papers.css";
import ai from "../../assets/papers/ai.png";
import cloud from "../../assets/papers/cloud.png";
import security from "../../assets/papers/security.png";
import nanotech from "../../assets/papers/nanotech.png";
import sixg from "../../assets/papers/6g.jpg";
import robotics from "../../assets/papers/robotics.jpeg";

export default function Papers() {
  const data = [
    {
      title: "Artificial Intelligence and Machine Learning for Industry 5.0",
      img: ai,
      Link: "https://news.mit.edu/topic/artificial-intelligence2",
    },
    {
      title:
        "Next Generation Virtualization Technology: Cloud to Sky computing",
      img: cloud,
      Link: "https://thenewstack.io/sky-computing-the-next-era-after-cloud-computing/",
    },
    {
      title:
        "Block Chain, Cyber Security, and Digital Forensics for Industry 5.0",
      img: security,
      Link: "https://www.sciencedirect.com/science/article/abs/pii/S174228761830344X",
    },
    {
      title: "Mechatronics and Nanotechnology in Industry 5.0",
      img: nanotech,
      Link: "https://ieeexplore.ieee.org/document/10121632/",
    },
    {
      title: "5G/6G Smart Networks in Industry 5.0",
      img: sixg,
      Link: "https://ieeexplore.ieee.org/abstract/document/10028927",
    },
    {
      title: "Advanced Robotics and Automation in Industry 5.0",
      img: robotics,
      Link: "https://www.oemupdate.com/industry-analysis/embracing-industry-5-0-and-robotics-in-indian-manufacturing/",
    },
  ];

  return (
    <div id="tracks" className="flex papers flex-d-col">
      <div className="text-center font-28 font-rubic-mono">Session Tracks</div>
      <br />
      <div className="flex">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ item }) => {
  return (
    <div className="card text-left">
      <img src={item.img} alt="" />
      <a href={item.Link} target="/">
        <div className="text font-24 font-rubic-mono">{item.title}</div>
      </a>
    </div>
  );
};
