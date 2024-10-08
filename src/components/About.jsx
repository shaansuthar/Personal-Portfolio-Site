import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Card wrapper for the overview text */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 bg-primary p-6 rounded-[20px] shadow-lg max-w-7xl'
      >
        <p className='text-secondary text-[17px] leading-[30px]'>
          Hi! I'm a mechatronics engineer, which is just a fancy way of saying I like to build stuff—mechanical, electrical, software—you name it. 
          With years of experience in all three domains, I thrive on thinking both big picture and diving deep into the details. Whether it's 
          designing a drone, optimizing code for distributed systems, or crafting smart tech, I love solving problems from every angle. Plus, I'm 
          all about collaboration—leading teams and working closely with others to bring ideas to life. If you need someone who can connect the dots 
          across multiple domains—let's make it happen!
        </p>
      </motion.div>

      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
