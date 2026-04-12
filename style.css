@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&family=Poppins:wght@400;600&display=swap');

:root {
    --grad-main: linear-gradient(135deg, #7C3AED, #3B82F6, #22D3EE);
    --grad-accent: linear-gradient(90deg, #F472B6, #A78BFA);
    --glass-bg: rgba(255, 255, 255, 0.7);
    --neon-glow: 0 0 20px rgba(124, 58, 237, 0.3);
    --text-dark: #0F172A;
}

body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    /* Hareketli Arka Plan Gradiyenti */
    background: linear-gradient(-45deg, #fdfbfb, #ebedee, #e2e8f0, #fcf8f2);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    display: flex; justify-content: center; min-height: 100vh;
    overflow-x: hidden;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.app-wrapper {
    width: 100%; max-width: 1000px; padding: 40px 20px;
    position: relative;
}

/* Dekoratif Uçuşan Şekiller */
.shape {
    position: absolute; z-index: -1; filter: blur(40px); opacity: 0.4;
    animation: float 10s infinite alternate ease-in-out;
}

@keyframes float {
    from { transform: translateY(0) rotate(0deg); }
    to { transform: translateY(-40px) rotate(20deg); }
}

/* --- HERO SECTION --- */
.hero { text-align: center; margin-top: 20px; }

h1 {
    font-family: 'Sora', sans-serif; font-size: 4.5rem; font-weight: 800;
    background: var(--grad-main); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    margin: 10px 0; filter: drop-shadow(0 10px 10px rgba(0,0,0,0.05));
}

.btn-pulse {
    background: var(--grad-accent); color: white; border: none;
    padding: 20px 50px; border-radius: 50px; font-weight: 800; font-size: 20px;
    cursor: pointer; box-shadow: 0 10px 30px rgba(244, 114, 182, 0.4);
    animation: pulse 2s infinite; transition: 0.3s;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(244, 114, 182, 0.7); }
    70% { box-shadow: 0 0 0 20px rgba(244, 114, 182, 0); }
    100% { box-shadow: 0 0 0 0 rgba(244, 114, 182, 0); }
}

/* --- GLASS CARDS --- */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px; }

.glass-card {
    background: var(--glass-bg); backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.4); border-radius: 30px;
    padding: 30px; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative; box-shadow: 0 15px 35px rgba(0,0,0,0.05);
}

.glass-card:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: #7C3AED; box-shadow: 0 25px 50px rgba(124, 58, 237, 0.2);
}

.featured { border: 2.5px solid #7C3AED; transform: scale(1.05); z-index: 2; }

/* Progress Bar */
.p-bar { width: 100%; height: 10px; background: #e2e8f0; border-radius: 20px; margin: 20px 0; overflow: hidden; }
.p-fill { height: 100%; background: var(--grad-main); border-radius: 20px; width: 0; transition: width 1s; }

/* Footer */
footer {
    text-align: center; margin-top: 80px; padding: 20px;
    background: rgba(255,255,255,0.3); border-radius: 20px;
    font-weight: 600; color: var(--text-dark);
}
