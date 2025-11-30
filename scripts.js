// get relevant elements from the DOM for the weather api
const weatherContainer = document.getElementById('weather-api');
const weatherButton = document.getElementById('weather-button');
const weatherResult = document.getElementById('weather-result');

// getWeather() function to fetch weather data for Los Angeles
function getWeather() {
    // Asynchronous function to fetch weather data
    async function fetchWeather() {
        try {
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=34.0522&longitude=-118.2437&daily=precipitation_probability_max,temperature_2m_max,temperature_2m_min&hourly=relativehumidity_2m,apparent_temperature,precipitation&current_weather=true&timezone=America%2FLos_Angeles&forecast_days=1&wind_speed_unit=mph&precipitation_unit=inch&temperature_unit=fahrenheit');
            if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
            const data = await response.json();

            // Extract relevant weather data from the API response
            const currentTemp = data.current_weather && data.current_weather.temperature !== undefined ? data.current_weather.temperature : 'N/A';
            const maxDailyTemp = data.daily && data.daily.temperature_2m_max ? data.daily.temperature_2m_max[0] : 'N/A';
            const minDailyTemp = data.daily && data.daily.temperature_2m_min ? data.daily.temperature_2m_min[0] : 'N/A';
            const precipitationProb = data.daily && data.daily.precipitation_probability_max ? data.daily.precipitation_probability_max[0] : 'N/A';

            // Hide the button and paragraph elements of weatherContainer
            if (weatherContainer) {
                const button = weatherContainer.querySelector('button');
                const paragraph = weatherContainer.querySelector('p');
                if (button) button.style.display = 'none';
                if (paragraph) paragraph.style.display = 'none';
            }
            // Append the weather data to the weatherResult element with grid-item class
            if (weatherResult) {
                weatherResult.innerHTML += `<p class="api-description">Current Temperature: ${currentTemp} °F</p>`;
                weatherResult.innerHTML += `<p class="api-description">Max Daily Temperature: ${maxDailyTemp} °F</p>`;
                weatherResult.innerHTML += `<p class="api-description">Min Daily Temperature: ${minDailyTemp} °F</p>`;
                weatherResult.innerHTML += `<p class="api-description">Precipitation Probability (today): ${precipitationProb}%</p>`;

                // Add a button that resets the app display
                weatherResult.innerHTML += `<button id="reset-weather" class="api-button">Reset</button>`;
                // Add a click handler on the reset button to redisplay the hidden weatherContainer elements and clear results
                const resetBtn = weatherResult.querySelector('#reset-weather');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        if (weatherContainer) {
                            const button = weatherContainer.querySelector('button');
                            const paragraph = weatherContainer.querySelector('p');
                            if (button) button.style.display = 'flex';
                            if (paragraph) paragraph.style.display = 'flex';
                        }
                        weatherResult.innerHTML = '';
                    });
                }
            }
        } catch (err) {
            if (weatherResult) weatherResult.innerHTML = `<p>Error fetching weather: ${err.message}</p>`;
        }
    }
    fetchWeather();
}

// get relevant elements from the DOM for the advice api
const adviceContainer = document.getElementById('advice-api');
const adviceButton = document.getElementById('advice-button');
const adviceResult = document.getElementById('advice-result');

// getAdvice() function to fetch advice data 
function getAdvice() {
    // Asynchronous function to fetch advice data
    async function fetchAdvice() {
        try {
            const response = await fetch('https://api.adviceslip.com/advice');
            if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
            const data = await response.json();

            // Extract relevant advice data from the API response
            const adviceText = data.slip && data.slip.advice ? data.slip.advice : 'N/A';

            // Hide the button and paragraph elements of adviceContainer
            if (adviceContainer) {
                const button = adviceContainer.querySelector('button');
                const paragraph = adviceContainer.querySelector('p');
                if (button) button.style.display = 'none';
                if (paragraph) paragraph.style.display = 'none';
            }

            // Append the advice data to the adviceResult element
            if (adviceResult) {
                adviceResult.innerHTML = `<p class="api-description">${adviceText}</p>`;
            }
            // Add a button that resets the app display
            if (adviceResult) {
                adviceResult.innerHTML += `<button id="reset-advice" class="api-button">Reset</button>`;
                // Add a click handler on the reset button to redisplay the hidden adviceContainer elements and clear results
                const resetBtn = adviceResult.querySelector('#reset-advice');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        if (adviceContainer) {
                            const button = adviceContainer.querySelector('button');
                            const paragraph = adviceContainer.querySelector('p');
                            if (button) button.style.display = 'flex';
                            if (paragraph) paragraph.style.display = 'flex';
                        }
                        adviceResult.innerHTML = '';
                    });
                }
            }
        } catch (err) {
            if (adviceResult) adviceResult.innerHTML = `<p>Error fetching advice: ${err.message}</p>`;
        }
    }
    fetchAdvice();
}

// Get relevant elements from the DOM for the inspirational quotes api
const quoteContainer = document.getElementById('quotes-api');
const quoteButton = document.getElementById('quote-button');
const quoteResult = document.getElementById('quote-result');


// getQuote() function to fetch quote data 
function getQuote() {
    // Asynchronous function to fetch quote data
    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
            const data = await response.json();

            // Extract relevant quote data from the API response
            const quoteText = data.content ? data.content : 'N/A';
            const quoteAuthor = data.author ? data.author : 'Unknown';

            // Hide the button and paragraph elements of quoteContainer
            if (quoteContainer) {
                const button = quoteContainer.querySelector('button');
                const paragraph = quoteContainer.querySelector('p');
                if (button) button.style.display = 'none';
                if (paragraph) paragraph.style.display = 'none';
            }

            // Append the quote data to the quoteResult element
            if (quoteResult) {
                quoteResult.innerHTML = `<p class="api-description">"${quoteText}" - ${quoteAuthor}</p>`;
            }
            // Add a button that resets the app display
            if (quoteResult) {
                quoteResult.innerHTML += `<button id="reset-quote" class="api-button">Reset</button>`;
                // Add a click handler on the reset button to redisplay the hidden quoteContainer elements and clear results
                const resetBtn = quoteResult.querySelector('#reset-quote');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        if (quoteContainer) {
                            const button = quoteContainer.querySelector('button');
                            const paragraph = quoteContainer.querySelector('p');
                            if (button) button.style.display = 'flex';
                            if (paragraph) paragraph.style.display = 'flex';
                        }
                        quoteResult.innerHTML = '';
                    });
                }
            }
        } catch (err) {
            if (quoteResult) quoteResult.innerHTML = `<p>Error fetching quote: ${err.message}</p>`;
        }
    }
    fetchQuote();
}

// Get relevent elements from the DOM for the horoscope API
const horoscopeContainer = document.getElementById('horoscope-api');
const horoscopeButton = document.getElementById('horoscope-button');
const horoscopeResult = document.getElementById('horoscope-result');

 // getHoroscope() function to fetch horoscope data 
function getHoroscope() {
    const signSelect = document.getElementById('horoscope-sign');
    const sign = signSelect ? signSelect.value : null;

    async function fetchHoroscope() {
        if (!sign) {
            if (horoscopeResult) horoscopeResult.innerHTML = `<p class="api-description">Please select a sign.</p>`;
            return;
        }

        // Show loading state
        if (horoscopeResult) horoscopeResult.innerHTML = `<p class="api-description">Loading horoscope for <strong>${sign}</strong>...</p>`;

        try {
            const url = `https://corsproxy.io/?https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${encodeURIComponent(sign)}&day=TODAY`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
            const data = await response.json();

            // Hide the button and paragraph elements of horoscopeContainer
            if (horoscopeContainer) {
                const button = horoscopeContainer.querySelector('button');
                const paragraph = horoscopeContainer.querySelector('p');
                const dropdown = horoscopeContainer.querySelector('select');
                if (button) button.style.display = 'none';
                if (paragraph) paragraph.style.display = 'none';
                if (dropdown) dropdown.style.display = 'none';
            }
            // Append the horoscope data to the horoscopeResult element
            if (horoscopeResult) {
                horoscopeResult.innerHTML = '';

                const horoscopeText = data.data.horoscope_data;
                const horoscopeDate = data.data.date;

                horoscopeResult.innerHTML += `<p class="api-description"><strong>Sign:</strong> ${sign}</p>`;
                horoscopeResult.innerHTML += `<p class="api-description"><strong>Date:</strong> ${horoscopeDate}</p>`;
                horoscopeResult.innerHTML += `<p class="api-description"><strong>Horoscope:</strong> ${horoscopeText}</p>`;

                // Add reset button
                horoscopeResult.innerHTML += `<button id="reset-horoscope" class="api-button">Reset</button>`;
                const resetBtn = horoscopeResult.querySelector('#reset-horoscope');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        if (horoscopeContainer) {
                            const button = horoscopeContainer.querySelector('button');
                            const paragraph = horoscopeContainer.querySelector('p');
                            const dropdown = horoscopeContainer.querySelector('select');
                            if (button) button.style.display = 'flex';
                            if (paragraph) paragraph.style.display = 'flex';
                            if (dropdown) dropdown.style.display = 'flex';
                        }
                        horoscopeResult.innerHTML = '';
                    });
                }
            }
        } catch (err) {
            if (horoscopeResult) horoscopeResult.innerHTML = `<p class="api-description">Error fetching horoscope: ${err.message}</p>`;
        }
    }

    fetchHoroscope();
}

// Get relevent elements from the DOM for the Tarot API
const tarotContainer = document.getElementById('tarot-api');
const tarotButton = document.getElementById('tarot-button');
const tarotResult = document.getElementById('tarot-result');

// getTarotReading()function to fetch tarot reading data
function getTarotReading() {
    // Asynchronous function to fetch tarot reading data
    async function fetchTarot() {
        try {
            const response = await fetch('https://tarotapi.dev/api/v1/cards/random?n=1');
            if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
            const data = await response.json();

            // Extract relevant tarot data from the API response
            const cardName = data.cards && data.cards[0] && data.cards[0].name ? data.cards[0].name : 'N/A';
            const cardMeaning = data.cards && data.cards[0] && data.cards[0].meaning_up ? data.cards[0].meaning_up : 'N/A';

            // Hide the button and paragraph elements of tarotContainer
            if (tarotContainer) {
                const button = tarotContainer.querySelector('button');
                const paragraph = tarotContainer.querySelector('p');
                if (button) button.style.display = 'none';
                if (paragraph) paragraph.style.display = 'none';
            }

            // Append the tarot data to the tarotResult element
            if (tarotResult) {
                tarotResult.innerHTML = `<p class="api-description"><strong>Card:</strong> ${cardName}</p>`;
                tarotResult.innerHTML += `<p class="api-description"><strong>Meaning:</strong> ${cardMeaning}</p>`;
            }
            // Add a button that resets the app display
            if (tarotResult) {
                tarotResult.innerHTML += `<button id="reset-tarot" class="api-button">Reset</button>`;
                // Add a click handler on the reset button to redisplay the hidden tarotContainer elements and clear results
                const resetBtn = tarotResult.querySelector('#reset-tarot');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        if (tarotContainer) {
                            const button = tarotContainer.querySelector('button');
                            const paragraph = tarotContainer.querySelector('p');
                            if (button) button.style.display = 'flex';
                            if (paragraph) paragraph.style.display = 'flex';
                        }
                        tarotResult.innerHTML = '';
                    });
                }
            }
        } catch (err) {
            if (tarotResult) tarotResult.innerHTML = `<p>Error fetching tarot reading: ${err.message}</p>`;
        }
    }
    fetchTarot();
}

// Get relevent elements from the DOM for eight ball api
const eightBallContainer = document.getElementById('magic8ball-api');
const eightBallButton = document.getElementById('magic8ball-button');
const eightBallResult = document.getElementById('magic8ball-result');

// getMagic8BallAnswer() function to fetch eight ball data
function getMagic8BallAnswer() {
    // Asynchronous function to fetch Magic 8 Ball answer
    async function fetchMagic8Ball() {
        try {
            const response = await fetch('https://corsproxy.io/?https://eightballapi.com/api');
            if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
            const data = await response.json();
            const answerText = data.reading ? data.reading : 'N/A';

            // Ensure the input question is not empty before button click
            const questionInput = document.getElementById('magic8ball-question');
            const question = questionInput ? questionInput.value.trim() : '';
            if (!question) {
                if (eightBallResult) eightBallResult.innerHTML = `<p class="api-description">Please enter a question.</p>`;
                return;
            }

            // Hide the button, text input, and paragraph elements of eightBallContainer
            if (eightBallContainer) {
                const button = eightBallContainer.querySelector('button');
                const paragraph = eightBallContainer.querySelector('p');
                const input = eightBallContainer.querySelector('input');
                if (button) button.style.display = 'none';
                if (paragraph) paragraph.style.display = 'none';
                if (input) input.style.display = 'none';
            }

            // Append the answer to the eightBallResult element
            if (eightBallResult) {
                eightBallResult.innerHTML = `<p class="api-description">${answerText}</p>`;
            }
            // Add a button that resets the app display
            if (eightBallResult) {
                eightBallResult.innerHTML += `<button id="reset-eightball" class="api-button">Reset</button>`;
                // Add a click handler on the reset button to redisplay the hidden eightBallContainer elements and clear results
                const resetBtn = eightBallResult.querySelector('#reset-eightball');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        if (eightBallContainer) {
                            const button = eightBallContainer.querySelector('button');
                            const paragraph = eightBallContainer.querySelector('p');
                            const input = eightBallContainer.querySelector('input');
                            if (button) button.style.display = 'flex';
                            if (paragraph) paragraph.style.display = 'flex';
                            if (input) input.style.display = 'flex';
                        }
                        eightBallResult.innerHTML = '';
                    });
                }
            }
        } catch (err) {
            if (eightBallResult) eightBallResult.innerHTML = `<p>Error fetching Magic 8 Ball answer: ${err.message}</p>`;
        }
    }
    fetchMagic8Ball();
}

// Get relevent elements from the DOM for the moon phase api
const moonPhaseContainer = document.getElementById('moonphase-api');
const moonPhaseButton = document.getElementById('moonphase-button');
const moonPhaseResult = document.getElementById('moonphase-result');

// getMoonPhase() function to fetch moon phase data 
function getMoonPhase() {
    // Asynchronous function to fetch moon phase data
    async function fetchMoonPhase() {
        try {
            const response = await fetch('https://corsproxy.io/?https://api.viewbits.com/v1/moonphase');
            if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
            const data = await response.json();

            const todayDateStr = new Date().toLocaleDateString('en-CA'); 
            const todaysMoon = data.find(moon => moon.date === todayDateStr);
            if (!todaysMoon) throw new Error('No moon phase data found for today.');

            // Extract relevant moon phase data from the API response
            let moonImg = '';
            if (todaysMoon.phase.toLowerCase().includes('new moon')) {
                moonImg = 'images/new_moon.png';
            } else if (todaysMoon.phase.toLowerCase().includes('waxing crescent')) {
                moonImg = 'images/waxing_crescent.png';
            } else if (todaysMoon.phase.toLowerCase().includes('first quarter')) {
                moonImg = 'images/first_quarter.png';
            } else if (todaysMoon.phase.toLowerCase().includes('waxing gibbous')) {
                moonImg = 'images/waxing_gibbous.png';
            } else if (todaysMoon.phase.toLowerCase().includes('full moon')) {
                moonImg = 'images/full_moon.png';
            } else if (todaysMoon.phase.toLowerCase().includes('waning gibbous')) {
                moonImg = 'images/waning_gibbous.png';
            } else if (todaysMoon.phase.toLowerCase().includes('last quarter')) {
                moonImg = 'images/last_quarter.png';
            } else if (todaysMoon.phase.toLowerCase().includes('waning crescent')) {
                moonImg = 'images/waning_crescent.png';
            } else {
                moonImg = 'images/default_moon.png'; 
            }
            const todaysDate = todaysMoon.date ? todaysMoon.date : 'N/A';
            const phaseName = todaysMoon.phase ? todaysMoon.phase : 'N/A';
            const moonIllumination = todaysMoon.illumination ? todaysMoon.illumination : 'N/A';
            const moonAge = todaysMoon.moon_age ? todaysMoon.moon_age : 'N/A';
            const moonSign = todaysMoon.moon_sign ? todaysMoon.moon_sign : 'N/A';

            // Hide the button and paragraph elements of moonPhaseContainer
            if (moonPhaseContainer) {
                const button = moonPhaseContainer.querySelector('button');
                const paragraph = moonPhaseContainer.querySelector('p');
                if (button) button.style.display = 'none';
                if (paragraph) paragraph.style.display = 'none';
            }

            // Append the moon phase data to the moonPhaseResult element
            if (moonPhaseResult) {
                moonPhaseResult.innerHTML += `<img src="${moonImg}" alt="Current Moon Phase" class="moon-phase-image">`;
                moonPhaseResult.innerHTML += `<p class="api-description"><strong>Date:</strong> ${todaysDate}</p>`;
                moonPhaseResult.innerHTML += `<p class="api-description"><strong>Phase Name:</strong> ${phaseName}</p>`;
                moonPhaseResult.innerHTML += `<p class="api-description"><strong>Illumination:</strong> ${moonIllumination}</p>`;
                moonPhaseResult.innerHTML += `<p class="api-description"><strong>Moon Age:</strong> ${moonAge}</p>`;
                moonPhaseResult.innerHTML += `<p class="api-description"><strong>Moon Sign:</strong> ${moonSign}</p>`;
            }
            // Add a button that resets the app display
            if (moonPhaseResult) {
                moonPhaseResult.innerHTML += `<button id="reset-moonphase" class="api-button">Reset</button>`;
                // Add a click handler on the reset button to redisplay the hidden moonPhaseContainer elements and clear results
                const resetBtn = moonPhaseResult.querySelector('#reset-moonphase');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        if (moonPhaseContainer) {
                            const button = moonPhaseContainer.querySelector('button');
                            const paragraph = moonPhaseContainer.querySelector('p');
                            if (button) button.style.display = 'flex';
                            if (paragraph) paragraph.style.display = 'flex';
                        }
                        moonPhaseResult.innerHTML = '';
                    });
                }
            }
        } catch (err) {
            if (moonPhaseResult) moonPhaseResult.innerHTML = `<p>Error fetching moon phase data: ${err.message}</p>`;
        }
    }
    fetchMoonPhase();
}

// Get relevent elements from the DOM for the affirmation api
const affirmationContainer = document.getElementById('affirmation-api');
const affirmationButton = document.getElementById('affirmation-button');
const affirmationResult = document.getElementById('affirmation-result');

// getAffirmation() function to fetch daily affirmation data
function getAffirmation() {
    // Asynchronous function to fetch affirmation data
    async function fetchAffirmation() {
        try {
            const response = await fetch('https://corsproxy.io/?https://www.affirmations.dev/');
            if (!response.ok) throw new Error(`Network response was not ok (${response.status})`);
            const data = await response.json();

            // Extract relevant affirmation data from the API response
            const affirmationText = data.affirmation ? data.affirmation : 'N/A';

            // Hide the button and paragraph elements of affirmationContainer
            if (affirmationContainer) {
                const button = affirmationContainer.querySelector('button');
                const paragraph = affirmationContainer.querySelector('p');
                if (button) button.style.display = 'none';
                if (paragraph) paragraph.style.display = 'none';
            }

            // Append the affirmation data to the affirmationResult element
            if (affirmationResult) {
                affirmationResult.innerHTML = `<p class="api-description">${affirmationText}</p>`;
            }
            // Add a button that resets the app display
            if (affirmationResult) {
                affirmationResult.innerHTML += `<button id="reset-affirmation" class="api-button">Reset</button>`;
                // Add a click handler on the reset button to redisplay the hidden affirmationContainer elements and clear results
                const resetBtn = affirmationResult.querySelector('#reset-affirmation');
                if (resetBtn) {
                    resetBtn.addEventListener('click', () => {
                        if (affirmationContainer) {
                            const button = affirmationContainer.querySelector('button');
                            const paragraph = affirmationContainer.querySelector('p');
                            if (button) button.style.display = 'flex';
                            if (paragraph) paragraph.style.display = 'flex';
                        }
                        affirmationResult.innerHTML = '';
                    });
                }
            }
        } catch (err) {
            if (affirmationResult) affirmationResult.innerHTML = `<p>Error fetching affirmation: ${err.message}</p>`;
        }
    }
    fetchAffirmation();
}   