import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "./150.jpg";

const FollowerCount = ({ count }) => {
  const [follower, setFollower] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFollower((prevFollower) => {
        if (prevFollower < count) {
          return prevFollower + 1;
        } else {
          setShowMessage(true);
          clearInterval(interval);
          return count;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [count]);

  const messageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const countVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div
      className="follower-count-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        className="box"
        initial="hidden"
        animate={showMessage ? "visible" : "hidden"}
        variants={boxVariants}
      >
        <motion.h2
          initial="hidden"
          animate={showMessage ? "visible" : "hidden"}
          variants={messageVariants}
        >
          Thank you, Twitter family!
        </motion.h2>
      </motion.div>
      <motion.div
        className="circle"
        initial="hidden"
        animate={showMessage ? "hidden" : "visible"}
        variants={circleVariants}
      >
        <motion.span
          style={{
            display: "inline-block",
            fontSize: "4rem",
            fontWeight: "bold"
          }}
          initial="hidden"
          animate={showMessage ? "hidden" : "visible"}
          variants={countVariants}
        >
          {follower}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default FollowerCount;
