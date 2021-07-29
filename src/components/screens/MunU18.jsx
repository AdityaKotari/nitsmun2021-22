// *Hooks*
import React, { Suspense, useEffect, useRef } from "react";

import Loading from "../Loading";
import Table from "../Table";

// *CSS*
import "../Events.css";
import "./MunU18.css";

let info = {
  title : "NITS Junior MUN | NITSMUN",
  heading : "NITS Junior MUN",
  bgpic : "/img/munu18.jpg",
  
  eventDetails : [
    `With great pride and honour, we announce the first edition of NITS Junior MUN exclusively for school students. We believe that children and young teens should be exposed to the various intricacies of society and nations and should understand how the world functions from the grassroot level along with the challenges faced. It is only with proper grooming, experience and exposure that enables them to make changes in the society. Through this conference, we are targeting students from grade VI to grade XII from schools all across the country.`,
    `A day-long free-of-cost workshop will be held a few days before the conference in order to acclimatise those without prior experience. Keeping in mind the various examination schedules of the Central and State Boards, we have planned to organise our conference from October 16, 2021 to October 17, 2021. The cost of participation for the MUN conference has been set at ₹150 for individuals, with a special discounted offer of ₹125 per individual for group registrations (discount only applicable to groups with 5 or more participants).`,
    ``,
    `WANT TO BE THE FACE OF NITS MODEL UNITED NATIONS?`,
    `Well now you can. NITSMUN is looking for ZONAL AMBASSADORS who can help us promote our upcoming Junior MUN conference among the students all over India and help them get acquainted with the Muning culture by resolving all their queries and doubts.`,
    `Each state of India will have two Zonal Ambassadors, so that each one of you will have a helping hand. The Zonal Ambassadors will have to reach out to students/colleges/schools in their zones  and publicize NITS Junior MUN by encouraging them to take part.`,
    `Still confused about your roles? Don't worry, we'll help you with a step by step plan to make it crystal clear.`,
    `DON'T MISS OUT THE PERKS-`,
    `i) Officially issued Certificates by NITSMUN for all those who complete every task successfully`,
    `ii) Special Letter of Recommendations for exceptional performers.`,
    `iii) Exciting cash prizes for the best performer`,
    `iv) Apart from all, first hand experience of working with one of the most prestigious MUN society of North East India`,
    `APPLY FOR THE SAME`,
  ],
  
  btn: [
    {
      link: "https://forms.gle/eULWqZijfUJgLtmRA",
      display: "block",
      name: "Delegates"
    },
    {
      link: "/apply",
      display: "block",
      name: "Zonal Ambassadors"
    },
    {
      link: "https://forms.gle/PAWFVNF5Tu3Chw1w9",
      display: "block",
      name: "Workshop"
    },
  ]
}

const MunU18 = () => {
  
  const details = info.eventDetails;
  const btns = info.btn;
  
  const applyBtns = useRef();

  useEffect(()=> {

    // *Setting Up Page Title*
    document.title = info.title;
   if(window.location.hash === "#apply") window.scrollTo(0, applyBtns.current.offsetTop);
  }, []);

  return (
    <Suspense fallback={<Loading/>}>
      <div className="event" id="munu18">
        <div className="event-pic">
          <img loading="lazy" src={info.bgpic} alt="Annual Conf" />
        </div>

        <div className="event-title"><strong>{info.heading}</strong></div>

        <div className="event-details">{
          details.map((para, index) => {
            return(
              <React.Fragment key={`para${index}`}>
                {para}
                <br/><br/>

                {index === 1 && <Table/>}
              </React.Fragment>
            )
          })
        }</div>

        <div className="buttons">
          <span className="apply-for buttons-itm" ref={applyBtns}>Apply For: </span>
          {btns.map(btn => (
            <a target="_blank" rel="noreferrer" className="event-apply-btn buttons-itm" key={btn.name}
              href={btn.link}
              style={{
                display : `${btn.display}`
              }}
            >{btn.name}</a>
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default MunU18;