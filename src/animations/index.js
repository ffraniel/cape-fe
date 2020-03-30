export const animationConfig = {
  opacity: 1, 
  transform: 'translate(0, 0)',
  from: {opacity: 0, transform: 'translate(0, 20px)'},
  config: {
    mass: 2,
    friction: 28
  }
};

export const fadeInConfig = {
  opacity: 1,
  from: {
    opacity: 0
  },
  config: {
    mass: 2,
    friction: 60
  }
}