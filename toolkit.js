/* Always with the well known debugers... The console.logs */
console.log("The Utils are being charged")
let Hoy = new Date().getFullYear()
document.getElementById("my_age").innerText= Hoy-1998
/* Creating the objects to show the experience and study*/
let list_doc = ["Work_E.json","Study.json"]
for (let i = 0; i < list_doc.length; i++) {

    fetch('/Data/Json/'+list_doc[i]).then(response => {return response.json()}).then(

        response_2 => {


            function Text_Replicator(div,kind, text){
                
                const element = document.createElement(kind);
                element.textContent = text;
                div.appendChild(element);
                 
            }
            function orderer( a, b ) {
                if ( a["Start Day"] < b["Start Day"] ){
                  return -1;
                }
                if ( a["Start Day"] > b["Start Day"] ){
                  return 1;
                }
                return 0;
              }
            response_2.sort( orderer);
            for (let o = 0; o < response_2.length; o++) {
                
                let element = document.getElementById(list_doc[i].split(".")[0])
                let div = document.createElement('div');
                let div_aux = document.createElement('div');

                Text_Replicator(div,'h1', response_2[o]["Name Company"])
                Text_Replicator(div_aux,'h2', response_2[o]["Name Detailed"])
                Text_Replicator(div_aux,'p', response_2[o]["Description"])
                Text_Replicator(div_aux,'p', response_2[o]["Start Day"] +" - "+ response_2[o]["End Dat"])
                div.appendChild(div_aux);
                /**Adding all to the initial document */
                element.appendChild(div);
            }
            }
    );      
}
let list_doc_stars = ["Skills.json","Languaje.json"]

//Creating the Stars menu to define the 
for (let i = 0; i < list_doc.length; i++) {

    fetch('/Data/Json/'+list_doc_stars[i]).then(response => {return response.json()}).then(
        response_2 => {

            console.log(response_2)
            let div_1 = document.createElement('div');
            let div_2 = document.createElement('div');
            
            for (let o = 0; o < response_2.length; o++) {
                
                let element = document.getElementById(list_doc_stars[i].split(".")[0])
                

                

                function Text_Replicator_Stars(div,kind, text,mark){
                    const div_aux = document.createElement("div");
                    const element = document.createElement(kind);
                    
                    
                    
                    for (let stars = 1; stars < 6; stars++) {
                        if (stars <= mark){
                            console.log(stars)
                            const star = document.createElement("span");
                            star.classList = "glyphicon glyphicon-star"
                            div_aux.appendChild(star)
                        }
                        else{
                            const star = document.createElement("span");
                            star.classList = "glyphicon glyphicon-star-empty"
                            div_aux.appendChild(star)}
                    }
                    if (mark >=0){
                        element.textContent = text;
                        element.appendChild(div_aux);
                        div.appendChild(element); 
                    }else{
                        const WIP = document.createElement("div");

                        element.textContent = text;
                        WIP.textContent = "Work In Progress";
                    element.appendChild(WIP);
                    div.appendChild(element);
                    }
                                         
                }
                if (o <= parseInt(response_2.length/2)){
                    Text_Replicator_Stars(div_1,'li', response_2[o]["Name"],response_2[o]["Level"]);
                }
                else{
                    Text_Replicator_Stars(div_2,'li', response_2[o]["Name"],response_2[o]["Level"]);
                }
                
                /**Adding all to the initial document */
              element.appendChild(div_1);
              element.appendChild(div_2);
            }
        }
    )};

//Auto save

function Copynator() {
    
    navigator.clipboard.writeText("tomasnavasgutierrez@gmail.com");
    var mesage = document.getElementById("copy_mesage");
    mesage.classList="non_mesagge";
  }

  const mail = document.getElementById("mail");
  mail.addEventListener("click", Copynator)

let dia =true;
const r = document.querySelector('body');

document.querySelector('.checkbox').addEventListener('change',()=>{
    
    if (dia){
        dia= !dia
        r.style.setProperty('--color_1', '#26292B');
        r.style.setProperty('--color_2', '#DBC05F');
        r.style.setProperty('--color_3', '#2E3239');
        r.style.setProperty('--color_4', '#A2B2EE');
    }
    else{
        dia= !dia
        r.style.setProperty('--color_1', '#2e4159');
        r.style.setProperty('--color_2', '#d1d1d4');
        r.style.setProperty('--color_3', '#e4e4e4');
        r.style.setProperty('--color_4', '#eeeeee');
    }

  });

  