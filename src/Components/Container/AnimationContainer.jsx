import { motion } from 'framer-motion'
import React from 'react'

function AnimationContainer({ children ,className}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={className}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    )
}

export default AnimationContainer