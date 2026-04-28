# Prompt Vending Machine

Prompt Vending Machine is a beginner-friendly static website that helps people turn rough questions or ideas into clearer prompts for AI tools.

It does not answer questions itself. After creating a prompt, users can paste it into ChatGPT, Claude, Gemini, or another AI app.

## Version 1 Scope

- 5 categories
- 3 tasks per category
- 1 topic/details text field
- 1 final generated prompt
- 1 simpler version
- 1 short explanation of why the prompt works
- 1 copy button

## Categories

- School
- Work
- Writing
- Everyday Life
- Image Generation

## Files

- `index.html` - page structure
- `styles.css` - visual design and responsive layout
- `script.js` - category data, task switching, prompt templates, and copy behavior
- `docs/` - planning and contest notes
- `prompts/` - project prompt notes

## How It Works

The site uses simple JavaScript templates. A user chooses a category, chooses a task, enters a topic or details, and clicks **Dispense Prompt**.

The page then shows:

- a final prompt
- a simpler version
- a short explanation of why the prompt works

There are no API calls, accounts, backend services, databases, or AI integrations.

## Run Locally

Open `index.html` in a browser.

## Deploy

This project is GitHub and Netlify friendly because it is plain HTML, CSS, and JavaScript.

On Netlify, deploy the repository as a static site. No build command is required.

## Implementation Plan

1. Build one static page with a clear beginner-friendly introduction and the required notice.
2. Add selectors for category and task.
3. Update the task selector when the selected category changes.
4. Use template-based prompt generation in `script.js`.
5. Show the final prompt, simpler version, and explanation in the results area.
6. Add one copy button for the final generated prompt.
7. Keep the interface polished, responsive, and simple enough for a student contest demo.

## Assumptions

- Version 1 should stay small and easy to understand.
- Prompt generation should be predictable and template-based.
- Users will paste generated prompts into a separate AI app.
- The site should work by opening `index.html` directly or by deploying to Netlify.
