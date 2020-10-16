import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

import '../styles/pages/orphanages-page.css';


// Estado seria todo elemento, variável que o componente por alguma ação altera seu valor, em todos os casos de alteração de valor, o ideal é salvarmos em um estado
interface Orphanage {
     id: number;
     latitude: number;
     longitude: number;
     name: string;
}


function OrphanagesMap() {

     // Forma de passar o tipo para o useState, entre <interface-que-representa-o-elemento> 
     const [orphanages, setOrphanages] = useState<Orphanage[]>([]); // forma de declarar um estado, useState, recebe 1ºparam => valor, 2º param => function para alterar seu valor

     useEffect(() => {
          api.get('orphanages').then(response => {
               setOrphanages(response.data);
          });
     }, []);

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

               <Map
                    center={[-23.5620651,-46.757523]}
                    zoom={15}
                    style={{ width: '100%', height:'100%' }}
               >
                  {/*  <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                         
                         {/* Forma de se acessar uma variável de ambiente no react => process.env.VAR_NAME */}
                         <TileLayer  
                              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                         />

                         { orphanages.map(orphanage => {
                              return (
                                   <Marker
                                        icon={mapIcon} 
                                        position={[orphanage.latitude, orphanage.longitude]}
                                        key={orphanage.id}
                                   >
                                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                             { orphanage.name }
                                             <Link to={`/orphanates/${orphanage.id}`}>
                                                  <FiArrowRight size={20} color="#FFF" />
                                             </Link>
                                        </Popup>
                                   </Marker>
                              )
                         })}
                         
               </Map>

               <Link to="/orphanates/create" className="create-orphanage">
                    <FiPlus size="32" color="#FFF" />
               </Link>
          </div>
     );
}

export default OrphanagesMap;