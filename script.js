const questions = [
  "What's your favorite boss fight ever?",
  "Which game has the best soundtrack?",
  "What's your biggest gaming fail?",
  "If you could erase one game from existence, what would it be?",
  "What's a hot take you have?",
  "What's your dream PC build?",
  "What's your favorite snack while streaming?",
  "If chat controlled your stream for one hour, what would happen?",
  "Which game world would you live in for a week?",
  "What's the most underrated game you've played?",
  "What game do you wish got a sequel?",
  "What's the toughest achievement you've ever earned?",
  "Which character origin story inspires you most?",
  "What's the funniest thing chat has ever said?",
  "What game made you cry unexpectedly?",
  "If you could add one feature to your favorite game, what would it be?",
  "What was your first console?",
  "What's the most iconic loading screen art you've seen?",
  "Which game has the best ending?",
  "What's your favorite multiplayer mayhem memory?",
  "What was the first game you streamed?",
  "Do you prefer RPGs or FPS games?",
  "Which character would make the best streamer?",
  "What's one game you always go back to?",
  "If you crafted a game weapon, what would it look like?",
  "What's a feature you wish Twitch had?",
  "What's the wildest in-game loot drop you've gotten?",
  "Which boss scream gave you chills?",
  "What game taught you the most about strategy?",
  "What's the best ambient game music for chill streams?",
  "Which game franchise would you want a movie adaptation of?",
  "What's your go-to hype emote?",
  "If your PC had a personality, what would it say?",
  "What's the most legendary run you've ever had?",
  "Which game lighting looks the most cinematic?",
  "What game's story made you pause and think?",
  "Do you prefer co-op or solo adventures?",
  "What's the funniest Twitch chat challenge you've accepted?",
  "Which in-game companion would you want in real life?",
  "What's the best streaming setup tip you can share?",
  "Which gaming accent do you think sounds the coolest?",
  "What's the most satisfying game mechanic you've ever used?",
  "What game's patch notes did you celebrate most?",
  "What's your favorite in-game disguise or costume?",
  "If you could build a boss fight, what would its phase two be?",
  "Which horror game gave you the best jump scare?",
  "What's the most creative fan art you've seen?",
  "Which game release day felt like an event?",
  "What's the most intense speedrun moment you've witnessed?",
  "If your stream had a theme song, what style would it be?",
  "Which game universe would you want to redesign?",
  "What was your first memory of watching a streamer?",
  "If you could collaborate with any streamer, who would it be?",
  "What's the best limited-time event you've participated in?",
  "What was your first eSports match like?",
  "If you renamed your channel for one day, what would it be?",
  "What's your favorite UI design in a game?",
  "Which controller layout feels the most natural?",
  "What game world should become a theme park ride?",
  "What's the best in-game cinematic you've seen?",
  "Which game mechanic would you want in real life?",
  "What's your all-time favorite streaming gimmick?",
  "Which game has the best seasonal updates?",
  "What's the most satisfying combo you've pulled off?",
  "If you could bring one NPC to stream chat, who would it be?",
  "What's the best time of day to play competitive games?",
  "What is the most ridiculous in-game outfit you've worn?",
  "Which gaming genre needs a comeback?",
  "What's the funniest loading screen tip you've read?",
  "If you could design an emoji, what would it be?",
  "What's the most intense chase scene in a game?",
  "Which game has the best character progression?",
  "What was your first in-game purchase?",
  "Which game do you think has the saddest soundtrack?",
  "What's the loudest crowd reaction you've heard on stream?",
  "If you could have one in-game pet, what would it be?",
  "What's the best rogue-like you've played?",
  "Which game makes you feel like a hero?",
  "What was your favorite event on stream this year?",
  "Which game mechanics feel like magic?",
  "What's your favorite hidden secret in any game?",
  "Which game's lore would you write a book about?",
  "If you could invite chat to create a new game mode, what would it be?",
  "What's your favorite narrative twist ever?",
  "Which game has the best worldbuilding?",
  "What's the most chaotic community event you've seen?",
  "What game moment gave you the biggest adrenaline rush?",
  "Which game has the best combat sound design?",
  "What's your go-to warmup game before streaming?",
  "If you could create a new streamer role in chat, what would it do?",
  "Which game has the most satisfying reward system?",
  "What's the best way to surprise chat on stream?",
  "Which game would you recommend to a new player?",
  "What was the first game that made you obsessed?",
  "Which game has the coolest map design?",
  "What is the most iconic save point you've used?",
  "If you could change one gaming trend, what would it be?",
  "What's your favorite community challenge idea?",
  "Which game has the best seasonal lore?",
  "What is the most powerful combination you've discovered?"
];

const questionText = document.getElementById('questionText');
const questionCard = document.getElementById('questionCard');
const forgeButton = document.getElementById('forgeButton');
const logoButton = document.getElementById('logoButton');
const secretSection = document.getElementById('secretPage');
const navToggle = document.getElementById('navToggle');
const navOverlay = document.getElementById('navOverlay');
const siteNav = document.getElementById('siteNav');
const liveStatus = document.getElementById('liveStatus');
const liveEmbed = document.getElementById('liveEmbed');
const offlinePanel = document.getElementById('offlinePanel');

let questionPool = [];
let logoClicks = 0;
let codeBuffer = [];
let godModeBuffer = [];
let isSecretVisible = false;
let liveMode = false;

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetQuestionPool() {
  questionPool = shuffle(questions.map((_, index) => index));
}

function forgeQuestion() {
  if (!questionPool.length) {
    resetQuestionPool();
  }

  questionCard.classList.add('forging');
  questionText.textContent = 'The forge is shaping a question...';

  setTimeout(() => {
    const next = questionPool.pop();
    questionText.textContent = questions[next];
    questionCard.classList.remove('forging');
  }, 850);
}

function toggleSecretPage() {
  isSecretVisible = !isSecretVisible;
  secretSection.classList.toggle('visible', isSecretVisible);
  secretSection.setAttribute('aria-hidden', String(!isSecretVisible));
  if (isSecretVisible) {
    secretSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateLiveState() {
  if (liveMode) {
    liveStatus.style.display = 'block';
    liveEmbed.style.display = 'block';
    offlinePanel.style.display = 'none';
  } else {
    liveStatus.style.display = 'none';
    liveEmbed.style.display = 'none';
    offlinePanel.style.display = 'block';
  }
}

forgeButton.addEventListener('click', forgeQuestion);

logoButton.addEventListener('click', () => {
  logoClicks += 1;
  if (logoClicks >= 10) {
    logoClicks = 0;
    toggleSecretPage();
  }
});

navToggle.addEventListener('click', () => {
  navOverlay.classList.toggle('hidden');
});

navOverlay.addEventListener('click', (event) => {
  if (event.target === navOverlay) {
    navOverlay.classList.add('hidden');
  }
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (!navOverlay.classList.contains('hidden')) {
      navOverlay.classList.add('hidden');
    }
  });
});

window.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  codeBuffer.push(key);
  godModeBuffer.push(key);

  if (codeBuffer.length > 10) {
    codeBuffer.shift();
  }

  if (godModeBuffer.length > 5) {
    godModeBuffer.shift();
  }

  const konami = ['ARROWUP','ARROWUP','ARROWDOWN','ARROWDOWN','ARROWLEFT','ARROWRIGHT','ARROWLEFT','ARROWRIGHT','B','A'];
  if (konami.every((code, index) => code === codeBuffer[index + codeBuffer.length - konami.length])) {
    questionCard.classList.add('forging');
    setTimeout(() => questionCard.classList.remove('forging'), 1000);
    document.body.classList.add('konami-flare');
    setTimeout(() => document.body.classList.remove('konami-flare'), 1800);
  }

  if (godModeBuffer.join('') === 'IDDQD') {
    document.body.classList.add('godmode');
    setTimeout(() => document.body.classList.remove('godmode'), 2600);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  resetQuestionPool();
  updateLiveState();
});
