import fs  from 'fs';
import jsdom  from 'jsdom';
import axios  from 'axios';
const { JSDOM } = jsdom;

// Function to count words
function countWords(text) {
  return text.trim().split(/\s+/).length;
}
const humanizeStart = async (text)=>{
    const res = await fetch("https://humanizer.pro/api/trpc/byPass.generate?batch=1", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "cookie": "first_visit_url=https%3A%2F%2Fhumanizer.pro%2F; __Host-next-auth.csrf-token=8127d04fdfac239e9e58205552bfce98e7061cc1ffc875f959f81db67e6d13d2%7C1db9628318917fda6a25d16ca1faae27abaed3fea9c11e741b2182797fe8dfe6; _gcl_au=1.1.117156548.1735414658; _ga=GA1.1.476621245.1735414659; __Secure-next-auth.callback-url=https%3A%2F%2Fhumanizer.pro%2Fsign-in-google%3ForiginUrl%3Dhttps%253A%252F%252Fhumanizer.pro%252F; $user-info=%7B%22id%22%3A%22cm57rtmrd00nwon3ts0tfcn05%22%2C%22name%22%3A%22Technical%20Talha%22%2C%22email%22%3A%22talhariaz5425869%40gmail.com%22%2C%22firstName%22%3A%22Technical%22%2C%22lastName%22%3A%22Talha%22%2C%22image%22%3A%22https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocJ92SuNZdMAHT2w0ImVI8hoDhOLKF71sdnEYOzWmKGtV1ISop0%3Ds96-c%22%7D; user_group=156; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..-F4YXPhXbFrrdAyI.s3FzJFgfnXDCTyL3kPyab1Ga4FBXuo5kHkKtpLFTJPFzBKj76T14ZCSc1uoKKeB-vOWystEMKA4UXySxgmx_QNSzgtXy6OnHaDUFLnrJkD2njdBbU-bxI49-TpBffhmZJvtP9aVw4XWReLUsOQKaE11bAG4B6udmAsi-pf7ld3XYJbVaPvcnBVesk4LPjIMaZZ972fYYn02dR4wosTz8SJtMUfBqZqZ_Y9492lcsq4-Miqbgl7vpfZNwla91EIDF42h98ULhdEb8j0PkKNmkGtM9W2GJdY47SUHTJxR26CSxxHJeQ--DAEU4_5IW8sVq3RgcmmDerPddVPwe0s_bFPkv3UMak1hWHW-r7ttobv4sZ8DCN-lonq_hG_c5qZNTnAQ-crqGswEOBAHhDa8UIDcfu2AIrmGYc2uO-usKBAUUpU4Cf6j-b0J7q8pftX2ichw7Jsdu-GTzVdnDwMrX6Xd4Iue_eucZdV1eiaTI-5ohEWCRtjUDQWyuayxVf0LZCdTBqrxhA3OUFIFUeB8Y70w5kk7CGVv7EeaTzdWJRMgLcfvo69wJb6XQ4VzJQQwKROA2vsTrnXWRaU6eW06DMJU.-laxqo3OKaMo0I17TafROg; _ga_YD0ZN46VF7=GS1.1.1735414658.1.1.1735416429.0.0.0",
          "Referer": "https://humanizer.pro/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": JSON.stringify({
            '0': {
              json: {
                text: text,
                source: 'web',
                modelType: 'latest'
              }
            }
          }),
        "method": "POST"
      });
      const data = await res.json()
      console.log(data)
}
const humanizerQueue = async (id)=>{
    const res = await fetch("https://humanizer.pro/api/trpc/byPass.retrieval?batch=1", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-GB,en;q=0.9,en-US;q=0.8",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "cookie": "first_visit_url=https%3A%2F%2Fhumanizer.pro%2F; __Host-next-auth.csrf-token=8127d04fdfac239e9e58205552bfce98e7061cc1ffc875f959f81db67e6d13d2%7C1db9628318917fda6a25d16ca1faae27abaed3fea9c11e741b2182797fe8dfe6; _gcl_au=1.1.117156548.1735414658; _ga=GA1.1.476621245.1735414659; __Secure-next-auth.callback-url=https%3A%2F%2Fhumanizer.pro%2Fsign-in-google%3ForiginUrl%3Dhttps%253A%252F%252Fhumanizer.pro%252F; $user-info=%7B%22id%22%3A%22cm57rtmrd00nwon3ts0tfcn05%22%2C%22name%22%3A%22Technical%20Talha%22%2C%22email%22%3A%22talhariaz5425869%40gmail.com%22%2C%22firstName%22%3A%22Technical%22%2C%22lastName%22%3A%22Talha%22%2C%22image%22%3A%22https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocJ92SuNZdMAHT2w0ImVI8hoDhOLKF71sdnEYOzWmKGtV1ISop0%3Ds96-c%22%7D; user_group=156; _ga_YD0ZN46VF7=GS1.1.1735414658.1.1.1735416429.0.0.0; __Secure-next-auth.session-token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..VlCoGz53frrRK4wl.7mefYl2IceaSdCGyzNB5Wmp8QKH60PxEH__LCLV4MrNyB-OXa1V3W3fHzzVAhApsoOtml6xPULz3TEK8wKfjNyq-afrrWIfi4c-BTt7zNau4q3VGkpDnTHAf03aUz9fwpgjoW0yqikv-27WVBDRM_6MCgsVffX_BIsagGv9lU79nN2flV8-aPv-e22GPD8kzFvAPoby-lGpnwHLjCGdU1-kpbxQH83_mPlEuoPVhxCLwUSAvEVDTlts64Q3j91xHOgxlJkxQBroxtdfzOy01muPVYUKsLTuMln3oGMqVIc7tjP8A4O7qTfI_bDkUl1vBW0kYDRPfnKsclMBxQHi0FEQI_USXv8OkqWkAeZ_lKusUOzuFqjsv_h5w12gtbhDnqiuOhlbP8NOZhf3h2WPvQa1gPy2tUotYQhAethlMcP3HlpglThFcFELd5zPr_1t775tNMqJPagchpaOc4LCT2iKAsQKTfiy9vWu7ZZpvxh_qhavsN0QeUgkCGP27mf_Qxty9To4ZHNsOEAQSy-8bn1Wtfv2OmkhXDcKTVXipvPY3QEELY5ILhQms9zuYF4U-X39Z2CLIlML4w9lCbqjDTBs.DQjyS_JAtTe-7cclAp0CRA",
          "Referer": "https://humanizer.pro/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"0\":{\"json\":{\"taskId\":\"8621aeb9-4e3f-4dd7-9e04-b548882147a5\"}}}",
        "method": "POST"
      });
    const data = await res.json()
    console.log(data[0].result.data.json)
    return data[0].result.data.json
}
// Function to process HTML content
async function processHtml(inputPath, outputPath, apiUrl) {
  try {
    // Read the input HTML file
    const htmlContent = fs.readFileSync(inputPath, 'utf-8');

    // Parse the HTML using JSDOM
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    // Select all elements
    const elements = document.body.querySelectorAll('*');

    // Iterate through elements to process text
    for (const element of elements) {
      const textContent = element.textContent.trim();

      // Check if text length is greater than 50 words
      if (countWords(textContent) > 50) {
        console.log(`Processing text: ${textContent.substring(0, 50)}...`); // Log for debugging

        // Send text to API for processing
        const response = await axios.post(apiUrl, { text: textContent });

        if (response.data && response.data.modifiedText) {
          // Replace the text content with the API response
          element.textContent = response.data.modifiedText;
        } else {
          console.error('Invalid API response:', response.data);
        }
      }
    }

    // Save the modified HTML back to a file
    fs.writeFileSync(outputPath, dom.serialize(), 'utf-8');
    console.log(`Processed HTML saved to: ${outputPath}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage
const inputHtml = './input.html'; // Path to the input HTML file
const outputHtml = './output.html'; // Path to save the modified HTML
const apiEndpoint = 'https://your-api-endpoint.com/process-text'; // Replace with your API endpoint

// processHtml(inputHtml, outputHtml, apiEndpoint);
humanizeStart('')