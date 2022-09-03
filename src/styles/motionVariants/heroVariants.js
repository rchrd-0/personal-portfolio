const heroVariants = {
  container: {
    initial: {
      opacity: 1,
    },

    animate: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.8,
      },
    },
  },

  children: {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  },

  icon: {
    container: {
      animate: {
        y: [0, -10, 0, -10, 0],
        transition: {
          y: {
            delay: 4,
            type: 'spring',
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 4.5,
          },
        },
      },
    },

    arrow: {
      initial: {
        opacity: 0,
        pathLength: 0,
      },

      animate: {
        opacity: 1,
        pathLength: 1,
        transition: {
          duration: 1.5,
          ease: 'easeInOut',
          delay: 1.8,
        },
      },
    },
  },
};

export default heroVariants;
