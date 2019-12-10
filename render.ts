import { renderStatic } from './src/App';

async function render() {
  const html = await renderStatic('/');
  console.log(html);
}

render();
