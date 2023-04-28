import React from "react";
import CommunityList from "./CommunityList";
import { childVariants, parentVariants } from "../../animations/common";
import { motion } from "framer-motion";
function Community() {
  return (
    <>
      <section className="p-4 pb-24 text-white">
        <div className="container mx-auto max-w-6xl">
          {/* Content */}
          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-4 pb-14"
          >
            <motion.h1
              variants={childVariants}
              className="text-2xl md:text-3xl font-medium"
            >
              Communities
            </motion.h1>
            <motion.p
              variants={childVariants}
              className="text-slate-400 max-w-lg text-center"
            >
              We are a huge marketplace dedicated to connecting great artists of
              all with their fans and unique token collectors!
            </motion.p>
          </motion.div>
          {/* Blogs List */}
          <CommunityList />
        </div>
      </section>
    </>
  );
}

export default Community;
