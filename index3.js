const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCatWeightData = async() => {
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
fetchCatWeightData()
