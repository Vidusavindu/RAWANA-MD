const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined? "BmVQCKwT#6l4Kzi2HT7DG5oq_Qn_GbhBf9vQUMJGbb4ZruOhI-Xw":process.env.SESSION_ID,
MONGODB: process.env.MONGODB || "mongodb://mongo:lgsbZRFLSAekRXNmLAfExvcDcGuZeyoC@yamanote.proxy.rlwy.net:49819",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDzyQ7tnQkquWX8bc1y9TE0auCHbC_QQO8",
tokenm: process.env.GITHUB_TOKEN || "false",
repo: process.env.GITHUB_REPO || "RAWANA-MD",
}; 
