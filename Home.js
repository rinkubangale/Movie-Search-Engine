function home() {
    window.location.href = "Home.html";
}

async function getData() {
        
    var mTitle = document.getElementById("search").value;

    try {
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b774ef17&t=${mTitle}`)
        var data = await res.json();
        console.log(`${mTitle}:`, data);
    }
    catch (err) {
        console.log("err:", err);
    }



    function showMovies(d) {
    
        let el = d

        let movies_div = document.getElementById("movies");
        // movies_div.innerHTML = null
        
        let div = document.createElement("div")

        let p_title = document.createElement("div");
        p_title.innerHTML = el.Title;
    
        let p_rating = document.createElement("div");
        p_rating.innerHTML = "IMDB: " + el.imdbRating + "⭐";

        let img = document.createElement("img");
        img.src = el.Poster;

        let p_date = document.createElement("div");
        p_date.innerHTML = el.Released;

        let disc = document.createElement("div");
        disc.innerHTML = el.Plot
        disc.style.fontSize = "15px";
        disc.style.justifyContent = "center";
        disc.style.margin = "5px";
        disc.style.color = "grey";


        div.append(img, p_title, disc, p_date, p_rating);

        movies_div.append(div);


    }

    showMovies(data);
}