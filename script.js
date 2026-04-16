const allQuestions = {
    // 1. ÜNİTE: YARDIMCI ELEMANLAR
    yardimci: [
        { id: 1, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik1.png", options: ["A) 32", "B) 28", "C) 24", "D) 18"], answer: "A) 32", hints: ["Alan sabit: 6x24 = 8x?"] },
        { id: 2, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik2.png", options: ["A) 4,8", "B) 5,2", "C) 9,6", "D) 10,4"], answer: "C) 9,6", hints: ["Dik kenarlar çarpımı = Hipotenüs x Yükseklik."] },
        { id: 3, text: "Yükseklikler hangi noktada kesişir?", image: "images/yukseklik3.png", options: ["A) A", "B) K", "C) L", "D) N"], answer: "C) L", hints: ["Dar açılı üçgenlerde kesim noktası içeridedir."] },
        { id: 4, text: "FH kenarına ait yükseklik kaç cm'dir?", image: "images/yukseklik4.png", options: ["A) 22", "B) 18", "C) 17", "D) 15"], answer: "D) 15", hints: ["Karenin alanı 49 ise kenarı 7'dir."] },
        { id: 5, text: "Hangisinde yükseklikler bir köşede kesişir?", image: "images/yukseklik5.png", options: ["A)", "B)", "C)", "D)"], answer: "C)", hints: ["Sadece DİK üçgenlerde yükseklikler köşede kesişir."] },
        { id: 6, text: "Birim kareli zeminde çevre kaç cm'dir?", image: "images/yukseklik6.png", options: ["A) 14", "B) 15", "C) 16", "D) 17"], answer: "B) 15", hints: ["Birimleri tek tek sayıp toplayın."] },
        { id: 7, text: "Alan 40 cm² ise '?' yerine hangisi gelmelidir?", image: "images/yukseklik7.png", options: ["A) K", "B) L", "C) M", "D) N"], answer: "B) L", hints: ["(10 x h) / 2 = 40 denklemini çöz."] }
    ],

    // 2. ÜNİTE: EŞLİK (Cevaplar: 26, 40, 56 olarak güncellendi!)
    eslik: [
        { id: 1, text: "ABC ≅ LMK olduğuna göre ABC üçgeninin çevre uzunluğu kaçtır?", image: "images/eslik1.png", options: ["A) 24", "B) 26", "C) 28", "D) 31"], answer: "B) 26", hints: ["Karşılıklı kenarlar: 7 + 11 + 8 = 26"] },
        { id: 2, text: "Başlangıçtaki kitaplıklardan birinin çevresi kaç desimetredir?", image: "images/eslik2.png", options: ["A) 20", "B) 28", "C) 40", "D) 44"], answer: "C) 40", hints: ["Kısa: 8, Uzun: 12. Çevre: (8+12)x2 = 40"] },
        { id: 3, text: "Şekil 1'deki dikdörtgenin çevresi kaç santimetredir?", image: "images/eslik3.png", options: ["A) 56", "B) 48", "C) 42", "D) 36"], answer: "A) 56", hints: ["Karenin kenarı 6. Dikdörtgen: 14x14 karedir. 14x4 = 56"] },
        { id: 4, text: "Karıncanın aldığı toplam yol kaç santimetredir?", image: "images/eslik4.png", options: ["A) 36", "B) 48", "C) 54", "D) 72"], answer: "D) 72", hints: ["Eksik kenarları tamamla ve topla."] }
    ],

    // 3. ÜNİTE: BENZERLİK
    benzerlik: [
        { id: 1, text: "Büyük üçgenin küçük üçgene benzerlik oranı kaçtır?", image: "images/benzerlik2.png", options: ["A) 1/2", "B) 2/3", "C) 3/4", "D) 4/5"], answer: "C) 3/4", hints: ["Kenarları oranla: 24/18 = 4/3 veya 3/4"] },
        { id: 2, text: "Kırmızı kartonun çevresinin uzunluğu kaç santimetredir?", image: "images/benzerlik3.png", options: ["A) 32", "B) 34", "C) 36", "D) 40"], answer: "B) 34", hints: ["Benzerlik oranını kullan."] },
        { id: 3, text: "Verilenlere göre x + y toplamı kaçtır?", image: "images/benzerlik5.png", options: ["A) 22", "B) 24", "C) 28", "D) 30"], answer: "C) 28", hints: ["Oran kurup x ve y'yi bul."] },
        { id: 4, text: "Çubuk ile duvar arasındaki uzaklık (x) kaç cm'dir?", image: "images/benzerlik7.png", options: ["A) 150", "B) 200", "C) 250", "D) 300"], answer: "B) 200", hints: ["Tales teoremi: 50 / (50+x) = 24 / 120"] }
    ],

    esitsizlik: [], "aci-kenar": [], pisagor: []
};

let currentQuestions = [];
let currentIdx = 0;

// --- ÜNİTE SEÇİM VE AKIŞ FONKSİYONLARI ---
function openTopicSelection() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("selection-area").classList.remove("hidden");
}

function startEslikFlow() { showInfoScreen('eslik'); }
function startBenzerlikFlow() { showInfoScreen('benzerlik'); }

function showInfoScreen(topic) {
    const infoImg = (topic === 'eslik') ? "images/eslikbilgi.png" : "images/benzerlikbilgi.png";
    document.getElementById("selection-area").classList.add("hidden");
    document.getElementById("quiz-area").classList.remove("hidden");
    
    document.getElementById("image-container").innerHTML = `
        <div style="text-align:center;">
            <img src="${infoImg}" style="width:100%; border-radius:15px; margin-bottom:15px;">
            <button class="btn-primary" onclick="startQuiz('${topic}')">Anladım, Sorulara Geç! 🚀</button>
        </div>`;
    document.getElementById("question-text").innerText = "Bilgi Ekranı";
    document.getElementById("options-container").innerHTML = "";
    document.getElementById("next-btn").classList.add("hidden");
}

function startQuiz(topic) {
    currentQuestions = allQuestions[topic];
    currentIdx = 0;
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentIdx];
    document.getElementById("question-text").innerText = q.text;
    document.getElementById("image-container").innerHTML = `<img src="${q.image}" style="width:100%; border-radius:15px; display:block; margin:auto;">`;
    
    // İlerleme Çubuğu Güncelleme
    const percent = Math.round((currentIdx / currentQuestions.length) * 100);
    const fill = document.querySelector(".p-fill");
    if(fill) fill.style.width = percent + "%";
    const progText = document.getElementById("progress-text");
    if(progText) progText.innerText = "%" + percent + " Tamamlandı";

    const opts = document.getElementById("options-container");
    opts.innerHTML = "";
    q.options.forEach(opt => {
        const b = document.createElement("button");
        b.className = "option-btn";
        b.innerText = opt;
        b.onclick = () => {
            if(opt.includes(q.answer)) {
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
    else { alert("Tebrikler Esra Hocam! Üniteyi bitirdin."); location.reload(); }
};

// --- İNTERAKTİF KATLAMA SİSTEMİ ---
function openInfo() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("info-area").classList.remove("hidden");
    animateFold('reset');
}

function animateFold(type) {
    const svg = document.getElementById("svg-folding-area");
    const ns = "http://www.w3.org/2000/svg";
    svg.innerHTML = ""; 
    const mainTri = document.createElementNS(ns, "polygon");
    mainTri.setAttribute("points", "100,50 40,220 160,220");
    mainTri.style.fill = "rgba(108, 92, 231, 0.05)";
    mainTri.style.stroke = "rgba(162, 155, 254, 0.2)";
    svg.appendChild(mainTri);

    const folder = document.createElementNS(ns, "polygon");
    folder.setAttribute("points", "100,50 40,220 100,220");
    folder.style.fill = "rgba(124, 58, 237, 0.5)";
    folder.style.transition = "transform 1s";
    
    let transform = "", lineX2 = "100";
    if(type === 'aciortay') {
        folder.style.transformOrigin = "100px 50px";
        transform = "rotate(25deg)";
        lineX2 = "125";
    } else if(type === 'yukseklik') {
        folder.style.transformOrigin = "100px 135px";
        transform = "rotateY(-180deg)";
    }

    if(type !== 'reset') {
        svg.appendChild(folder);
        setTimeout(() => {
            folder.style.transform = transform;
            setTimeout(() => {
                const line = document.createElementNS(ns, "line");
                line.setAttribute("x1","100"); line.setAttribute("y1","50");
                line.setAttribute("x2",lineX2); line.setAttribute("y2","220");
                line.style.stroke = "red"; line.style.strokeDasharray = "5,5";
                svg.appendChild(line);
            }, 1000);
        }, 100);
    }
}
