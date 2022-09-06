const chevronVariants = {
  button: {
    hover: {
      scale: 1.1,
      backgroundColor: '#b4daf8',

      transition: {
        scale: {
          type: 'spring',
          stiffness: 500,
        },
      },
    },

    tap: {
      scale: 1.05,

      transition: {
        scale: {
          type: 'spring',
          stiffness: 500,
        },
      },
    },

    transition: {
      scale: {
        type: 'spring',
        stiffness: 500,
      },
    },
  },

  chevron: {
    hover: {
      stroke: '#1f2233',
      transition: {
        ease: 'easeInOut',
      },
    },
  },
};

export default chevronVariants;
