// import regeneratorRuntime from "regenerator-runtime";

const fetchData = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches")
  const data = await res.json()
  const filterByYear = await data.filter(launch => launch.launch_year === '2020')
  const launches = await JSON.stringify(filterByYear, null, 2)

  const div = document.getElementById('launches')
  div.innerHTML = launches
}

document.addEventListener("DOMContentLoaded", event => {

  fetchData().catch(error => console.log(error))

  
})
