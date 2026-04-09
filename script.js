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
    
    svg.innerHTML = "";
    svg.classList.remove("triangle-animate");
    if(type !== 'reset') {
        void svg.offsetWidth;
        svg.classList.add("triangle-animate");
    }

    // Üçgen Çizimi
    const triangle = document.createElementNS(ns, "polygon");
    triangle.setAttribute("points", "100,50 40,220 160,220");
    triangle.setAttribute("fill", "rgba(108, 92, 231, 0.1)");
    triangle.setAttribute("stroke", "#a29bfe");
    triangle.setAttribute("stroke-width", "3");
    svg.appendChild(triangle);

    // Harfler
    const labels = [{t:"A",x:95,y:40}, {t:"B",x:25,y:235}, {t:"C",x:165,y:235}];
    labels.forEach(l => {
        const txt = document.createElementNS(ns, "text");
        txt.setAttribute("x", l.x); txt.setAttribute("y", l.y);
        txt.textContent = l.t; txt.style.fill = "#a29bfe";
        svg.appendChild(txt);
    });

    if(type === 'reset') return;

    const group = document.createElementNS(ns, "g");
    group.style.opacity = "0"; group.style.transition = "opacity 0.6s ease";
    svg.appendChild(group);

    const line = document.createElementNS(ns, "line");
    line.setAttribute("x1", "100"); line.setAttribute("y1", "50");
    line.style.stroke = "#ff7675"; line.style.strokeWidth = "3"; line.style.strokeDasharray = "5,5";

    if(type === 'yukseklik') {
        line.setAttribute("x2", "100"); line.setAttribute("y2", "220");
        group.appendChild(line);
        // Diklik karesi
        const rect = document.createElementNS(ns, "rect");
        rect.setAttribute("x", "100"); rect.setAttribute("y", "210"); rect.setAttribute("width", "10"); rect.setAttribute("height", "10");
        rect.style.fill = "none"; rect.style.stroke = "#fdcb6e";
        group.appendChild(rect);
        desc.innerText = "Yükseklik: AH doğrusu tabana 90 derecelik açıyla iner.";
    } 
    else if(type === 'aciortay') {
        line.setAttribute("x2", "125"); line.setAttribute("y2", "220");
        group.appendChild(line);
        group.innerHTML += `<circle cx="93" cy="70" r="3" fill="#00b894"/><circle cx="107" cy="70" r="3" fill="#00b894"/>`;
        desc.innerText = "Açıortay: AN doğrusu A açısını tam ortadan ikiye böler.";
    } 
    else if(type === 'kenarortay') {
        line.setAttribute("x2", "100"); line.setAttribute("y2", "220");
        group.appendChild(line);
        group.innerHTML += `<path d="M60 215 L75 225 M125 215 L140 225" stroke="#a29bfe" stroke-width="2"/>`;
        desc.innerText = "Kenarortay: AD doğrusu BC kenarını iki eş parçaya böler.";
    }

    setTimeout(() => { group.style.opacity = "1"; }, 1200);
}
