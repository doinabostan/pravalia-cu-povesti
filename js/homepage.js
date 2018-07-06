var luni = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


generateHomepage()


function generateHomepage() {
 //  console.log("homepage")
    interior = document.querySelector("#interior");
    interior.innerHTML = ""
    var main_sire = document.createElement("div")
    main_sire.classList.add("main_sire")
    interior.appendChild(main_sire);
    var casete4 = document.createElement("div");
    casete4.classList.add("casete4")
    interior.appendChild(casete4);
    var eticheta_categotie = document.createElement("div");
    eticheta_categotie.classList.add("eticheta_categotie")
    casete4.appendChild(eticheta_categotie);
    eticheta_categotie.innerHTML = `<h2><a onclick="chooseArticles('retete')">articole culinare</a></h2>`;
    var more = document.createElement("div");
    more.classList.add("more")
    more.classList.add("none500");
    more.innerHTML = `<p><a onclick="chooseArticles('retete')">» <span>vezi mai multe</span></a></p>`
    casete4.appendChild(more);
    var clear = document.createElement("div");
    clear.classList.add("clear")
    casete4.appendChild(clear);
    var row2 = document.createElement("div");
    row2.classList.add("row")
    casete4.appendChild(row2);
    var row3 = document.createElement("div");
    row3.classList.add("row")
    casete4.appendChild(row3);
    var colMd12 = document.createElement("div");
    colMd12.classList.add("col-md-12")
    row3.appendChild(colMd12);
    var caseta_foto = document.createElement("div");
    caseta_foto.classList.add("caseta_foto")
    colMd12.appendChild(caseta_foto);
    caseta_foto.style.backgroundImage = "url('img/travel.jpg')";
    var nume_caseta = document.createElement("div");
    nume_caseta.classList.add("nume_caseta");
    caseta_foto.appendChild(nume_caseta);
    nume_caseta.innerHTML = "Travel";
    var casete4b = document.createElement("div");
    casete4b.classList.add("casete4")
    interior.appendChild(casete4b);
    var row4 = document.createElement("div");
    row4.classList.add("row")
    casete4b.appendChild(row4);
    var colMd12b = document.createElement("div");
    colMd12b.classList.add("col-md-12")
    row4.appendChild(colMd12b);


    var eticheta_categotieb = document.createElement("div");
    eticheta_categotieb.classList.add("eticheta_categotie")
    colMd12b.appendChild(eticheta_categotieb);
    eticheta_categotieb.innerHTML = `<h2><a onclick="chooseArticles('retete')">articole culinare</a></h2>`;
    var moreb = document.createElement("div");
    moreb.classList.add("more")
    moreb.classList.add("none500");
    moreb.innerHTML = `<p><a onclick="chooseArticles('retete')">» <span>vezi mai multe</span></a></p>`
    colMd12b.appendChild(moreb);
    var clearb = document.createElement("div");
    clearb.classList.add("clear")
    colMd12b.appendChild(clearb);
    var row5 = document.createElement("div");
    row5.classList.add("row")
    casete4b.appendChild(row5);
    var coloane = document.createElement("div");
    coloane.classList.add("coloane")
    casete4b.appendChild(coloane);
    var row6 = document.createElement("div");
    row6.classList.add("row")
    coloane.appendChild(row6);
    colMd8 = document.createElement("div");
    colMd8.classList.add("col-md-8")
    row6.appendChild(colMd8);
    var row7 = document.createElement("div");
    row7.classList.add("row")
    colMd8.appendChild(row7);
    var colMd4c = document.createElement("div");
    colMd4c.classList.add("col-md-4")
    row6.appendChild(colMd4c);
    var autor = document.createElement("div");
    autor.classList.add("autor")
    colMd4c.appendChild(autor);
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
                        </div>`;

    var postari_recentee = document.createElement("div");
    postari_recentee.classList.add("postari_recente")
    colMd4c.appendChild(postari_recentee);
    var headd = document.createElement("div");
    headd.classList.add("head")
    postari_recentee.appendChild(headd);
    headd.innerHTML = "cele mai cititie";

    var continutt = document.createElement("div");
    continutt.classList.add("continut")
    postari_recentee.appendChild(continutt);


    var banner300 = document.createElement("div");
    banner300.classList.add("banner300")
    colMd4c.appendChild(banner300);
    banner300.innerHTML = '<img src="img/banner_300.jpg">'
    var casete4d = document.createElement("div");
    casete4d.classList.add("casete4")
    interior.appendChild(casete4d);
    var row9 = document.createElement("div");
    row9.classList.add("row")
    casete4d.appendChild(row9);
    var colmd12q = document.createElement("div");
    colmd12q.classList.add("col-md-12")
    row9.appendChild(colmd12q);
    var eticheta_categotie7 = document.createElement("div");
    eticheta_categotie7.classList.add("eticheta_categotie")
    colmd12q.appendChild(eticheta_categotie7);
    eticheta_categotie7.innerHTML = ` <h2><a onclick="chooseArticles('travel')">travel</a></h2>`;
    var more9 = document.createElement("div");
    more9.classList.add("more");
    more9.classList.add("none500");
    more9.innerHTML = `<p><a onclick="chooseArticles('travel')">» <span style >vezi mai multe</span></a></p>`
    colmd12q.appendChild(more9);
    var clear6 = document.createElement("div");
    clear6.classList.add("clear")
    colmd12q.appendChild(clear6);
    var row10 = document.createElement("div");
    row10.classList.add("row")
    casete4d.appendChild(row10);
    var casete4e = document.createElement("div");
    casete4e.classList.add("casete4")
    interior.appendChild(casete4e);
    var row11 = document.createElement("div");
    row11.classList.add("row")
    casete4e.appendChild(row11);
    var colMd12m = document.createElement("div");
    colMd12m.classList.add("col-md-12")
    row11.appendChild(colMd12m);
    var caseta_foto2 = document.createElement("div");
    caseta_foto2.classList.add("caseta_foto")
    colMd12m.appendChild(caseta_foto2);
    caseta_foto2.style.backgroundImage = "url('img/cooking.jpg')";
    var nume_caseta2 = document.createElement("div");
    nume_caseta2.classList.add("nume_caseta")
    caseta_foto2.appendChild(nume_caseta2);
    nume_caseta2.innerHTML = "Cooking";
    var footer = document.createElement("div");
    footer.classList.add("footer")
    interior.appendChild(footer);
    footer.innerHTML = `<a href="#"><img src="img/logo_mic.png"></a>
               <p>Copyright - Pravalia cu povesti</p>`




    $.get('http://smart-shopper.ro/retete', data => {
        console.log(data);


        main_sire.innerHTML = `<a onclick="retetaDetalii('` + data[0].id + `')"><img src="img/${data[0].poza}"></a>
            <h1><a onclick="retetaDetalii('` + data[0].id + `')">${data[0].titlu}</a></h1>`

        let reteteArr = data.filter(x => x.categoria == "retete");
        let travelArr = data.filter(x => x.categoria == "travel");
        for (var i = 0; i < 3; i++) {
            var date2 = new Date(reteteArr[i].data)
            row2.innerHTML += `
		 <div class="col-md-4">
                  <div class="stire">
                     <div class="foto">
                        <a onclick="retetaDetalii('` + reteteArr[i].id + `')"><img src="img/${reteteArr[i].poza}"></a>
                     </div>
                     <div class="titlu"><a onclick="retetaDetalii('` + reteteArr[i].id + `')">${reteteArr[i].titlu}</a></div>
                     <div class="data">
                        <img src="img/calendar.jpg">
                        <p>${new Date(reteteArr[i].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${reteteArr[i].categoria}</p>
                        <div class="clear"></div>
                     </div>
                  </div>
               </div>
		`

        }
        for (var z = 0; z < 4; z++) {
            var date2 = new Date(reteteArr[z].data)
            caseta_foto.innerHTML += `
		<div class="stire_thumb poz${z+1}">
                     <div class="foto"><a onclick="retetaDetalii('` + travelArr[z].id + `')"><img src="img/${travelArr[z].poza}"></a></div>
                     <div class="right">
                        <div class="titlu"><a onclick="retetaDetalii('` + travelArr[z].id + `')">${travelArr[z].titlu}</a></div>
                        <div class="data2">
                           <img src="img/calendar_white.png">
                           <p>${new Date(travelArr[z].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${travelArr[z].categoria}</p>
                           <div class="clear"></div>
                        </div>
                     </div>
           </div>
		`
        }
        for (var c = 3; c < 6; c++) {
            row5.innerHTML += `
		<div class="col-md-4">
                  <div class="stire">
                     <div class="foto">
                        <a onclick="retetaDetalii('` + reteteArr[c].id + `')"><img src="img/${reteteArr[c].poza}"></a>
                     </div>
                     <div class="titlu"><a onclick="retetaDetalii('` + reteteArr[c].id + `')">${reteteArr[c].titlu}</a></div>
                     <div class="data">
                        <img src="img/calendar.jpg">
                        <p>${new Date(reteteArr[c].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${reteteArr[c].categoria}</p>
                        <div class="clear"></div>
                     </div>
                  </div>
               </div>
		`
        }
        for (var b = 0; b < 7; b++) {
            let shuffle = shuffleArray(data)
            if (b == 4) {
                row7.innerHTML += `
			<div class="col-md-12">
                              <div class="stire mb20">
                                 <div class="foto">
                                    <a onclick="retetaDetalii('` + shuffle[b].id + `')"><img src="img/${shuffle[b].poza}"></a>
                                 </div>
                                 <div class="titlu"> <a onclick="retetaDetalii('` + shuffle[b].id + `')">${shuffle[b].titlu}</a></div>
                                 <div class="data">
                                    <img src="img/calendar.jpg">
                                    <p>${new Date(shuffle[b].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${shuffle[b].categoria}</p>
                                    <div class="clear"></div>
                                 </div>
                              </div>
                           </div>

			`
            } else {
                row7.innerHTML += `
			<div class="col-md-6">
                              <div class="stire mb20">
                                 <div class="foto">
                                     <a onclick="retetaDetalii('` + shuffle[b].id + `')"><img src="img/${shuffle[b].poza}"></a>
                                 </div>
                                 <div class="titlu"> <a onclick="retetaDetalii('` + shuffle[b].id + `')">${shuffle[b].titlu}</a></div>
                                 <div class="data">
                                    <img src="img/calendar.jpg">
                                    <p>${new Date(shuffle[b].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${shuffle[b].categoria}</p>
                                    <div class="clear"></div>
                                 </div>
                              </div>
                           </div>
			`
            }

        }

        for (var f = 0; f < 3; f++) {
            row10.innerHTML += `
		<div class="col-md-4">
                        <div class="stire">
                           <div class="foto">
                              <a onclick="retetaDetalii('` + travelArr[f].id + `')"><img src="img/${travelArr[f].poza}"></a>
                           </div>
                           <div class="titlu"><a onclick="retetaDetalii('` + travelArr[f].id + `')">${travelArr[f].titlu}</a></div>
                           <div class="data">
                              <img src="img/calendar.jpg">
                              <p>${new Date(travelArr[f].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${travelArr[f].categoria}</p>
                              <div class="clear"></div>
                           </div>
                        </div>
                     </div>


		`
        }
        for (var s = 0; s < 4; s++) {
            caseta_foto2.innerHTML += `
		<div class="stire_thumb poz${s+1}">
                           <div class="foto"><a onclick="retetaDetalii('` + reteteArr[s].id + `')"><img src="img/${reteteArr[s].poza}"></a></div>
                           <div class="right">
                              <div class="titlu"><a onclick="retetaDetalii('` + reteteArr[s].id + `')">${reteteArr[s].titlu}</a></div>
                              <div class="data2">
                                 <img src="img/calendar_white.png">
                                 <p>${new Date(reteteArr[s].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${reteteArr[s].categoria}</p>
                                 <div class="clear"></div>
                              </div>
                           </div>
                        </div>
		`
        }



    });

    $.get('http://smart-shopper.ro/vizualizari', datas => {
        console.log(datas);
        //var views=data;
        for (var t = 0; t < datas.length; t++) {
            continutt.innerHTML += `
   	<div class="item">
                              <div class="foto_cele_mai">
                                 <a onclick="retetaDetalii('` + datas[t].id + `')"><img src="img/${datas[t].poza}"></a>
                              </div>
                              <div class="text">
                                 <div class="titlu"><a onclick="retetaDetalii('` + datas[t].id + `')">${datas[t].titlu}</a></div>
                              </div>
                              <div class="clear"></div>
                           </div>
   	`
        }

    });

}




function searchh() {
    generateInterior()
    var listare = document.querySelector("#listare");
    listare.innerHTML = ""
    var cautare = document.querySelector("#search").value;
    console.log(cautare);
    $.get('http://smart-shopper.ro/retete', data => {
        //let arrResult= data.filter(x => x.content=="retete");
        var arrCautare = filterByValue(data, cautare);
        console.log(arrCautare)


        var newSet = new Set(arrCautare) // [1, 2, 3]

        var newArr = Array.from(newSet)

        console.log(newArr)

        //console.log("ArrCautare"+ cautare)
        for (var x = 0; x < newArr.length; x++) {
            var date2 = new Date(newArr[x].data)
            //	console.log(arrCautare[x])
            if (x == 0 || x == 3) {
                listare.innerHTML += `
    <div class="col-md-12">
          <div class="stire mb20">
             <div class="foto">
                <a onclick="retetaDetalii('` + newArr[x].id + `')"><img src="img/${newArr[x].poza}"></a>
             </div>
             <div class="titlu"><a onclick="retetaDetalii('` + newArr[x].id + `')">${newArr[x].titlu}</a></div>
             <div class="data">
                <img src="img/calendar.jpg">
                <p>${new Date(newArr[x].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${newArr[x].categoria}</p>
                <div class="clear"></div>
             </div>
          </div>
       </div>
    `

            } else {


                //console.log(date2)
                listare.innerHTML += `
	<div class="col-md-6">
          <div class="stire mb20">
             <div class="foto">
                <a onclick="retetaDetalii('` + newArr[x].id + `')"><img src="img/${newArr[x].poza}"></a>
             </div>
             <div class="titlu"><a onclick="retetaDetalii('` + newArr[x].id + `')">${newArr[x].titlu}</a></div>
             <div class="data">
                <img src="img/calendar.jpg">
                <p>${new Date(newArr[x].data).getDate()} ${luni[date2.getMonth()]} ${date2.getFullYear()}  - ${newArr[x].categoria}</p>
                <div class="clear"></div>
             </div>
          </div>
       </div>
	`
            }
        }




    });

    function filterByValue(array, string) {
        var cautares = []
        //console.log(cautares)
        for (var i = 0; i < array.length; i++) {
            // var x = array[i].content.includes(string)
            // console.log(" textul este "+ x)
            if (array[i].content.toLowerCase().includes(string.toLowerCase())) {
                //	console.log(array[i].id)
                cautares.push(array[i]);


            }
            if (array[i].ingrediente.toLowerCase().includes(string.toLowerCase())) {
                //	console.log(array[i].id)
                cautares.push(array[i]);


            }
        }

        return cautares


    }

}




function shuffleArray(array) {
    for (var x = array.length - 1; x > 0; x--) {
        var holder = Math.floor(Math.random() * (x + 1));
        var itemValue = array[x];
        array[x] = array[holder];
        array[holder] = itemValue;
    }
    return array;
}

// function menu(){
//   var allBtn=document.querySelectorAll(".nav li");
//   for (let x=0; x<allBtn.length; x++){
//      allBtn[x].classList.remove("active")
//     allBtn[x].addEventListener("click", function(event){
     
//       event.target.parentNode.classList.add("active")
//     })
//   }
  
// }

document.querySelector(".nav").addEventListener("click", function(event){
  var allBtn=document.querySelectorAll(".nav li")
       for(var x=0; x< allBtn.length; x++){
        allBtn[x].classList.remove("active")

       }
       event.target.parentNode.classList.add("active")


})