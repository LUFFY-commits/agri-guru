document.getElementById("inputForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const type = document.getElementById("type").value;
    const potassium = document.getElementById("potassium").value;
    const phosphorus = document.getElementById("phosphorus").value;
    const nitrogen = document.getElementById("nitrogen").value;
    const temperature = document.getElementById("temperature").value;
    const rainfall = document.getElementById("rainfall").value;

    let suggestion = "";

    // Simulated dataset for crops
    const crops = [
        { name: "Wheat", potassium: 50, phosphorus: 40, nitrogen: 30, temperature: 20, rainfall: 300 },
        { name: "Rice", potassium: 40, phosphorus: 30, nitrogen: 20, temperature: 25, rainfall: 200 },
        { name: "Barley", potassium: 30, phosphorus: 20, nitrogen: 10, temperature: 18, rainfall: 100 },
        { name: "Maize", potassium: 45, phosphorus: 35, nitrogen: 25, temperature: 22, rainfall: 250 }
    ];

    // Simulated dataset for fruits
    const fruits = [
        { name: "Apple", potassium: 35, phosphorus: 25, nitrogen: 15, temperature: 15, rainfall: 150 },
        { name: "Banana", potassium: 40, phosphorus: 30, nitrogen: 20, temperature: 27, rainfall: 250 },
        { name: "Grapes", potassium: 30, phosphorus: 20, nitrogen: 15, temperature: 18, rainfall: 100 },
        { name: "Mango", potassium: 50, phosphorus: 40, nitrogen: 30, temperature: 30, rainfall: 350 }
    ];

    // Crop suggestion logic
    if (type === "crop" || type === "both") {
        const cropSuggestion = crops.find(crop =>
            potassium >= crop.potassium && phosphorus >= crop.phosphorus &&
            nitrogen >= crop.nitrogen && temperature >= crop.temperature &&
            rainfall >= crop.rainfall
        );
        if (cropSuggestion) {
            suggestion += `<h3>Suggested Crop: ${cropSuggestion.name}</h3>`;
        } else {
            suggestion += "<h3>No suitable crops found</h3>";
        }
    }

    // Fruit suggestion logic
    if (type === "fruit" || type === "both") {
        const fruitSuggestion = fruits.find(fruit =>
            potassium >= fruit.potassium && phosphorus >= fruit.phosphorus &&
            nitrogen >= fruit.nitrogen && temperature >= fruit.temperature &&
            rainfall >= fruit.rainfall
        );
        if (fruitSuggestion) {
            suggestion += `<h3>Suggested Fruit: ${fruitSuggestion.name}</h3>`;
        } else {
            suggestion += "<h3>No suitable fruits found</h3>";
        }
    }

    document.getElementById("suggestion").innerHTML = suggestion;
});
