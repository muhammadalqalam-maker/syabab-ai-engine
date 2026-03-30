import { runAIEngine } from './ai-engine.js';

window.runAI = async function () {
  const result = await runAIEngine("Analyze and improve this system");
  console.log(result);
};
