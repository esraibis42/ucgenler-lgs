const allQuestions = {
    yardimci: [
        { id: 1, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik1.png", options: ["A) 32", "B) 28", "C) 24", "D) 18"], answer: "A) 32", hints: ["BC tabanı 6 birim, AB 8 birimdir.", "Alan sabit: 6x24 = 8x?"] },
        { id: 2, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik2.png", options: ["A) 4,8", "B) 5,2", "C) 9,6", "D) 10,4"], answer: "C) 9,6", hints: ["Dik kenarlar çarpımı = Hipotenüs x Yükseklik.", "12x16 = 20xh"] },
        { id: 3, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik3.png", options: ["A) A", "B) K", "C) L", "D) N"], answer: "C) L", hints: ["Dar açılı üçgende diklik merkezi içerdedir."] },
        { id: 4, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik4.png", options: ["A) 22", "B) 18", "C) 17", "D) 15"], answer: "C) 17", hints: ["Karenin kenarından gelen 7 cm ile üstteki yüksekliği topla."] },
        { id: 5, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik5.png", options: ["A)", "B)", "C)", "D)"], answer: "C)", hints: ["Yüksekliklerin bir köşede kesişmesi için üçgenin dik olması gerekir."] },
        { id: 6, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik6.png", options: ["A) 14", "B) 15", "C) 16", "D) 17"], answer: "B) 15", hints: ["Her üçgenin BD'ye inen yüksekliğini say: 3, 5 ve 7 birim.", "Hepsini topla: 3+5+7 = 15 cm."] },
        { id: 7, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik7.png", options: ["A) K", "B) L", "C) M", "D) N"], answer: "B) L", hints: ["Alan 40, taban 10 ise yükseklik 8 olmalı."] }
    ],
    esitsizlik: [], "aci-kenar": [], pisagor: []
};

let currentQuestions = [];
let currentIdx = 0;
let wrongAttempts = 0;

// --- TEST SİSTEMİ FONKSİYONLARI ---
function startQuiz(topic) {
    currentQuestions = allQuestions[topic];
    if(!currentQuestions || currentQuestions.length === 0) { alert("Hazırlanıyor..."); return; }
    currentIdx = 0;
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("quiz-area").classList.remove("hidden");
    document.getElementById("info-area").classList.add("hidden");
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentIdx];
    document.getElementById("question-text").innerText = q.text;
    document.getElementById("image-container").innerHTML = `<img src="${q.image}" style="max-width:100%; border-radius:15px;">`;
    const opts = document.getElementById("options-container");
    opts.innerHTML = "";
    q.options.forEach(opt => {
        const b = document.createElement("button");
        b.className = "option-btn"; b.innerText = opt;
        b.onclick = () => checkAnswer(opt, b);
        opts.appendChild(b);
    });
    document.getElementById("hint-text").classList.add("hidden");
    document.getElementById("next-btn").classList.add("hidden");
    wrongAttempts = 0;
}

function checkAnswer(sel, btn) {
    const q = currentQuestions[currentIdx];
    const hint = document.getElementById("hint-text");
    if(sel === q.answer) {
        btn.style.background = "#00b894"; btn.style.color = "white";
        hint.innerText = "🌟 Harika! Doğru cevap."; hint.classList.remove("hidden");
        document.getElementById("next-btn").classList.remove("hidden");
    } else {
        btn.style.background = "#ff7675"; btn.style.color = "white";
        wrongAttempts++;
        hint.classList.remove("hidden");
        hint.innerText = "💡 İpucu: " + (wrongAttempts === 1 ? q.hints[0] : q.hints[1]);
    }
}

document.getElementById("next-btn").onclick = () => {
    currentIdx++;
    if(currentIdx < currentQuestions.length) loadQuestion();
    else { alert("Tebrikler! Konuyu bitirdin."); location.reload(); }
};

// --- BİLGİ KÖŞESİ (SİMÜLASYON) FONKSİYONLARI ---
function openInfo() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("quiz-area").classList.add
