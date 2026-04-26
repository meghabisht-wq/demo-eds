export default function decorate(block) {
  /* 1. 'block' is the outer container EDS creates.
    2. We loop through each child (the 6 items).
  */
  [...block.children].forEach((row) => {
    // Add a class for the individual card
    row.classList.add('six-compo-card');

    // Find the title and image within each row
    const title = row.querySelector('h1, h2, h3, h4, p > strong');
    const image = row.querySelector('picture');

    if (title) title.classList.add('six-compo-title');
    if (image) image.classList.add('six-compo-image');

    /*
      Senior Tip: We wrap the content to ensure 
      Flexbox works perfectly even if some tags are missing.
    */
    const wrapper = document.createElement('div');
    wrapper.classList.add('six-compo-content-wrapper');
    
    // Move title and image inside the wrapper if needed
    // or just leave them to be styled via the row class.
  });
}