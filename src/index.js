

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
        //const tvShowName = jsonData.map(elements => elements.show.name)
        const tvShowImage = jsonData.map(elements => elements.show)
        //const tvShowSummary = jsonData.map(elements => elements.show.summary)
/*         const summary = jsonData.map(elements => elements.show.summary)
        const image = jsonData.map(elements => elements.show.image?.medium) */
/*         console.log(summary)
        console.log(image) */
        //getTvShows(tvShowName)
        getTvShowImage(tvShowImage)
        //getTvShowSummary(tvShowSummary)
        document.getElementById("errorMes").innerHTML = ""
    })
    .catch((error)=>{
        document.getElementById("errorMes").innerHTML = error
        
    })

/*     tvShowJSON.forEach((data)=> {
        console.log(data)
    }) */
/*     for(let item of tvShowJSON){
        console.log(item.show.title)
    } */
    
}
function getTvShowImage(tvData){


    tvData.forEach((tvShows)=>{
        const tvDiv = document.createElement("div")
        tvDiv.className = "show-data"
        const tvDivInfo = document.createElement("div")
        tvDivInfo.className= "show-info"
        const imageDiv = document.createElement("img")
        //imageDiv.id = "tvShow-image"
        const showInfo = document.createElement("h1")
        const summary = document.createElement("p")


        tvDiv.appendChild(tvDivInfo)
        tvBody.appendChild(tvDiv)
        
        
        imageDiv.src = tvShows.image?.medium
        showInfo.innerText = tvShows.name
        summary.innerText = tvShows.summary

        //document.getElementsByClassName("show-data").appendChild(imageDiv)
        tvBody.appendChild(tvDivInfo)
        document.body.appendChild(imageDiv)
        tvBody.appendChild(showInfo)
        tvBody.appendChild(summary)

        tvBody.appendChild(tvDiv)
        
    

//addElement.appendChild(addText);
//document.getElementById("list").appendChild(addElement)
        //console.log(data)
    })
    //console.log(results)
   
    //console.log(results)
}    
/*     const tvDiv = document.createElement("div")
    tvDiv.className = "show-data"
    tvBody.appendChild(tvDiv)

    console.log(results) */

    //const imageDiv = document.createElement("img")

    //for (let i = 0; i < jsonData.length; i++){
    //imageDiv.srs = jsonData[1].show.image.medium

    //tvBody.appendChild(imageDiv)

    //}

/*     const tvDivInfo = document.createElement("div")
    tvDivInfo.className= "show-info"
    tvDiv.appendChild(tvDivInfo)

    const showInfo = document.createElement("h1")
    tvDiv.appendChild(showInfo) */

/* function getTvShows(tvShowName){

} */

/* function getTvShowSummary(tvShowSummary){
    
}  */





   
