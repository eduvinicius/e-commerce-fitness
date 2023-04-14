import { Outlet } from 'react-router-dom';

import { SideBar } from '../../components/Sidebar';
import { MyOrder } from '../../components/MyOrder';

import { Container } from './styles';

import logoImg from '../../assets/fitnessshop.png';

export default function Main() {
  return (
    <Container>
      <SideBar />
      <section>
        <img src={logoImg} />
        <Outlet />
        <MyOrder />
      </section>

    </Container>
  )
};
