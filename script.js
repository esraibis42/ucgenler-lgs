const allQuestions = {
    yardimci: [
        { id: 1, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik1.png", options: ["A) 32", "B) 28", "C) 24", "D) 18"], answer: "A) 32", hints: ["BC tabanı 6 birim, AB 8 birimdir.", "Alan sabit: 6x24 = 8x?"] },
        { id: 2, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik2.png", options: ["A) 4,8", "B) 5,2", "C) 9,6", "D) 10,4"], answer: "C) 9,6", hints: ["Dik kenarlar çarpımı = Hipotenüs x Yükseklik.", "12x16 = 20xh"] },
        { 
            id: 3, 
            text: "Kareli zeminde verilen ABC üçgeninde yükseklikler hangi harfin olduğu noktada kesişir?", 
            image: "images/yukseklik3.png", 
            options: ["A) A", "B) K", "C) L", "D) N"], 
            answer: "C) L", 
            hints: ["Yükseklikler köşelerden karşı kenarlara dik iner.", "Dar açılı üçgenlerde yüksekliklerin kesim noktası üçgenin içindedir."] 
        },
        { 
            id: 4, 
            text: "BFH üçgeninde FH kenarına ait yükseklik kaç santimetredir?", 
            image: "images/yukseklik4.png", 
            options: ["A) 22", "B) 18", "C) 17", "D) 15"], 
            answer: "D) 15", 
            hints: ["Karenin alanı 49 ise bir kenarı 7'dir.", "Dikdörtgenin alanı 180 ve bir kenarı (7+5)=12 ise diğer kenarını bul."] 
        },
        { 
            id: 5, 
            text: "Aşağıda verilen üçgenlerden hangisinde yükseklikler üçgenin bir köşesinde kesişir?", 
            image: "images/yukseklik5.png", 
            options: ["A)", "B)", "C)", "D)"], 
            answer: "C)", 
            hints: ["Yükseklikler sadece DİK üçgenlerde köşede kesişir.", "C şıkkındaki açıları topla: 61 + 29 = 90. Bu bir dik üçgendir!"] 
        },
        { id: 6, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik6.png", options: ["A) 14", "B) 15", "C) 16", "D) 17"], answer: "B) 15", hints: ["Birim say (3, 5, 7) ve topla: 3+5+7 = 15 cm."] },
        { 
            id: 7, 
            text: "Alanı 40 cm² olan AB? üçgeni çizilecektir. '?' yerine hangisi yazılmalıdır?", 
            image: "images/yukseklik7.png", 
            options: ["A) K", "B) L", "C) M", "D) N"], 
            answer: "B) L", 
            hints: ["Alan = (Taban x Yükseklik) / 2", "40 = (10 x h) / 2 ise yüksekliğin (h) 8 birim olması gerekir."] 
        }
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
    
    // İlerleme Çubuğunu Güncelle (Dinamik Yüzde)
    const progressPercent = Math.round(((currentIdx) / currentQuestions.length) * 100);
    updateProgressBar(progressPercent);

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

function updateProgressBar(percent) {
    const fill = document.querySelector(".p-fill");
    const text = document.querySelector(".grid .glass-card.featured span:first-of-type");
    if(fill) fill.style.width = percent + "%";
    if(text && text.innerText.includes("Tamamlandı")) {
        text.innerText = "%" + percent + " Tamamlandı";
    }
}

document.getElementById("next-btn").onclick = () => {
    currentIdx++;
    if(currentIdx < currentQuestions.length) {
        loadQuestion();
    } else { 
        updateProgressBar(100);
        setTimeout(() => {
            alert("Tebrikler Esra Hocam! Bölümü %100 başarıyla bitirdin."); 
            location.reload(); 
        }, 500);
    }
};

// --- İNTERAKTİF KATLAMA SİSTEMİ ---
function openInfo() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("info-area").classList.remove("hidden");
    animateFold('reset');
}

function animateFold(type) {
    const svg = document.getElementById("svg-folding-area");
    const desc = document.getElementById("info-desc");
    const ns = "http://www.w3.org/2000/svg";
    svg.innerHTML = ""; 

    const mainTri = document.createElementNS(ns, "polygon");
    mainTri.setAttribute("points", "100,50 40,220 160,220");
    mainTri.style.fill = "rgba(108, 92, 231, 0.05)";
    mainTri.style.stroke = "rgba(162, 155, 254, 0.2)";
    mainTri.style.strokeWidth = "2";
    svg.appendChild(mainTri);

    const folder = document.createElementNS(ns, "polygon");
    folder.style.fill = "rgba(108, 92, 231, 0.5)";
    folder.style.stroke = "#6c5ce7";
    folder.style.strokeWidth = "2";
    folder.style.transition = "transform 1s ease-in-out";
    
    let targetTransform, resultInfo, symbols, lineX2;

    if(type === 'yukseklik') {
        folder.setAttribute("points", "100,50 40,220 100,220"); 
        folder.style.transformOrigin = "100px 135px"; 
        targetTransform = "rotateY(-180deg)";
        lineX2 = "100";
        resultInfo = "Yükseklik: A köşesini sabit tutup B'yi taban boyunca katladık. [AH] dikliği oluştu!";
        symbols = `<rect x="100" y="210" width="10" height="10" fill="none" stroke="#fdcb6e" stroke-width="2"/><text x="95" y="240" fill="#ff7675" font-weight="bold" font-size="14">H</text>`;
    } 
    else if(type === 'aciortay') {
        folder.setAttribute("points", "100,50 40,220 100,220");
        folder.style.transformOrigin = "100px 50px"; 
        targetTransform = "rotate(25deg)"; 
        lineX2 = "125"; 
        resultInfo = "Açıortay: [AB] kenarını [AC] üzerine tam gelecek şekilde katladık. [AD] açıortayı oluştu!";
        symbols = `<circle cx="92" cy="75" r="3" fill="#00e3fd"/><circle cx="108" cy="75" r="3" fill="#00e3fd"/><text x="120" y="240" fill="#f2ffd0" font-weight="bold" font-size="14">D</text>`;
    }
    else if(type === 'kenarortay') {
        folder.setAttribute("points", "40,220 100,220 100,50"); 
        folder.style.transformOrigin = "100px 135px"; 
        targetTransform = "rotateY(-180deg)";
        lineX2 = "100";
        resultInfo = "Kenarortay: B köşesini tutup C'nin üzerine tam kapattık. Orta nokta D bulundu!";
        symbols = `<path d="M65 215 L75 225 M125 215 L135 225" stroke="#a29bfe" stroke-width="3"/><text x="95" y="240" fill="#ff7675" font-weight="bold" font-size="14">D</text>`;
    }

    if(type !== 'reset') {
        svg.appendChild(folder);
        setTimeout(() => {
            folder.style.transform = targetTransform; 
            setTimeout(() => {
                folder.style.transform = "rotateY(0deg)"; 
                setTimeout(() => {
                    const line = document.createElementNS(ns, "line");
                    line.setAttribute("x1", "100"); line.setAttribute("y1", "50");
                    line.setAttribute("x2", lineX2); line.setAttribute("y2", "220");
                    line.style.stroke = "#ff7675"; line.style.strokeWidth = "3"; line.style.strokeDasharray = "5,5";
                    svg.appendChild(line);
                    svg.innerHTML += symbols;
                    desc.innerText = resultInfo;
                }, 800);
            }, 1200);
        }, 100);
    }

    svg.innerHTML += `
        <text x="95" y="40" fill="#a29bfe" font-weight="bold" font-size="16">A</text>
        <text x="25" y="235" fill="#a29bfe" font-weight="bold" font-size="16">B</text>
        <text x="165" y="235" fill="#a29bfe" font-weight="bold" font-size="16">C</text>`;
}
