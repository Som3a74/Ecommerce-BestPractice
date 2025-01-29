import { Container } from 'react-bootstrap'
import style from './MainLayout.module.css'
import { Footer, Header } from '@components/common';
import { Outlet } from "react-router"
const { wrapper, container } = style

function MainLayout() {
    return (
        <Container className={container}>
            <Header />
            <div className={wrapper}>
                <Outlet />
            </div>
            <Footer />
        </Container>
    )
}

export default MainLayout