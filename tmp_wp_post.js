async function createPost() {
    const url = "https://live-sonakhi-rumi.pantheonsite.io/wp-json/wp/v2/posts";
    const user = "sonakhirumi@gmail.com";
    const password = "Benguli@73";

    const auth = btoa(`${user}:${password}`);

    const postData = {
        title: "Musing",
        content: "I am crippled by love. The love that I will never experience. The absence of its gentle embrace, subtle gaze, and empowering title. To be swoon away with their hands in mine is an honour i am not worthy of. I look at love from a distance that saves it from my need and filth. I wish love attainment, I wish love prosperity. And on some weak days i wish love selfishly for me.",
        status: "publish",
        categories: [3] // english category
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${auth}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        const result = await response.json();
        if (response.status === 201) {
            console.log("SUCCESS: Post created!");
            console.log("ID:", result.id);
        } else {
            console.log("FAILED:", response.status);
            console.log(result);
        }
    } catch (err) {
        console.error("Error:", err);
    }
}

createPost();
