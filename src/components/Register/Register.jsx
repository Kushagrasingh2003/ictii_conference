import { useState } from "react";
import "./Register.css";
import emailjs from "@emailjs/browser";

const Register = () => {
  //   const form = useRef();
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const [toSend, setToSend] = useState({
    From_name: "",
    To_name: "DCE",
    designation: "",
    email: "",
    mobile: "",
    institution: "",
    address: "",
    city: "",
    state: "",
    country: "",
    titleOfResearch: "",
    paperId: "",
    modeOfPresentation: "",
    feeCategory: "",
    amountPaid: "",
    comments: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    {
      /* --- METHOD TO SEND THE MAIL --- */
    }
    const params = {
      from_name: toSend.From_name,
      to_name: "DCE",
      Designation: toSend.designation,
      Email: toSend.email,
      Mobile: toSend.mobile,
      Institution: toSend.institution,
      Address: toSend.address,
      City: toSend.city,
      State: toSend.state,
      Country: toSend.country,
      TitleOfResearch: toSend.titleOfResearch,
      PaperId: toSend.paperId,
      ModeOfPresentation: toSend.modeOfPresentation,
      FeeCategory: toSend.feeCategory,
      AmountPaid: toSend.amountPaid,
      PaidDetails: file1,
      ProofOfRegistration: file2,
      attendanceDays: [],
      Comments: toSend.comments,
    };

    emailjs
      .send("service_1909vx8", "template_7dc632b", params, {
        publicKey: "pw-0MCe0N5hGr1c1y",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const handleFileChange1 = (e) => {
    setFile1(e.target.files[0]);
  };
  const handleFileChange2 = (e) => {
    setFile2(e.target.files[0]);
  };
  //   const handleAttendanceChange = (e) => {
  //     const { name, checked } = e.target;
  //     let updatedAttendanceDays = [...toSend.attendanceDays];
  //     if (checked) {
  //       updatedAttendanceDays.push(name);
  //     } else {
  //       updatedAttendanceDays = updatedAttendanceDays.filter(
  //         (day) => day !== name
  //       );
  //     }
  //     setToSend({
  //       ...toSend,
  //       attendanceDays: updatedAttendanceDays,
  //     });
  //   };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setToSend({
  //       ...toSend,
  //       [name]: value,
  //     });
  //   };
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h1 className="headding">Conference Registration Form</h1>
          <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
              {" "}
              <label>Name:</label>
              <input
                type="text"
                name="From_name"
                required
                placeholder="name"
                value={toSend.From_name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              {" "}
              <label>Designation:</label>
              <input
                type="text"
                name="designation"
                required
                placeholder="Your Designation"
                value={toSend.designation}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Email:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                value={toSend.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Mobile:</label>
              <input
                type="tel"
                name="mobile"
                required
                placeholder="Mobile"
                value={toSend.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Institution(University/College/Organization) :</label>
              <input
                type="text"
                name="institution"
                required
                placeholder="Institution"
                value={toSend.institution}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea
                name="address"
                required
                placeholder="Address"
                value={toSend.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>City:</label>
              <input
                type="text"
                name="city"
                required
                placeholder="City"
                value={toSend.city}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>State:</label>
              <input
                type="text"
                name="state"
                required
                placeholder="State"
                value={toSend.state}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Country:</label>
              <input
                type="text"
                name="country"
                required
                placeholder="Country"
                value={toSend.country}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Title of Research Paper/Talk :</label>
              <input
                type="text"
                name="titleOfResearch"
                required
                placeholder="Title"
                value={toSend.titleOfResearch}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Paper Id:</label>
              <input
                type="number"
                name="paperId"
                required
                placeholder="PaperId"
                value={toSend.paperId}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>
                Mode of Paper Presentation(Oral/Poster/Physical/Online) :
              </label>
              <select
                name="modeOfPresentation"
                value={toSend.modeOfPresentation}
                onChange={handleChange}
                required
              >
                <option value="">Select Mode</option>
                <option value="Oral">Oral Presentation(Physical)</option>
                <option value="Poster">Poster Presentation(Physical)</option>
                <option value="Online">Online Presentation</option>
              </select>
            </div>
            <div className="form-group">
              {" "}
              <label>Registration Fee Category :</label>
              <select
                name="feeCategory"
                value={toSend.feeCategory}
                onChange={handleChange}
                required
              >
                <option value="">choose</option>
                <option value="Oral">
                  Participants from Corporates/Industry
                </option>
                <option value="Poster">Research Scholars and Students</option>
                <option value="Physical">
                  Participant from Host Organization
                </option>
                <option value="Online">Delegates from Foreign/Abroad</option>
              </select>
            </div>
            <div className="form-group">
              {" "}
              <label>Registration Fee Amount Paid :</label>
              <input
                type="text"
                name="amountPaid"
                required
                placeholder="Amount Paid"
                value={toSend.amountPaid}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Upload Fee Paid Details/Proofs :</label>
              <input
                type="file"
                name="PaidDetails"
                required
                accept=".pdf,.doc,.docx"
                placeholder="Upload File"
                // value={toSend.PaidDetails}
                onChange={handleFileChange1}
              />
            </div>
            <div className="form-group">
              {" "}
              <label>Attach Proof of Registration Category(ID Card) :</label>
              <input
                type="file"
                name="ProofOfRegistration"
                required
                accept=".pdf,.doc,.docx"
                placeholder="Upload File"
                // value={toSend.ProofOfRegistration}
                onChange={handleFileChange2}
              />
            </div>

            {/* <div className="form-group">
              <label>What days will you attend the conference?</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="Day 1"
                    checked={toSend.attendanceDays.includes("Day 1")}
                    onChange={handleAttendanceChange}
                  />
                  Day 1
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Day 2"
                    checked={toSend.attendanceDays.includes("Day 2")}
                    onChange={handleAttendanceChange}
                  />
                  Day 2
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="Both (Day 1 & Day 2)"
                    checked={toSend.attendanceDays.includes(
                      "Both (Day 1 & Day 2)"
                    )}
                    onChange={handleAttendanceChange}
                  />
                  Both (Day 1 & Day 2)
                </label>
              </div>
            </div> */}
            <div className="form-group">
              <label>Comments / Suggestions(If any):</label>
              <textarea
                name="comments"
                placeholder="Your message"
                value={toSend.comments}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
