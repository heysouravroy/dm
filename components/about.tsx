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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hello! I'm Dhriti Mukherjee, a senior student at the University of Calcutta, where I'm pursuing a Bachelor of Arts degree in English Literature. To me, literature isn't just an academic pursuit; it's a profound passion that ignites my curiosity about storytelling, cultural heritage, and linguistic diversity. Throughout my academic journey, I've not only deepened my love for literature but also honed my critical thinking skills and developed a keen appreciation for the power of the written word.
      </p>
      <p className="mb-3">
      Beyond the confines of academia, I find immense joy and inspiration in the world of books. I immerse myself in various genres, exploring different perspectives and narratives that broaden my understanding of the human experience. Additionally, music is another avenue through which I express myself, often finding solace and creative release in singing.
      </p>
      <p className="mb-3">
      When I'm not lost in the world of literature or music, you can often find me cycling through the bustling streets of the city. Cycling represents more than just a mode of transportation for me—it's a metaphor for adventure, freedom, and exploration. It allows me to connect with my surroundings on a deeper level while embracing the thrill of the unknown.
      </p>
      <p className="mb-3">
      Staying informed and intellectually engaged is crucial to me, which is why I make it a point to keep up with current affairs through regular newspaper reading. This habit not only keeps me informed about global events but also fosters a deeper understanding of the world around me.
      </p>
    </motion.section>
  );
}
