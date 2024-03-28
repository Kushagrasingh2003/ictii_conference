import "./convernor.css";
import principal from "../../assets/faculty/principal.jpg";
import ashima from "../../assets/faculty/ashima.jpg";
import yashwardhan from "../../assets/faculty/yashvardhan.jpg";
import renu from "../../assets/faculty/renu.jpg";
import hansraj from "../../assets/faculty/hansrajYadav.jpg";
import manoj from "../../assets/faculty/manojKumar.jpg";
import director from "../../assets/faculty/director.jpg";
import ghansham from "../../assets/faculty/ghansham.png";
import shyam from "../../assets/faculty/shyam.jpg";

export default function Convernor() {
  const data = [
    {
      head: "Cheif Patrons",
      person: [
        { name: "Dr. Satish Yadav", title: " Chairman, DCE", img: director },
        {
          name: "Prof. (Dr.) B.M.K. Prasad",
          title: "Director, DCE",
          img: principal,
        },
      ],
    },
    {
      head: "Co-Patron",
      person: [
        {
          name: "Dr. Ghanshyam Singh",
          title: " Professor, University of Johannesburg, South Africa",
          img: yashwardhan,
        },
        {
          name: "Dr. Shyam S. Pandey",
          title: "Assistant Professor, Kyushu Institute of Technology, Japan",
          img: yashwardhan,
        },
        {
          name: "Prof. (Dr.) Isha Malhotra",
          title: "Principal, DCE",
          img: yashwardhan,
        },
      ],
    },
    // {
    //   head: "Chief Persons",
    //   person: [
    //     {
    //       name: "Dr. Ghanshyam Singh",
    //       title: "Professor, University of Johannesburg",
    //       img: ghansham,
    //     },
    //     {
    //       name: "Dr. Shyam S. Pandey",
    //       title: "Assistant Profess, Kyushu Institute of Technology",
    //       img: shyam,
    //     },
    //   ],
    // },
    {
      head: "GENERAL CHAIR",
      person: [
        {
          name: "Dr. Ashima Mehta",
          title: "Associate Professor & HoD, CSE/ CSIT, DCE",
          img: ghansham,
        },
        {
          name: "Prof. Yashvardhan Soni",
          title: " HoD CSE, DCE",
          img: shyam,
        },
        {
          name: "Prof. Dimple Saproo",
          title: " HoD ECE, DCE",
          img: shyam,
        },
        {
          name: "Dr. Ritu Pahwa",
          title: " HoD AIML, DCE",
          img: shyam,
        },
        {
          name: "Prof. Neha Chauhan",
          title: " HoD ME, DCE",
          img: shyam,
        },
        {
          name: "Prof. Pooja Sharma",
          title: " HoD Applied Science, DCE",
          img: shyam,
        },
      ],
    },

    {
      head: "PUBLICATION CHAIR",
      person: [
        {
          name: "Dr. Shipra Arora",
          title: "Associate Professor,DCE",
          img: ashima,
        },
        { name: "Dr. Seema", title: "Associate Professor,DCE", img: ashima },
        {
          name: "Dr. Yogita Shukla",
          title: "Assistant Professor,DCE",
          img: ashima,
        },
        {
          name: "Dr. Sakshi Gupta",
          title: "Assistant Professor,DCE",
          img: ashima,
        },
        {
          name: "Dr. Shelly Garg",
          title: "Assistant Professor,DCE",
          img: ashima,
        },
        { name: "Dr. Pankaj", title: "Assistant Professor,DCE", img: ashima },
        {
          name: "Dr. Ankit Aggarwal",
          title: "Assistant Professor,DCE",
          img: ashima,
        },
      ],
    },
    {
      head: "ORGANIZING CHAIR",
      person: [
        {
          name: "Dr. Shimpy Goyal (Convenor)",
          title: "Assistant Professor,DCE",
          img: ashima,
        },
        {
          name: "Prof. Renu (Co-Convenor)",
          title: "Assistant Professor,DCE",
          img: ashima,
        },
      ],
    },

    {
      head: "WORKSHOP  CHAIR",
      person: [
        {
          name: "Dr. R. Devianei",
          title: "Associate Professor,DCE",
          img: ashima,
        },
        {
          name: "Dr. Shipra Kataria",
          title: "Associate Professor,DCE",
          img: ashima,
        },
      ],
    },
    {
      head: "FINANCE CHAIR",
      person: [
        { name: "Dr Hansraj Yadav", title: "Registrar,DCE", img: ashima },
      ],
    },
    // {
    //   head: "Conference General Chair",
    //   person: [{ name: "Dr. Ashima Mehta", title: "HOD, DCE", img: ashima }],
    // },
    // {
    //   head: "Convenors",
    //   person: [
    //     {
    //       name: "Dr. Manoj Kumar",
    //       title: "Assistant Professor, DCE",
    //       img: manoj,
    //     },
    //     {
    //       name: "Ms Renu Narwal",
    //       title: "Assistant Professor, DCE",
    //       img: renu,
    //     },
    //   ],
    // },
    // {
    //   head: "Organizing Secretary",
    //   person: [
    //     { name: "Dr. Hansraj Yadav", title: "Registrar, DCE", img: hansraj },
    //   ],
    // },
  ];

  return (
    <div className="convernor padding-2-3">
      <div className="font-36 bold text-center">Convenors</div>
      <br />
      <br />
      <div className="con-groups flex-d-row ">
        {data.map((item) => (
          <>
            <div className="container">
              <div className="font-20 semi-bold  ">{item.head}</div>
            </div>
            <div key={item.head} className="con-images flex-d-row">
              <div className="image-holder flex-wrap">
                {item.person.map((element) => (
                  <>
                    <div key={element.name} className="item flex-d-col">
                      <div className="font-14 semi-bold">{element.name}</div>
                      <div className="font-12 semi-bold">{element.title}</div>
                      {/* <img src={element.img} alt="" /> */}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
