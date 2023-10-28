# Memory Game: A walk through nature

Memory Game is a take on the classic game of concentration, designed to provide an engaging and fun experience while enhancing your memory skills.

## 👩‍💻 [Click here](https://sierrabardot.github.io/concentration/) to play Memory Game!

## 🏃‍♀️ Getting Started

The primary purpose of this game is to test and improve your memory by matching pairs of cards.

<!-- wireframing & screenshots -->

### Instructions

1. **Breathe, relax, and have fun!**
2. Click on a card to reveal its image.
3. Click on a second card, and find its matching pair.
4. You have 60 seconds to try and match all the cards.

## 🤔 Planning & Problem Solving

Throughout the development, I encountered several challenges. Here's how I approached them:

-   **Ensuring Game Functionality:** I strategically handled game logic to ensure that cards were shuffled and matched correctly, and that the game ends when all pairs are found or the timer runs out.

-   **Implementing an Overlay:** I used Chrome DevTools to inspect how websites implement overlays. This, along with some reliable sources (i.e. SheCodes and Stack Overflow) allowed me to create my own version and successfully render the overlay when the game ends.

-   **Resetting Default Game State Values:** I initially struggled to reset the game state variables to their original state in order start a new game. After creating a _GIANT_ init() function, I rethought my approach and created a specific function to reset the values each time a new game initiated.

## 🚀 Technologies Used

-   HTML
-   CSS
-   JavaScript
-   **Animations:** CSS transitions to 'flip' cards

## 💩 Bugs to Fix

-   **Card Icons Delay:** After pushing to GitHub, there is a delay displaying icons when first playing the game
-   **Responsive Design:** Ensuring the game works well on various screen sizes and devices.

## 🥲 Lessons Learned

🎵 _If I could turn back time_ 🎵

-   **Spend More Time on Responsive Design:** I would focus on making the game more responsive and user-friendly on different devices.
-   **Good Pseudocode is Crucial:** I focused too much on what I want the game to do, but didn't think about _how_ I want it to work.

## 💯 Future Features

A few features I plan on adding in the near future:

-   **Smooth Trantitions for Overlay** Take advantage of CSS transitions to smoothly render the overlay when the game ends
-   **Levels:** Create different levels and/or difficulties
-   **Theme Selection:** Allow users to choose from a range of themes for the game, providing different options for the background, colours, and card images

## 🙏 Acknowledgements

-   The team at [General Assembly](https://generalassemb.ly/) for their support! 💪🏼
-   [Daly Cova](https://www.linkedin.com/in/dalycova/?originalSubdomain=au), for creating the card images and background 🥰

### Enjoy playing Memory Game: A walk through nature 🌿🌼🌳
