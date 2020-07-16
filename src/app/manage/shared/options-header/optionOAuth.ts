
export const optionAuth = (clientId: string, clientSecret: string) => {
    return {
        headers: {
            Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
}