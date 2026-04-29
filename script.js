const promptData = {
  school: {
    label: "School",
    tasks: {
      explain: {
        label: "Explain a topic",
        final: "Explain {topic} in simple terms for a beginner. Use clear examples, avoid complicated vocabulary, and end with 3 quick review questions.",
        simple: "Explain {topic} simply and give me 3 review questions.",
        why: "This works because it gives the AI a topic, an audience level, a style, and a clear ending format."
      },
      study: {
        label: "Make a study guide",
        final: "Create a beginner-friendly study guide for {topic}. Include the most important ideas, simple definitions, one example for each idea, and a short practice quiz with answers.",
        simple: "Make me a simple study guide for {topic}.",
        why: "This works because it asks for organized sections, examples, and practice instead of a loose explanation."
      },
      outline: {
        label: "Plan an assignment",
        final: "Help me plan a school assignment about {topic}. Give me a clear outline, suggested sections, key points to include, and a short checklist for finishing the work.",
        simple: "Help me outline a school assignment about {topic}.",
        why: "This works because it turns a broad assignment into steps, sections, and a finish checklist."
      }
    }
  },
  work: {
    label: "Work",
    tasks: {
      email: {
        label: "Write a professional email",
        final: "Write a professional email about {topic}. Make it clear, respectful, and concise. Include a helpful subject line, a friendly opening, the main message, and a clear next step.",
        simple: "Write a clear professional email about {topic}.",
        why: "This works because it names the tone, length, structure, and action the reader should take."
      },
      summarize: {
        label: "Summarize information",
        final: "Summarize {topic} for a busy coworker. Use plain language, highlight the most important points, and end with any decisions or action items.",
        simple: "Summarize {topic} for work.",
        why: "This works because it tells the AI who the summary is for and what details matter most."
      },
      plan: {
        label: "Make a work plan",
        final: "Create a simple work plan for {topic}. Break it into steps, list what should happen first, identify possible blockers, and suggest a realistic next action.",
        simple: "Make a simple work plan for {topic}.",
        why: "This works because it asks for order, risks, and a next action instead of just ideas."
      }
    }
  },
  writing: {
    label: "Writing",
    tasks: {
      brainstorm: {
        label: "Brainstorm ideas",
        final: "Brainstorm writing ideas for {topic}. Give me 10 specific ideas, group them by theme, and mark the 3 strongest options for a beginner to start with.",
        simple: "Give me writing ideas for {topic}.",
        why: "This works because it asks for quantity, organization, and a recommendation."
      },
      improve: {
        label: "Improve a draft",
        final: "Help me improve a draft about {topic}. Focus on clarity, flow, and word choice. Suggest specific edits and explain why each change makes the writing stronger.",
        simple: "Help me improve my writing about {topic}.",
        why: "This works because it tells the AI what kind of feedback to give and asks for reasons, not just corrections."
      },
      outline: {
        label: "Create an outline",
        final: "Create a clear writing outline for {topic}. Include a strong opening idea, 3 main sections, supporting points for each section, and a simple conclusion.",
        simple: "Make an outline for writing about {topic}.",
        why: "This works because it gives the AI a structure to follow from beginning to end."
      }
    }
  },
  everyday: {
    label: "Everyday Life",
    tasks: {
      compare: {
        label: "Compare options",
        final: "Help me compare options for {topic}. Use a simple table with pros, cons, cost or effort, and who each option is best for. End with a practical recommendation.",
        simple: "Compare my options for {topic}.",
        why: "This works because it asks the AI to organize choices and explain which option fits best."
      },
      plan: {
        label: "Plan something",
        final: "Help me make a practical plan for {topic}. Break it into simple steps, include what I need to prepare, and suggest a realistic timeline.",
        simple: "Help me plan {topic}.",
        why: "This works because it turns an everyday goal into steps, supplies, and timing."
      },
      simplify: {
        label: "Simplify information",
        final: "Explain {topic} in everyday language. Use short paragraphs, define any important terms, and give one real-life example that makes it easier to understand.",
        simple: "Explain {topic} in everyday language.",
        why: "This works because it asks for simple language, definitions, and an example."
      }
    }
  },
  image: {
    label: "Image Generation",
    tasks: {
      realistic: {
        label: "Realistic image prompt",
        final: "Create a realistic image prompt for {topic}. Include the main subject, setting, lighting, mood, colors, camera angle, and important details to include or avoid.",
        simple: "Make a realistic image prompt for {topic}.",
        why: "This works because image tools need visual details like subject, setting, lighting, mood, and composition."
      },
      illustration: {
        label: "Illustration prompt",
        final: "Create an illustration prompt for {topic}. Describe the subject, art style, color palette, background, mood, and 3 specific visual details that should appear in the image.",
        simple: "Make an illustration prompt for {topic}.",
        why: "This works because it gives the image tool style direction plus concrete visual details."
      },
      refine: {
        label: "Improve an image idea",
        final: "Improve this image idea: {topic}. Turn it into a stronger image-generation prompt with a clear subject, composition, style, lighting, background, and details to avoid.",
        simple: "Improve my image prompt idea: {topic}.",
        why: "This works because it upgrades a rough idea into specific visual instructions an image tool can follow."
      }
    }
  }
};

const categorySelect = document.querySelector("#category");
const taskSelect = document.querySelector("#task");
const topicInput = document.querySelector("#topic");
const form = document.querySelector("#prompt-form");
const emptyState = document.querySelector("#empty-state");
const resultPanel = document.querySelector("#result-panel");
const finalPrompt = document.querySelector("#final-prompt");
const simplePrompt = document.querySelector("#simple-prompt");
const whyText = document.querySelector("#why-text");
const copyButton = document.querySelector("#copy-button");
const copyStatus = document.querySelector("#copy-status");
const topicError = document.querySelector("#topic-error");
const promptHelpButton = document.querySelector("#prompt-help-button");
const promptHelpCard = document.querySelector("#prompt-help-card");
const aiLinks = document.querySelector("#ai-links");
const aiPath = document.querySelector("#ai-path");
const chatgptLink = document.querySelector("#chatgpt-link");
const claudeLink = document.querySelector("#claude-link");
const geminiLink = document.querySelector("#gemini-link");

function fillTemplate(template, topic) {
  return template
    .replaceAll("{topic}.", punctuateTopic(topic, "."))
    .replaceAll("{topic}", topic);
}

function punctuateTopic(topic, fallbackMark) {
  return /[.!?]$/.test(topic) ? topic : `${topic}${fallbackMark}`;
}

function getSelectedTask() {
  const category = promptData[categorySelect.value];
  return category.tasks[taskSelect.value];
}

function populateCategories() {
  Object.entries(promptData).forEach(([key, category]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = category.label;
    categorySelect.append(option);
  });
}

function populateTasks() {
  const category = promptData[categorySelect.value];
  taskSelect.innerHTML = "";

  Object.entries(category.tasks).forEach(([key, task]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = task.label;
    taskSelect.append(option);
  });
}

function showPrompt() {
  const topic = topicInput.value.trim();
  const task = getSelectedTask();

  if (!topic) {
    topicError.textContent = "Enter a topic or a few details first. Even a short phrase is enough.";
    topicInput.setAttribute("aria-invalid", "true");
    topicInput.focus();
    return;
  }

  finalPrompt.textContent = fillTemplate(task.final, topic);
  simplePrompt.textContent = fillTemplate(task.simple, topic);
  whyText.textContent = task.why;
  updateAiLinks(finalPrompt.textContent);
  topicError.textContent = "";
  topicInput.removeAttribute("aria-invalid");
  copyStatus.textContent = "";

  emptyState.classList.add("hidden");
  resultPanel.classList.remove("hidden");
  aiPath.classList.remove("hidden");
}

function updateAiLinks(prompt) {
  const encodedPrompt = encodeURIComponent(prompt);

  chatgptLink.href = `https://chatgpt.com/?q=${encodedPrompt}`;
  claudeLink.href = `https://claude.ai/new?q=${encodedPrompt}`;
  geminiLink.href = "https://gemini.google.com/app";
}

async function copyGeneratedPrompt() {
  if (!finalPrompt.textContent) {
    return;
  }

  try {
    await navigator.clipboard.writeText(finalPrompt.textContent);
    copyStatus.textContent = "Copied to clipboard. Paste it into ChatGPT, Claude, Google Gemini, or another AI app.";
  } catch (error) {
    copyStatus.textContent = "Copy failed. Select the final prompt and copy it manually.";
  }
}

categorySelect.addEventListener("change", () => {
  populateTasks();
  copyStatus.textContent = "";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showPrompt();
});

topicInput.addEventListener("input", () => {
  if (topicInput.value.trim()) {
    topicError.textContent = "";
    topicInput.removeAttribute("aria-invalid");
  }
});

copyButton.addEventListener("click", copyGeneratedPrompt);

promptHelpButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = !promptHelpCard.classList.contains("hidden");

  promptHelpCard.classList.toggle("hidden", isOpen);
  promptHelpButton.setAttribute("aria-expanded", String(!isOpen));
});

document.addEventListener("click", (event) => {
  const clickedHelp = promptHelpButton.contains(event.target) || promptHelpCard.contains(event.target);

  if (!clickedHelp) {
    promptHelpCard.classList.add("hidden");
    promptHelpButton.setAttribute("aria-expanded", "false");
  }
});

populateCategories();
populateTasks();
