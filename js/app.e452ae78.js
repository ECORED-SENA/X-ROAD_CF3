(function(e){function a(a){for(var n,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(t.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"196b2e6e","chunk-0206bfa0":"9ccc3541","chunk-0cfca828":"c20baa99","chunk-13303073":"7ff374b9","chunk-1479a341":"0bbb3f22","chunk-1fb07a61":"24d1b327","chunk-2c06842c":"c0f168fb","chunk-2d0dad62":"bfc13d4f","chunk-2d208d90":"b1f235e6","chunk-2d21d0e2":"aa4c574a","chunk-2d22c123":"37630d9a","chunk-2e80bb9a":"5f584649","chunk-515a8379":"d900644c","chunk-522cec8c":"dd5cff70","chunk-59974754":"2059fa16","chunk-5a6377df":"622ea9be","chunk-7432e4d4":"b0486591","chunk-766a929b":"e9991d2f","chunk-c796899c":"0821f919",creditos:"06d8e68f",glosario:"689b63d6",referencias:"72249728",tema1:"5e6edf1b",tema2:"4d059d00",tema3:"2faaa540",tema4:"1f046c2d"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-5a6377df":1,"chunk-7432e4d4":1,"chunk-766a929b":1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d0dad62":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-515a8379":"e912b969","chunk-522cec8c":"99a35118","chunk-59974754":"459549eb","chunk-5a6377df":"eecfadba","chunk-7432e4d4":"99a35118","chunk-766a929b":"92cde18b","chunk-c796899c":"31d6cfe0",creditos:"e912b969",glosario:"07c16bea",referencias:"a790e1e7",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",r=s.p+n,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===n||d===r)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var n=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete i[e],f.parentNode.removeChild(f),o(t)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,o){n=r[e]=[a,o]}));a.push(n[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(f);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var f=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view"),o("footer")],1)],1),o("BarraAvance")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,s=(o("cf25"),o("2877")),l=Object(s["a"])(c,i,r,!1,null,null,null),d=l.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("8c4f")),f=o("ae58"),p=o("7e58");n["a"].use(u["a"]);var m=new u["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=m,g=o("1c2c"),h=(o("becf"),o("7b17"),o("ab8b"),o("a3a0"),o("4bc7"),o("78df"),{global:{componenteFormativo:"Introducción a X-Road",descripcionCurso:"Para ofrecer servicios o habilitar trámites totalmente digitales, se hace necesario   una plataforma de interoperabilidad que conecte a todas las organizaciones estatales para que puedan intercambiar información propia o de los ciudadanos en un mismo formato y lenguaje. X-Road es una capa de intercambio de datos distribuidos que proporciona una forma estandarizada y segura de producir y consumir servicios. Adicionalmente, garantiza la confidencialidad, integridad e interoperabilidad entre las partes de intercambio de datos",imagenBannerPrincipal:o("ae0a"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Generalidades - Breve historia de la tecnología X-Road",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"¿Qué es X-Road?",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Un Poco de historia",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"¿Cómo funciona X-Road?",hash:"t_1_3"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Generalidades de la tecnología X-Road",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Características de X-Road",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Ecosistema X-Road",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Estructura",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Modelo organizacional",hash:"t_3_1"}]},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Para potenciar los Servicios Ciudadanos Digitales.",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Implementación de X-Road a Nivel Mundial a 2020",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Implementación en Colombia",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Plataforma de Interoperabilidad - PDI",hash:"t_4_3"}]}],subMenu:[{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección general"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Daniel Fernando Portilla Arciniegas",cargo:"Experto temático",centro:"MINTIC"},{nombre:"José Ricardo Aponte Oviedo",cargo:"Experto temático",centro:"MINTIC"},{nombre:"Sergio Arturo Medina Castillo",cargo:"Diseñador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"Vilma Lucia Perilla M.",cargo:"Revisora y evaluadora metodológica",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"Sandra Patricia Hoyos Sepúlveda",cargo:"Correción de estilo",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional"},{nombre:["Oscar Ivan Uribe Ortiz","Eulises Orduz Amezquita","Luis Gabriel Urueta Alvarez"],cargo:"Diseño web y Producción Audiovisual"},{nombre:"Ricardo Alonso González Vargas",cargo:"Desarrollo Front-End"},{nombre:"Rafael Augusto Mantilla Lopez",cargo:"Validación de diseño y contenido"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de comercio y servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Atzori, L, Iera, A. y Morabito, G, (2017, marzo 1) Comprensión de Internet de las cosas: definición, potencialidades y papel social de un paradigma en rápida evolución pag. 122-140.",link:"https://www.sciencedirect.com/science/article/abs/pii/S1570870516303316"},{referencia:"BBC NEWS. (2014, marzo 10). El peligro de usar wi-fi en lugares públicos",link:"https://www.bbc.com/mundo/noticias/2014/03/140310_wifi_internet_hotspots_rg"},{referencia:'Decreto 620 de 2020. [Presidencia de la Republica]. Por el cual se subroga el título 17 de la parte 2 del libro 2 del Decreto 1078 de 2015, para reglamentarse parcialmente los artículos 53, 54, 60, 61 Y 64 de la Ley 1437 de 2011, los literales e, j y literal a del parágrafo 2 del artículo 45 de la Ley 1753 de 2015, el numeral 3 del artículo 147 de la Ley 1955 de 2019, y el artículo 9 del Decreto 2106 de 2019, estableciendo los lineamientos generales en el uso y operación de los servicios ciudadanos digitales". 2 de mayo de 2020.'},{referencia:"Gobierno electrónico. Estado, ciudadanía y democracia en Internet, Julie Massal, Carlos Germán Sandoval, Revista Análisis político nº 68, Bogotá, enero-abril, 2010: págs. 3-25."},{referencia:"Ley 1341 de 2009. [Congreso de la Republica]. Por la cual se definen principios y conceptos sobre la sociedad de la información y la organización de las Tecnologías de la Información y las Comunicaciones –TIC–, se crea la Agencia Nacional de Espectro y se dictan otras disposiciones. Julio 30 de 2009"},{referencia:"Manual de Gobierno digital. Implementación de la Política de Gobierno Digital Decreto 1008 de 2018 (Compilado en el Decreto 1078 de 2015, capítulo 1, título 9, parte 2, libro 2)."},{referencia:"Marco de la Transformación Digital para el Estado Colombiano. MinTIC, (Julio 2020)."}],glosario:[{termino:"Servicios ciudadanos digitales",significado:"es el conjunto de soluciones y procesos transversales que brindan al Estado capacidades y eficiencias para su transformación digital, para lograr una adecuada interacción del ciudadano con el Estado, garantizando el derecho a la utilización de medios electrónicos ante la administración pública."},{termino:"Servicios ciudadanos digitales base",significado:"son los considerados como servicios de interoperabilidad, autenticación digital y carpeta ciudadana digital."},{termino:"Servicios ciudadanos digitales especiales",significado:"son aquellos que brindan soluciones que por sus características realizan nuevas ofertas de valor y son adicionales a los servicios ciudadanos digitales base, o bien, corresponden a innovaciones que realizan los prestadores de servicio a partir de la integración a los servicios ciudadanos digitales base, esto bajo un esquema coordinado por el articulador."},{termino:"Servicio de intercambio de información",significado:"en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijorecurso tecnológico que mediante el uso de un conjunto de protocolos y estándares permite el intercambio de información. “Es una representación lógica de una actividad de negocio repetible que tiene un resultado específico (por ejemplo, verificar el crédito del cliente, proporcionar datos del clima, consolidar informes de perforación) y que tiene las siguientes características: autocontenido, puede estar compuesto por otros servicios y es una “caja negra” para los consumidores del servicio”"},{termino:"Trámite",significado:"conjunto o serie de pasos o acciones reguladas por el Estado, que deben efectuar los usuarios para adquirir un derecho o cumplir con una obligación prevista o autorizada por la ley. El trámite se inicia cuando ese particular activa el aparato público a través de una petición o solicitud expresa y termina (como trámite) cuando la administración pública se pronuncia sobre éste, aceptando o denegando la solicitud."}]});n["a"].prototype.$config=h;var v=o("9224");n["a"].prototype.$package=v,n["a"].config.productionTip=!1,new n["a"]({router:b,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.0.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},a3a0:function(e,a,o){},ae0a:function(e,a,o){e.exports=o.p+"img/banner-princiapal.118860c6.svg"},cf25:function(e,a,o){"use strict";o("fea6")},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.9d70cac0.png"},fea6:function(e,a,o){}});
//# sourceMappingURL=app.e452ae78.js.map