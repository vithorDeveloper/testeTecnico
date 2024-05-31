import { useEffect, useState } from 'react'
import axios from 'axios'
import './style.scss'
import { ListBullets } from "@phosphor-icons/react"

export const Menu = () => {

  type State = {
    id: number;
    nome: string;
  }

  const [abrir, setAbrir] = useState(false)
  const [estados, setEstados] = useState<State[]>([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(null);
  const [valorDoCampoDeEntrada, setValorDoCampoDeEntrada] = useState('');




  useEffect(() => {
    const baseUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    axios.get<State[]>(baseUrl)
      .then((response) => {
        return setEstados(response.data)
      })
      .catch((error) => {
        console.error('Erro ao buscar estados:', error);
      });
  }, []);

  const toggleDropdown = () => {
    setAbrir(!abrir);
  }

  const handleEstadoClick = (nome: string) => {
    setEstadoSelecionado(nome);
  }

  return(
    <section>
      <div className="caixaDeTexto">
        <div>
          <input 
            type="text" 
            placeholder="Cidade"
            value={estadoSelecionado || ''}
            onChange={(e) => {
              setEstadoSelecionado(e.target.value)
              setValorDoCampoDeEntrada(e.target.value)
            }}
            onClick={toggleDropdown}
          />
          <ListBullets  
            className='icon'
            onClick={toggleDropdown}
          />
        </div>
        {abrir && (
          <ul>
            {estados
              .filter((estado) => 
                estado.nome.toLowerCase().includes(valorDoCampoDeEntrada.toLowerCase()))
              .map((estado) => (
                <li
                  key={estado.id}
                  onClick={() => handleEstadoClick(estado.nome)}
                >
                  {estado.nome}
                </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

{/* <ul>
  {estados.map((estado) => (
    <li 
      key={estado.id}
      onClick={() => handleEstadoClick(estado.nome)}
    >{estado.nome}</li>
  ))}
</ul> */}