Your company has recently started working extensively with the file system. As the NodeJS developer in your company, you have been tasked to write a script that is responsible for writing a JSON file to the file system.

Your job is to write the script with two functions which take care of:

1. creating a Directory if it does not already exist.

2. writing a file to the file system.

The script should implement the following two functions:

• Create a directory if it does not exist: This function takes the fully resolved directory path as the first argument to the function and should be able to create the directory if it does not already exist. The function should return a Promise that resolves with the path of the directory after the folder is created successfully. If the directory already exists, resolve with the path of the directory.

• Write the passed Javascript object to a file: This function takes the fully resolved directory path as the first argument to the function and accepts a Javascript Object to write to the file as the second parameter. The function should return a Promise that resolves without any data if the write operation was successful. If the passed object is not a Javascript Object, reject the Promise with an Error object with the message 'Invalid Data'.

Note: A JavaScript file data-store.js containing a list of Javascript objects is present in the project.

Function Description:

• createDirectoryIfNotExists - This function accepts the path as the only argument.

• writeJSON-This function accepts the path as the first argument and the data to write as the second argument.

• Both functions return a Promise that -

⚫ resolves when the above-mentioned criteria is met.

• rejects with an Error object when the above-mentioned criteria is met. (for the function writeJSON)

Examples:

Suppose the current Current Working Directory (CWD) is /tmp/proj and the file tree in the CWD is as follows:

test

config.json

data-store.js

package.json

1. Calling the createDirectoryIfNotExists function with the path /tmp/proj/logs should produce the following output:

test

logs

config.json

data-store.js

package.json

Calling the writeJSON with the path /tmp/proj/logs/test.json and the data (test: "Message"} should produce the following output:

test

logs

-- test.json

config.json

data-store.js

package.json

3. Calling the writeJSON with the path /tmp/proj/logs/test.json and the String data "TEST" should produce the following error:

Invalid Data







const fs = require('fs').promises;
const path = require('path');

const createDirectoryIfNotExists = (dirPath) => {
    return fs.mkdir(dirPath, { recursive: true })
        .then(() => dirPath)
        .catch(err => {
            if (err.code === 'EEXIST') {
                return dirPath;
            } else {
                throw err;
            }
        });
};

const writeJSON = (filePath, data) => {
    if (typeof data !== 'object') {
        return Promise.reject(new Error('Invalid Data'));
    }

    const jsonData = JSON.stringify(data, null, 2);

    return fs.writeFile(filePath, jsonData, 'utf-8');
};

module.exports = {
    createDirectoryIfNotExists: createDirectoryIfNotExists,
    writeJSON: writeJSON
};
