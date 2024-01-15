const axios = require('axios');
async function getNumTransactions(username) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>
    try {
    const { data  } = await axios.get(`https://jsonmock.hackerrank.com/api/article_users?username=${username}`);
        if  (data.data && data.data.length !== 0) {
            const userID = data.data[0].id;
            const response = await axios.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=${userID}`);
            return response.data.total;
        } else {
            return "Username Not Found"
        }
}
catch (err) {
    console.log(err);
}

}
