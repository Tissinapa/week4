

const searchShow = document.getElementById("input-show")
const getDataBtn =  document.getElementById("submit-data")
const tvBody = document.getElementById("tvShowBody")


getDataBtn.addEventListener("click", getShow)

async function getShow(){
    
    const url = "https://api.tvmaze.com/search/shows?q="+searchShow.value
/*     const tvshowPromise = await fetch(url)
    const tvShowJSON = await tvshowPromise.json() */
    fetch(url)
    .then(response => response.json())
    .then ((jsonData)=>{
        console.log(jsonData)
        const tvShowImage = jsonData.map(elements => elements.show)
        getTvShowImage(tvShowImage)
        document.getElementById("errorMes").innerHTML = ""
    })
    .catch((error)=>{
        document.getElementById("errorMes").innerHTML = error
        
    })


}
function getTvShowImage(tvData){
    tvData.forEach((tvShows)=>{
        const tvDiv = document.createElement("div")
        tvDiv.className = "show-data"

        const tvDivInfo = document.createElement("div")
        tvDivInfo.className= "show-info"

        const imageDiv = document.createElement("img")
        const showInfo = document.createElement("h1")
        const summary = document.createElement("p")


        imageDiv.src = tvShows.image?.medium
        showInfo.innerText = tvShows.name
        summary.innerText = tvShows.summary

        
        tvDiv.appendChild(imageDiv)         //image linked to Show-data
        tvBody.appendChild(tvDiv)           //show-data linked to body
        tvDivInfo.appendChild(tvDiv)        //show-info linked to show-data
        tvBody.appendChild(tvDivInfo)       //show-info linked to body

        
        tvDivInfo.appendChild(showInfo)     //h1 linked to show-info
        tvDivInfo.appendChild(summary)      //summary linked to show-info

        tvBody.appendChild(tvDivInfo)       //h1 and summary linked to body
        
    })
    
}    





   
