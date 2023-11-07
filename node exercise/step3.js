const fs = require('fs').promises;
const process = require('process');
const axios = require('axios');

/** handle output: write to file if out given, else print */
async function handleOutput(text, out) {
  try {
    if (out) {
      await fs.writeFile(out, text, 'utf8');
    } else {
      console.log(text);
    }
  } catch (err) {
    console.error(`Error: ${err}`);
    process.exit(1);
  }
}

/** read file at path and print it out. */
async function cat(path, out) {
  try {
    const data = await fs.readFile(path, 'utf8');
    await handleOutput(data, out);
  } catch (err) {
    console.error(`Error reading ${path}: ${err}`);
    process.exit(1);
  }
}

/** read page at URL and print it out. */
async function webCat(url, out) {
  try {
    const resp = await axios.get(url);
    await handleOutput(resp.data, out);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

async function main() {
  let path;
  let out;

  if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
  } else {
    path = process.argv[2];
  }

  if (path.slice(0, 4) === 'http') {
    await webCat(path, out);
  } else {
    await cat(path, out);
  }
}

main();
