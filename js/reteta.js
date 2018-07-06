
function chooseArticles(categ) {

		generateInterior()
        $.get('http://smart-shopper.ro/retete', data => {
            console.log(data);
            var articole = data;
            listingRetete(articole, categ)
        });

}




var listare = document.querySelector("#listare");
var reteta_big = document.createElement("div");
reteta_big.id = "reteta_big"
reteta_big.classList.add("row");
reteta_big.classList.add("mb20");


var listing = document.createElement("div");
listing.id = "listing";
listing.classList.add("row");
listing.classList.add("mb20");

var luni = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]






function retetaDetalii(id) {
var top = document.querySelector("#top")
//document.getElementById('top').scrollIntoView();
//window.scrollTo(0, 0);
$("html, body").animate({ scrollTop: 0 }, "slow");
 var viewws={
      id:Number(id),
    
    }

    $.post('http://smart-shopper.ro/incrementeaza_views', viewws, response => {

                console.log("id este", id)
              //  console.log("getElementById este", id)
                console.log(response)
            });




    $.get('http://smart-shopper.ro/retete', data => {
        // console.log(data);
        generateInterior()
        var listare = document.querySelector("#listare")
        listare.innerHTML = ""
        var listing = document.createElement("div")
        listing.id = "listing";
        listing.classList.add("row");
        listing.classList.add("mb20");
        //console.log(listing)
        listare.appendChild(listing)
        //console.log(listare.innerHTML)
        var articole = data;
        var random1 = Math.floor(Math.random() * articole.length)
        var random2 = Math.floor(Math.random() * articole.length)
        var random3 = Math.floor(Math.random() * articole.length)
        var random=[random1, random2, random3]
        //  console.log(random1, random2, random3)
        var index = articole.findIndex(x => x.id == id);




        //console.log(articole[index].titlu)
        var date2 = new Date(articole[index].data)

        listing.innerHTML = `
<div class="row mb20">
                        <div class="col-md-12">
                           <div class="articol">
                              <div class="titlu2">` + articole[index].titlu + `</div>
                              <div class="data_art">
                                 <img src="img/calendar.jpg">
                                 <p>${new Date(articole[index].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${articole[index].categoria} - ${articole[index].views} vizualizari</p>
                                 <div class="clear"></div>
                              </div>
                              <div class="foto">
                                 <a href="#"><img src="img/` + articole[index].poza + `"></a>
                                 <a href="">
                                    <div class="foto_gal">
                                       <div class="nr_foto">+3</div>
                                       <div class="icon"><i class="fa fa-camera" aria-hidden="true"></i></div>
                                       <div class="click">Galerie foto<br>
                                          Click
                                       </div>
                                    </div>
                                 </a>
                                 <div id="article-share">
                                    <a href="#" class="item s-fb"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="item s-tw"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="item s-pin"><i class="fa fa-pinterest"></i></a>
                                    <a href="#" class="item s-w" style="display:none"></a>
                                 </div>
                              </div>
                              <div class="text-articol">
                                 ` + articole[index].content + `<br><br>

  
                                 ` +


            articole[index].ingrediente + `<br><br>` + articole[index].preparare + `
                                 <div class="">
                                  <h3>Comenteaza</h3>

                                   <div id="error" style="display:none; color:red; font-size:20px;"></div>
                                  <form>
                                  <input type="test" placeholder="nume" id="nume" class="input"><br>
                                  <textarea placeholder="mesaj" id="mesaj" class="textarea"></textarea><br>
                                  <a onclick="sendMessage(` + id + `)"class="trimite">trimite</a>

                                  </form>
                                  <div class="clear"></div>
                                  <br><br>

                                 </div>



                                 <div class="">
                                  <h3>Comentarii</h3>
                                  <div id="coment">
                                 


                                  </div>                              




                                  <div class="clear"></div>
                                  <br><br>

                                 </div>
                              
                                 <div class="comentarii">
                                    <div class="coment_label">citeste si:</div>
                                    <div class="articles_related">
                                       <div class="row">`
                                       for(var x=0; x< random.length; x++){
                                       	listing.innerHTML+=`
                                       	<div class="col-md-6">
                                             <div class="stire_art">
                                                <div class="foto_more">
                                                   <a onclick="retetaDetalii('` + articole[random[x]].id + `')"><img src="img/` +articole[random[x]].poza + `"></a>
                                                </div>
                                                <div class="titlu_more"><a onclick="retetaDetalii('` + articole[random[x]].id + `')">
                                                ` + articole[random[x]].titlu + `</a></div>
                                                <div class="data padd_l_15"> 


                                                 <img src="img/calendar.jpg" style="float: left;margin-right: 5px;margin-top: 3px;">
                                                   <p>${new Date(articole[random[x]].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${articole[random[x]].categoria}</p>
                                                   <div class="clear"></div>
                                                </div>
                                             </div>
                                          </div>
                                       	`
                                       }
listing.innerHTML+=`
										<div class="col-md-6">
                                             <div class="banner_related">
                                                <img src="img/banner_300.jpg">
                                             </div>
                                          </div>
                                          <div class="clear"></div>
                                       


                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

  `
        listing.innerHTML += `


`
        listare.appendChild(listing)

        addMessage(id)




    });




}



// var nume=document.querySelector("#nume").value;
// var mesaj=document.querySelector("#mesaj").value

function sendMessage(id) {
    var nume = document.querySelector("#nume").value;
    var mesaj = document.querySelector("#mesaj").value;
    if (nume != "" && mesaj != "") {
        document.querySelector("#error").style.display = "none"
        console.log(id)
        console.log(nume, mesaj)

        var mesajj = {
            id: id,
            nume: document.querySelector("#nume").value,
            mesaj: document.querySelector("#mesaj").value
        }
        console.log(mesajj)


        $.post('http://smart-shopper.ro/trimite_mesaj', mesajj, response => {
            console.log("getElementById este", id)
            //console.log(result)
        });

        //console.log(res)

        addMessage(id)
        document.querySelector("#nume").value = "";
        document.querySelector("#mesaj").value = "";
    } else {
        document.querySelector("#error").style.display = "block"
        document.querySelector("#error").innerHTML = "Numele si mesajul sunt obligatorii"
    }

}

function addMessage(id) {
    var coment = document.querySelector("#coment")




    $.get('http://smart-shopper.ro/comentarii', datas => {
        console.log(datas);

        let comm_ok = datas.filter(x => x.articol_id == id);




        //var views=data;
        for (var t = 0; t < comm_ok.length; t++) {
            coment.innerHTML += `
    <div class="item"><b>Nume:</b> ` + comm_ok[t].nume + `   </div>
     <div class="item"><b>Mesaj:</b> ` + comm_ok[t].mesaj + `    </div>
   
     <hr>
   
    `
        }

    });
}




function listingRetete(articole, categorie) {

    console.log("listing", articole, categorie)
    var listare = document.querySelector("#listare")
    listare.innerHTML = ""
    var listing = document.createElement("div")
    listing.id = "listing";
    listing.classList.add("row");
    listing.classList.add("mb20");
    //console.log(listing)
    listare.appendChild(listing)
    //console.log(listare.innerHTML)


    var date = new Date(articole[0].data)
    //  console.log(date)



    let reteteArr = articole.filter(x => x.categoria == "retete");
    let travelArr = articole.filter(x => x.categoria == "travel");

    //console.log("retete arr", reteteArr)

    var personData ; // data to be retrieved from the json file
   var recordsPerPage = 6; // user input of hwo many records to display per page
   var totalRecords; // length of the data object




displayTable(1, categorie);


function displayTable(pageNum, categorie){
 // pageNum=1
  personData=categorie=="retete"?reteteArr:travelArr
  console.log("personData" + personData)
  totalRecords = (categorie=="retete"?reteteArr:travelArr).length;
  console.log("totalRecords "+ totalRecords)
  var startIndex = (pageNum-1) * recordsPerPage;
  var endIndex = startIndex + recordsPerPage;
  var pageWisePersonData = (categorie=="retete"?reteteArr:travelArr).slice(startIndex,endIndex);
  listing.innerHTML = "";
  for(var i = 0; i < pageWisePersonData.length; i++){
    var date2 = new Date(pageWisePersonData[i].data)

              listing.innerHTML += `
     <div class="col-md-${i == 0 || i == 3?12:6}">
           <div class="stire mb20">
              <div class="foto">
                 <a onclick="retetaDetalii('` + pageWisePersonData[i].id + `')"><img src="img/${pageWisePersonData[i].poza}"></a>
              </div>
              <div class="titlu"><a onclick="retetaDetalii('` + pageWisePersonData[i].id + `')">${pageWisePersonData[i].titlu}</a></div>
              <div class="data">
                 <img src="img/calendar.jpg">
                 <p>${new Date(pageWisePersonData[i].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${pageWisePersonData[i].categoria}</p>
                 <div class="clear"></div>
              </div>
           </div>
      </div>
      `
     }



}
var paging = document.createElement("div");
paging.id = "paginare";
paging.classList.add("paging");
paging.innerHTML = `
<ul class="pagination" id="pageList">
    </ul>
`
listare.appendChild(listing);
listare.appendChild(paging);
var list = "";
    var totalPages = Math.ceil(totalRecords/recordsPerPage);
    for(var i = 1; i <= totalPages; i++){
      list += "<li><a href='#'>"+ i +"</a></li>";
    }
    document.querySelector(".pagination").innerHTML=list;
    //add active class to the first pagination link


      document.querySelector("#pageList li a").classList.add("active")
    // always show the first page to user
   // displayTable(1, categorie);



document.querySelector(".pagination").addEventListener("click", function(event){


       //get the text from the button that is clicked
       var pageNum = parseInt(event.target.innerText);
       console.log(pageNum )
       var allLinks=document.querySelectorAll("#pageList li a")
       for(var x=0; x< allLinks.length; x++){
       	allLinks[x].classList.remove("active")

       }
       event.target.classList.add("active")
       // $('ul li a.active').removeClass('active');
       // $(e.target).addClass("active");
       displayTable(pageNum, categorie);
   });


}



function celeMaiCitite() {
    var cont = document.querySelector(".postari_recente .continut")
    //console.log(cont);
    cont.innerHTML = ""

    $.get('http://smart-shopper.ro/vizualizari', data => {
        //    console.log(data);
        var views = data;




        for (var x = 0; x < views.length; x++) {
            cont.innerHTML += `
    <div class="item">
                              <div class="foto_cele_mai">
                                 <a onclick="retetaDetalii('` + views[x].id + `')"><img src="img/${views[x].poza}"></a>
                              </div>
                              <div class="text">
                                 <div class="titlu"><a onclick="retetaDetalii('` + views[x].id + `')">${views[x].titlu}</a></div>
                              </div>
                              <div class="clear"></div>
                           </div>

  `

        }




    })


}


function celeMaiNoi() {
    var noi = document.getElementById("noi");
    //console.log(noi);
    // noi.innerHTML=""

    $.get('http://smart-shopper.ro/retete', data => {
        //    console.log(data);
        var recente = data;




        for (var x = 0; x < 6; x++) {
            var date2 = new Date(recente[x].data)
            noi.innerHTML += `
    <div class="stire mb20">
                        <div class="foto">
                           <a onclick="retetaDetalii('` + recente[x].id + `')"><img src="img/${recente[x].poza}"></a>
                        </div>
                        <div class="titlu"><a onclick="retetaDetalii('` + recente[x].id + `')">${recente[x].titlu}</a></div>
                        <div class="data">
                           <img src="img/calendar.jpg">
                           <p>${new Date(recente[x].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${recente[x].categoria}</p>
                           <div class="clear"></div>
                        </div>
                     </div>

  `

        }




    })


}

function generateInterior() {
    console.log("sdsd")
    interior = document.querySelector("#interior");
    interior.innerHTML = ""
    var coloane = document.createElement("div");
    coloane.classList.add("coloane");
    coloane.classList.add("mt0");
    interior.appendChild(coloane);
    var row = document.createElement("div");
    row.classList.add("row");
    coloane.appendChild(row);
    var colMd8 = document.createElement("div");
    colMd8.classList.add("col-md-8")
    colMd8.id = "listare"
    row.appendChild(colMd8);

    var colMd4 = document.createElement("div");
    colMd4.classList.add("col-md-4")
    row.appendChild(colMd4);
    var autor = document.createElement("div");
    autor.classList.add("autor")
    colMd4.appendChild(autor);
    autor.innerHTML = `
    <img src="img/autor.jpg" class="poza_autor">
                        <div class="nume_autor">elena popescu</div>
                        <div class="text_autor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</div>
                        <div class="social">
                           <a href="#"><img src="img/facebook.png"></a>
                           <a href="#"><img src="img/tw.png"></a>
                           <a href="#"><img src="img/pin.png"></a>
                           <a href="#"><img src="img/tube.png"></a>
                           <div class="clear"></div>
                        </div>`
    var postari_recente = document.createElement("div");
    postari_recente.classList.add("postari_recente")
    colMd4.appendChild(postari_recente);
    var head = document.createElement("div");
    head.classList.add("head")
    postari_recente.appendChild(head);
    head.innerHTML = "cele mai cititie"
    var continut = document.createElement("div");
    continut.classList.add("continut")
    postari_recente.appendChild(continut);
    celeMaiCitite()
    var banner300 = document.createElement("div");
    banner300.classList.add("banner300");
    banner300.innerHTML = `<img src="img/banner_300.jpg">`
    colMd4.appendChild(banner300);
    var noi = document.createElement("div");
    noi.classList.add("noi");
    colMd4.appendChild(noi);
    noi.id = "noi";
    celeMaiNoi()


}