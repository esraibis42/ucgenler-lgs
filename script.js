const allQuestions = {
    yardimci: [
        { id: 1, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik1.png", options: ["A) 32", "B) 28", "C) 24", "D) 18"], answer: "A) 32", hints: ["Alan sabit: 6x24 = 8x?"] },
        { id: 2, text: "Soruyu resme göre cevaplayınız:", image: "images/yukseklik2.png", options: ["A) 4,8", "B) 5,2", "C) 9,6", "D) 10,4"], answer: "C) 9,6", hints: ["12x16 = 20xh"] },
        { id: 3, text: "Yükseklikler hangi noktada kesişir?", image: "images/yukseklik3.png", options: ["A) A", "B) K", "C) L", "D) N"], answer: "C) L", hints: ["Dar açılı üçgenlerde kesim noktası içeridedir."] },
        { id: 4, text: "FH kenarına ait yükseklik kaç cm'dir?", image: "images/yukseklik4.png", options: ["A) 22", "B) 18", "C) 17", "D) 15"], answer: "D) 15", hints: ["Karenin alanı 49 ise kenarı 7'dir."] },
        { id: 5, text: "Hangisinde yükseklikler bir köşede kesişir?", image: "images/yukseklik5.png", options: ["A)", "B)", "C)", "D)"], answer: "C)", hints: ["Sadece DİK üçgenlerde yükseklikler köşede kesişir."] },
        { id: 6, text: "Birim kareli zeminde çevre kaç cm'dir?", image: "images/yukseklik6.png", options: ["A) 14", "B) 15", "C) 16", "D) 17"], answer: "B) 15", hints: ["Birimleri tek tek sayıp toplayın."] },
        { id: 7, text: "Alan 40 cm² ise '?' yerine hangisi gelmelidir?", image: "images/yukseklik7.png", options: ["A) K", "B) L", "C) M", "D) N"], answer: "B) L", hints: ["(10 x h) / 2 = 40 denklemini çöz."] }
    ],
    eslik: [
        { id: 1, text: "ABC ≅ LMK olduğuna göre ABC üçgeninin çevre uzunluğu kaçtır?", image: "images/eslik1.png", options: ["A) 24", "B) 26", "C) 28", "D) 31"], answer: "B) 26", hints: ["Karşılıklı kenarlar: 7 + 11 + 8 = 26"] },
        { id: 2, text: "Başlangıçtaki kitaplıklardan birinin çevresi kaç desimetredir?", image: "images/eslik2.png", options: ["A) 20", "B) 28", "C) 40", "D) 44"], answer: "C) 40", hints: ["Kısa: 8, Uzun: 12. Çevre: (8+12)x2 = 40"] },
        { id: 3, text: "Şekil 1'deki dikdörtgenin çevresi kaç santimetredir?", image: "images/eslik3.png", options: ["A) 56", "B) 48", "C) 42", "D) 36"], answer: "A) 56", hints: ["Karenin kenarı 6. Dikdörtgen: 14x14 karedir. 14x4 = 56"] },
        { id: 4, text: "Karıncanın aldığı toplam yol kaç santimetredir?", image: "images/eslik4.png", options: ["A) 36", "B) 48", "C) 54", "D) 72"], answer: "D) 72", hints: ["Eksik kenarları tamamla ve topla."] }
    ],
    benzerlik: [
        { id: 1, text: "Büyük üçgenin küçük üçgene benzerlik oranı kaçtır?", image: "images/benzerlik1.png", options: ["1", "2", "3", "4"], answer: "2", hints: ["8/4 veya 10/5 oranına bakınız."] },
        { id: 2, text: "Görsele göre benzerlik oranı hangisi olabilir?", image: "images/benzerlik2.png", options: ["A) 1/2", "B) 2/3", "C) 3/4", "D) 4/5"], answer: "B) 2/3", hints: ["18/24 oranını sadeleştirin."] },
        { id: 3, text: "Kırmızı kartonun çevresinin uzunluğu kaç santimetredir?", image: "images/benzerlik3.png", options: ["A) 32", "B) 34", "C) 36", "D) 40"], answer: "C) 36", hints: ["15/12 oranını kullanarak çevreyi bulun."] },
       { 
        id: 4, 
        text: "Verilen dik üçgenlere göre |DE| + |EF| toplamı kaç santimetredir?", 
        image: "images/benzerlik4.png", 
        options: ["A) 46", "B) 54", "C) 92", "D) 108"], 
        answer: "C) 92", 
        hints: ["Benzerlik oranı 3/2'dir. DE = 24, EF = 45 bulunur (Görseldeki değerlere göre tekrar hesapla)."] 
    },
    { 
        id: 5, 
        text: "Verilen benzerlik ilişkisine göre x + y toplamı kaçtır?", 
        image: "images/benzerlik5.png", 
        options: ["A) 28", "B) 24", "C) 22", "D) 20"], 
        answer: "A) 28", 
        hints: ["8/12 benzerlik oranını kullan: x = 18, y = 16 bulunur (8/12 = 12/x ve 8/12 = y/24)."] 
    },
    { 
        id: 6, 
        text: "Kırmızı ve sarı bölgelerin benzer olması için en az kaç tane birim kare sarıya boyanmalıdır?", 
        image: "images/benzerlik6.png", 
        options: ["A) 9", "B) 10", "C) 12", "D) 16"], 
        answer: "C) 12", 
        hints: ["Kırmızı bölge 3x4'lük bir alan. Benzerlik oranına göre sarı bölgeyi oluşturun."] 
    }
        { id: 7, text: "Çubuk ile duvar arasındaki uzaklık (x) kaç cm'dir?", image: "images/benzerlik7.png", options: ["A) 150", "B) 200", "C) 250", "D) 300"], answer: "B) 200", hints: ["50 / (50+x) = 24 / 120"] }
    ]
};

let currentQuestions = [];
let currentIdx = 0;

window.openTopicSelection = function() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("selection-area").classList.remove("hidden");
};

window.showInfoScreen = function(topic) {
    const infoImg = (topic === 'eslik') ? "images/eslikbilgi.png" : "images/benzerlikbilgi.png";
    document.getElementById("selection-area").classList.add("hidden");
    document.getElementById("quiz-area").classList.remove("hidden");
    document.getElementById("image-container").innerHTML = `
        <div style="text-align:center;">
            <img src="${infoImg}" style="width:100%; border-radius:15px; margin-bottom:15px; border: 2px solid var(--primary);">
            <button class="btn-primary" onclick="window.startQuiz('${topic}')" style="width:100%;">Sorulara Geç! 🚀</button>
        </div>`;
    document.getElementById("question-text").innerText = "Bilgi Ekranı";
    document.getElementById("options-container").innerHTML = "";
};

window.startQuiz = function(topic) {
    currentQuestions = allQuestions[topic];
    currentIdx = 0;
    loadQuestion();
};

function loadQuestion() {
    const q = currentQuestions[currentIdx];
    document.getElementById("question-text").innerText = q.text;
    document.getElementById("image-container").innerHTML = `<img src="${q.image}" style="width:100%; border-radius:15px; display:block; margin:auto;">`;
    
    const percent = Math.round((currentIdx / currentQuestions.length) * 100);
    const fill = document.querySelector(".p-fill");
    if(fill) fill.style.width = percent + "%";

    const opts = document.getElementById("options-container");
    opts.innerHTML = "";
    q.options.forEach(opt => {
        const b = document.createElement("button");
        b.className = "option-btn";
        b.style.cssText = "width:100%; padding:15px; margin:5px 0; border-radius:12px; background:rgba(255,255,255,0.05); color:white; cursor:pointer;";
        b.innerText = opt;
        b.onclick = () => {
            if(opt.includes(q.answer)) {
                b.style.background = "#00b894";
                document.getElementById("next-btn").classList.remove("hidden");
            } else {
                b.style.background = "#ff7675";
            }
        };
        opts.appendChild(b);
    });
    document.getElementById("next-btn").classList.add("hidden");
}

document.getElementById("next-btn").onclick = () => {
    currentIdx++;
    if(currentIdx < currentQuestions.length) loadQuestion();
    else { alert("Tebrikler! Üniteyi bitirdin."); location.reload(); }
};

window.openInfo = function() {
    document.getElementById("menu-area").classList.add("hidden");
    document.getElementById("info-area").classList.remove("hidden");
};

window.animateFold = function(type) {
    const svg = document.getElementById("svg-folding-area");
    const ns = "http://www.w3.org/2000/svg";
    svg.innerHTML = ""; 
    const folder = document.createElementNS(ns, "polygon");
    folder.setAttribute("points", "100,50 40,220 100,220");
    folder.style.fill = "rgba(124, 58, 237, 0.5)";
    folder.style.transition = "transform 1s";
    let transform = "";
    if(type === 'aciortay') transform = "rotate(25deg)";
    else if(type === 'yukseklik') transform = "rotateY(-180deg)";
    svg.appendChild(folder);
    setTimeout(() => { folder.style.transform = transform; }, 100);
};
