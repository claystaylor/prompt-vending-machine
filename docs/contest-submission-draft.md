# Contest Submission Draft

## Working Title
Prompt Vending Machine

## Tagline
Guided prompt building for beginners

## Short Description
Prompt Vending Machine is a beginner-friendly static website that helps new AI users turn rough questions, tasks, or ideas into clearer reusable prompts. I built it with Codex, assisted by ChatGPT, to help people get better results from AI tools while learning why prompt wording works.

## 500-Character Draft
Prompt Vending Machine helps beginners turn rough questions, tasks, or ideas into clearer prompts for AI tools. I built it with Codex as a static HTML/CSS/JavaScript site because many people are curious about AI but do not know how to ask for what they want. It guides users through simple choices, generates reusable prompts, and explains why the wording works.

## Demo Flow
1. User chooses a category
2. User chooses a goal/task
3. User enters topic/details
4. User clicks **Dispense Prompt**
5. Website shows Full Prompt, Simpler Prompt, and Why It Works
6. User copies either the longer, more complete Full Prompt or the shorter, easier Simpler Prompt
7. AI app buttons appear after copying so the user can open ChatGPT, Claude, Google Gemini, or another AI app in a new tab and paste the prompt there

## How I Built It
Built with Codex in VS Code, with ChatGPT used to help refine the scope, organize the workflow, and write better Codex prompts. Project files were managed through GitHub and deployed as a static site.

## Notes
- The app builds prompts, not answers.
- It uses plain HTML, CSS, and JavaScript.
- There are no API calls, accounts, backend services, databases, or live AI integrations.
- Topic cleanup trims whitespace, removes awkward trailing punctuation, and smooths simple question/filler phrasing before generating outputs.
