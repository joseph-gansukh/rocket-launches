// import regeneratorRuntime from "regenerator-runtime";

const fetchData = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches")
  const data = await res.json()
  // const filterByYear = await data.filter(launch => )
  console.log("data: ", data)
}

fetchData().catch(alert)

const div = document.getElementById('launches')
document.addEventListener("DOMContentLoaded", event => {
  console.log('DOM is loaded')
})
