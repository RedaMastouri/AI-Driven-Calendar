function emailCurrentPage() {
    //window.location.href = "mailto:?subject=" + document.title + "&body=" + encodeURI(document.location);
    //window.open('mailto:test@example.com?subject=subject&body=body');
    document.documentElement.innerHTML
    subject = "Send my today's To-do List! ";
    email = "reda.mastouri@rutgers.edu";
    window.open('mailto:'+email+'?subject='+subject+'&body='+escape(document.getElementById('photo').value));



}
