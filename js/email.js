function sendMail() {
    var link = "mailto:i.ezugworie@gmail.com"
             + "&subject=" + escape(document.getElementById('mailSubject').value)
             + "&body=" + escape(document.getElementById('mailBody').value);

    window.location.href = link;
}