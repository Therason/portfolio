import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

import styles from './Nav.module.css'

export default function Nav() {
  const [ focus, setFocus ] = useState(false)

  if (!focus) return (
    <>
      <AnimatePresence initial={false}>
        <div className={styles.bar} key='h-icon'>
          {/* TODO: SVG Path animation */}
          <motion.img
            className={styles.icon}
            src='/hamburger.svg'
            onClick={() => setFocus(true)}
            initial={{ opacity: 0}}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.25
              }
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25
            }}
          />
        </div>
      </AnimatePresence>
    </>
  )

  return (
    <>
      <AnimatePresence>
        <div className={styles.bar} key='x-icon'>
          {/* TODO: SVG Path animation */}
          <motion.img
            className={styles.icon}
            src='/xmark.svg'
            onClick={() => setFocus(false)}
            initial={{ opacity: 0}}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.25
              }
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25
            }}
          />
        </div>
        {/* TODO: animation delay timing */}
        <motion.div
          className={styles.container}
          key='menu'
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
          transition={{
            duration: 0.7,
            ease: 'easeOut'
          }}
        >
          <p>about</p>
          <p>blog</p>
          <p>contact</p>
        </motion.div>
      </AnimatePresence>
    </>
  )
}