/* Always with the  */
console.log("The Utils are being charged")
let Hoy = new Date().getFullYear()
document.getElementById("my_age").innerText= Hoy-1998
/* Idea
I want to do a script that read a Json an create one div for each entry. contains the information of each caree, work etc..
Steps... 
Create a template json. [Done]
Read a json with the js. [Done]
Check the inner that creates HTML. [Done]
See the results [Done]
Apply the css 
*/
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

                Text_Replicator(div,'h1', response_2[o]["Name Company"])
                Text_Replicator(div,'h2', response_2[o]["Name Detailed"])
                Text_Replicator(div,'p', response_2[o]["Description"])
                Text_Replicator(div,'p', response_2[o]["Start Day"] +" - "+ response_2[o]["End Dat"])
  
                /**Adding all to the initial document */
                element.appendChild(div);
            }
            }
    );      
}

let list_doc_stars = ["Skills.json","Languaje.json"]

//<p>Print icon: <span class="glyphicon glyphicon-star-empty"></span></p>
//<p>Print icon: <span class="glyphicon glyphicon-star"></span></p>
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