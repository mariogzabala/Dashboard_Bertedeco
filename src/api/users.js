export async function getUsers() {
    
    try {
        const response = await fetch("https://bertedeco.herokuapp.com/users/api/users")
        if(!response.ok) {
            throw new NetworkError()
        }
        const data = await response.json()
        return data
    } catch (err) {
        throw err
    }
    
}

class NetworkError extends Error {
    constructor() {
        super("Network Error")
    }
}
