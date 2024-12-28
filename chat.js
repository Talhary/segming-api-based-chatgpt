import axios from 'axios';
import fs from 'fs';
import path from 'path';
import 'dotenv/config'
// helper function to help you convert your local images into base64 format
async function convertImageToBase64(imagePath) {
    try {
        const data = fs.readFileSync(imagePath, { encoding: 'base64' });
        return `data:image/jpeg;base64,${data.toString('base64')}`;
    } catch (error) {
        console.error('Error reading file:', error);
    }
}
// console.log(await convertImageToBase64('./cube.png'))
if (!fs.existsSync('./history')) {
    fs.mkdirSync('./history')
}
const CHAT_FOLDER = path.join('history')
const api_key = process.env.SG_API_KEY;
const url = "https://api.segmind.com/v1/gpt-4o";


// console.log(data.messages[1].content)
const chat = async (msg, img, id) => {
    try {
        if (!msg || !id) return { msg: 'Please provide id and msg', err: true }
        const data = {
            "messages": []
        }
        const chat_path = path.join(CHAT_FOLDER, `${id}.json`)
        if (!fs.existsSync(chat_path)) {
            fs.writeFileSync((chat_path), JSON.stringify([
                {
                    "role": "system",
                    "content": "you are helpful assitant to teach about website vulnurabilites and ethical hacking stuff. You will only respond in pure html(don't add head docktype or these ``` just inner body) and use tailwindcss for styling. Don't do this <div class='flex justify-center items-center min-h-screen bg-gray-100' or any type of centering content. just return the inner text. website is in darkmode so alway use brighter colours. you don't need to write this ```html at the start.  You can also use <script></script> tag for adding javascript. make sure to connect html and javascript"
                }
            ]))
        }
        const old_chat = JSON.parse(fs.readFileSync(chat_path, { encoding: "utf-8" }))
        data.messages.push(...old_chat)
        if (!img)
            data.messages.push({
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": msg
                    },
                ]
            })
        else {
            data.messages.push({
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": msg
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": img
                        }
                    }
                ]
            })
        }
        
        const response = await axios.post(url, data, { headers: { 'x-api-key': api_key } });
        data.messages.push({"role":"assistant",content:response.data.choices[0].message?.content})
        fs.writeFileSync(chat_path, JSON.stringify(data.messages))
        console.log(response.data.choices[0].message);
        return response.data.choices[0].message
    } catch (error) {
        console.error(error)
        return {err:true,msg:error?.response || 'error'}
    }
}

export  {chat}

chat('give me a table of students data','','q232')