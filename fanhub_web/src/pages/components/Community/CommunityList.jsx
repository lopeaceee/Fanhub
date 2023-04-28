import React from "react";
import blogs from "../../data/blogs";
import CommunityCard from "./CommunityCard";
import { childVariants, parentVariants } from "../../animations/common";
import { motion } from "framer-motion";
function BlogsList() {
  return (
    <>
      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Collection Card  */}
        {blogs.map((blog, idx) => {
          return (
            <motion.div variants={childVariants} key={idx}>
              <CommunityCard
                key={blog.title}
                img={blog.img}
                title={blog.title}
                desc={blog.desc}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}

export default BlogsList;
