import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import Image from "next/image";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { leadership } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Memoize the LeadershipCard component to prevent unnecessary re-renders
const LeadershipCard = React.memo(({ leadership }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#363837",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={leadership.date}
      iconStyle={{ background: leadership.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <div className='w-[60%] h-[60%] relative'>
            <Image
              src={leadership.icon}
              alt={leadership.team_name}
              fill={true}
              style={{ objectFit: "contain" }}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{leadership.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {leadership.team_name}
        </p>
      </div>

      {/* Conditionally render the image if it exists, with lazy loading */}
      {leadership.image && (
        <div className='mt-4 relative w-full h-auto'>
          <Image
            src={leadership.image}
            alt={leadership.title}
            width={800}
            height={400}
            style={{ objectFit: "contain" }}
            className='rounded-lg'
            loading="lazy"
          />
        </div>
      )}

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {leadership.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
});

const Leadership = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Teamwork makes the dream work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Leadership.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {leadership.map((leadership, index) => (
            <LeadershipCard
              key={`leadership-${index}`}
              leadership={leadership}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Leadership, "leadership");
