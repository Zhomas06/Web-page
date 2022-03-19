/* Always with the  */
console.log("The Utils are being charged")
let Hoy = new Date().getFullYear()
document.getElementById("my_age").innerText= Hoy-1998
/* Idea
I want to do a script that read a Json an create one div for each entry. contains the information of each caree, work etc..
Steps...
Create a template json.
Read a json with the js.
Check the inner that creates HTML.
See the results
Apply the css
*/
let list_doc = ["Work_E.json","Study.json"]
for (let i = 0; i < list_doc.length; i++) {

    fetch('/Data/Json/'+list_doc[i]).then(response => {return response.json()}).then(

        response_2 => {






            for (let o = 0; o < response_2.length; o++) {
                console.log(response_2[o])
                let element = document.getElementById(list_doc[i].split(".")[0])
                let div = document.createElement('div');
                let h1 = document.createElement('h1');
                h1.innerText = response_2[o]["Name Company"];
                
                let h2 = document.createElement('h2');
                h2.appendChild(document.createTextNode(response_2[o]["Name Detailed"]));
                let description = document.createElement('p');
                description.appendChild(document.createTextNode(response_2[o]["Description"]));
                let date = document.createElement('p');
                date.appendChild(document.createTextNode(response_2[o]["Start Day"] +" - "+ response_2[o]["End Dat"]));
                
                
                /**Adding all to the div */
                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(description);
                div.appendChild(date);

                /**Adding all to the initial document */
                element.appendChild(div);
            }
            }

            
            
            

    ); 
      

}

