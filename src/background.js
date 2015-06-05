 chrome.webNavigation.onCommitted.addListener(function(data) {
   if (!konspiratorOn){
     return false;
   }

   if (typeof data){
     if (data.frameId === 0){
      //  console.log(data);
     }
   }
 });


 chrome.webNavigation.onBeforeNavigate.addListener(function(data) {
   if (!konspiratorOn){
     return false;
   }

   if (typeof data && data.frameId === 0){
    //  console.log(data);
     if (!pagesList.some(function(page) {return data.url.indexOf(page) > -1;})){
       var url = pagesList[Math.floor(Math.random()*pagesList.length)];
       chrome.tabs.update(null, {url: 'http://'+url});
      //  console.log('nie, radsej knihu...');
      //  console.log(data.url);
      //  console.log(url);
     }
   }else{
    //  console.error(data);
   }
 });

 var konspiratorOn = true;

 chrome.browserAction.onClicked.addListener(function(tab) {
   konspiratorOn = !konspiratorOn;
   if (konspiratorOn){
     chrome.browserAction.setIcon({
         path: {
           19: "icon.png",
           38: "icon.png",
         }
      });
   } else{
     chrome.browserAction.setIcon({
          path: {
            19: "icon2.png",
            38: "icon2.png",
          }
      });
   }

  });


var pagesList = [
'svetkolemnas.info',
'zvedavec.org',
'rodinajezaklad.sk',
'ac24.cz',
'stopautogenocide.sk',
'osud.cz',
'zemejas.cz',
'cz.sputniknews.com',
'czech.ruvr.ru',
'slovak.ruvr.ru',
'zemavek.sk',
'panobcan.sk',
'czechfreepress.cz',
'vaseforum.sk',
'slobodnyvysielac.sk',
'badatel.net',
'protiprudu.org',
'beo.sk',
'obcianskytribunal.sk',
'sho.sk',
'freeglobe.parlamentnilisty.cz',
'magnificat.sk',
'freepub.cz',
'vkpatriarhat.org.ua',
'spolocnostsbm.com',
'svobodnenoviny.eu',
'auria.sk',
'afinabul.blog.cz',
'dolezite.sk',
'nadhlad.com',
'ze-sveta.cz',
'nwoo.org',
'orgo-net.blogspot.sk',
'cez-okno.net',
'vlastnihlavou.cz',
'bezpolitickekorektnosti.cz',
'eiaktivity.sk',
'nazorobcana.sk',
'pravdive.eu',
'aeronet.cz',
'slovenskeslovo.sk',
'svobodny-vysilac.cz',
'vedy.sk',
'leva-net.webnode.cz',
'novysmer.cz',
'novarepublika.cz',
'extraplus.sk',
'maat.sk',
'noveslovo.sk',
'lifenews.sk',
'isstras.eu',
'tvina.sk',
'rodobrana.wordpress.com',
'chelemendik.sk',
'protiproud.parlamentnilisty.cz',
'kontroverznirealita.cz',
'medzicas.sk',
'borrea.eu',
];
