const insights = [
  "Balance management: Available balance up 8% this week — trending steady. \n Budget management: Groceries at 73% of monthly budget (10% up vs last week). Bills: 2 upcoming payments — electricity due in 2 days. Water due. please pay. Data analysis: Overall spending 6% lower than last month. Top category: Food. Tip: Move ₹500 to 'Emergency' — you’re trending above target for discretionary spend."
];

const text = insights[0];
const element = document.getElementById("aiOutput");
const cursor = document.getElementById("cursor");
let i = 0;

function typeText() {
  if (i < text.length) {
    element.innerHTML += text[i];
    i++;
    setTimeout(typeText, 25);
  } else {
    cursor.style.opacity = 0.5;
  }
}

typeText();
