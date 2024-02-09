import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience box-shadow: none" id="experience">
      <VerticalTimeline lineColor="#94b8a3" layout={"1-column-right"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "transparent", color: "#fff" }}
          contentStyle={{
            background: "transparent",
            color: "white",
            border: "solid 2px",
            lineColor: "Transparent",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-sky-400 font-bold text-lg">
            Tech Development Engineer
          </h3 >
          <company >COPEC SA</company>
          <h4 className="vertical-timeline-element-subtitle">2020-2023</h4>
          <p className="text-slate-400">
            Designed and developed the backend for 3 projects using Python and
            several AWS services (Lambda, DynamoDB, API Gateway and many more)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "transparent", color: "#fff" }}
          contentStyle={{
            background: "transparent",
            color: "white",
            border: "solid 2px",
            lineColor: "Transparent",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-sky-400 font-bold text-lg">
          Python Developer 
          </h3 >
          <company >Steer Davies & Gleave</company>
          <h4 className="vertical-timeline-element-subtitle">2019-2020</h4>
          <p className="text-slate-400">
          Developed an App to estimate product transportation costs using
            Python, PostgreSQL and PyQT5
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "transparent", color: "#fff" }}
          contentStyle={{
            background: "transparent",
            color: "white",
            border: "solid 2px",
            lineColor: "Transparent",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title text-sky-400 font-bold text-lg">
          Student Researcher
          </h3 >
          <company >CIMS JRI</company>
          <h4 className="vertical-timeline-element-subtitle">2018-2019</h4>
          <p className="text-slate-400">
            Led the development of a groundbreaking viscosity calculation model
            for flowing fluids, leveraging ultrasonic echo signals.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "transparent", color: "#fff" }}
          contentStyle={{
            background: "transparent",
            color: "white",
            border: "solid 2px",
            lineColor: "Transparent",
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title text-sky-400 font-bold text-lg">
            Electrical Engineering
          </h3 >
          <company >Universidad de Santiago de Chile</company>
          <h4 className="vertical-timeline-element-subtitle">2019</h4>
          <p className="text-slate-400">
            Specialized in industrial control systems
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
