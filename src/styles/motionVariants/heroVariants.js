const heroVariants = {
  container: {
    initial: {
      opacity: 0,
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
};

export default heroVariants;
