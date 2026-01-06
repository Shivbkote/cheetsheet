



const libraryData = {
    "Advanced Mathematics": [
        { name: "Introduction to Calculus", file: "math.pdf" },
        { name: "Derivatives & Limits", file: "derivatives.pdf" },
        { name: "Integrals in Practice", file: "integrals.pdf" }
    ],
    "Quantum Physics": [
        { name: "Wave-Particle Duality", file: "quantum_1.pdf" },
        { name: "Schrödinger Equation", file: "quantum_2.pdf" }
    ],
    "Inorganic Chemistry": [
        { name: "Periodic Table Trends", file: "chem_1.pdf" },
        { name: "Chemical Bonding", file: "chem_2.pdf" }
    ]
};

const PDF_BASE_PATH = "./assets/pdf/";
let dFlipBook = null;

function changeSubject(subject) {
    document.getElementById("breadcrumbSubject").innerText = subject;
    const list = document.getElementById("chapterList");
    list.innerHTML = "";

    libraryData[subject].forEach(ch => {
        const btn = document.createElement("button");
        btn.className = "chapter-item";
        btn.innerText = ch.name;
        btn.onclick = () => loadChapter(ch.file, btn);
        list.appendChild(btn);
    });
}

function loadChapter(file, el) {
    document.getElementById("emptyState").style.display = "none";
    document.getElementById("fsBtn").style.display = "block";

    document.querySelectorAll(".chapter-item").forEach(i => i.classList.remove("chapter-active"));
    el.classList.add("chapter-active");

    if (dFlipBook) dFlipBook.dispose();

    dFlipBook = $("#flipbookContainer").flipBook(PDF_BASE_PATH + file, {
        height: "100%",
        embedded: true
    });
}

function toggleFullScreen() {
    const body = document.body;
    body.classList.toggle("fullscreen-mode");
}
function toggleFullScreen() {
    const body = document.body;
    const btn = document.getElementById("fsBtn");

    body.classList.toggle("fullscreen-mode");

    if (body.classList.contains("fullscreen-mode")) {
        btn.innerText = "✕"; // exit fullscreen icon
    } else {
        btn.innerText = "⛶"; // fullscreen icon
    }
}

