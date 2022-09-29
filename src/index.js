

const searchShow = document.getElementById("input-show")
const getDataBtn =  document.getElementById("submit-data")
const tvBody = document.getElementById("tvShowBody")


getDataBtn.addEventListener("click", getShow)

async function getShow(){
    
    const url = "https://api.tvmaze.com/search/shows?q="+searchShow.value
    const tvshowPromise = await fetch(url)
    const tvShowJSON = await tvshowPromise.json()
    
    console.log(url)

    tvShowJSON.forEach((tv)=>{
        console.log(tv)
        
    })
    

/*     for (let i = 0; i < tvShowJSON.length; i++){
        let tvDiv = document.createElement("div")
        tvDiv.className = "show-data"
        tvBody.appendChild(tvDiv)

    } */

}   
