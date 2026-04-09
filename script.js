const questions = [
    {
        id: 1,
        kazanim: "M.8.3.1.5 - Pisagor (Katlama)",
        text: "Kısa kenarı 12 cm olan dikdörtgen kağıt, köşegen boyunca katlanıyor. Kat çizgisi 20 cm ise uzun kenar kaç cm'dir?",
        options: ["14", "16", "18", "19"],
        answer: "16",
        hints: [
            "Kat çizgisi aslında dik üçgenin hipotenüsüdür.",
            "12-x-20 üçgenini düşün. 3-4-5 özel üçgeninin 4 katı olabilir mi?"
        ]
    },
    // Buraya 50 soru eklenecek...
];

let currentIdx = 0;
let wrongAttempts = 0;

function loadQuestion() {
    const q = questions[currentIdx];
    document.getElementById("question-text").innerText = q.text;
    document.getElementById("kazanim-tag").innerText = q.kazanim;
    const optionsDiv = document.getElementById("options-container");
    optionsDiv.innerHTML = "";
    document.getElementById("hint-text").innerText = "";
    wrongAttempts = 0;

    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    const q = questions[currentIdx];
    if (selected === q.answer) {
        btn.classList.add("correct");
        document.getElementById("hint-text").innerText = "Tebrikler! Doğru cevap.";
        document.getElementById("next-btn").classList.remove("hidden");
    } else {
        btn.classList.add("wrong");
        wrongAttempts++;
        showHint(q);
    }
}

function showHint(q) {
    const hintArea = document.getElementById("hint-text");
    if (wrongAttempts === 1) {
        hintArea.innerText = "İpucu 1: " + q.hints[0];
    } else if (wrongAttempts >= 2) {
        hintArea.innerText = "İpucu 2: " + q.hints[1];
    }
}

loadQuestion();