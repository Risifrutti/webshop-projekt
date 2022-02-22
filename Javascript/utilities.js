

//Funktion som hämtar json fil och returnerar dess data 
async function fetchFile(file) {
    const response = await fetch(file);
    const data = await response.json();

    return data;
}

