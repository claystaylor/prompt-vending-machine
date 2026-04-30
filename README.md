# Prompt Vending Machine

Prompt Vending Machine is a beginner-friendly static website that helps people turn rough questions, tasks, or ideas into reusable prompts for AI tools.

It is designed for students, professionals, writers, and everyday AI users who know what they want help with but are not sure how to phrase a strong prompt. The app builds prompts, not answers. After dispensing a prompt, users can copy it and launch ChatGPT, Claude, Google Gemini, or another AI app.

## What Problem It Solves

New AI users often type vague requests and get weak, confusing, or incomplete results. Prompt Vending Machine gives them a guided path: choose the kind of help they need, add their topic or details, and get a clearer prompt they can reuse or adapt.

## Main Features

- Choose a category: School, Work, Writing, Everyday Life, or Image Generation
- Choose a goal/task within that category
- Enter a topic, question, or details in plain language
- Dispense a structured prompt
- Copy either the Final Prompt or the Simpler Version
- Open ChatGPT, Claude, or Google Gemini in a new tab
- Read Why It Works to understand the prompt structure
- Clean rough topic input by trimming whitespace, removing awkward trailing punctuation, and smoothing simple question/filler phrasing

## How To Use It

1. Choose a category.
2. Choose a goal or task.
3. Type your topic, question, or details.
4. Click **Dispense Prompt**.
5. Review the Final Prompt, Simpler Version, and Why It Works.
6. Copy the prompt you want.
7. Open ChatGPT, Claude, Google Gemini, or another AI app and paste the prompt there.

## Categories And Tasks

- **School:** explain a topic, make a study guide, plan an assignment
- **Work:** write a professional email, summarize information, make a work plan
- **Writing:** brainstorm ideas, improve a draft, create an outline
- **Everyday Life:** compare options, plan something, simplify information
- **Image Generation:** realistic image prompt, illustration prompt, improve an image idea

## How It Works

The site uses simple JavaScript templates. A user chooses a category, chooses a task, enters a topic or details, and clicks **Dispense Prompt**.

The page then shows:

- a Final Prompt
- a Simpler Version
- a short Why It Works explanation
- copy buttons for the Final Prompt and Simpler Version
- links to open ChatGPT, Claude, and Google Gemini in new tabs

There are no API calls, accounts, backend services, databases, or live AI integrations. The generated output is predictable and template-based.

## Files

- `index.html` - page structure
- `styles.css` - visual design and responsive layout
- `script.js` - category data, task switching, prompt templates, and copy behavior
- `docs/` - planning and contest notes
- `prompts/` - project prompt notes

## Run Locally

Open `index.html` in a browser.

## Deploy

This project is GitHub and Netlify friendly because it is plain HTML, CSS, and JavaScript.

On Netlify, deploy the repository as a static site. No build command is required.

## Final Scope

- Plain HTML, CSS, and JavaScript
- Retro vending-machine interface
- Responsive layout for desktop and smaller screens
- Template-based prompt generation
- Topic cleanup for punctuation, simple question phrasing, and leading filler phrases
- Separate copy buttons for Final Prompt and Simpler Version
- AI app launch links that open in new tabs

## Assumptions

- Prompt generation should be predictable and template-based.
- Users will paste generated prompts into a separate AI app.
- The site should work by opening `index.html` directly or by deploying to Netlify.
