import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./educations.css";

const Educations = () => {
  return (
    <>
      <div className=" education" id="education">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Educations Details
        </h1>
        <hr />

        {/* Vertical Timeline */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FF9800", color: "black" }}
            contentArrowStyle={{ borderRight: "1.3rem solid  #0D47A1" }}
            iconStyle={{ background: "black", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              SSC Kinwat Dist. Nanded
            </h3>
            <h4 className="vertical-timeline-element-subtitle mt-2">
              Marathi Medium
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FF9800", color: "black" }}
            contentArrowStyle={{ borderRight: "1.3rem solid  #0D47A1" }}
            iconStyle={{ background: "black", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              HSC Kinwat Dist. Nanded
            </h3>
            <h4 className="vertical-timeline-element-subtitle mt-2">Science</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#FF9800", color: "black" }}
            contentArrowStyle={{ borderRight: "1.3rem solid  #0D47A1" }}
            iconStyle={{ background: "black", color: "white" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title ">
              VPKBIET, Baramati
            </h3>
            <h4 className="vertical-timeline-element-subtitle mt-2">
              BE in Computer Engineering
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Educations;
