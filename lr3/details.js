let showBack = false;
document.getElementById('toggleView').addEventListener('click', function() {
    showBack = !showBack;
    if (showBack) {
        document.getElementById('detailImage').style.display = 'none';
        document.getElementById('detailImageBack').style.display = 'block';
        this.textContent = "Show Front";
    } else {
        document.getElementById('detailImage').style.display = 'block';
        document.getElementById('detailImageBack').style.display = 'none';
        this.textContent = "Show Back";
    }
});