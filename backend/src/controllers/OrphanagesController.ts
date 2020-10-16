import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import orphanageView from '../views/orphanages_view';

// Temos que importar dessa forma, porque o YUP não tem um export default
import * as Yup from 'yup';

import Orphanage from '../models/Orphanage';

// métodos padrão => index, show, create, update, delete

export default {

     async index(request: Request, response: Response) {

          const orphanageRepository = getRepository(Orphanage);

          const orphanages = await orphanageRepository.find({
               relations: ['images']  // Retorna os dados relacionados
          });

          return response.json(orphanageView.renderMany(orphanages)) ;//json(orphanages);
     },

     async show(request: Request, response: Response) {

          const { id } = request.params;

          const orphanageRepository = getRepository(Orphanage);

          const orphanage = await orphanageRepository.findOneOrFail(id, {
               relations: ['images'] 
          });

          return response.json(orphanageView.render(orphanage));  //json(orphanage);
     },

     async create(request: Request, response: Response) {
          // forma de acessar os arquivos da requisição
          //console.log(request.files);

          // Desestruturação
          const {
               name,
               latitude,
               longitude,
               about,
               instructions,
               opening_hours,
               open_on_weekends
          } = request.body;

          const orphanageRepository = getRepository(Orphanage); // Vai disponibilizar métodos do banco para ação (CRUD, Selects .. )

          const requestImages = request.files as Express.Multer.File[]; // Cast para converter para array de arquivos do Multer

          const images = requestImages.map(image => {
               return { path: image.filename }
          });

          const data = {
               name,
               latitude,
               longitude,
               about,
               instructions,
               opening_hours,
               open_on_weekends: open_on_weekends === 'true',
               images
          };

          // Validação com YUP
          const schema = Yup.object().shape({
               name: Yup.string().required(),
               latitude: Yup.number().required(),
               longitude: Yup.number().required(),
               about: Yup.string().required().max(300),
               instructions: Yup.string().required(),
               opening_hours: Yup.string().required(),
               open_on_weekends: Yup.boolean().required(),
               // Temos que avisar que é um array de Obj, sendo de Obj, temos que passar sua config 
               images: Yup.array(Yup.object().shape({
                    path: Yup.string().required()
               }))
          })

          await schema.validate(data, {
               abortEarly: false,  // Retorna todos os erros ao mesmo tempo, não apenas o primeiro que ele encontrar
          });

          // Criar o objeto 
          const orphanage = orphanageRepository.create(data);

          await orphanageRepository.save(orphanage); // Salva de fato no banco 

          return response.status(201).json(orphanage);
     }
}