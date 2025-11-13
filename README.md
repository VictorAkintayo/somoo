##🧠 SoMoo – An Interactive Quiz App

A sleek and interactive quiz web app built with React and TypeScript, designed to deliver engaging question-based experiences with real-time scoring, progress tracking, and feedback animations.

(Add a screenshot or screen recording of your quiz interface here)

##🚀 Features

🧩 Dynamic quiz engine with multiple question types (single choice, multiple choice, true/false)

🕒 Countdown timer per question

📊 Score tracking and instant feedback

🔄 Restart quiz and review answers

💾 LocalStorage persistence for high scores

🌗 Light/Dark mode toggle

📱 Fully responsive layout for desktop and mobile

🛠️ Tech Stack

+++ Multi-language support and more question categories

Frontend: React 18, TypeScript, TailwindCSS
State Management: Zustand or Context API
Animations: Framer Motion
Data: Local JSON

##⚙️ Getting Started

🧩 Clone the repository

git clone https://github.com/VictorAkintayo/somoo.git

cd somoo

🧱 Install dependencies

npm install

🧠 Run the development server

npm run dev

Your app will be running at http://localhost:5173

🧮 Example Question Object
{
  "id": 1,
  "question": "Which programming language is primarily used for web development?",
  "options": ["Python", "Java", "PHP", "JavaScript"],
  "answer": "JavaScript"
}

##🌍 Deployment

Easily deploy your Somoo app to Vercel or Netlify in a few clicks:

Push your code to GitHub.

Connect the repo to Vercel or Netlify.

Build command: npm run build

Output directory: dist

Live Demo Example: https://somoo.vercel.app

🧑‍💻 Future Enhancements

Add category and difficulty filters

Integrate with Open Trivia API for dynamic questions

Add sound effects and animations

Implement a leaderboard with Firebase

## Backlog

Thought for 1s
Let me read the quiz-start component to further reduce the font size for the difficulty level buttons on smaller screens.



## User Experience Improvements:

Answer Explanations - Show brief explanations for correct answers after each question to make it educational
Review Wrong Answers - Add a review screen at the end showing all questions answered incorrectly with correct answers
Sound Toggle - Let users mute/unmute sound effects with a persistent preference
Keyboard Navigation - Add keyboard shortcuts (1-4 for answers, Space for pause, Enter for next)
Hint System - Allow users to eliminate one wrong answer (costs time or points)

## Visual Polish:

** Confetti Animation - Celebrate perfect scores or high achievements with confetti effects
** Loading States - Add skeleton screens while questions load
** Achievement Badges - Award badges for milestones (perfect score, speed demon, category master)
Dark Mode - Add a theme toggle for better accessibility
Progress Streaks - Show daily/weekly quiz streaks to encourage engagement
Quiz Features:

Practice Mode - Untimed mode for learning without pressure
Question Difficulty Indicator - Show difficulty on each question card
Save High Scores - Track personal best scores per category/difficulty
Question Bookmarks - Let users bookmark interesting questions for later review
Multi-language Support - Since SoMoo is Yoruba, consider adding more Nigerian languages

## Technical Enhancements:

PWA Support - Make it installable as a progressive web app
Offline Mode - Cache questions for offline quiz-taking
Question Pool Expansion - Add 20-30 questions per category for more variety
Analytics - Track which questions are most frequently missed
Which of these would you like me to implement first?

🪪 License

This project is open-source and available under the MIT License
