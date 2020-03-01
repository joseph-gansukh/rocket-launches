// import regeneratorRuntime from "regenerator-runtime";

const fetchData = async () => {
  const res = await fetch("https://api.spacexdata.com/v3/launches")
  const data = await res.json()
  const filterByYear = await data.filter(launch => launch.launch_year === '2020')
  const newLaunchObj = await filterByYear.map(obj => {
    return {
      "flight_number": obj.flight_number,
      "mission_name": obj.mission_name,
      "launch_date": new Date(obj.launch_date_utc).toDateString()
    }
  })
  const launches = JSON.stringify(newLaunchObj, null, 2)
  console.log(launches)

  const div = document.getElementById('launches')
  div.innerText = launches
}

document.addEventListener("DOMContentLoaded", event => {

  fetchData().catch(error => console.log(error))

  
})
