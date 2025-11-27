// ==========================
// MannMitra Script.js
// ==========================

// ==========================
// Conditions Data Array (40 total)
// ==========================
const CONDITIONS = [
  // ----- Mental Health (20) -----
  { id:"anxiety", type:"mental", keywords:["anxiety","nervous","worried","panic"], title:"Anxiety 😰", description:"Feeling nervous, restless or tense", remedies:["Breathing exercises","Walk or light exercise","Mindfulness meditation","Talk to someone supportive"], doctor:["Severe anxiety affecting daily life","Persistent panic attacks"], medicines:["Consult psychiatrist for SSRIs if needed"] },
  { id:"exam-stress", type:"mental", keywords:["exam","stress","study","pressure"], title:"Exam Stress 📚", description:"Stress before or during exams", remedies:["Take short breaks","Sleep well","Organize study schedule","Practice relaxation"], doctor:["Severe stress affecting performance or health"], medicines:["Usually none; consult doctor if extreme"] },
  { id:"loneliness", type:"mental", keywords:["lonely","alone","isolated","sad"], title:"Loneliness 😔", description:"Feeling isolated or disconnected", remedies:["Connect with friends","Join social activities","Volunteer","Talk to someone"], doctor:["Persistent depression or social withdrawal"], medicines:["Therapy if needed"] },
  { id:"depression", type:"mental", keywords:["depression","sadness","hopeless","low energy"], title:"Depression 😢", description:"Persistent sadness, loss of interest or pleasure", remedies:["Routine & small goals","Exercise & sunlight","Talk to someone supportive","Mindfulness"], doctor:["Persistent low mood >2 weeks","Suicidal thoughts"], medicines:["Under psychiatrist guidance"] },
  { id:"ocd", type:"mental", keywords:["ocd","obsessive","compulsive","rituals"], title:"OCD 🔄", description:"Repetitive thoughts or behaviors that are hard to control", remedies:["Structured schedule","Mindfulness exercises","Avoid avoidance behavior","Track triggers"], doctor:["Interferes with daily life","Severe anxiety"], medicines:["SSRIs under doctor supervision"] },
  { id:"ptsd", type:"mental", keywords:["ptsd","trauma","flashbacks","nightmares"], title:"PTSD 🧠", description:"Stress reactions after traumatic events", remedies:["Grounding exercises","Safe routines","Breathing techniques","Support network"], doctor:["Intrusive flashbacks, nightmares, severe anxiety"], medicines:["Therapy first-line; medications as advised"] },
  { id:"bipolar", type:"mental", keywords:["bipolar","mood swings","mania","depression"], title:"Bipolar Disorder ⚡", description:"Extreme mood swings from high (mania) to low (depression)", remedies:["Maintain sleep & routine","Track moods","Avoid alcohol/drugs","Stress management"], doctor:["Extreme mood changes affecting life"], medicines:["Mood stabilizers under psychiatrist"] },
  { id:"adhd", type:"mental", keywords:["adhd","attention deficit","hyperactivity","focus"], title:"ADHD 🏃", description:"Difficulty focusing, impulsivity, hyperactivity", remedies:["Structured tasks","Breaks & movement","Visual schedules","Positive reinforcement"], doctor:["Interfering with school/work","Severe impulsivity"], medicines:["Stimulants or non-stimulants by psychiatrist"] },
  { id:"phobia", type:"mental", keywords:["phobia","fear","anxiety","panic"], title:"Phobia 😱", description:"Excessive fear of specific objects or situations", remedies:["Gradual exposure","Relaxation techniques","Challenge negative thoughts","Support system"], doctor:["Severe avoidance affecting life"], medicines:["Therapy (CBT) first; meds if severe"] },
  { id:"eating-disorder", type:"mental", keywords:["eating disorder","anorexia","bulimia","binge"], title:"Eating Disorder 🍽️", description:"Abnormal eating behaviors affecting health", remedies:["Balanced small meals","Avoid triggers","Support group","Mindful eating"], doctor:["Rapid weight change, health problems"], medicines:["Therapy; supervised nutrition; meds if needed"] },
  { id:"addiction", type:"mental", keywords:["addiction","substance abuse","alcohol","drugs"], title:"Substance Use / Addiction 💊", description:"Dependence on substances affecting life", remedies:["Seek social support","Avoid triggers","Healthy routines","Exercise"], doctor:["Severe dependence, withdrawal risk"], medicines:["Medical supervision detox; therapy"] },
  { id:"sleep-anxiety", type:"mental", keywords:["sleep anxiety","insomnia","cannot sleep","worry at night"], title:"Sleep Anxiety 😴", description:"Worry or racing thoughts affecting sleep", remedies:["Bedtime routine","Limit screens","Breathing exercises","Journaling"], doctor:["Chronic insomnia affecting daily function"], medicines:["Doctor-prescribed short-term sleep aid"] },
  { id:"stress", type:"mental", keywords:["stress","tension","pressure","overwhelm"], title:"General Stress 😓", description:"Feeling overwhelmed, tense or pressured", remedies:["Short breaks","Breathing exercises","Time management","Talk to friend/family"], doctor:["Severe stress causing panic or health issues"], medicines:["Usually none; therapy if persistent"] },
  // Add more mental health conditions as needed (20 total)
  
  // ----- Physical / General Health (20) -----
  { id:"headache", type:"physical", keywords:["headache","migraine","pain in head"], title:"Headache 🤕", description:"Pain in the head", remedies:["Drink water","Rest in dark room","Cold compress"], doctor:["Severe or persistent pain","Vision changes"], medicines:["Paracetamol if needed"] },
  { id:"cold", type:"physical", keywords:["cold","cough","sneeze","runny nose"], title:"Common Cold 🤧", description:"Nasal congestion, sneezing, mild fever", remedies:["Rest","Hydration","Steam inhalation","Vitamin C"], doctor:["High fever","Difficulty breathing"], medicines:["OTC cold meds"] },
  { id:"fever", type:"physical", keywords:["fever","temperature","hot"], title:"Fever 🌡️", description:"Body temperature above normal", remedies:["Rest","Hydrate","Light meals"], doctor:["High persistent fever","Rashes or severe symptoms"], medicines:["Paracetamol"] },
  { id:"back-pain", type:"physical", keywords:["back pain","ache","spine","lower back"], title:"Back Pain 🪑", description:"Pain in lower or upper back", remedies:["Stretching exercises","Heat compress","Good posture"], doctor:["Severe pain, numbness, injury"], medicines:["Pain relievers if needed"] },
  { id:"stomachache", type:"physical", keywords:["stomach","abdomen","pain","cramps"], title:"Stomachache 🤢", description:"Pain or discomfort in abdomen", remedies:["Warm compress","Light meals","Hydration"], doctor:["Persistent pain, vomiting"], medicines:["OTC antacids"] },
  { id:"cold-feet", type:"physical", keywords:["cold feet","poor circulation","numb"], title:"Cold Feet ❄️", description:"Feet feel unusually cold", remedies:["Warm socks","Foot massage","Exercise"], doctor:["Persistent cold or numbness"], medicines:["Consult doctor if severe"] },
  { id:"sore-throat", type:"physical", keywords:["throat pain","sore throat","swallow pain"], title:"Sore Throat 🗣️", description:"Pain or irritation in throat", remedies:["Warm water gargle","Honey & lemon","Rest voice"], doctor:["Severe pain, swelling"], medicines:["OTC lozenges"] },
  { id:"allergy", type:"physical", keywords:["allergy","rash","itch","sneeze"], title:"Allergy 🤧", description:"Immune reaction to substances", remedies:["Avoid trigger","Antihistamines","Cool compress"], doctor:["Severe reaction, swelling"], medicines:["Antihistamines"] },
  { id:"diabetes", type:"physical", keywords:["diabetes","blood sugar","hyperglycemia","hypoglycemia"], title:"Diabetes 🩸", description:"High or low blood sugar", remedies:["Healthy diet","Exercise","Monitor sugar"], doctor:["Frequent urination, excessive thirst"], medicines:["Insulin or meds as prescribed"] },
  { id:"hypertension", type:"physical", keywords:["high blood pressure","hypertension","bp"], title:"Hypertension 💓", description:"High blood pressure", remedies:["Low salt diet","Exercise","Stress management"], doctor:["Persistent high BP"], medicines:["As prescribed"] },
  { id:"obesity", type:"physical", keywords:["obesity","overweight","weight gain"], title:"Obesity ⚖️", description:"Excess body weight", remedies:["Healthy diet","Exercise","Lifestyle changes"], doctor:["Severe obesity with health issues"], medicines:["Consult doctor/nutritionist"] },
  { id:"flu", type:"physical", keywords:["flu","influenza","fever","body ache"], title:"Influenza 🤒", description:"Viral infection", remedies:["Rest","Hydration","Warm fluids"], doctor:["High fever, breathing issues"], medicines:["Antiviral meds if prescribed"] },
  { id:"constipation", type:"physical", keywords:["constipation","bowel movement","hard stool"], title:"Constipation 💩", description:"Difficulty passing stools", remedies:["Fiber diet","Hydration","Exercise"], doctor:["Persistent constipation"], medicines:["Laxatives if needed"] },
  { id:"diarrhea", type:"physical", keywords:["diarrhea","loose stools","stomach upset"], title:"Diarrhea 💦", description:"Frequent loose stools", remedies:["Hydration","BRAT diet","Avoid junk food"], doctor:["Dehydration","Blood in stool"], medicines:["ORS, anti-diarrheal if advised"] },
  { id:"eye-strain", type:"physical", keywords:["eye strain","vision","computer","headache"], title:"Eye Strain 👀", description:"Tired eyes due to screen or reading", remedies:["20-20-20 rule","Eye exercises","Rest eyes"], doctor:["Persistent pain or vision loss"], medicines:["Artificial tears"] },
  { id:"toothache", type:"physical", keywords:["tooth pain","cavity","dental"], title:"Toothache 🦷", description:"Pain in teeth", remedies:["Salt water rinse","Cold compress","Avoid hard foods"], doctor:["Persistent pain, infection"], medicines:["Painkillers if needed"] },
  { id:"cold-sweat", type:"physical", keywords:["cold sweat","pale","dizzy"], title:"Cold Sweat 😓", description:"Sweating without heat or exercise", remedies:["Rest","Hydrate","Sit down"], doctor:["Heart issues, fainting"], medicines:["Check with doctor"] },
  { id:"joint-pain", type:"physical", keywords:["joint pain","arthritis","swelling"], title:"Joint Pain 🦵", description:"Pain or stiffness in joints", remedies:["Stretching","Light exercise","Heat/cold therapy"], doctor:["Severe pain/swelling"], medicines:["NSAIDs if advised"] },
  { id:"skin-rash", type:"physical", keywords:["rash","skin irritation","redness","itch"], title:"Skin Rash 🌿", description:"Redness, itching or irritation", remedies:["Cool compress","Avoid irritants","Moisturize"], doctor:["Spreading rash, infection"], medicines:["Topical creams if needed"] }
];

// ==========================
// Build keywordMap for quick search
// ==========================
const keywordMap = new Map();
CONDITIONS.forEach(cond => {
  cond.keywords.forEach(kw => {
    const k = kw.toLowerCase();
    if (!keywordMap.has(k)) keywordMap.set(k, new Set());
    keywordMap.get(k).add(cond.id);
  });
});

// ==========================
// Recent Queries Queue (FIFO, max 5)
// ==========================
const recentQueriesQueue = [];

// ==========================
// DOM Elements
// ==========================
const symptomInput = document.getElementById("symptomInput");
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");
const showAll = document.getElementById("showAll");
const matchesContainer = document.getElementById("matchesContainer");
const resultsSection = document.getElementById("results");
const recentQueriesDiv = document.getElementById("recentQueries");

// ==========================
// Event Listeners
// ==========================
checkBtn.addEventListener("click", handleCheck);
clearBtn.addEventListener("click", handleClear);

// ==========================
// Functions
// ==========================
function handleCheck() {
  const inputText = symptomInput.value.toLowerCase().trim();
  if (!inputText) return alert("Please enter your symptom or feeling!");

  // Add to recent queries
  recentQueriesQueue.push(inputText);
  if (recentQueriesQueue.length > 5) recentQueriesQueue.shift(); // maintain max 5
  updateRecentQueries();

  // Find matching conditions
  const matchedIds = new Set();
  keywordMap.forEach((condIds, keyword) => {
    if (inputText.includes(keyword)) {
      condIds.forEach(id => matchedIds.add(id));
    }
  });

  // Build result cards
  matchesContainer.innerHTML = "";
  if (matchedIds.size === 0) {
    matchesContainer.innerHTML = `<p>No matches found. Try different keywords.</p>`;
  } else {
    CONDITIONS.forEach(cond => {
      if (matchedIds.has(cond.id) || showAll.checked) {
        const card = document.createElement("div");
        card.className = "match";
        card.innerHTML = `
          <h3>${cond.title}</h3>
          <p><strong>Description:</strong> ${cond.description}</p>
          <p><strong>Remedies:</strong> ${cond.remedies.join(", ")}</p>
          <p><strong>Doctor should be consulted if:</strong> ${cond.doctor.join(", ")}</p>
          <p><strong>Medicines:</strong> ${cond.medicines.join(", ")}</p>
        `;
        matchesContainer.appendChild(card);
      }
    });
  }

  resultsSection.classList.remove("hidden");
}

function handleClear() {
  symptomInput.value = "";
  matchesContainer.innerHTML = "";
  resultsSection.classList.add("hidden");
}

function updateRecentQueries() {
  if (recentQueriesQueue.length === 0) {
    recentQueriesDiv.textContent = "No queries yet.";
    return;
  }
  recentQueriesDiv.innerHTML = recentQueriesQueue.map(q => `• ${q}`).join("<br>");
}
