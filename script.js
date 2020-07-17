

var Accueil = {
    
    template: `<div id="accueil"><p class="mr-5">Accueil. Synopsis.  </p><p class="mr-4">Personnages. Autres. </p><h2>Le château dans le ciel</h2><h3>Studio Ghibli</h3></div>`};

var Synopsis = {
    template: `<div id="Synopsis"><h5>Synopsis</h1><h4>Enlevée par des pirates de l'air, la jeune Sheeta parvient à s'échapper en sautant d'un dirigeable où elle était prisonnière. Sauvée de justesse par Pazu, jeune orphelin travaillant pour une cité minière, elle révèle à ce dernier être la descendante des souverains de Laputa, une île flottant dans les cieux. Ce royaume autrefois habité par un peuple pacifique doté d'une intelligence supérieure et d'une technologie des plus avancées attire les convoitises.</h5></div>`};



var Personnages = {
    template: `<div id="Personnages"><h7>Personnages</h7><h6>
Pazu
Sheeta
Dora
Muska
Papy Pomme
Le Général
Charles
Henri
Louis
Duffy
Pepère
Okami</h6></div>`};

var Autres = {
    template:`<div id="Autres"><h9>Autres Animes</h9><h8><div class ="col">
    <ul>
    <li>
    <strong>1986</strong> : Le Château dans le ciel
      </li>
  
<br>
    
    <li>
    <strong>1988</strong> : Mon voisin Totoro 
      </li>
    
  
<br>
  
    <li>
    <strong>1988</strong> : Le Tombeau des lucioles 
     </li>
   
   
<br>
  
    <li>
    <strong>1989</strong> : Kiki la petite sorcière 
    </li>
  
    
<br>
 
    <li>
    <strong>1991</strong> : Souvenirs goutte à goutte
      </li>
   
   
<br>
  
    <li>
    <strong>1992</strong> : Porco Rosso 
    </li>
<br>
    <li>
    <strong>1993</strong> : Je peux entendre l'océan 
    </li>
<br>

    <li>
    <strong>1994</strong> : Pompoko 

    </li>
<br>

    <li>
    <strong>1995</strong> : Si tu tends l'oreille 
    </li>
<br>
    <li>
    <strong>1997</strong> : Princesse Mononoké 
    </li>
<br>
    <li>
    <strong>1999</strong> : Mes voisins les Yamada
    </li>
    </h8>
 
    <h10>
    <li>
    <strong>2001</strong> : Le Voyage de Chihiro 
    </li>
<br>
    <li>
    <strong>2002</strong> : Le Royaume des chats 
    </li>
<br>
  
    <li>
    <strong>2004</strong> : Le Château ambulant
 
    <li>
  <br>  
 
    <li>
    <strong>2006</strong> : Les Contes de Terremer 
 
    </li>
<br>
   
    <li>
    <strong>2008</strong> : Ponyo sur la falaise 
   
    </li>
<br>
  
    <li>
    <strong>2010</strong> : Arrietty, le petit monde des chapardeurs  
  
    </li>
<br>
  
    <li>
    <strong>2011</strong> : La Colline aux coquelicots 

    </li>
<br>
 
    <li>
    <strong>2013</strong> : Le vent se lève 
  
    </li>
<br>
   
    <li>
    <strong>2013</strong> : Le Conte de la princesse Kaguya 

    <li>
<br>
  
    <li>
    <strong>2014</strong> : Souvenirs de Marnie 
   
    </li>
<br>
 
    <li>
    <strong>2016</strong> : La Tortue rouge 
  
    </li>
    </h10>

    </div></div>`};


  routes = [
      {path:"/accueil", component: Accueil},
      {path:"/synopsis", component: Synopsis},
      {path:"/personnages", component: Personnages},
      {path:"/autres", component: Autres}

  ];

  var router = new VueRouter ({routes});
  var app = new Vue ({router}).$mount("#app");
