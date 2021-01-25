const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchData = async() => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        catName = ""
        cats.forEach(item => {
            catName += item.name + " "
        })
        console.log(catName)
    } catch (err) {
        console.log(err)
    }
}
fetchData()
