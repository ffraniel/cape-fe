const handleScrollToRef = (ref) => {
  if (ref.current) {
    window.scrollTo({ 
      behavior: 'smooth', 
      top: ref.current.offsetTop 
    })
  }
};

export default handleScrollToRef;