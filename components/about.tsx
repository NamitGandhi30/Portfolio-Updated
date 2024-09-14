"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
<p className="mb-3">
  I am currently pursuing a degree in{" "}
  <span className="font-medium">Computer Engineering</span> at Thadomal Shahani Engineering College in Mumbai, India. I am passionate about{" "}
  <span className="font-medium">full-stack web development</span> and enjoy creating{" "}
  <span className="italic">user-friendly and creatively unique websites</span>.
  My core stack includes{" "}
  <span className="font-medium">React, Next.js, Node.js, MongoDB</span>, and I am also skilled in{" "}
  <span className="font-medium">JavaScript and TypeScript</span>. I am constantly looking to expand my knowledge and learn new technologies. 
  I am currently seeking a{" "}
  <span className="font-medium">full-time position</span> as a software developer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I love exploring new ideas, watching movies, and honing my skills in web development. 
  I am always enthusiastic about{" "}
  <span className="font-medium">learning new things</span> and pushing creative boundaries.
</p>

    </motion.section>
  );
}
