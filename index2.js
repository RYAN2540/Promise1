const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchData = async() => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        catNames = ""
        cats.forEach(item => {
            catNames += item.name + " "
        })
        console.log(catNames)
    } catch (err) {
        console.log(err)
    }
}
fetchData()
