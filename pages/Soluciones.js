import { Fade } from "react-awesome-reveal"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Servicio from "../components/Servicio"
import {serv} from '../lib/services'

const Soluciones = () => {
    return (
      <Layout>
          <header className='soluciones-header'>
              {/* Barra de navegación */}
              <Navbar />

              {/* Encabezado */}
              <section className="hero_container container">
                  <Fade direction="right">
                      <h1 className="hero_title">Soluciones</h1>
                      <p className="hero_texto">Conoce todos nuestros servicios</p>
                  </Fade>
              </section>
          </header>

          <section className="contenedor overhid">
              {
                serv.map(({t1, p1, a1, img1, clase, direction, alt}, i) => {
                  return (
                    <Servicio
                        key={i}
                        t1={t1}
                        p1={p1}
                        a1={a1}
                        img1={img1}
                        clase={clase}
                        direction={direction}
                        alt={alt}
                    />
                  )
                })
              }
          </section>

          <Footer />
      </Layout>
    )
}

export default Soluciones