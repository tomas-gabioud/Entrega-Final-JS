/* Consumo de apis mostrando imagenes y sus diferentes descripciones */ 

let imgId = 1;

let API_KEY = "563492ad6f917000010000013fedd73aac834380a3218fa271bef31a";
let URL_PEXELS = "https://api.pexels.com/v1/search?query=fitness";
let boton = document.getElementById("boton");
function img() {
    $.ajax({
    url: URL_PEXELS,
    type: "GET",
    headers: {
        Authorization: API_KEY,
    },
    success: function (response) {
        for(let foto in response.photos){
            if(foto == 0 || foto == 1 || foto == 7 || foto == 8 ){
                let img = document.createElement("img");
                img.id= imgId++
                img.className = "imgFull"
                img.style.display =  "none";
                img.setAttribute("src", response.photos[foto].src.small, "src");
                if(foto == 0){
                    $(".boxBotonImg")[0].append(img);
                    }
                if(foto == 1){
                    $(".boxBotonImg")[1].append(img);
                }
                if(foto == 7){
                    $(".boxBotonImg")[2].append(img);
                }
                if(foto == 8){
                    $(".boxBotonImg")[3].append(img);
                }
            }
        }
    },
    });
}

img()

$(".botones").click((e) => {
    for(let i = 1; i < $(".botones").length+1; i++){
        if(e.target.id == `${i}B`){
            $(`#${i}`).toggle("slow")
        }
    }
});
