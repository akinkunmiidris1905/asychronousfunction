async function fetchData() {
    // asynchronous operation goes in here

    // await keyword
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await data.json()
    console.log(response)
}

const fetchData2 = async () => {
    // asychronous operation goes in here
}


async function fetchAlbums () {
    try {
        const data2 = await fetch('https://jsonplaceholder.typicode.com/albums')
        const response = await data2.json()
        console.log(response)
        
    } catch (error) {
     console.log(error)   
    }
}

fetchAlbums()