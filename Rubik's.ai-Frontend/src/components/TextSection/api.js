export const fetchResponse =  async(chat) => {
    try {
        // console.log(chat)
        // after depoloyment you should change the fetch URL below
        const response = await fetch('http://localhost:5400/text/', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message)=> message.message).join(" \n ")
            })
        })

        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
                // message: chat.map((message) => message.message).join(" \n ");
