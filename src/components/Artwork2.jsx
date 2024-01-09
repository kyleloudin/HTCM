import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

function Artwork2() {
  return (
    <>
      <motion.div
        variants={textVariant()}
        className="flex flex-col justify-center items-center"
      >
        <h2 className={`${styles.sectionHeadText} mb-10 text-secondary`}>
          <span className="lighting">SOUL</span>full Adventures
        </h2>
      </motion.div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src="/HTCM-DM.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-FacePaint.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Flow.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Goat.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Mantis.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Party.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Symbol.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-View1.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-View2.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-View3.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-View4.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-DM.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-FacePaint.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Flow.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Goat.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Mantis.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Party.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-Symbol.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-View1.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-View2.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-View3.jpg" />
          </div>
          <div class="slide">
            <img src="/HTCM-View4.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(Artwork2, "Artwork2");
