import React from 'react';
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

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
    // 设置动画
    const containerVariants={
        // 随便起名
        hidden: {
            x: '100vw',
            opacity: 0,
        },
        // 随便起名
        visible: {
            x: 0,
            opacity: 1,
            // 注意！transition属性写在这里！
            transition: {
                delay: .5,
                type: 'spring',
                stiffness: 120
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
    <motion.div
        className="toppings container"
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
                whileHover={{
                    scale: 1.3,
                    originX: 0, // 用来设置放大时的起点
                    color: 'yellow',
                }}
                transition={{
                    type:'spring',
                    stiffness: 300
                }}
                key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}

      </ul>

      <Link to="/order">
        <motion.button
            variants={buttonVariants}
            whileHover='hover'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;
