const URL = `https://api.its12.in/category/get`

export const getProducts = async () => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                categoryLink: "customized-cakes",
                count: 20,
                filters: {},
                pageNumber: 1,
            }),
        });
        let products = await response.json();
        return products;
    } catch (error) {
        return "Server side error";
    }
};

