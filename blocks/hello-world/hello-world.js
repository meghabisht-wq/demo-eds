export default function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('hello-wrapper');

  [...block.children].forEach((row) => {
    container.append(row);
  });

  block.textContent = '';
  block.append(container);

  if (!block.querySelector('h1')) {
    const title = document.createElement('h1');
    title.textContent = 'Hello World! 🚀';
    container.prepend(title);
  }
}