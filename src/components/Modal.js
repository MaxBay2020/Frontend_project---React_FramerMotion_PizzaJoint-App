import React from 'react'
import {Link} from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion'

const Modal = ({showModal, setShowModal}) => {
    const backdrop = {
        visible: {opacity: 1},
        hidden: {opacity: 0},
        exit: {},

    }

    const modalVariants = {
        hidden: {
            y: '-100vh',
            opacity: 0,
        },
        visible: {
            y: '200px',
            opacity: 1,
            transition: {
                delay: 0.5
            }
        },

    }
    return (
        <AnimatePresence exitBeforeEnter>
            {
                showModal
                &&
                <motion.div
                    className='backdrop'
                    variants={backdrop}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div
                        className='modal'
                        variants={modalVariants}
                    >
                        <p>Want to make another pizza?</p>
                        <Link to='/' >
                            <button onClick={()=>setShowModal(false)}>Start now</button>
                        </Link>

                    </motion.div>

                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Modal
