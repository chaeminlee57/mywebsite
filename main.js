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
typeWriter("Real-time Stock Sentiment Analyzer", "typing-project1-name", 30, 1000);
typeWriter("Oftentimes being sharp about how investors feel toward a stock is as crucial as understanding a company's future value. As somewhat of a trader myself, I realized there wasn't a single platform that would summarize all the bullish/bearish sentiments from platforms like Reddit, Threads, etc. and compare their sentiment/claims with facts and historical data. Using AI, this is now possible. This project aims to update the different sentiments surrounding a particular stock in real-time, while also updating with credible news sources to rebuttal certain greedy/fearmongering statements. My ambition for this project is to ultimately create an AI-simulated LIVE debate between bullish and bearish sentiments. This will streamline the decision-making process for many investors, particularly beginner ones, who can easily monitor the debate and see who they agree with more.", "typing-project1-desc", 3, 1000);
typeWriter("Synthetic Fraudulent Data Generator", "typing-project2-name", 30, 1000);