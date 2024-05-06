import { useEffect, useState } from "react";
import "./navbar.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Navbar() {
  const data = [
    { title: "Home", link: "/", hover: "" },
    {
      title: "About DCE",
      link: "https://ggnindia.dronacharya.info/",
      hover: "",
    },
    {
      title: "Previous Coneferences",
      link: "https://ggnindia.dronacharya.info/events/ICCCS2018.aspx?Month=Dec&Year=2018",
      hover: "",
    },
    { title: "Industry 5.0", link: "/#about", hover: "" },
    { title: "Important Dates", link: "/#dates", hover: "" },
    { title: "Tracks", link: "/#tracks", hover: "" },
    {
      title: "Paper Submission",
      link: "#",
      hover: "ictii2024@ggnindia.dronacharya.info",
    },
  ];

  const [navExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setNavExpanded(true);
      } else {
        setNavExpanded(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [window.scrollY, navExpanded]);

  return (
    <div
      className={
        navExpanded ? "navbar-expanded flex-a-cen" : "navbar flex-a-cen"
      }
    >
      {data.map((item, index) => (
        <>
          <div key={index} className="item text-center">
            {item.hover === "" ? (
              <a href={item.link}>{item.title}</a>
            ) : (
              <a href={item.link}>
                <Popup
                  trigger={
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#242424",
                        color: "#fff",
                      }}
                    >
                      Paper Submission
                    </button>
                  }
                  position="right center"
                >
                  <div>Email the paper at: {item.hover}</div>
                </Popup>
              </a>
            )}
          </div>
        </>
      ))}
    </div>
  );
}
