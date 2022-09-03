const navVariants = {
  left: {
    hover: {
      scale: 1.1,
    },

    after: {
      initial: {
        opacity: 0,
        y: '-150%',
      },

      hover: {
        opacity: 1,
        y: 0,

        transition: {
          y: {
            type: 'spring',
            stiffness: 200,
            mass: 0.5,
          },
        },
      },
    },
  },

  right: {
    hover: {
      scale: 1.15,
      color: '#b4daf8',

      transition: {
        scale: {
          type: 'spring',
          stiffness: 300,
        },

        color: {
          ease: 'easeInOut',
        },
      },
    },
  },
};

export default navVariants;
