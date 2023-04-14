import { Container } from "./styles";

import { NavLink } from "react-router-dom";

import { ReactComponent as ProteinIcon } from '../../assets/whey-protein--16881.svg';
import { ReactComponent as WeightIcon } from '../../assets/weight-lifting-16884.svg';
import { ReactComponent as TapeIcon } from '../../assets/measuring-tape-fitness-16895.svg';

import menuImg from '../../assets/menu.svg'

import { useState } from "react";


export const SideBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    };


    return (
        <Container isMenuOpen={menuOpen}>
            <button type="button" onClick={handleToggleMenu}>
                <img src={menuImg} alt='Abrir e fechar o menu' />
            </button>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <ProteinIcon />
                            <span>Suplementos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/equips">
                            <WeightIcon />
                            <span>Equipamentos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ant">
                            <TapeIcon />
                            <span>Avaliação</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}