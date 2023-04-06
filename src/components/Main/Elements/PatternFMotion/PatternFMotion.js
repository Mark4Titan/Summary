

export const FMotion = {
  hidden: ({ move }) => ({
    [move]: 100,
    opacity: 0,
  }),
  visible: ({ pos, multiplier, move }) => ({
    [move]: 0,
    opacity: 1,
    transition: { delay: pos * multiplier },
  }),
};
export const visibleMotion = {
  hidden: {
    opacity: 0,
  },
  visible: ({ pos, multiplier }) => ({
    opacity: 1,
    transition: { delay: pos * multiplier },
  }),
};
