import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import "./PageTransition.css";

const PageTransition = () => {
  const { pageNumber } = useParams();

  const background = `#${Math.floor(
    (Number(pageNumber) / 10) * 16777215
  ).toString(16)}`;

  return (
    <motion.div
      initial={{ scaleY: 0.9, translateX: 150, opacity: 0 }}
      animate={{ scaleY: 1, translateX: 0, opacity: 1 }}
      exit={{ scale: 0.9, translateX: -150, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={{ background }} className="page-transition-container">
        <div className="page-transition-content">
          {`This is page ${pageNumber}`}
          <Link
            to={`/page-transition/${Number(pageNumber) + 1}`}
          >{`Go to page ${Number(pageNumber) + 1}`}</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PageTransition;
