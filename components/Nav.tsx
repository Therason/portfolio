import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

import styles from './Nav.module.css'

export default function Nav() {
  const [ focus, setFocus ] = useState(false)

  if (!focus) return (
    <>
      <AnimatePresence>
        <div className={styles.bar} key='h-icon'>
          <motion.img
            className={styles.icon}
            src='/hamburger.svg'
            onClick={() => setFocus(true)}
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </div>
      </AnimatePresence>
    </>
  )

  return (
    <>
      <AnimatePresence>
        <div className={styles.bar} key='x-icon'>
          <motion.img
            className={styles.icon}
            src='/xmark.svg'
            onClick={() => setFocus(false)}
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </div>
        <motion.div
          className={styles.container}
          key='menu'
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '-100vw' }}
        >
          <h1>TEST</h1>
        </motion.div>
      </AnimatePresence>
    </>
  )
}