// ==========================================
// MBTI TEST APPLICATION
// ==========================================

// ==========================================
// DATA: MBTI Questions Database
// ==========================================
const mbtiQuestions = [
    // Extraversion (E) vs Introversion (I)
    { text: "You feel energized after spending time with a large group of people.", dimension: "EI", direction: 1 },
    { text: "You prefer deep one-on-one conversations over group discussions.", dimension: "EI", direction: -1 },
    { text: "You find it easy to introduce yourself to strangers.", dimension: "EI", direction: 1 },
    { text: "You need time alone to recharge after social activities.", dimension: "EI", direction: -1 },
    { text: "You enjoy being the center of attention in social settings.", dimension: "EI", direction: 1 },

    // Sensing (S) vs Intuition (N)
    { text: "You focus on concrete facts and details rather than abstract concepts.", dimension: "SN", direction: -1 },
    { text: "You're more interested in possibilities and future potential than present realities.", dimension: "SN", direction: 1 },
    { text: "You prefer practical, hands-on experiences over theoretical discussions.", dimension: "SN", direction: -1 },
    { text: "You often think about deeper meanings and patterns behind things.", dimension: "SN", direction: 1 },
    { text: "You trust your intuition even when it contradicts the facts.", dimension: "SN", direction: 1 },

    // Thinking (T) vs Feeling (F)
    { text: "You make decisions based on logic and objective analysis.", dimension: "TF", direction: -1 },
    { text: "You consider how your decisions will affect others' feelings.", dimension: "TF", direction: 1 },
    { text: "You value truth and fairness over harmony in discussions.", dimension: "TF", direction: -1 },
    { text: "You're naturally empathetic and can sense others' emotions.", dimension: "TF", direction: 1 },
    { text: "You prioritize efficiency over maintaining relationships.", dimension: "TF", direction: -1 },

    // Judging (J) vs Perceiving (P)
    { text: "You prefer to have a clear plan before starting a project.", dimension: "JP", direction: -1 },
    { text: "You're comfortable adapting your plans as new information emerges.", dimension: "JP", direction: 1 },
    { text: "You feel satisfied when tasks are completed ahead of schedule.", dimension: "JP", direction: -1 },
    { text: "You thrive in spontaneous, flexible environments.", dimension: "JP", direction: 1 },
    { text: "You prefer to keep your options open rather than committing early.", dimension: "JP", direction: 1 }
];

// ==========================================
// DATA: MBTI Personality Type Descriptions
// ==========================================
const personalityTypes = {
    "INTJ": {
        title: "The Architect",
        description: "Strategic, independent thinkers with a thirst for knowledge. You see patterns others miss and always have a plan. Your vision drives you forward, and you're not afraid to challenge the status quo.",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        aura: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    "INTP": {
        title: "The Thinker",
        description: "Innovative philosophers who are endlessly curious about how the world works. You love exploring theories and ideas, finding elegant solutions to complex problems, and questioning everything.",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        aura: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    "ENTJ": {
        title: "The Commander",
        description: "Bold, strategic leaders who excel at organizing people and resources. You have a natural talent for seeing the big picture and mobilizing others toward ambitious goals.",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        aura: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    "ENTP": {
        title: "The Debater",
        description: "Quick-witted innovators who love intellectual challenges and spirited debates. You're excellent at thinking on your feet and finding creative solutions that others overlook.",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        aura: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    "INFJ": {
        title: "The Advocate",
        description: "Idealistic visionaries with deep insights into human nature. You have a rare combination of compassion and determination, driven by a desire to make a meaningful difference in the world.",
        color: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
        aura: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)"
    },
    "INFP": {
        title: "The Mediator",
        description: "Gentle souls with strong values and rich inner worlds. You're deeply empathetic and creative, always searching for meaning and authenticity in everything you do.",
        color: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
        aura: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)"
    },
    "ENFJ": {
        title: "The Protagonist",
        description: "Charismatic leaders who inspire and empower others. You have a gift for understanding people and helping them reach their potential, driven by a genuine desire to make a positive impact.",
        color: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
        aura: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)"
    },
    "ENFP": {
        title: "The Campaigner",
        description: "Enthusiastic free spirits who see life as an exciting adventure. You're creative, spontaneous, and deeply connected to others, always eager to explore new possibilities.",
        color: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
        aura: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)"
    },
    "ISTJ": {
        title: "The Logistician",
        description: "Reliable, practical individuals with integrity and dedication. You value tradition and order, taking pride in doing things thoroughly and correctly every time.",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        aura: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    "ISFJ": {
        title: "The Defender",
        description: "Warm, dedicated protectors who care deeply about others' well-being. You're incredibly loyal and conscientious, always ready to support those you care about.",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        aura: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    "ESTJ": {
        title: "The Executive",
        description: "Organized, decisive leaders who value structure and efficiency. You excel at managing projects and people, bringing order to chaos through your clear judgment and strong work ethic.",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        aura: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    "ESFJ": {
        title: "The Consul",
        description: "Caring, social individuals who thrive on helping others and building community. You're attentive to people's needs and work hard to create harmony in your environment.",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        aura: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    "ISTP": {
        title: "The Virtuoso",
        description: "Bold, practical experimenters who master tools and techniques. You're hands-on problem solvers who thrive in the moment, always ready to explore how things work.",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        aura: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    "ISFP": {
        title: "The Adventurer",
        description: "Flexible, charming artists who live in the present moment. You have a strong aesthetic sense and deep personal values, expressing yourself through creative exploration.",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        aura: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    "ESTP": {
        title: "The Entrepreneur",
        description: "Energetic, perceptive individuals who live for action and excitement. You're quick to spot opportunities and take calculated risks, thriving in dynamic, fast-paced environments.",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        aura: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    "ESFP": {
        title: "The Entertainer",
        description: "Spontaneous, enthusiastic performers who love bringing joy to others. You're the life of the party, finding excitement in every moment and encouraging others to live life to the fullest.",
        color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        aura: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentQuestionIndex = 0;
let answers = {
    EI: 0,  // Extraversion vs Introversion
    SN: 0,  // Sensing vs Intuition
    TF: 0,  // Thinking vs Feeling
    JP: 0   // Judging vs Perceiving
};

// ==========================================
// DOM ELEMENTS
// ==========================================
const heroSection = document.getElementById('heroSection');
const questionSection = document.getElementById('questionSection');
const resultsSection = document.getElementById('resultsSection');
const startBtn = document.getElementById('startBtn');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const auraBackground = document.getElementById('auraBackground');

// Results elements
const personalityType = document.getElementById('personalityType');
const personalityTitle = document.getElementById('personalityTitle');
const personalityDescription = document.getElementById('personalityDescription');
const dimensionsGrid = document.getElementById('dimensionsGrid');
const symbolShape = document.querySelector('.symbol-shape');
const shareBtn = document.getElementById('shareBtn');
const retakeBtn = document.getElementById('retakeBtn');
const learnMoreBtn = document.getElementById('learnMoreBtn');

// ==========================================
// INITIALIZATION
// ==========================================
function init() {
    createParticles();
    loadSavedResults();

    // Event listeners
    startBtn.addEventListener('click', startTest);
    retakeBtn.addEventListener('click', resetTest);
    shareBtn.addEventListener('click', shareResults);
    learnMoreBtn.addEventListener('click', learnMore);
}

// ==========================================
// PARTICLE ANIMATION
// ==========================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (8 + Math.random() * 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ==========================================
// TEST FLOW
// ==========================================
function startTest() {
    currentQuestionIndex = 0;
    answers = { EI: 0, SN: 0, TF: 0, JP: 0 };

    heroSection.classList.remove('active');
    setTimeout(() => {
        questionSection.classList.add('active');
        displayQuestion();
    }, 500);
}

function displayQuestion() {
    const question = mbtiQuestions[currentQuestionIndex];

    // Update progress
    const progress = ((currentQuestionIndex + 1) / mbtiQuestions.length) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${mbtiQuestions.length}`;

    // Display question
    questionText.textContent = question.text;

    // Create options (4-point scale)
    optionsContainer.innerHTML = '';
    const options = [
        { text: 'Strongly Disagree', value: -2 },
        { text: 'Disagree', value: -1 },
        { text: 'Agree', value: 1 },
        { text: 'Strongly Agree', value: 2 }
    ];

    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option.text;
        btn.addEventListener('click', () => handleAnswer(option.value));
        optionsContainer.appendChild(btn);
    });

    // Animate card
    const questionCard = document.getElementById('questionCard');
    questionCard.style.animation = 'none';
    setTimeout(() => {
        questionCard.style.animation = 'slideIn 0.5s ease';
    }, 10);
}

function handleAnswer(value) {
    const question = mbtiQuestions[currentQuestionIndex];

    // Record answer
    answers[question.dimension] += value * question.direction;

    // Visual feedback
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
        if (btn.textContent === event.target.textContent) {
            btn.classList.add('selected');
        }
    });

    // Move to next question
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex < mbtiQuestions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    }, 400);
}

// ==========================================
// RESULTS CALCULATION
// ==========================================
function calculatePersonalityType() {
    const type =
        (answers.EI > 0 ? 'E' : 'I') +
        (answers.SN > 0 ? 'N' : 'S') +
        (answers.TF > 0 ? 'F' : 'T') +
        (answers.JP > 0 ? 'P' : 'J');

    return type;
}

function showResults() {
    const type = calculatePersonalityType();
    const typeInfo = personalityTypes[type];

    // Save results
    saveResults(type);

    // Hide question section
    questionSection.classList.remove('active');

    // Update aura background
    setTimeout(() => {
        auraBackground.style.background = typeInfo.aura;
    }, 300);

    // Show results
    setTimeout(() => {
        resultsSection.classList.add('active');
        displayResults(type, typeInfo);
    }, 500);
}

function displayResults(type, typeInfo) {
    // Animate personality type reveal
    personalityType.textContent = type;
    personalityType.style.background = typeInfo.color;
    personalityType.style.webkitBackgroundClip = 'text';
    personalityType.style.webkitTextFillColor = 'transparent';

    personalityTitle.textContent = typeInfo.title;
    personalityDescription.textContent = typeInfo.description;

    // Update symbol colors
    symbolShape.style.background = typeInfo.color;
    symbolShape.style.boxShadow = `0 0 60px ${typeInfo.color.match(/\#[0-9a-fA-F]{6}/)?.[0] || 'rgba(102, 126, 234, 0.5)'}`;

    // Display dimension bars
    displayDimensions();
}

function displayDimensions() {
    const dimensions = [
        { label: 'Extraversion', oppositeLabel: 'Introversion', key: 'EI', value: answers.EI },
        { label: 'Intuition', oppositeLabel: 'Sensing', key: 'SN', value: answers.SN },
        { label: 'Feeling', oppositeLabel: 'Thinking', key: 'TF', value: answers.TF },
        { label: 'Perceiving', oppositeLabel: 'Judging', key: 'JP', value: answers.JP }
    ];

    dimensionsGrid.innerHTML = '';

    dimensions.forEach((dim, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'dimension-item';

        // Calculate percentage (normalize from -20 to +20 range to 0-100%)
        const maxScore = 40; // Maximum possible score range
        const percentage = ((dim.value + 20) / maxScore) * 100;

        const label = dim.value > 0 ? dim.label : dim.oppositeLabel;
        const absPercentage = Math.abs(percentage - 50) * 2;

        itemDiv.innerHTML = `
            <div class="dimension-label">
                <span>${dim.oppositeLabel}</span>
                <span><strong>${label}</strong></span>
                <span>${dim.label}</span>
            </div>
            <div class="dimension-bar-bg">
                <div class="dimension-bar-fill" style="width: 0%"></div>
            </div>
        `;

        dimensionsGrid.appendChild(itemDiv);

        // Animate bars with delay
        setTimeout(() => {
            const bar = itemDiv.querySelector('.dimension-bar-fill');
            bar.style.width = percentage + '%';
        }, 200 * (index + 1));
    });
}

// ==========================================
// LOCAL STORAGE
// ==========================================
function saveResults(type) {
    const results = {
        type: type,
        date: new Date().toISOString(),
        scores: { ...answers }
    };
    localStorage.setItem('mbtiResults', JSON.stringify(results));
}

function loadSavedResults() {
    const saved = localStorage.getItem('mbtiResults');
    if (saved) {
        const results = JSON.parse(saved);
        // Could show a "View previous results" option
        console.log('Previous results found:', results);
    }
}

// ==========================================
// ACTION HANDLERS
// ==========================================
function resetTest() {
    resultsSection.classList.remove('active');
    auraBackground.style.background = 'linear-gradient(135deg, #E8D5F2 0%, #B8D8F7 100%)';

    setTimeout(() => {
        heroSection.classList.add('active');
    }, 500);
}

function shareResults() {
    const type = calculatePersonalityType();
    const typeInfo = personalityTypes[type];

    const shareText = `I just discovered I'm an ${type} - ${typeInfo.title}! 🌟\n\nTake the test and discover your personality type.`;

    if (navigator.share) {
        navigator.share({
            title: 'My MBTI Personality Type',
            text: shareText,
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(shareText + '\n' + window.location.href)
            .then(() => alert('Results copied to clipboard!'))
            .catch(err => console.log('Error copying:', err));
    }
}

function learnMore() {
    const type = calculatePersonalityType();
    const url = `https://www.16personalities.com/${type.toLowerCase()}-personality`;
    window.open(url, '_blank');
}

// ==========================================
// START APPLICATION
// ==========================================
document.addEventListener('DOMContentLoaded', init);
