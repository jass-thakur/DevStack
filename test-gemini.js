const fs = require('fs');
const apiKey = import.meta.env.VITE_API_KEY;
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

async function listModels() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    fs.writeFileSync('d:/stack-spark-08-main/models_list.txt', JSON.stringify(data, null, 2), 'utf8');
    console.log("Models saved to models_list.txt");
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

listModels();
