

//Funktion som hämtar json fil och returnerar dess data 
async function fetchFile(file) {
    const response = await fetch(file);
    const data = await response.json();

    return data;
}

//Funktion för att sätta ett element som next sibling 
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

