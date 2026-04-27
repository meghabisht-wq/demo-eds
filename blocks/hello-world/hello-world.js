export default function decorate(block) {
  // 1. Get the content that was written in the Markdown/Table
  // We look for the first <div> inside the block
  const rawContent = block.querySelector(':scope > div > div');
  const message = rawContent ? rawContent.textContent : 'Default Hello!';

  // 2. Create the structure
  const innerDiv = document.createElement('div');
  const contentDiv = document.createElement('div');
  
  // 3. Use the dynamic message instead of hard-coded text
  contentDiv.textContent = message;

  // 4. Final assembly
  innerDiv.append(contentDiv);
  block.textContent = '';
  block.append(innerDiv);
}