const timerDisplay = document.querySelector(".main-time");

const pauseBtn = document.querySelector(".pause");
const checkpointBtn = document.querySelector(".checkpoint");
const endBtn = document.querySelector(".end");

let interval = null;
let elapsedTime = 0; // ms
let running = false;

// -----------------------------
// Update the visual timer
// -----------------------------
function formatTime(ms) {
    let total = ms;

    let hrs = Math.floor(total / (1000 * 60 * 60));
    let mins = Math.floor((total / (1000 * 60)) % 60);
    let secs = Math.floor((total / 1000) % 60);

    if (hrs > 0) {
        return (
            hrs.toString().padStart(2, '0') + ":" +
            mins.toString().padStart(2, '0') + ":" +
            secs.toString().padStart(2, '0')
        );
    }

    // only mm:ss if no hours
    return (
        mins.toString().padStart(2, '0') + ":" +
        secs.toString().padStart(2, '0')
    );
}

function updateTimer() {
    timerDisplay.textContent = formatTime(elapsedTime);
}

// -----------------------------
// Start timer on first pauseBtn click if idle
// Pause if already running
// -----------------------------
pauseBtn.addEventListener("click", () => {
    const img = pauseBtn.querySelector("img");

    // fade out
    img.classList.add("hidden");

    setTimeout(() => {
        if (!running) {
            // start timer
            running = true;
            let startTime = Date.now() - elapsedTime;

            interval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                updateTimer();
            }, 100);

            img.src = "icons/pause.svg";
        } else {
            // pause timer
            running = false;
            clearInterval(interval);

            img.src = "icons/play.svg";
        }

        // fade back in
        img.classList.remove("hidden");
    }, 150); // matches CSS transition
});

// -----------------------------
// Add checkpoint press
// -----------------------------
checkpointBtn.addEventListener("click", () => {
    const current = formatTime(elapsedTime);
    console.log("Checkpoint:", current);

    // Optional: save checkpoints later
});

// -----------------------------
// End button (stop + save)
// -----------------------------
endBtn.addEventListener("click", () => {
    running = false;
    clearInterval(interval);

    const data = {
        timeSpentMs: elapsedTime,
        readableTime: formatTime(elapsedTime),
        savedAt: new Date().toISOString(),
        subject: document.querySelector(".subject").textContent,
        task: document.querySelector(".task").textContent,
        quantity: document.querySelector(".quantity").textContent,
        expected: document.querySelector(".expected-duration").textContent,
        type: document.querySelector(".type").textContent,
    };

    // Save to localStorage
    let logs = JSON.parse(localStorage.getItem("studyLogs") || "[]");
    logs.push(data);
    localStorage.setItem("studyLogs", JSON.stringify(logs));

    // Reset
    elapsedTime = 0;
    updateTimer();
});