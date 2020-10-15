import multer from 'multer';
import  path from 'path'; // Path nativo do Node para auxiliar no caminhos relativos no projeto

export default {
     // onde vamos armazenar o arquivo 
     storage: multer.diskStorage({
          destination: path.join(__dirname, '..', '..', 'uploads'), // Forma de acessar diretórios no path, com vírgula
          filename: (request, file, cb) => {
               const filename = `${Date.now()}-${file.originalname}`;

               cb(null, filename);
          },
     })
};