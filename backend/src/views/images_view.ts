import Image from '../models/Image';

export default {
     
     render(image : Image) {
          return {
               id: image.id,   
               url: `http://192.168.0.43:3333/uploads/${image.path}`,  //localhost => mudamos para o IP para que o Smartphone consiga carregar as imagens                     
          };
     },

     renderMany(images : Image[]) {
          return images.map(image => this.render(image));
     }
}

