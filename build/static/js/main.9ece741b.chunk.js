(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/Logo.1faad84b.png"},41:function(e,a,t){e.exports=t(86)},47:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),s=t.n(c),l=(t(47),t(30)),m=t(31),i=t(39),o=t(32),p=t(40),d=t(14),E=t.n(d),N=t(89),u=t(88),b=(t(67),function(e){return r.a.createElement("div",{className:"Planets"},r.a.createElement("div",{className:"col-md-3 col-lg-3 mb-3"},r.a.createElement("div",{className:"planet-card"},r.a.createElement("div",{className:"planet-card-inner"},r.a.createElement("div",{className:"planet-front"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},r.a.createElement("strong",null,e.name," Climate: "),r.a.createElement("span",{className:"text-capitalize"},e.temp)),r.a.createElement("p",{className:"card-text"},e.pop))),r.a.createElement("div",{className:"planet-back"},r.a.createElement("h1",{className:"text-center"},e.name),r.a.createElement("p",{className:"mb-1"},"Temperature: ",e.temp),r.a.createElement("p",{className:"mb-1"},"diameter: ",e.diameter),r.a.createElement("p",{className:"mb-1"},"Gravity: ",e.gravity),r.a.createElement("p",{className:"mb-1"},"Orbital Period",e.orbit),r.a.createElement("p",{className:"mb-1"},"population: ",e.pop),r.a.createElement("p",{className:"mb-1"},"Rotation Period: ",e.rotate),r.a.createElement("p",{className:"mb-1"},"Surface Water: ",e.surface),r.a.createElement("p",{className:"mb-1"},"terrain: ",e.terrain))))))}),h=(t(68),function(e){return r.a.createElement("div",{className:"people"},r.a.createElement("div",{className:"col-md-3 col-lg-3 mb-3"},r.a.createElement("div",{className:"planet-card"},r.a.createElement("div",{className:"planet-card-inner"},r.a.createElement("div",{className:"planet-front"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-capitalize"},e.gender)),r.a.createElement("p",{className:"card-text"},e.dob))),r.a.createElement("div",{className:"planet-back"},r.a.createElement("h1",{className:"text-center"},e.name),r.a.createElement("p",{className:"mb-1"},"Gender: ",e.gender),r.a.createElement("p",{className:"mb-1"},"date of Birth: ",e.dob),r.a.createElement("p",{className:"mb-1"},"Eye Color: ",e.eye),r.a.createElement("p",{className:"mb-1"},"Hair Color",e.hair),r.a.createElement("p",{className:"mb-1"},"Weight: ",e.weight),r.a.createElement("p",{className:"mb-1"},"Skin Color: ",e.skin),r.a.createElement("p",{className:"mb-1"}," Number of Rides ",e.ride),r.a.createElement("p",{className:"mb-1"},"terrin: ",e.terrain))))))}),g=function(e){return r.a.createElement("div",{className:"Starship"},r.a.createElement("div",{className:"col-md-3 col-lg-3 mb-3"},r.a.createElement("div",{className:"planet-card"},r.a.createElement("div",{className:"planet-card-inner"},r.a.createElement("div",{className:"planet-front"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.name),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-capitalize"},e.model)),r.a.createElement("p",{className:"card-text"},e.capacity))),r.a.createElement("div",{className:"planet-back"},r.a.createElement("h1",{className:"text-center"},e.name),r.a.createElement("p",{className:"mb-1"},"Model: ",e.model),r.a.createElement("p",{className:"mb-1"},"MGLT: ",e.mglt," /hr  "),r.a.createElement("p",{className:"mb-1"},"Capacity: ",e.capacity),r.a.createElement("p",{className:"mb-1"},"Price: ",e.price," credits"),r.a.createElement("p",{className:"mb-1"},"Manufacturer: ",e.maker),r.a.createElement("p",{className:"mb-1"},"Passengers: ",e.passengers),r.a.createElement("p",{className:"mb-1"},"drive rating: ",e.rating),r.a.createElement("p",{className:"mb-1"},"Class: ",e.class),r.a.createElement("p",{className:"mb-1"},"Consumables: ",e.consume),r.a.createElement("p",{className:"mb-1"},"Crew: ",e.crew),r.a.createElement("p",{className:"mb-1"},"Atmosphering Speed",e.speed))))))},v=(t(69),t(33)),f=t.n(v),y=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={planets:[],people:[],starships:[],error:!1},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://swapi.co/api/planets/?format=json").then(function(a){e.setState({planets:a.data.results})}).catch(function(a){e.setState({error:!0})}),E.a.get("https://swapi.co/api/people/?format=json").then(function(a){e.setState({people:a.data.results})}).catch(function(a){e.setState({error:!0})}),E.a.get("https://swapi.co/api/starships/?format=json").then(function(a){e.setState({starships:a.data.results})}).catch(function(a){e.setState({error:!0})})}},{key:"render",value:function(){var e=this.state.planets.map(function(e){return r.a.createElement(b,{key:e.id,name:e.name,temp:e.climate,pop:e.population,diameter:e.diameter,gravity:e.gravity,orbit:e.orbit,rotate:e.rotation_period,terrain:e.terrain,surface:e.surface_water})}),a=this.state.people.map(function(e){return r.a.createElement(h,{key:e.id,name:e.name,dob:e.birth_year,gender:e.gender,eye:e.eye_color,height:e.height,hair:e.hair_color,weight:e.weight,skin:e.skin_color,ride:e.vehicles.length})}),t=this.state.starships.map(function(e){return r.a.createElement(g,{key:e.id,name:e.name,model:e.model,maker:e.manufacturer,class:e.starship_class,capacity:e.cargo_capacity,price:e.cost_in_credits,mglt:e.mglt,consume:e.consumables,crew:e.crew,rating:e.hyperdrive_rating,passengers:e.passengers,speed:e.max_atmosphering_speed,length:e.length})});return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"star wars logo"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})))),r.a.createElement("main",{className:"mt-5"},r.a.createElement("h1",{className:"text-center"},"Welcome to star wars confederation directory"),r.a.createElement("h5",null,"I am one with force ",r.a.createElement("br",null)," The force is with me"),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(N.a,{defaultActiveKey:"planets",fill:!0,variant:"tabs",transition:!1,id:"noanim-tab-example"},r.a.createElement(u.a,{eventKey:"planets",title:"Planets"},r.a.createElement("div",{className:"row pt-3 justify-content-center"},e)),r.a.createElement(u.a,{eventKey:"starships",title:"Starships"},r.a.createElement("div",{className:"row mt-5 justify-content-center"},t)),r.a.createElement(u.a,{eventKey:"people",title:"People"},r.a.createElement("div",{className:"row mt-3 justify-content-center"},a))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.9ece741b.chunk.js.map