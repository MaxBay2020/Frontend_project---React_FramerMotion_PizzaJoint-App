import React, {useEffect, useState} from 'react';
// 使用AnimatePresence来设置组件消失的动画
import {motion, AnimatePresence} from 'framer-motion'

const Order = ({ pizza, setShowModal }) => {

    useEffect(() => {
        setTimeout(()=>{
            setShowModal(true)
        }, 5000)
    }, [setShowModal]);


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
                // delay: .5,
                type: 'spring',
                // stiffness: 120,
                // mass控制动画的惯性，数值越大，惯性越大
                mass: 0.4,
                // 阻尼数值，也就是动画来回弹几下，数值越高，弹的次数越少
                damping: 10,
                // when属性：可以设置动画什么时候执行，
                // beforeChildren意思是：在其使用了这个动画的标签的子标签的动画执行完后再执行
                when:'beforeChildren',
                // 这个属性会将带有动画的子组件在几秒后慢慢显示，也就是子组件延迟几秒显示
                staggerChildren: 0.4,
            }
        }
    }

    const childVariants={
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

  return (
    <motion.div
        className="container order"
        variants={containerVariants}
        initial='hidden'
        animate='visible'
    >

        <h2>Thank you for your order :)</h2>

      <motion.p
          variants={childVariants}
      >You ordered a {pizza.base} pizza with:</motion.p>
        <motion
            className="div"
            variants={childVariants}
        >
            {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </motion>
    </motion.div>
  )
}

export default Order;
