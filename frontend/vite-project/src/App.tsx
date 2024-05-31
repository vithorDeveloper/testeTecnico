import './style.scss'
import { DeCima } from "./components/BarrasLaterais/DeCima";
import { DaEsquerda } from './components/BarrasLaterais/Esquerda';
import { DaDireita } from './components/BarrasLaterais/Direita';
import { DeBaixo } from './components/BarrasLaterais/DeBaixo';
import { Menu } from './components/menuDropdown';

export const App = () => (
  <>
    <DeCima />
    <DaDireita />
    <Menu/>
    <DaEsquerda />
    <DeBaixo />
  </>
)