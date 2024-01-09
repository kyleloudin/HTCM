import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] flex flex-wrap font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className=" flex flex-col justify-center items-center "
      >
        <div className=" bg-mt-[-4]">
          <div className="absolute xs:top-[80px] sm:top-[100px] xs:inset-1 md:inset-10 md:top-[110px] xl:inset-20 xl:top-[120px] max-w-10xl mx-auto flex flex-column justify-start gap-5">
            <div className=" flex flex-col justify items-center ">
              {" "}
              <div className="w-5 h-5 rounded-full bg-[#a0a7c2]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
          </div>
          <h2 className={`${styles.sectionHeadText} text-secondary xs:pl-10`}>
            Principals of a<span className={`${styles.sectionHeadText} text-secondary lighting`}> High Threader</span>
          </h2>
        </div>
        <p
          className="mt-10 text-thirdary text-[17px] xs:pl-5 max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          A high threader is about honoring the moral fabric of a genuine human
          being. We don’t care about influencers and how many followers they, or
          we have online. We care about the actual living human beings doing the
          hard work which allows us to look all fancy and fun, because without
          them, there is no us. Let’s take care of them and allow them to
          flourish and dream. Paying for fake followers is not high thread
          count. Bringing a product to market that is true and pure, whether it
          be tangible or art, is our desire. Honoring the Ancestral traditions
          and giving an opportunity for our future generations to pass along the
          knowledge is the key to our success as human beings. We’re not pay to
          play, we’re care to bare. Barring our arms open to hug every man,
          woman, child and tree we see in need. Indeed, we must love hard with
          compassion and unite to spread the vibration of love all over the
          world.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={services.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
