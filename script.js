    const API_URL = "https://api.unsplash.com"
    const ACCEPT_VERSION = "v1"
    const AUTHORIZATION = "Client-ID 56gLGmT-G_vl0wbHSxQCqSAIv7qMvHDqpLpawkc_a6s"

    const button = document.getElementById("generate-button")
    const container = document.getElementById("container")

    button.addEventListener("click", handleClick)

    async function handleClick(e) {
        let response = await fetch(`${API_URL}/photos/random`,
                                {
                                    headers: {
                                        'Accept-Version': ACCEPT_VERSION,
                                        'Authorization': AUTHORIZATION
                                    }
                                });

        let data = await response.json()
        
        container.insertAdjacentHTML("beforeend",

        `
        <div class="rounded-md p-6 border border-black max-w-72">
            <img
                src="${data.urls.full}"
                alt="${data.alt_description}"
                srcset=""
                width="300px"
                height="400px"
            >

            <h5 class="font-semibold text-center text-lg">${data.description !== null ? data.description : data.alt_description}</h5>

            <br>

            <p class="text-sm">Created at: <b>${data.created_at}</b></p>
            <p class="text-sm">Views: <b>${data.views}</b></p>
        </div>
        `)
    }