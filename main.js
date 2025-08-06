function typeWriter(text, elementId, speed = 100, startDelay = 0) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    setTimeout(type, startDelay);
}

typeWriter("CHAEMIN LEE.", "typing-name", 80, 0);
typeWriter("PROJECTS", "typing-project", 80, 1000);