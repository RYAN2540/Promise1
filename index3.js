const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchCatData = async() => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        let totalAvgWeight = 0;
        cats.forEach(cat => {
            weightArray = cat.weight.metric.split("-")
            avgWeight = (parseInt(weightArray[0]) + parseInt(weightArray[1])) / 2
            totalAvgWeight += avgWeight
        })
        avgMetricWeight = totalAvgWeight / cats.length
        console.log("A cats average weight is " + avgMetricWeight.toFixed(2) + " Kgs")
    } catch (err) {
        console.log(err)
    }
}

const fetchCountryData = async() => {
    try {
        const responseCountry = await fetch(countriesAPI)
        const countries = await responseCountry.json()

        largestCountries = countries.sort((a, b) => (a.area < b.area) ? 1 : -1).slice(0, 10);
        largestCountries.forEach(country => {
            console.log("country : " + country.name + ", Area:" + country.area)
        })

        let allLanguages = []
        countries.forEach(country => {
            country.languages.forEach(language => {
                allLanguages.push(language.name)
            })
        })

        let uniqueLanguages = allLanguages.reduce(function(a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
        console.log("The Languages of the world are... ")
        uniqueLanguages.forEach(uniqueLanguage => {
            console.log(uniqueLanguagegit)
        })
        console.log(" and they are " + uniqueLanguages.length)
    } catch (err) {
        console.log(err)
    }
}

fetchCatData()
fetchCountryData()
