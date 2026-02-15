function generateProtocol() {
    const weight = parseFloat(document.getElementById('weight').value);
    const goal = document.getElementById('goal').value;
    const resultDiv = document.getElementById('result');

    if (!weight) return alert("Please enter weight.");

    // AFC 2026 Scientific Constants
    const protein = Math.round(weight * 2.2);
    const fat = Math.round(weight * 0.7);
    const maintenance = weight * 24 * 1.4; // Male Base
    const deficitKcal = Math.round(maintenance * 0.8);
    const carbs = Math.round((deficitKcal - (protein * 4 + fat * 9)) / 4);

    // Peak Week Math
    const depleteCarb = Math.round(weight * 0.5);
    const loadCarb = Math.round(weight * 5);

    document.getElementById('macroDisplay').innerHTML = `
        <div class="macro-item"><span>KCAL</span><br><b>${deficitKcal}</b></div>
        <div class="macro-item"><span>PRO</span><br><b>${protein}g</b></div>
        <div class="macro-item"><span>CARB</span><br><b>${carbs}g</b></div>
        <div class="macro-item"><span>FAT</span><br><b>${fat}g</b></div>
    `;

    if (goal === 'peak') {
        document.getElementById('peakDisplay').innerHTML = `
            <h3 style="font-size:0.7rem; color:var(--gold); margin-bottom:10px;">PEAKING PHASES</h3>
            <p style="font-size:0.75rem;">Days 1-3 (Deplete): ${depleteCarb}g Carbs | 8L Water</p>
            <p style="font-size:0.75rem;">Days 4-5 (Load): ${loadCarb}g Carbs | 4L Water</p>
        `;
    } else {
        document.getElementById('peakDisplay').innerHTML = "";
    }

    resultDiv.style.display = 'block';
}
