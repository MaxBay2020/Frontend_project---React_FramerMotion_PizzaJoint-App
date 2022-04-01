import React from 'react';
import { Link } from 'react-router-dom'
// 引包
import { motion } from "framer-motion"
import Loader from "./Loader";

const Home = () => {

    const buttonVariants={
        hover: {
            scale: 1.1, // 放大1。1倍
            textShadow: '0px 0px 8px rgb(255,255,255)', // 添加文字阴影
            boxShadow: '0px 0px 8px rgb(255,255,255)', //添加div阴影
            transition: {
                // yoyo: 10, // yoyo动画是来回动画，10代表需要的帧数，也就是5个来回；取值Infinity代表一直执行
                yoyo: Infinity,
            }
        },
        // visible: {
        //     x: [0,-20,20,-20,0], // 数组定义每一帧的数值
        //     transition: {
        //         delay: 2,
        //     }
        // }
    }

    const containerVariants={
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 1
            }
        },
        exit: {
            x: '-100vw',
            transition: {
                ease: 'easeInOut'
            }
        }

    }

  return (
    <motion.div className="home container"
                variants={containerVariants}
                animate='visible'
                initial='hidden'
                exit='exit'

    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
            variants={buttonVariants}
            whileHover='hover'

        >
          Create Your Pizza
        </motion.button>
      </Link>
        <Loader />
    </motion.div>
  )
}

export default Home;
