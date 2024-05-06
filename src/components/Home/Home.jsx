import "../../App.css";
import Papers from "../papers/papers";
import ImportantDates from "../dates/dates";
import { Link } from "react-router-dom";
// import Navbar from "../navbar/navbar";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDateRange, MdLocationOn } from "react-icons/md";
import { GoClock } from "react-icons/go";
import Partners from "../partners/partners";
import Convernor from "../convernor/convernor";
import landing from "../../assets/landing.png";
import ICTII_Logo from "../../assets/ICTII_Logo.jpg";
import DCE_Logo from "../../assets/DCE_Logo.png";
import Naac_logo from "../../assets/naac.png";
import AICTE_logo from "../../assets/AICTE.png";
import GU_logo from "../../assets/GU.png";
import Springer_logo from "../../assets/Springer_logo.jpg";
import UGC_logo from "../../assets/UGC_logo.jpg";
import Paper_submission from "../../assets/papers/splnproc1703_mac.pdf";
import Registration from "../../assets/papers/conference_brochure.pdf";

function App() {
  // const [count, setCount] = useState(0);
  const objective = [
    {
      color: "#000000",
      title: "Emerging Industry 5.0 Challenges",
      desc: " Includes areas like advanced materials, AI and robotics, intelligent manufacturing, data security, and human-machine interaction.",
    },
    {
      color: "#000000",
      title: "Prominent Solutions and Research Directions",
      desc: "Encourage debate and discussion on existing approaches and opportunities for further innovation.",
    },
    {
      color: "#000000",
      title: "Collaboration Across Sectors",
      desc: "Facilitate networking and knowledge exchange to bridge the gap between research and practical applications.",
    },
    {
      color: "#000000",
      title: "Identifying Research Gaps and Needs",
      desc: "This could involve discussions on funding opportunities, infrastructure development, and talent acquisition.",
    },
    {
      color: "#000000",
      title: "Showcasing Successful Collaborations",
      desc: " Use case studies to demonstrate the value of cross-disciplinary partnerships in tackling industrial challenges.",
    },
  ];
  const topics = [
    {
      color: "#000000",
      title: "Classification and Clustering",
    },
    {
      color: "#000000",
      title: "Deep Learning",
    },
    {
      color: "#000000",
      title: "Inductive Learning",
    },
    {
      color: "#000000",
      title: "Inference Rule Learning",
    },
    {
      color: "#000000",
      title: "Learning and Adaptive control",
    },
    {
      color: "#000000",
      title: "Cloud Development and its Applications",
    },
    {
      color: "#000000",
      title: "Edge Computing",
    },
    {
      color: "#000000",
      title: "Cloud of Things (CoT)",
    },
    {
      color: "#000000",
      title: "Fog-Cloud-Edge Infrastructures",
    },
    {
      color: "#000000",
      title: "Automation in Cloud",
    },
    {
      color: "#000000",
      title: "Sky Computing",
    },
    {
      color: "#000000",
      title: "Bitcoin and Cryptocurrency",
    },
    {
      color: "#000000",
      title: "Transaction and Security Awareness",
    },
    {
      color: "#000000",
      title: "Public Vs. Private Blockchain",
    },
    {
      color: "#000000",
      title: "Blockchain Application and Platforms",
    },
    {
      color: "#000000",
      title: "Decentralized Autonomous Solutions",
    },
    {
      color: "#000000",
      title: "Communication Network on Blockchain",
    },
    {
      color: "#000000",
      title: "Cobots",
    },
    {
      color: "#000000",
      title: "Machine to Machine Communication",
    },
    {
      color: "#000000",
      title: "Machine to Human Communication",
    },
    {
      color: "#000000",
      title: "Cobots in Manufacturing",
    },
    {
      color: "#000000",
      title: "Cobots in Healthcare",
    },
    {
      color: "#000000",
      title: " Training and Testing of Cobots",
    },
    {
      color: "#000000",
      title: " Cobots in Transportation System",
    },
    {
      color: "#000000",
      title: "Cobots in Agriculture",
    },
    {
      color: "#000000",
      title: "Swarm Robots",
    },
    {
      color: "#000000",
      title: "Bio inspired robotics",
    },
    {
      color: "#000000",
      title: "Cognitive approach for robotics",
    },
    {
      color: "#000000",
      title: "Medical and assistive robotics",
    },
    {
      color: "#000000",
      title: "Humanoid robots",
    },
    {
      color: "#000000",
      title: "Virtual Reality and Haptics",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <div
        id="home"
        className="landing-section flex-d-col flex-j-cen padding-3-2 text-center"
      >
        <div className=" home-container">
          <div className="flex logo-container">
            <img className="image3" src={GU_logo} alt="GU Logo" />
            <img className="image4" src={AICTE_logo} alt="AICTE Logo" />
            <img className="image1" src={DCE_Logo} alt="DCE Logo" />
            <img className="image5" src={Naac_logo} alt="NAAC Logo" />
            <img className="image2" src={ICTII_Logo} alt="ICTII Logo" />
          </div>

          <div className="flex-d-col">
            <div className="font-28 semi-bold">International Conference on</div>
            <div className="title bold">
              Technological Innovations in Industry 5.0 (ICTII)
            </div>
            <div className="font-24 medium-bold">
              Organised by:{" "}
              <span className="semi-bold">
                Dronacharya College of Engineering, Gurugram
              </span>
            </div>
          </div>

          <br />
          <div className="flex-j-cen flex-wrap">
            {/* <a className="register bold"  Link="/register">
              Registration
            </a> */}
            <Link className="register bold" to="/register">
              Registration
            </Link>
            <a className="payment bold" href={Registration} target="/">
              Payment Details
            </a>
            <a className="submit-paper bold" href={Paper_submission} target="/">
              Paper Format
            </a>
          </div>
          <div className="logocontainer">
            <div>
              <img className="image6" src={Springer_logo} alt="Springer_logo" />
              <img className="image7" src={UGC_logo} alt="UGC_logo" />
            </div>
          </div>
        </div>
        <img className="background-image" src={landing} alt="" />
      </div>

      <div id="about" className="conference-details">
        <div className="dates item">
          <div className="left">
            <MdDateRange />
          </div>
          <div className="right">
            <div className="font-20 bold">Conference Date</div>
            <div className="font-14 semi-bold">
              23<sup>th</sup>-24<sup>th</sup> May, 2024
            </div>
          </div>
        </div>
        <div className="venue item">
          <div className="left">
            <MdLocationOn />
          </div>
          <div className="right">
            <div className="font-20 bold">Conference Venue</div>
            <div className="font-14 semi-bold">
              DCE, Khentawas, Gurgaon, India
            </div>
          </div>
        </div>
        <div className="contact item">
          <div className="left">
            <GoClock />
          </div>
          <div className="right">
            <div className="font-20 bold">Workshop</div>
            <div className="font-14 semi-bold">IOT AI & Cybersecurity</div>
          </div>
        </div>
      </div>

      <div className="about-conference padding-0-1">
        <div className="font-36 semi-bold  text-center">Industry 5.0</div>
        <div className="font-20 text-justify padding-2-3">
          Industry 5.0 is the next industrial revolution to leverage the
          creativity of human experts in collaboration with efficient,
          intelligent and collaborative robots. It will obtain
          resource-efficient and user preferred manufacturing solutions. The
          potential applications of Industry 5.0 are intelligent healthcare,
          cloud manufacturing, supply chain management and manufacturing
          production. The supporting technologies for Industry 5.0 are edge
          computing, digital-twins collaborative robots, Internet of every
          things, blockchain, and 6G and beyond networks. The aim of this
          conference is to highlight various state-of-art potential challenges
          to be addressed to researchers, academicians, and industry and with
          their prominent solutions. ICTITI 24 aims to bring the researchers,
          academicians, industry, and government personnel together to share and
          discuss the various challenges, research gaps towards innovations in
          industry 5.0. It will provide common platform of discussion to various
          research scholars and academicians to explore new challenges with
          their solutions. We hope that ICTITI 24 will lead to significant
          contributions to the knowledge base in these technologies.
        </div>
        <div className="font-36 semi-bold  text-center">About the College</div>
        <div className="font-20  text-justify padding-2-3">
          Dronacharya College of Engineering, Gurgaon is imparting technical
          education since 1998. The college is undoubtedly, a preferred choice
          of budding engineers where every aspirant gets an equal opportunity to
          think, wonder, visualize, explore experiment and design his career as
          per his interest and demands of the MNCs. Here, we promote the growth
          of entrepreneurs, technocrats and engineers who contribute to the
          services of the society and Nation. We, at Dronacharya College of
          Engineering, are absolutely committed to serve the society and improve
          the mode of life by imparting high quality education in the field of
          Engineering and Management catering to the explicit and implicit needs
          of the students, society, humanity and industry. "Shiksha evam
          Sahayata" i.e. Education and Help are the two words etched on our
          banner soaring higher year after year. Our goal is to continuously
          improve the healthy learning environment and facilities being provided
          to the students to achieve academic excellence for employability as
          world class Technocrats and Managers, apart from making them noble
          human beings of a nation growing from strength to strength, dispelling
          the darkness of ignorance and ameliorating the society by means of
          philanthropic endeavors. The college offers Bachelor of Technology
          course in CSE, CSEIT, CSE (AI- ML), CSE (IoT), IT, ECE, ME, and
          Robotics and Automation and Master of Technology course in CSE, IT,
          ECE, and ME.
        </div>
        <div className="font-36 semi-bold  text-center">
          About the Department
        </div>
        <div className="font-20  text-justify padding-2-3">
          The Computer Science and Engineering department caters to the
          everlasting demand of the market. The extensive and laboratory
          facilities are one of the added advantages of the Department. The
          department is committed to provide quality, cutting-edge educational
          experiences that give students a holistic view of the engineering
          education and prepare them to take up their career in wide range of
          industries or establishing start-up companies. With this conference,
          the department is enhancing the research activities among students/
          faculty/ researchers and their capabilities to explore for industry
          5.0 requirements.
        </div>
      </div>

      <div className="objective padding-2-3">
        <div className="font-36 bold text-center">Objective of ICTII, 24</div>
        <br />
        <div className="objective-elements">
          {objective.map((item, index) => (
            <div key={index} className="item">
              <div
                style={{ color: item.color }}
                className="title bold font-22 flex-a-cen"
              >
                <FaRegCheckCircle /> &nbsp; {item.title}
              </div>
              <div className="font-18 semi-bold">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="about-college padding-3-2">
        <div className="font-36 text-center font-rubic-mono">About the College</div>
        <br />
        <div className="font-20 medium-bold text-justify padding-0-1">
        Dronacharya College of Engineering, Gurgaon is imparting technical education since 1998. 
        The college is undoubtedly, a preferred choice of budding engineers where every aspirant gets an equal opportunity to think, wonder, visualize, explore experiment and design his career as per his interest and demands of the MNCs. 
        Here, we promote the growth of entrepreneurs, technocrats and engineers who contribute to the services of the society and Nation. 
        
        <br /><br />
        We, at Dronacharya College of Engineering, are absolutely committed to serve the society and improve the mode of life by imparting high quality education in the field of Engineering and Management catering to the explicit and implicit needs of the students, society, humanity and industry. "Shiksha evam Sahayata" i.e. 
        Education and Help are the two words etched on our banner soaring higher year after year. 
        Our goal is to continuously improve the healthy learning environment and facilities being provided to the students to achieve academic excellence for employability as world class Technocrats and Managers, apart from making them noble human beings of a nation growing from strength to strength, dispelling the darkness of ignorance and ameliorating the society by means of philanthropic endeavors. 
        The college offers Bachelor of Technology course in CSE, CSEIT, CSE {"("}AI- ML{")"}, CSE {"("}IoT{")"}, IT, ECE, ME, and Robotics and Automation and Master of Technology course in CSE, IT, ECE, and ME.

        <br /><br />

        For more information, <a href="https://ggnindia.dronacharya.info/" target='_blank'>Check our Official Website</a>
        </div>
      </div> */}

      <ImportantDates />

      <div className="objective padding-2-3">
        <div className="font-36 bold text-center">CONFERENCE TOPICS</div>
        <br />
        <div className="objective-elements flex-wrap">
          {topics.map((item, index) => (
            <div key={index} className="item">
              <div
                style={{ color: item.color }}
                className="title bold font-22 flex-a-cen"
              >
                <FaRegCheckCircle /> &nbsp; {item.title}
              </div>
              <div className="font-18 semi-bold">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <Convernor />

      <Papers />

      <Partners />

      {/* <div className="register-section flex-d-col padding-3-2">
        <div className="font-30 bold">
          So what are you waiting for, &nbsp;
          <span className="font-36">Register Now!!</span>
        </div>

        <div className="flex flex-wrap">
          <a className="register bold" href="">
            Register
          </a>
          <a className="submit-paper bold" href="">
            Full Length Paper Submission
          </a>
        </div>
      </div> */}
    </>
  );
}

export default App;
