function calculateDays() {
    const currentLevel = parseInt(document.getElementById('currentLevel').value);
    const currentExperience = parseInt(document.getElementById('currentExperience').value);
    const dailyCharge = parseInt(document.getElementById('dailyCharge').value);

    if (isNaN(currentLevel) || isNaN(currentExperience) || isNaN(dailyCharge)) {
        document.getElementById('result').innerText = "모든 필드를 올바르게 입력하세요.";
        return;
    }

    const remainingDays = (1320 * (60 - currentLevel) - currentExperience) / (588 + 60 * dailyCharge);
    
    if (remainingDays < 0) {
        document.getElementById('result').innerText = "이미 레벨 60에 도달했습니다!";
    } else {
        document.getElementById('result').innerText = `남은 일수: ${Math.ceil(remainingDays)}일`;
    }
}