export default function decorate(block) {
  const rawContent = block.querySelector(':scope > div > div');
  const message = rawContent ? rawContent.textContent : 'Default Hello!';
  const innerDiv = document.createElement('div');
  const contentDiv = document.createElement('div');
  contentDiv.textContent = message;
  innerDiv.append(contentDiv);
  block.textContent = '';
  block.append(innerDiv);
}
