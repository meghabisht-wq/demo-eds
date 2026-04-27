export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('six-compo-card');

    const title = row.querySelector('h1, h2, h3, h4, p > strong');
    const image = row.querySelector('picture');

    if (title) title.classList.add('six-compo-title');
    if (image) image.classList.add('six-compo-image');
    const wrapper = document.createElement('div');
    wrapper.classList.add('six-compo-content-wrapper');
  });
}