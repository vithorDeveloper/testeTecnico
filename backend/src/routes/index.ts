import axios from "axios";
import { Router } from "express";

export const router = Router();

type State = {
  id: number
  nome: string
}

const baseUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

axios.get(baseUrl)
     .then((response) =>{
        response.data.forEach((estado: State) => {
          console.log(`ID: ${estado.id}, NOME: ${estado.nome}`)
        })
      })