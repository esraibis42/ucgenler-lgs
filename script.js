const allQuestions = {
    yardimci: [
        // ... ilk 5 soru aynı kalacak, sadece 6. soruyu güncelliyoruz ...
        {
            id: 1,
            kazanim: "M.8.3.1.1 - Yükseklik ve Alan İlişkisi",
            text: "Soruyu resme göre cevaplayınız:",
            image: "images/yukseklik1.png", 
            options: ["A) 32", "B) 28", "C) 24", "D) 18"],
            answer: "A) 32", 
            hints: ["BC tabanı 6 birim, AB tabanı 8 birimdir.", "Alan sabit olduğu için 6 x 24 = 8 x ? denkleminden sonucu bulabilirsin."]
        },
        {
            id: 2,
            kazanim: "M.8.3.1.1 - Dik Üçgende Yükseklik",
            text: "Soruyu resme göre cevaplayınız:",
            image: "images/yukseklik2.png",
            options: ["A) 4,8", "B) 5,2", "C) 9,6", "D) 10,4"],
            answer: "C) 9,6", 
            hints: ["Dik kenarların çarpımı (12x16), hipotenüs ile o kenara inen yüksekliğin çarpımına (20xh) eşittir.", "192 / 20 işleminin sonucunu hesaplamalısın."]
        },
        {
            id: 3,
            kazanim: "M.8.3.1.1 - Diklik Merkezi",
            text: "Soruyu resme göre cevaplayınız:",
            image: "images/yukseklik3.png",
            options: ["A) A", "B) K", "C) L", "D) N"],
            answer: "C) L", 
            hints: ["Dar açılı üçgenlerde diklik merkezi içeridedir.", "Dikmeleri çizdiğinde L noktasında birleştiklerini göreceksin."]
        },
        {
            id: 4,
            kazanim: "M.8.3.1.1 - Karmaşık Şekilde Yükseklik",
            text: "Soruyu resme göre cevaplayınız:",
            image: "images/yukseklik4.png",
            options: ["A) 22", "B) 18", "C) 17", "D) 15"],
            answer: "C) 17", 
            hints: ["ABCD karesinden gelen 7 cm ile üstteki dikdörtgenin kenarından gelen mesafeyi topla.", "B noktasından tabana inen dikme toplam yüksekliği verir."]
        },
        {
            id: 5,
            kazanim: "M.8.3.1.1 - Üçgen Çeşitleri",
            text: "Soruyu resme göre cevaplayınız:",
            image: "images/yukseklik5.png",
            options: ["A)", "B)", "C)", "D)"],
            answer: "C)", 
            hints: ["Yüksekliklerin köşede kesişmesi için üçgenin dik olması gerekir.", "61 + 29 = 90 kuralını fark et."]
        },
        {
            id: 6,
            kazanim: "M.8.3.1.1 - Yüksekliklerin Toplamı",
            text: "Soruyu resme göre cevaplayınız:",
            image: "images/yukseklik6.png",
            options: ["A) 14", "B) 15", "C) 16", "D) 17"],
            answer: "B) 15", // CEVAP BURADA DÜZELTİLDİ
            hints: ["Her üçgen için BD kenarına dik giden birim kareleri say (3, 5 ve 7 birim).", "|BD|=4cm olduğuna göre her birim 1 cm'dir. Toplamı hesapla."]
        },
        {
            id: 7,
            kazanim: "M.8.3.1.1 - Alan ve Nokta Seçimi",
            text: "Soruyu resme göre cevaplayınız:",
            image: "images/yukseklik7.png",
            options: ["A) K", "B) L", "C) M", "D) N"],
            answer: "B) L", 
            hints: ["Alan 40 ve taban 10 ise yükseklik 8 olmalıdır.", "AB tabanından 8 birim yukarıda hangi nokta var?"]
        }
    ],
    esitsizlik: [],
    "aci-kenar": [],
    pisagor: []
};

// ... Geri kalan fonksiyonlar aynı ...
let currentQuestions = [];
let currentIdx = 0;
let wrongAttempts = 0;

function startQuiz(topic) {
    currentQuestions = allQuestions[topic];
    if(!currentQuestions || currentQuestions.length === 0) {
        alert("Hazırlanıyor...");
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
    const tag = document.getElementById("kazanim-tag");
    if(tag) tag.innerText = q.kazanim;
    const imgDiv = document.getElementById("image-container");
    imgDiv.innerHTML = q.image ? `<img src="${q.image}" style="max-width:100%; height:auto; border-radius:15px; margin-bottom:20px;">` : "";
    const optionsDiv = document.getElementById("options-container");
    optionsDiv.innerHTML = ""; 
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsDiv.appendChild(btn);
    });
    const hintText = document.getElementById("hint-text");
    hintText.innerText = "";
    hintText.style.display = "none";
    document.getElementById("next-btn").classList.add("hidden");
    wrongAttempts = 0;
}

function checkAnswer(selected, btn) {
    const q = currentQuestions[currentIdx];
    const hintText = document.getElementById("hint-text");
    if (selected === q.answer) {
        btn.style.background = "#00b894";
        btn.style.color = "white";
        btn.style.borderColor = "#00b894";
        hintText.innerText = "🌟 Harika! Doğru cevap.";
        hintText.style.display = "block";
        document.getElementById("next-btn").classList.remove("hidden");
    } else {
        btn.style.background = "#ff7675";
        btn.style.color = "white";
        btn.style.borderColor = "#ff7675";
        wrongAttempts++;
        hintText.style.display = "block";
        if (wrongAttempts === 1) hintText.innerText = "💡 İpucu 1: " + q.hints[0];
        else hintText.innerText = "💡 İpucu 2: " + q.hints[1];
    }
}

document.getElementById("next-btn").onclick = () => {
    currentIdx++;
    if (currentIdx < currentQuestions.length) loadQuestion();
    else {
        alert("Tebrikler! Konuyu bitirdin.");
        location.reload(); 
    }
};