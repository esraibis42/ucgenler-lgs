const allQuestions = {
    yardimci: [
        { id: 1, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik1.png", options: ["A) 32", "B) 28", "C) 24", "D) 18"], answer: "A) 32", hints: ["BC tabanı 6 birim, AB 8 birimdir.", "Alan sabit: 6x24 = 8x?"] },
        { id: 2, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik2.png", options: ["A) 4,8", "B) 5,2", "C) 9,6", "D) 10,4"], answer: "C) 9,6", hints: ["Dik kenarlar çarpımı = Hipotenüs x Yükseklik.", "12x16 = 20xh"] },
        { id: 6, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik6.png", options: ["A) 14", "B) 15", "C) 16", "D) 17"], answer: "B) 15", hints: ["Birim say (3, 5, 7) ve topla: 3+5+7 = 15 cm."] }
    ],
    esitsizlik: [], "aci-kenar": [], pisagor: []
};

let currentQuestions = [];
let currentIdx = 0;

// --- TEST SİSTEMİ ---
function startQuiz(topic) {
    currentQuestions = allQuestions[topic];
    if(!currentQuestions || currentQuestions.length === 0) { 
        alert("Bu ünite çok yakında eklenecek!"); 
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
    document.getElementById("image-container").innerHTML = `<img src="${q.image}" style="width:100%; border-radius:15px; display:block; margin:auto;">`;
    
    const opts = document.getElementById("options-container");
    opts.innerHTML = "";
    q.options.forEach(opt => {
        const b = document.createElement("button");
        b.className = "option-btn"; 
        b.innerText = opt;
        b.onclick = () => {
            if(opt === q.answer) {
                b.style.background = "#00b894"; b.style.color = "white";
                document.getElementById("next-btn").classList.remove("hidden");
                document.getElementById("hint-text").classList.add("hidden");
            } else {
                b.style.background = "#ff7675"; b.style.color = "white";
                const hint = document.getElementById("hint-text");
                hint.innerText = "💡 İpucu: " + q.hints[0];
                hint.classList.remove("hidden");
            }
        };
        opts.appendChild(b);
    });
    document.getElementById("next-btn").classList.add("hidden");
}

document.getElementById("next-btn").onclick = () => {
    currentIdx++;
    if(currentIdx < currentQuestions.length) loadQuestion();
    else { alert("Tebrikler Esra Hocam! Bölümü bitirdin."); location.reload(); }
};

// --- İNTERAKTİF KATLAMA (SİG) ---
function openInfo() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("info-area").classList.remove("hidden");
    animateFold('reset');
}

function animateFold(type) {
    const svg = document.getElementById("svg-folding-area");
    const desc = document.getElementById("info-desc");
    const ns = "http://www.w3.org/2000/svg";
    
    svg.innerHTML = ""; // Sahneyi sıfırla
    
    // --- 1. SABİT ANA ÜÇGEN ---
    const mainTri = document.createElementNS(ns, "polygon");
    mainTri.setAttribute("points", "100,50 40,220 160,220");
    mainTri.style.fill = "rgba(108, 92, 231, 0.05)";
    mainTri.style.stroke = "rgba(162, 155, 254, 0.3)";
    mainTri.style.strokeWidth = "2";
    svg.appendChild(mainTri);

    // --- 2. KATLANAN PARÇA (HAREKETLİ KAPAK) ---
    const folder = document.createElementNS(ns, "polygon");
    folder.style.fill = "rgba(108, 92, 231, 0.4)";
    folder.style.stroke = "#6c5ce7";
    folder.style.strokeWidth = "2";
    folder.style.transition = "transform 0.8s ease-in-out";
    
    let targetTransform, resultInfo, symbols, lineX2;

    if(type === 'yukseklik') {
        // A'dan dik indirmek için sol parçayı katla
        folder.setAttribute("points", "100,50 40,220 100,220"); 
        folder.style.transformOrigin = "100px 135px"; 
        targetTransform = "rotateY(-180deg)";
        lineX2 = "100";
        resultInfo = "Yükseklik: A köşesini hizalayıp B'yi kenar üzerine katladık. [AH] dikliği oluştu!";
        symbols = `<rect x="100" y="210" width="10" height="10" fill="none" stroke="#fdcb6e" stroke-width="2"/><text x="95" y="240" fill="#ff7675" font-weight="bold">H</text>`;
    } 
    else if(type === 'aciortay') {
        // Kenarı kenar üzerine getir (Açıortay)
        folder.setAttribute("points", "100,50 40,220 110,220");
        folder.style.transformOrigin = "105px 135px";
        targetTransform = "rotateY(-150deg) skewY(5deg)"; 
        lineX2 = "120";
        resultInfo = "Açıortay: [AB] kenarını [AC] üzerine gelecek şekilde katladık. [AN] oluştu!";
        symbols = `<circle cx="93" cy="72" r="3" fill="#00b894"/><circle cx="107" cy="72" r="3" fill="#00b894"/><text x="115" y="240" fill="#ff7675" font-weight="bold">N</text>`;
    } 
    else if(type === 'kenarortay') {
        // B'yi C'nin üzerine katla (Kenarortay)
        folder.setAttribute("points", "40,220 100,220 100,135");
        folder.style.transformOrigin = "100px 220px";
        targetTransform = "rotateY(-180deg)";
        lineX2 = "100";
        resultInfo = "Kenarortay: B ve C köşelerini üst üste getirdik. [AD] kenarortayını bulduk!";
        symbols = `<path d="M60 215 L70 225 M130 215 L140 225" stroke="#6c5ce7" stroke-width="3"/><text x="95" y="240" fill="#ff7675" font-weight="bold">D</text>`;
    }

    if(type !== 'reset') {
        svg.appendChild(folder);
        
        // ANİMASYON DÖNGÜSÜ: Katla -> Bekle -> Aç -> İzi Göster
        setTimeout(() => {
            folder.style.transform = targetTransform; // ADIM 2: KATLA
            
            setTimeout(() => {
                folder.style.transform = "rotateY(0deg)"; // ADIM 3: GERİ AÇ
                
                setTimeout(() => {
                    // KAT İZİ (Kırmızı Kesikli Çizgi)
                    const line = document.createElementNS(ns, "line");
                    line.setAttribute("x1", "100"); line.setAttribute("y1", "50");
                    line.setAttribute("x2", lineX2); line.setAttribute("y2", "220");
                    line.style.stroke = "#ff7675"; line.style.strokeWidth = "3"; line.style.strokeDasharray = "5,5";
                    svg.appendChild(line);
                    svg.innerHTML += symbols;
                    desc.innerText = resultInfo;
                }, 800);
            }, 1000);
        }, 100);
    }

    // Köşe Harfleri (A-B-C)
    const labels = `
        <text x="95" y="40" fill="#a29bfe" font-weight="bold">A</text>
        <text x="25" y="235" fill="#a29bfe" font-weight="bold">B</text>
        <text x="165" y="235" fill="#a29bfe" font-weight="bold">C</text>`;
    svg.innerHTML += labels;
}
