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
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2020 - 09/2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cloud Engineer - COPEC SA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Santiago, Chile
          </h4>
          <p>Designed and developed the backend for 3 projects using Python
            and several AWS services (Lambda, DynamoDB, API Gateway and many more)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2019 - 03/2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Python Developer - Steer Davies and Gleave
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Santiago, Chile
          </h4>
          <p>
            Developed an App to estimate product transportation costs using
              Python, PostgreSQL and PyQT5
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="09/2019 - 03/2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Student Researcher - CIMS JRI
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Santiago, Chile
          </h4>
          <p>
            Led the development of a groundbreaking viscosity calculation model
              for flowing fluids, leveraging ultrasonic echo signals.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Electrical Engineering
          </h3>
          <p> Universidad de Santiago de Chile</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
