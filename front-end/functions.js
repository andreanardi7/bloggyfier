// Generator for File Name
function generateName() {
    // Generate randdom string
    function generateRandomAlphanumericString(length) {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let alphanumericString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            alphanumericString += characters.charAt(randomIndex);
        }
        return alphanumericString;
    }
    // Generate a random alphanumeric string of a specific length
    const length = 10;
    const randomAlphanumericString = generateRandomAlphanumericString(length);
    return (randomAlphanumericString);
}
