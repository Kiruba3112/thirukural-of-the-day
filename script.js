// ========== Kural Data ==========
// Tamil text la "\n" na next line. CSS la white-space: pre-line irukku, so 2 lines-a varum.
const kurals = [
  {
    number: 1,
    adhigaram: "கடவுள் வாழ்த்து",
    tamil: "அகர முதல எழுத்தெல்லாம் ஆதி\nபகவன் முதற்றே உலகு.",
    english: "Just as 'A' is the first of all letters, the Supreme Being is the origin of the world."
  },
  {
    number: 26,
    adhigaram: "நீத்தார் பெருமை",
    tamil: "செயற்கரிய செய்வார் பெரியர் சிறியர்\nசெயற்கரிய செய்கலா தார்.",
    english: "Those who achieve the difficult are great. Those who cannot are small."
  },
  {
    number: 34,
    adhigaram: "அறன் வலியுறுத்தல்",
    tamil: "மனத்துக்கண் மாசிலன் ஆதல் அனைத்தறன்\nஆகுல நீர பிற.",
    english: "Virtue is simply a pure mind. Everything else is only show and noise."
  },
  {
    number: 45,
    adhigaram: "இல்வாழ்க்கை",
    tamil: "அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை\nபண்பும் பயனும் அது.",
    english: "A home filled with love and virtue has both beauty and purpose."
  },
  {
    number: 50,
    adhigaram: "இல்வாழ்க்கை",
    tamil: "வையத்துள் வாழ்வாங்கு வாழ்பவன் வானுறையும்\nதெய்வத்துள் வைக்கப் படும்.",
    english: "One who lives life the right way on earth is counted among the gods in heaven."
  },
  {
    number: 66,
    adhigaram: "மக்கட்பேறு",
    tamil: "குழலினிது யாழினிது என்பதம் மக்கள்\nமழலைச்சொல் கேளா தவர்.",
    english: "Only those who have not heard their children's lisping call the flute and lute sweet."
  },
  {
    number: 72,
    adhigaram: "அன்புடைமை",
    tamil: "அன்பிலார் எல்லாம் தமக்குரியர் அன்புடையார்\nஎன்பும் உரியர் பிறர்க்கு.",
    english: "The loveless keep everything for themselves. The loving give even their bones to others."
  },
  {
    number: 80,
    adhigaram: "அன்புடைமை",
    tamil: "அன்பின் வழியது உயிர்நிலை அஃதிலார்க்கு\nஎன்புதோல் போர்த்த உடம்பு.",
    english: "Life runs on love. Without it, a body is just bones wrapped in skin."
  },
  {
    number: 100,
    adhigaram: "இனியவை கூறல்",
    tamil: "இனிய உளவாக இன்னாத கூறல்\nகனியிருப்பக் காய்கவர்ந் தற்று.",
    english: "Using harsh words when kind ones are available is like picking unripe fruit when ripe fruit is there."
  },
  {
    number: 101,
    adhigaram: "செய்ந்நன்றி அறிதல்",
    tamil: "செய்யாமல் செய்த உதவிக்கு வையகமும்\nவானகமும் ஆற்றல் அரிது.",
    english: "Neither earth nor heaven can repay a help given without being asked."
  },
  {
    number: 104,
    adhigaram: "செய்ந்நன்றி அறிதல்",
    tamil: "தினைத்துணை நன்றி செயினும் பனைத்துணையாக்\nகொள்வர் பயன்தெரி வார்.",
    english: "Even a help as small as a millet seed is seen as big as a palm tree by those who value it."
  },
  {
    number: 110,
    adhigaram: "செய்ந்நன்றி அறிதல்",
    tamil: "எந்நன்றி கொன்றார்க்கும் உய்வுண்டாம் உய்வில்லை\nசெய்ந்நன்றி கொன்ற மகற்கு.",
    english: "There may be a way out for any sin, but none for one who forgets a kindness."
  },
  {
    number: 121,
    adhigaram: "அடக்கமுடைமை",
    tamil: "அடக்கம் அமரருள் உய்க்கும் அடங்காமை\nஆரிருள் உய்த்து விடும்.",
    english: "Self-control leads one to the heights. Lack of it leads into deep darkness."
  },
  {
    number: 127,
    adhigaram: "அடக்கமுடைமை",
    tamil: "யாகாவா ராயினும் நாகாக்க காவாக்கால்\nசோகாப்பர் சொல்லிழுக்குப் பட்டு.",
    english: "Whatever else you guard, guard your tongue. Careless words will bring you sorrow."
  },
  {
    number: 129,
    adhigaram: "அடக்கமுடைமை",
    tamil: "தீயினாற் சுட்டபுண் உள்ளாறும் ஆறாதே\nநாவினாற் சுட்ட வடு.",
    english: "A burn from fire heals, but the scar left by a harsh word never does."
  },
  {
    number: 131,
    adhigaram: "ஒழுக்கமுடைமை",
    tamil: "ஒழுக்கம் விழுப்பம் தரலான் ஒழுக்கம்\nஉயிரினும் ஓம்பப் படும்.",
    english: "Good conduct brings honour, so protect it even more than your life."
  },
  {
    number: 151,
    adhigaram: "பொறையுடைமை",
    tamil: "அகழ்வாரைத் தாங்கும் நிலம்போலத் தம்மை\nஇகழ்வார்ப் பொறுத்தல் தலை.",
    english: "Like the earth that bears those who dig into it, the best thing is to bear with those who insult you."
  },
  {
    number: 226,
    adhigaram: "ஈகை",
    tamil: "அற்றார் அழிபசி தீர்த்தல் அஃதொருவன்\nபெற்றான் பொருள்வைப் புழி.",
    english: "Feeding the hungry poor is the best place to store the wealth you earn."
  },
  {
    number: 231,
    adhigaram: "புகழ்",
    tamil: "ஈதல் இசைபட வாழ்தல் அதுவல்லது\nஊதியம் இல்லை உயிர்க்கு.",
    english: "Give generously and live with a good name. Nothing else is worth gaining in life."
  },
  {
    number: 291,
    adhigaram: "வாய்மை",
    tamil: "வாய்மை எனப்படுவது யாதெனின் யாதொன்றும்\nதீமை இலாத சொலல்.",
    english: "Truth means speaking words that cause no harm to anyone."
  },
  {
    number: 300,
    adhigaram: "வாய்மை",
    tamil: "யாமெய்யாக் கண்டவற்றுள் இல்லை எனைத்தொன்றும்\nவாய்மையின் நல்ல பிற.",
    english: "Among all the things I have seen, nothing is better than truthfulness."
  },
  {
    number: 314,
    adhigaram: "இன்னா செய்யாமை",
    tamil: "இன்னாசெய் தாரை ஒறுத்தல் அவர்நாண\nநன்னயஞ் செய்து விடல்.",
    english: "The best punishment for one who wrongs you is to do them a kindness, so they feel ashamed."
  },
  {
    number: 322,
    adhigaram: "கொல்லாமை",
    tamil: "பகுத்துண்டு பல்லுயிர் ஓம்புதல் நூலோர்\nதொகுத்தவற்றுள் எல்லாந் தலை.",
    english: "Sharing your food and protecting all living beings is the greatest of all teachings."
  },
  {
    number: 391,
    adhigaram: "கல்வி",
    tamil: "கற்க கசடறக் கற்பவை கற்றபின்\nநிற்க அதற்குத் தக.",
    english: "Learn thoroughly what is worth learning, and then live by what you have learned."
  },
  {
    number: 396,
    adhigaram: "கல்வி",
    tamil: "தொட்டனைத் தூறும் மணற்கேணி மாந்தர்க்குக்\nகற்றனைத் தூறும் அறிவு.",
    english: "The deeper you dig a sand well, the more water flows. The more you learn, the more wisdom grows."
  },
  {
    number: 397,
    adhigaram: "கல்வி",
    tamil: "யாதானும் நாடாமால் ஊராமால் என்னொருவன்\nசாந்துணையும் கல்லாத வாறு.",
    english: "To the learned, every place is home. Why then do some never learn, even until death?"
  },
  {
    number: 400,
    adhigaram: "கல்வி",
    tamil: "கேடில் விழுச்செல்வம் கல்வி ஒருவற்கு\nமாடல்ல மற்றை யவை.",
    english: "Education is the one wealth that never gets destroyed. Nothing else is true wealth."
  },
  {
    number: 421,
    adhigaram: "அறிவுடைமை",
    tamil: "அறிவற்றங் காக்கும் கருவி செறுவார்க்கும்\nஉள்ளழிக்க லாகா அரண்.",
    english: "Wisdom protects you. It is a fortress that even enemies cannot break."
  },
  {
    number: 423,
    adhigaram: "அறிவுடைமை",
    tamil: "எப்பொருள் யார்யார்வாய்க் கேட்பினும் அப்பொருள்\nமெய்ப்பொருள் காண்பது அறிவு.",
    english: "Whatever you hear and from whomever, wisdom is finding the truth in it."
  },
  {
    number: 467,
    adhigaram: "தெரிந்து செயல்வகை",
    tamil: "எண்ணித் துணிக கருமம் துணிந்தபின்\nஎண்ணுவம் என்பது இழுக்கு.",
    english: "Think carefully before you begin a task. Doubting after you begin is a mistake."
  },
  {
    number: 595,
    adhigaram: "ஊக்கமுடைமை",
    tamil: "வெள்ளத் தனைய மலர்நீட்டம் மாந்தர்தம்\nஉள்ளத் தனையது உயர்வு.",
    english: "The lotus stem grows as tall as the water is deep. A person rises as high as their will."
  },
  {
    number: 596,
    adhigaram: "ஊக்கமுடைமை",
    tamil: "உள்ளுவ தெல்லாம் உயர்வுள்ளல் மற்றது\nதள்ளினும் தள்ளாமை நீர்த்து.",
    english: "Always aim high. Even if you fail, the effort itself is worth it."
  },
  {
    number: 616,
    adhigaram: "ஆள்வினை உடைமை",
    tamil: "முயற்சி திருவினை யாக்கும் முயற்றின்மை\nஇன்மை புகுத்தி விடும்.",
    english: "Effort brings wealth. Lack of effort brings poverty."
  },
  {
    number: 620,
    adhigaram: "ஆள்வினை உடைமை",
    tamil: "தெய்வத்தான் ஆகா தெனினும் முயற்சிதன்\nமெய்வருத்தக் கூலி தரும்.",
    english: "Even if fate is against you, your hard work will still pay its wages."
  },
  {
    number: 621,
    adhigaram: "இடுக்கண் அழியாமை",
    tamil: "இடுக்கண் வருங்கால் நகுக அதனை\nஅடுத்தூர்வ தஃதொப்ப தில்.",
    english: "When trouble comes, smile. Nothing defeats it better."
  },
  {
    number: 666,
    adhigaram: "வினைத்திட்பம்",
    tamil: "எண்ணிய எண்ணியாங் கெய்துப எண்ணியார்\nதிண்ணியர் ஆகப் பெறின்.",
    english: "Those with firm determination will achieve exactly what they set out to achieve."
  },
  {
    number: 782,
    adhigaram: "நட்பு",
    tamil: "நவில்தொறும் நூல்நயம் போலும் பயில்தொறும்\nபண்புடை யாளர் தொடர்பு.",
    english: "Like a good book, the friendship of good people gets sweeter the more you know it."
  },
  {
    number: 788,
    adhigaram: "நட்பு",
    tamil: "உடுக்கை இழந்தவன் கைபோல ஆங்கே\nஇடுக்கண் களைவதாம் நட்பு.",
    english: "Like a hand that rushes to hold a slipping cloth, true friendship rushes to remove your trouble."
  },
  {
    number: 972,
    adhigaram: "பெருமை",
    tamil: "பிறப்பொக்கும் எல்லா உயிர்க்கும் சிறப்பொவ்வா\nசெய்தொழில் வேற்றுமை யான்.",
    english: "All people are equal by birth. Differences in greatness come only from their deeds."
  },
  {
    number: 1031,
    adhigaram: "உழவு",
    tamil: "சுழன்றும் ஏர்ப்பின்னது உலகம் அதனால்\nஉழந்தும் உழவே தலை.",
    english: "The world follows the plough, so farming, in spite of its hardship, is the best of all work."
  }
];

// ========== DOM Elements ==========
const adhigaramEl = document.getElementById("adhigaram");
const numberEl = document.getElementById("kural-number");
const tamilEl = document.getElementById("kural-tamil");
const englishEl = document.getElementById("kural-english");
const dateEl = document.getElementById("today-date");
const cardEl = document.getElementById("kural-card");
const toastEl = document.getElementById("toast");

const newBtn = document.getElementById("new-btn");
const copyBtn = document.getElementById("copy-btn");
const shareBtn = document.getElementById("share-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const todayBtn = document.getElementById("today-btn");
const themeBtn = document.getElementById("theme-toggle");

// ========== Daily Kural Logic ==========
// Innaiku date ah number-a maathi, array length kooda mod pannina same naal full-aa same kural varum
function getTodayIndex() {
  const now = new Date();
  const daysSinceEpoch = Math.floor(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000
  );
  return daysSinceEpoch % kurals.length;
}

let currentIndex = getTodayIndex();

// ========== Show Kural on Screen ==========
function showKural(index) {
  const kural = kurals[index];

  adhigaramEl.textContent = kural.adhigaram;
  numberEl.textContent = "குறள் " + kural.number;
  tamilEl.textContent = kural.tamil;
  englishEl.textContent = kural.english;

  // Chinna animation restart
  cardEl.style.animation = "none";
  void cardEl.offsetWidth;
  cardEl.style.animation = "fadeUp 0.5s ease";
}

// ========== Date ==========
function showDate() {
  const today = new Date();
  dateEl.textContent = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

// ========== Toast ==========
let toastTimer;
function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2000);
}

// ========== Text for Copy / Share ==========
function getKuralText() {
  const k = kurals[currentIndex];
  return (
    "திருக்குறள் " + k.number + " (" + k.adhigaram + ")\n\n" +
    k.tamil + "\n\n" +
    k.english + "\n\n" +
    "- Thirukkural of the Day"
  );
}

// ========== Buttons ==========

// New Kural: random, but same kural repeat aagaadhu
newBtn.addEventListener("click", () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * kurals.length);
  } while (randomIndex === currentIndex && kurals.length > 1);

  currentIndex = randomIndex;
  showKural(currentIndex);
});

// Previous
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + kurals.length) % kurals.length;
  showKural(currentIndex);
});

// Next
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % kurals.length;
  showKural(currentIndex);
});

// Today's Kural
todayBtn.addEventListener("click", () => {
  currentIndex = getTodayIndex();
  showKural(currentIndex);
  showToast("Today's Kural 🙏");
});

// Copy
copyBtn.addEventListener("click", async () => {
  const text = getKuralText();
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied! ✅");
  } catch (error) {
    // Old browser fallback
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    showToast("Copied! ✅");
  }
});

// Share (mobile la native share, illa na copy aagum)
shareBtn.addEventListener("click", async () => {
  const text = getKuralText();
  if (navigator.share) {
    try {
      await navigator.share({ title: "Thirukkural of the Day", text: text });
    } catch (error) {
      // User cancel pannaa onnum pannaadha
    }
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast("Share support illa, copy aayiduchu 📋");
    } catch (error) {
      showToast("Copy panna mudiyala 😕");
    }
  }
});

// ========== Dark / Light Mode ==========
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("dark");
    themeBtn.textContent = "🌙";
  }
}

function loadTheme() {
  let saved = null;
  try {
    saved = localStorage.getItem("kural-theme");
  } catch (error) {
    saved = null;
  }

  if (saved) {
    applyTheme(saved);
  } else {
    // Saved theme illa na, device setting-a paaru
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
}

themeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  try {
    localStorage.setItem("kural-theme", newTheme);
  } catch (error) {
    // localStorage block aanaalum page work aagum
  }
});
// ========== Live Time ==========
const timeEl = document.getElementById("live-time");

function updateTime() {
  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
}
// ========== Page Load ==========
loadTheme();
showDate();
updateTime();
setInterval(updateTime, 1000);
showKural(currentIndex);