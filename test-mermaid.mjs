import mermaid from 'mermaid';
import { JSDOM } from 'jsdom';

const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="mermaid-svg-test"></div></body></html>`);
global.window = dom.window;
global.document = window.document;

mermaid.initialize({ startOnLoad: false });

const chart = `mindmap
  root((AI Intelligent<br/>Design Platform))
    Style Aesthetics Matrix
      5 Mainstream Style Libraries
        Modern Minimalist
        Italian Luxury
`;

async function run() {
    try {
        const { svg } = await mermaid.mermaidAPI.render('mermaid-svg-test', chart);
        console.log(svg);
    } catch (e) {
        console.error(e);
    }
}
run();
