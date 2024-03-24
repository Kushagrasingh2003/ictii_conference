import "./partners.css";
import acm from "../../assets/partners/acm.png"
import csi from "../../assets/partners/csi.png"
import gfg from "../../assets/partners/gfg.png"
import ict from "../../assets/partners/ict.png"
import ieee from "../../assets/partners/ieee.png"
import iste from "../../assets/partners/iste.jpeg"
import nasscom from "../../assets/partners/nasscom.png";
import infosys from "../../assets/partners/infosys.png";

export default function Partners () {

  return <div className="partners padding-2-3">
    <div className="knowledge">
      <div className="font-28 bold text-center">Our Knowledge Partners</div>
      <br /><br />
      <div className="image-container">
        <img src={ict} alt="" /><img src={gfg} alt="" />
      </div>
    </div>
    <br /><br />
    <div className="knowledge">
      <div className="font-28 bold text-center">Our Technical Partners</div>
      <br /><br />
      <div className="image-container">
        <img src={acm} alt="" /><img src={csi} alt="" />
        <img src={ieee} alt="" /><img src={iste} alt="" />
      </div>
    </div>
    <br /><br />
    <div className="knowledge">
      <div className="font-28 bold text-center">Our Industrial Partners</div>
      <br /><br />
      <div className="image-container">
        <img src={nasscom} alt="" /><img src={infosys} alt="" />
      </div>
    </div>

  </div>
}