if ("webkitSpeechRecognition" in window) {
    let speechRecognition = new webkitSpeechRecognition();
    let final_transcript = "";

    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = document.querySelector("#select_dialect").value;

    speechRecognition.onstart = () => {
        document.querySelector("#status").style.display = "block";
    };
    speechRecognition.onerror = () => {
        document.querySelector("#status").style.display = "none";
        console.log("Speech Recognition Error");
    };
    speechRecognition.onend = () => {
        document.querySelector("#status").style.display = "none";
        console.log("Speech Recognition Ended");
    };

    speechRecognition.onresult = (event) => {
        let interim_transcript = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;
            } else {
                interim_transcript += event.results[i][0].transcript;
            }
        }
        document.querySelector("#final").innerHTML = final_transcript;
        document.querySelector("#interim").innerHTML = interim_transcript;
    };

    document.querySelector("#start").onclick = () => {
        speechRecognition.start();
    };
    document.querySelector("#stop").onclick = () => {
        speechRecognition.stop();
    };
} else {
    console.log("Speech Recognition Not Available");
}

function AddTo() {
    if (document.getElementById("typefinal").value != "") {
        // Create an "li" node:
        const node = document.createElement("li");

        // Create a text node:
        var textnode = document.createTextNode(document.getElementById("typefinal").value);

        // Append the text node to the "li" node:
        node.appendChild(textnode);

        // Append the "li" node to the list:
        document.getElementById("myList").appendChild(node);

        document.getElementById("typefinal").value = "";
    }

    if (document.getElementById("final").value) {
        // Create an "li" node:
        const node = document.createElement("li");

        // Create a text node:
        var textnode = document.createTextNode(document.getElementById("final").value);

        // Append the text node to the "li" node:
        node.appendChild(textnode);

        // Append the "li" node to the list:
        document.getElementById("myList").appendChild(node);

        document.getElementById("typefinal").value = "";
    }
}; 
