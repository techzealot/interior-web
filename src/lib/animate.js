export const slideUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const slideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
export const slideRight = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const slideDown = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const fadeIn = (delay) => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

export const fadeOut = (delay) => {
  return {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
