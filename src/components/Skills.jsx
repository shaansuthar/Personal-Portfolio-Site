import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";

// Rename FeedbackCard to SkillCard and update it to show categories and skills
const SkillCard = ({ index, category, skillsList }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white font-black text-[24px]'>{category}</p>
      <ul className='mt-4 text-white tracking-wider text-[18px] list-disc list-inside'>
        {skillsList.map((skill, skillIndex) => (
          <li key={skillIndex} className='mt-1 text-[16px]'>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Never stop learning</p>
          <h2 className={styles.sectionHeadText}>Skills.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {skills.map((skillCategory, index) => (
          <SkillCard key={skillCategory.category} index={index} {...skillCategory} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
