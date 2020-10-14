import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';


function OrphanagesMap() {
     return (
          <div id="page-map">
               <aside>
                    <header>
                         <img src={mapMarkerImg} alt="Happy - App"/>

                         <h2>Escolha um orfanato no mapa</h2>
                         <p>Muitas crianças estão esperando a sua visita :) </p>
                    </header>

                    <footer>
                         <strong>São Paulo - Capital</strong>
                         <span>São Paulo</span>
                    </footer>
               </aside>

               <div></div>
          </div>
     );
}

export default OrphanagesMap;