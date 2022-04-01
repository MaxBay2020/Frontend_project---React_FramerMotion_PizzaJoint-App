import React from 'react';
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

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

  const nextVariants={
        hidden: {
            x: '-100vw',
        },
      visible: {
            x: 0,
              transition: {
                  type: 'spring',
                  stiffness: 120
              }
      }
  }

  return (
    <motion.div
        className="base container"
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
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
                key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
                    variants={nextVariants}
                    // 如果父组件也有initial和animate，且值都是hidden和visible，
                    // 那我们就不需要在子组件中重复定义initial和animate了
                    // 注意！只是继承了 initial='hidden' 和 animate='visible' 这两句赋值的代码
                    // 并不会继承hidden或visible里面的实际内容
                    // 但前提是父组件和子组件都有initial='hidden' 和 animate='visible' 这两句赋值的代码
                    // initial='hidden'
                    // animate='visible'
        >
          <Link to="/toppings">
            <motion.button
               variants={buttonVariants}
               whileHover='hover'
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
