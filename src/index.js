

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
        const tvDataDiv = document.createElement("div")
        tvDataDiv.className = "show-data"

        const tvInfoDiv = document.createElement("div")
        tvInfoDiv.className= "show-info"

        const imageDiv = document.createElement("img")
        const showInfo = document.createElement("h1")
        const summary = document.createElement("p")


        
        
        imageDiv.src = tvShows.image?.medium
        showInfo.innerText = tvShows.name
        summary.innerText = tvShows.summary

        
        tvDataDiv.appendChild(imageDiv)
        tvDataDiv.appendChild(tvInfoDiv)         
        tvBody.appendChild(tvDataDiv)           
        //tvDataDiv.appendChild(tvInfoDiv)
                //show-info linked to show-data
        //tvBody.appendChild(tvDataDiv)       

        
        tvInfoDiv.appendChild(showInfo)     
        tvInfoDiv.appendChild(summary)      
        tvDataDiv.appendChild(tvInfoDiv)
        tvBody.appendChild(tvDataDiv)       
        
    //kohta mennään metssääää
    })
    

}    





   
