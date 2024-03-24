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
        { name: "Dr. B/M/k. Prasad", title: "Director, DCE", img: director },
        { name: "Dr. Isha Malhotra", title: "Principal, DCE", img: principal },
      ],
    },
    {
      head: "Co-Patron",
      person: [
        {
          name: "Prof. Yashwardhan Soni",
          title: "Academic Administrator, DCE",
          img: yashwardhan,
        },
      ],
    },
    {
      head: "Chief Persons",
      person: [
        {
          name: "Dr. Ghanshyam Singh",
          title: "Professor, University of Johannesburg",
          img: ghansham,
        },
        {
          name: "Dr. Shyam S. Pandey",
          title: "Assistant Profess, Kyushu Institute of Technology",
          img: shyam,
        },
      ],
    },
    {
      head: "Conference General Chair",
      person: [{ name: "Dr. Ashima Mehta", title: "HOD, DCE", img: ashima }],
    },
    {
      head: "Convenors",
      person: [
        {
          name: "Dr. Manoj Kumar",
          title: "Assistant Professor, DCE",
          img: manoj,
        },
        {
          name: "Ms Renu Narwal",
          title: "Assistant Professor, DCE",
          img: renu,
        },
      ],
    },
    {
      head: "Organizing Secretary",
      person: [
        { name: "Dr. Hansraj Yadav", title: "Registrar, DCE", img: hansraj },
      ],
    },
  ];

  return (
    <div className="convernor padding-2-3">
      <div className="font-36 bold text-center">Convenors</div>
      <br />
      <br />
      <div className="con-groups flex-wrap">
        {data.map((item) => (
          <div key={item.head} className="con-images">
            <div className="font-20 semi-bold">{item.head}</div>
            <div className="image-holder flex-wrap">
              {item.person.map((element) => (
                <div key={element.name} className="item flex-d-col">
                  <div className="font-14 semi-bold">{element.name}</div>
                  <div className="font-12 semi-bold">{element.title}</div>
                  <img src={element.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
