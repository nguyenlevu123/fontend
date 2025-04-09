
const emailInput = document.getElementById('emailInput');
const checkEmailBtn = document.getElementById('checkEmailBtn');
const emailResult = document.getElementById('emailResult');
function isValidEmail(email) {
    const hasAtSymbol = email.includes('@'); 
    const endsWithComOrVn = email.endsWith('.com') || email.endsWith('.vn');
    return hasAtSymbol && endsWithComOrVn ;
}
checkEmailBtn.addEventListener('click', function() {
    const email = emailInput.value.trim();
    if (isValidEmail(email)) {
        emailResult.textContent = 'email hợp lệ!';
        emailResult.className = 'valid';
    } else {
        emailResult.textContent = 'email không hợp lệ!';
        emailResult.className = 'invalid';
    }
});