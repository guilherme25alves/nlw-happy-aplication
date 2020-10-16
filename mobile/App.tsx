import React from 'react';


import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

// Dimensions => Propriedade do React Native que nos possibilita ter acesso ao width/height da tela 

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold,  // Podemos dar um nome para a font, por exemplo nun700b: Nunito_700Bold => no styles podemos referenciar pelo nome que criamos 
    Nunito_800ExtraBold,
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <Routes />
  );
}

