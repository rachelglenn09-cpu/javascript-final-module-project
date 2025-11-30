# javascript-final-module-project
A final project to showcase what was learned in the JavaScript learning module.

This project consists of 8 APIs labelled as "grid items" within a larger div container. They all perform different functions and combine to create a "Wellness Dashboard."

WEATHER API:
- Uses an async function to collect a JSON response from Open Meteo's Weather API
- Extracts 4 main pieces of text data from the JSON and appends them to the "weather-result" container
- Creates an HTML button within the function that resets the application

ADVICE API:
- Uses an async function to collect a JSON response from Advice Slip API
- Extracts a "random advice" text response from the JSON and appends it to the "advice-result" container
- Creates an HTML button within the function that resets the application

QUOTE API:
- Uses an async function to collect a JSON response from Quotable API
- Extracts a "random quote" text response from the JSON and appends it to the "quote-result" container
- Creates an HTML button within the function that resets the application

HOROSCOPE API:
- Uses an async function to collect a JSON response from a Horoscope API
- Uses the user's drop down input to fill the fetch URL with the correct Astrological Sign
- Returns 3 pieces of data: the sign, the date, and today's horoscope for that sign
- Creates an HTML button within the function that resets the application

TAROT READING API:
- Uses an async function to collect a JSON response from Tarot API
- Extracts two pieces of data (the card and the upright meaning) and appends them to the "tarot-result" container
- Creates an HTML button within the function that resets the application

MAGIC 8 BALL API:
- Uses an async function to collect a JSON response from Eight Ball API
- The function includes a component to make sure there is user input in the text field before displaying a response
- Returns a "random answer" text response from the JSON and appends it to the "magic8ball-result" container
- Creates an HTML button within the function that resets the application

LUNAR CALENDAR API:
- Uses an async function to collect a JSON response from Moon Phase API
- Created a variable for "moonImg" allowing for the addition of custom icons for each possible result
- Returns multiple pieces of data: moon image, moon date, moon phase, moon illumination, moon age & moon sign
- Creates an HTML button within the function that resets the application

AFFIRMATION API:
- Uses an async function to collect a JSON response from Affirmations API
- Returns a "daily affirmation" text response from the JSON and appends it to the "affirmation-result" container
- Creates an HTML button within the function that resets the application

CSS/STYLING NOTES:
- Used cohesive color palettes, styles and fonts
- Ensured design is responsive on all screen sizes
- Utilized several hover/active effects
