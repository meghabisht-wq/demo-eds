export default function decorate(block) {
  const link = block.querySelector('a');
  if (link) {
    const path = link.getAttribute('href');
    block.textContent = path;
  }
}
