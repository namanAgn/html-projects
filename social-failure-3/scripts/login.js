function check_details(username, password) {
    const entered_username = document.getElementsByClassName(".username-input").value;
    const entered_password = document.getElementsByClassName(".password-input").value;
    
    const failure_paragraph = document.getElementsByClassName(".failure-paragraph")

    if (entered_username == username && entered_password == password) {
        failure_paragraph.innerText = `Signing in as ${username}`
        window.location.href = 'http://127.0.0.1:5500/home.html'
    } else if (entered_username != username && entered_password != password) {
        failure_paragraph.innerText = "Incorrect username and password."
    } else if (entered_username != username && entered_password == password) {
        failure_paragraph.innerText = "Incorrect username"
    } else if (entered_username == username && entered_password == password) {
        failure_paragraph.innerText = "Incorrect password"
    }
}