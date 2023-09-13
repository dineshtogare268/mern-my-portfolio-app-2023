import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";
import { LuNetwork } from "react-icons/lu";
import "./workExp.css";

const WorkExp = () => {
  return (
    <>
      <div className=" work" id="workexp">
        <div className="  work-exp">
          <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h1>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#FF9800",
                color: "black",
                fontWeight: "600",
              }}
              contentArrowStyle={{
                borderRight: "0.9rem solid  #0288D1",
              }}
              date="2017 - 2021"
              iconStyle={{ background: "black", color: "white" }}
              icon={<LuNetwork />}
            >
              <h3 className="vertical-timeline-element-title">
                Network Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle mt-2">
                Sahas Model Making Studio,Andheri
              </h4>
              <p>4 year Work experience</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#FF9800",
                color: "black",
                fontWeight: "600",
              }}
              contentArrowStyle={{
                borderRight: "0.9rem solid  #0288D1",
              }}
              date="2021 - 2023"
              iconStyle={{ background: "black", color: "white" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle mt-2">
                CMS IT service, Mahape, Navi Mumbai
              </h4>
              <p>2 year Work experience as a Web Developer</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>{" "}
    </>
  );
};

export default WorkExp;
