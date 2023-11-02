const questions = [
    {
        question: 'What is the capital of India?',
        options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
        answer: 'Delhi',
      },
      {
        question: 'Which river is often referred to as the "Ganga" in India?',
        options: ['Yamuna', 'Brahmaputra', 'Godavari', 'Ganges'],
        answer: 'Ganges',
      },
      {
        question: 'In which year did India gain independence from British rule?',
        options: ['1942', '1947', '1950', '1952'],
        answer: '1947',
      },
      {
        question: 'Who was the first Prime Minister of India?',
        options: ['Jawaharlal Nehru', 'Indira Gandhi', 'Sardar Patel', 'Rajendra Prasad'],
        answer: 'Jawaharlal Nehru',
      },
      {
        question: 'Which is the largest state in India by area?',
        options: ['Uttar Pradesh', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra'],
        answer: 'Rajasthan',
      },
      {
        question: 'What is the national emblem of India?',
        options: ['Ashoka Chakra', 'Lotus', 'Peacock', 'Lion Capital of Ashoka'],
        answer: 'Lion Capital of Ashoka',
      },
      {
        question: 'Which mountain range separates India from China in the north?',
        options: ['Western Ghats', 'Eastern Ghats', 'Himalayas', 'Vindhya Range'],
        answer: 'Himalayas',
      },
      {
        question: 'What is the currency of India?',
        options: ['Rupee', 'Yen', 'Dollar', 'Euro'],
        answer: 'Rupee',
      },
      {
        question: 'Who wrote the Indian national anthem, "Jana Gana Mana"?',
        options: ['Rabindranath Tagore', 'Mahatma Gandhi', 'Jawaharlal Nehru', 'Subhas Chandra Bose'],
        answer: 'Rabindranath Tagore',
      },
      {
        question: 'Which festival of colors is celebrated in India to mark the arrival of spring?',
        options: ['Diwali', 'Holi', 'Navratri', 'Eid'],
        answer: 'Holi',
      }
      
  ];
  
const quizcont = document.getElementById('quiz');
const rcont = document.getElementById('result');
const subButton = document.getElementById('submit');

let questionOrder = Array.from(Array(questions.length).keys()); 
let livequest = 0;
let sc = 0;

function randomfunc(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  if (livequest < questions.length) {
    const shuffledQuestions = [...questionOrder];
    randomfunc(shuffledQuestions);
    const questionData = questions[shuffledQuestions[livequest]];

    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;

    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';

    const shuffledOptions = [...questionData.options];
    randomfunc(shuffledOptions);

    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];

      const optionText = document.createTextNode(shuffledOptions[i]);

      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }

    quizcont.innerHTML = '';
    quizcont.appendChild(questionElement);
    quizcont.appendChild(optionsElement);
  } else {
    displayResult();
  }
}

function correct() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const ans = selectedOption.value;
    if (ans === questions[questionOrder[livequest]].answer) {
      sc++;
    }

    livequest++;
    selectedOption.checked = false;
    displayQuestion();
  }
}

function displayResult() {
  quizcont.style.display = 'none';
  subButton.style.display = 'none';
  rcont.innerHTML = `You scored ${sc} out of ${questions.length}!`;
}

subButton.addEventListener('click', correct);

displayQuestion();