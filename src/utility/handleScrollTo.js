const handleScrollTo = (e) => {
  let hrefAll = e.target.href;
  if (hrefAll && hrefAll.length > 0) {
    e.preventDefault();
    //get coordinates
    let href = hrefAll.split('#')[1];
    // console.log(href)
    let intendedY = document.querySelector(`#${href}`).getBoundingClientRect().top;
    // console.log(intendedY)
    window.scrollTo({
      top: intendedY,
      behavior: 'smooth'
    });
  }
};

export default handleScrollTo;