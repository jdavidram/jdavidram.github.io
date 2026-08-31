import { FaChartArea, FaWaveSquare, FaChartPie, FaWater, FaCloudShowersWater, FaPython, FaReact } from "react-icons/fa6";
import { TbTriangleSquareCircleFilled, TbAxisY } from "react-icons/tb";
import { GiHotSurface, GiComputing } from "react-icons/gi";
import { LuTangent, LuDam } from "react-icons/lu";
import { SiLooker } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiArcgis, SiQgis } from "react-icons/si";
import { PiWaveSineDuotone } from "react-icons/pi";
import { MdOutlineWaves } from "react-icons/md";
import { WhatsApp } from "../Tools/WhatsApp";
import { Layout } from "../Layout/Layout";
import "./Courses.scss";
import { useState } from "react";

function Courses() {
    const courses = [{
        logo: <SiLooker />,
        title: "Análisis de datos",
        description: "Aprende a crear dashboars y analizar datos, aprovechando al máximo el acceso a <strong>Google WorkSpace</strong>",
        start: "14/septiembre/2026",
        duration: "3 semanas",
        frecuency: "4 horas / semana",
        price: "50.000 COP"
    }];
    const [msg, setMsg] = useState([]);
    return (
        <Layout>
            <header>
                <span className="title">
                    <h2>Cursos disponibles</h2>
                    <p>Escoge los cursos que necesites y da click en el botón del final</p>
                    <p>Todos los cursos cuentan con material de estudio, ejercicios practicos, videos, clases asincronas y horarios de asesorías</p>
                </span>
                <section className="courses">
                    { courses.map((course, i) => (
                        <div className="course" key={ i } onClick={ () => { setMsg([...new Set([...msg, course.title])]) } }>
                            { course.logo }
                            <h4>{ course.title }</h4>
                            <p>{ course.description }</p>
                            <ul>
                                <li><strong>Inicio:</strong> { course.start }</li>
                                <li><strong>Duración:</strong> { course.duration }</li>
                                <li><strong>Frecuencia:</strong> { course.frecuency }</li>
                                <li><strong>Precio:</strong> { course.price }</li>
                            </ul>
                        </div>
                    )) }
                </section>
                <span className="title">
                    <p>Haz seleccionado los siguientes cursos</p>
                    <ul>
                        { msg.map((m) => (
                            <li>{ m }</li>
                        )) }
                    </ul>
                    <p>Ahora solo tienes que darle click al botón de abajo y empieza a ganarle a la U</p>
                </span>
                <WhatsApp msg={ "Hola\nquisiera inscribirme en " + msg.join(", ") }>
                    <button>Empieza</button>
                </WhatsApp>
            </header>
        </Layout>
    );
}

export { Courses };