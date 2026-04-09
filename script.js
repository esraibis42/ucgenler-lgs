const allQuestions = {
    yardimci: [
        { id: 1, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik1.png", options: ["A) 32", "B) 28", "C) 24", "D) 18"], answer: "A) 32", hints: ["BC tabanı 6 birim, AB 8 birimdir.", "Alan sabit: 6x24 = 8x?"] },
        { id: 2, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik2.png", options: ["A) 4,8", "B) 5,2", "C) 9,6", "D) 10,4"], answer: "C) 9,6", hints: ["12x16 = 20xh hesabını yap."] },
        { id: 3, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik3.png", options: ["A) A", "B) K", "C) L", "D) N"], answer: "C) L", hints: ["Dar açılıda diklik merkezi içerdedir."] },
        { id: 4, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik4.png", options: ["A) 22", "B) 18", "C) 17", "D) 15"], answer: "C) 17", hints: ["B noktasından inen dikme toplam yüksekliktir."] },
        { id: 5, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik5.png", options: ["A)", "B)", "C)", "D)"], answer: "C)", hints: ["61+29 = 90 olan üçgene bak."] },
        { id: 6, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik6.png", options: ["A) 14", "B) 15", "C) 16", "D) 17"], answer: "B) 15", hints: ["Birim say (3, 5, 7) ve topla."] },
        { id: 7, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik7.png", options: ["A) K", "B) L", "C) M", "D) N"], answer: "B) L", hints: ["Alan 40, taban 10 ise yükseklik 8 olmalı."] }
    ],
    esitsizlik: [], "aci-kenar": [], pisagor: []
};

// --- SİSTEM MOTORU (DEĞİŞTİRMEYİN) ---
let currentQuestions = [];
let currentIdx = 0;
let wrongAttempts = 0;

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
    else { alert("Tebrikler!"); location.reload(); }
};

// =========================================================================
// ================ BİLGİ KÖŞESİ (SVG KATLAMA MOTORU) =====================
// =========================================================================

function openInfo() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("quiz-area").classList.add("hidden");
    document.getElementById("info-area").classList.remove("hidden");
    // Sayfa açıldığında SVG alanını temizle ve isimlendirmeleri koy
    resetFoldingArea();
}

function resetFoldingArea() {
    const svgArea = document.getElementById("svg-folding-area");
    // SVG alanını tamamen temizle (harfler, çizgiler, her şey gidecek)
    svgArea.innerHTML = "";
    
    // Temel SVG yapısını oluştur
    const ns = "http://www.w3.org/2000/svg";
    
    // --- 1. Temel ABC Üçgeni (Mavi Çizgili) ---
    const triangle = document.createElementNS(ns, "polygon");
    triangle.setAttribute("points", "100,50 30,220 170,220"); // A(100,50), B(30,220), C(170,220)
    triangle.style.fill = "rgba(162, 155, 254, 0.2)"; // Açık mor şeffaf
    triangle.style.stroke = "var(--ana-renk)";
    triangle.style.strokeWidth = "3";
    svgArea.appendChild(triangle);
    
    // --- 2. Harfler (A, B, C) ---
    const letters = [
        { text: "A", x: 92, y: 40 },
        { text: "B", x: 15, y: 235 },
        { text: "C", x: 175, y: 235 }
    ];
    
    letters.forEach(l => {
        const text = document.createElementNS(ns, "text");
        text.setAttribute("x", l.x);
        text.setAttribute("y", l.y);
        text.style.fontFamily = "Segoe UI, sans-serif";
        text.style.fontWeight = "bold";
        text.style.fontSize = "16px";
        text.style.fill = "var(--ana-renk)";
        text.textContent = l.text;
        svgArea.appendChild(text);
    });
}

function animateFold(type) {
    // Önce temizle
    resetFoldingArea();
    
    const svgArea = document.getElementById("svg-folding-area");
    const ns = "http://www.w3.org/2000/svg";
    
    const desc = document.getElementById("info-desc");
    
    // Kırmızı Kat İzini Oluştur (Gizli başla)
    const foldLine = document.createElementNS(ns, "line");
    foldLine.style.stroke = "var(--yanlis)";
    foldLine.style.strokeWidth = "3";
    foldLine.style.strokeDasharray = "5,5"; // Kesikli çizgi
    foldLine.style.transition = "stroke-dashoffset 1s ease 1s"; // Animasyon
    foldLine.setAttribute("id", "dynamic-fold-line");
    svgArea.appendChild(foldLine);
    
    const texts = {
        yukseklik: "Yükseklik (AH): Köşe, karşı kenara tam dik gelecek şekilde katlanır.",
        aciortay: "Açıortay (AN): İki kenar tam üst üste gelecek şekilde katlanır.",
        kenarortay: "Kenarortay (AD): İki köşe (B ve C) tam üst üste gelecek şekilde katlanır."
    };
    
    // Matematiksel sembolleri (diklik, açı yayı vb.) ekleme fonksiyonu
    const addMathSymbols = (symbolsArray) => {
        symbolsArray.forEach(s => {
            if(s.type === 'circle') {
                const circle = document.createElementNS(ns, "circle");
                circle.setAttribute("cx", s.cx);
                circle.setAttribute("cy", s.cy);
                circle.setAttribute("r", s.r);
                circle.style.fill = "none";
                circle.style.stroke = s.color || "var(--altin)";
                circle.style.strokeWidth = "2";
                if(s.filled) circle.style.fill = s.color || "var(--altin)";
                svgArea.appendChild(circle);
            }
            if(s.type === 'line') {
                const line = document.createElementNS(ns, "line");
                line.setAttribute("x1", s.x1);
                line.setAttribute("y1", s.y1);
                line.setAttribute("x2", s.x2);
                line.setAttribute("y2", s.y2);
                line.style.stroke = s.color || "var(--altin)";
                line.style.strokeWidth = "2";
                svgArea.appendChild(line);
            }
        });
    };

    if(type === 'yukseklik') {
        // Yükseklik (AH): A köşesinden BC'ye dik inen çizgi (AH)
        // A(100,50) noktasından y=220 doğrusuna dik
        foldLine.setAttribute("x1", "100");
        foldLine.setAttribute("y1", "50"); // A
        foldLine.setAttribute("x2", "100");
        foldLine.setAttribute("y2", "220"); // H
        
        // H Noktası Harfi
        const hLetter = document.createElementNS(ns, "text");
        hLetter.setAttribute("x", "95");
        hLetter.setAttribute("y", "235");
        hLetter.style.fill = "var(--yanlis)";
        hLetter.style.fontWeight = "bold";
        hLetter.textContent = "H";
        svgArea.appendChild(hLetter);
        
        // Diklik Sembolü (h noktasının yanına)
        const symbols = [
            { type: 'line', x1: "100", y1: "210", x2: "110", y2: "210" }, // Yatay
            { type: 'line', x1: "110", y1: "210", x2: "110", y2: "220" }, // Dikey
            { type: 'circle', cx: "105", cy: "215", r: "2", filled: true } // Nokta
        ];
        addMathSymbols(symbols);
    }
    
    if(type === 'aciortay') {
        // Açıortay (AN): A açısını ikiye bölen çizgi
        // Tam hesaplaması zor ama görsel olarak y=220 üzerinde yaklaşık 120-130 arası
        foldLine.setAttribute("x1", "100");
        foldLine.setAttribute("y1", "50"); // A
        foldLine.setAttribute("x2", "125");
        foldLine.setAttribute("y2", "220"); // N
        
        const nLetter = document.createElementNS(ns, "text");
        nLetter.setAttribute("x", "120");
        nLetter.setAttribute("y", "235");
        nLetter.style.fill = "var(--yanlis)";
        nLetter.style.fontWeight = "bold";
        nLetter.textContent = "N";
        svgArea.appendChild(nLetter);
        
        // Açı İşaretleri (YAY VE NOKTA)
        const symbols = [
            { type: 'circle', cx: "95", cy: "60", r: "4", color: "var(--dogru)" },
            { type: 'circle', cx: "105", cy: "60", r: "4", color: "var(--dogru)" }
        ];
        addMathSymbols(symbols);
    }
    
    if(type === 'kenarortay') {
        // Kenarortay (AD): BC'nin orta noktası (D)
        foldLine.setAttribute("x1", "100");
        foldLine.setAttribute("y1", "50"); // A
        foldLine.setAttribute("x2", "100");
        foldLine.setAttribute("y2", "220"); // D (Orta nokta H ile aynı yer)
        
        const dLetter = document.createElementNS(ns, "text");
        dLetter.setAttribute("x", "95");
        dLetter.setAttribute("y", "235");
        dLetter.style.fill = "var(--yanlis)";
        dLetter.style.fontWeight = "bold";
        dLetter.textContent = "D";
        svgArea.appendChild(dLetter);
        
        // Kenar Eşitliği İşaretleri (TİK VEYA İKİ ÇİZGİ)
        const symbols = [
            { type: 'circle', cx: "65", cy: "225", r: "5", filled: true, color: "var(--ana-renk)" },
            { type: 'circle', cx: "135", cy: "225", r: "5", filled: true, color: "var(--ana-renk)" }
        ];
        addMathSymbols(symbols);
    }
    
    // Katlama Animasyonunun "pır pır" etmesini sağla
    svgArea.classList.remove("triangle-folding-pırpır");
    setTimeout(() => {
        svgArea.classList.add("triangle-folding-pırpır");
        setTimeout(() => {
            svgArea.classList.remove("triangle-folding-pırpır");
            // Animasyon bittiğinde kat izi çizgisini göster
            desc.innerText = texts[type];
        }, 1200);
    }, 100);
}
