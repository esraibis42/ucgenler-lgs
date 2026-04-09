const allQuestions = {
    yardimci: [
        { id: 1, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik1.png", options: ["A) 32", "B) 28", "C) 24", "D) 18"], answer: "A) 32", hints: ["BC tabanı 6 birim, AB 8 birimdir.", "Alan sabit: 6x24 = 8x? denkleminden bul."] },
        { id: 2, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik2.png", options: ["A) 4,8", "B) 5,2", "C) 9,6", "D) 10,4"], answer: "C) 9,6", hints: ["Dik kenarlar çarpımı = Hipotenüs x Yükseklik.", "12x16 = 20xh hesabını yap."] },
        { id: 3, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik3.png", options: ["A) A", "B) K", "C) L", "D) N"], answer: "C) L", hints: ["Dar açılı üçgende diklik merkezi içerdedir.", "L noktasında birleşirler."] },
        { id: 4, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik4.png", options: ["A) 22", "B) 18", "C) 17", "D) 15"], answer: "C) 17", hints: ["Kareden gelen 7 cm ile üstteki yüksekliği topla.", "B noktasından tabana inen dikme toplam yüksekliktir."] },
        { id: 5, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik5.png", options: ["A)", "B)", "C)", "D)"], answer: "C)", hints: ["Yüksekliklerin köşede kesişmesi için üçgen DİK olmalı.", "61+29 = 90 olan üçgene bak."] },
        { id: 6, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik6.png", options: ["A) 14", "B) 15", "C) 16", "D) 17"], answer: "B) 15", hints: ["Birim kareleri say (3, 5 ve 7 birim).", "|BD|=4cm ise her birim 1cm'dir."] },
        { id: 7, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik7.png", options: ["A) K", "B) L", "C) M", "D) N"], answer: "B) L", hints: ["Alan 40, taban 10 ise yükseklik 8 olmalı.", "Tabandan 8 birim yukarıdaki noktayı bul."] }
    ],
    esitsizlik: [],
    "aci-kenar": [],
    pisagor: []
};

let currentQuestions = [];
let currentIdx = 0;
let wrongAttempts = 0;

function startQuiz(topic) {
    currentQuestions = allQuestions[topic];
    if(!currentQuestions || currentQuestions.length === 0) {
        alert("Bu ünite yakında eklenecek!");
        return;
    }
    currentIdx = 0;
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("quiz-area").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentIdx];
    document.getElementById("question-text").innerText = q.text;
    const imgDiv = document.getElementById("image-container");
    imgDiv.innerHTML = q.image ? `<img src="${q.image}" style="max-width:100%; height:auto;">` : "";
    
    const opts = document.getElementById("options-container");
    opts.innerHTML = "";
    q.options.forEach(opt => {
        const b = document.createElement("button");
        b.className = "option-btn";
        b.innerText = opt;
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
        btn.style.background = "#00b894";
        btn.style.color = "white";
        hint.innerText = "🌟 Harika! Doğru cevap.";
        hint.classList.remove("hidden");
        document.getElementById("next-btn").classList.remove("hidden");
    } else {
        btn.style.background = "#ff7675";
        btn.style.color = "white";
        wrongAttempts++;
        hint.classList.remove("hidden");
        hint.innerText = "💡 İpucu: " + (wrongAttempts === 1 ? q.hints[0] : q.hints[1]);
    }
}

document.getElementById("next-btn").onclick = () => {
    currentIdx++;
    if(currentIdx < currentQuestions.length) loadQuestion();
    else {
        alert("Tebrikler! Konuyu bitirdin.");
        location.reload(); 
    }
};

// --- BİLGİ KÖŞESİ (KATLAMA) FONKSİYONLARI ---
function openInfo() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("info-area").classList.remove("hidden");
}

function animateFold(type) {
    const paper = document.getElementById("paper-triangle");
    const line = document.getElementById("fold-line");
    const desc = document.getElementById("info-desc");
    
    const texts = {
        yukseklik: "Yükseklik: Köşe, karşı kenara DİK gelecek şekilde katlanır.",
        aciortay: "Açıortay: Kenarlar tam olarak üst üste gelecek şekilde katlanır.",
        kenarortay: "Kenarortay: İki köşe (B ve C) üst üste gelecek şekilde katlanır."
    };

    paper.classList.remove("folding");
    line.style.height = "0";
    
    setTimeout(() => {
        paper.classList.add("folding");
        setTimeout(() => {
            paper.classList.remove("folding");
            line.style.height = "170px";
            desc.innerText = texts[type];
        }, 1200);
    }, 100);
}
