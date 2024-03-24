import "./dates.css";

export default function ImportantDates (){
  return <div id="dates" className="important-dates padding-3-2">
    <div className="font-30 heading semi-bold text-center">Important Dates</div>
    
    <br /><br />

    <div className="flex-a-cen-j-cen flex-wrap">
      <div className="date-card">
        <div className="title font-20 semi-bold">
          Paper Submission
          </div>
        
        <div className="font-18 medium-bold">
          5<sup>th</sup> April, 2024
        </div>
      </div>

      <div className="date-card">
        <div className="title font-20 semi-bold">
          Acceptance
          </div>
        
        <div className="font-18 medium-bold">
          15<sup>th</sup> April, 2024
        </div>
      </div>

      <div className="date-card">
        <div className="title font-20 semi-bold">
          Registration
          </div>
        
        <div className="font-18 medium-bold">
          25<sup>th</sup> April, 2024
        </div>
      </div>
    </div>
  </div>
}