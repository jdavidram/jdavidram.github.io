import { Layout } from "../Layout/Layout";
import hello from "./hello.webp";
import "./Home.scss";
import { FaChartArea, FaWaveSquare, FaChartPie, FaWater, FaCloudShowersWater, FaPython, FaReact } from "react-icons/fa6";
import { TbTriangleSquareCircleFilled, TbAxisY } from "react-icons/tb";
import { GiHotSurface, GiComputing } from "react-icons/gi";
import { LuTangent, LuDam } from "react-icons/lu";
import { GrGraphQl } from "react-icons/gr";
import { SiArcgis, SiQgis } from "react-icons/si";
import { Bubble } from "../Tools/Bubble/Bubble";

function Header({ course }) {
    const msg = "La materia no se pierde ni se destruye, se gana este semestre";
    return (
        <header>
            <Bubble src={ hello } />
            <aside>
                <h1>¡Aprende <strong>{ course }</strong> sin morir en el intento!</h1>
                <p>Contactanos y pide tu asesoría personalizada o grupal, en el horario que quieras, como quieras y no te dejes vencer por las materias de la U</p>
            </aside>
        </header>
    );
}

function Courses({ courses }) {
    return (
        <article>
            <h2>Cursos y asesorías disponibles</h2>
            { courses.map((course, i) => {
                return (
                    <div className="course" key={ i }>
                        { course.icon }
                        <p>{ course.name }</p>
                    </div>
                );
            }) }
        </article>
    );
}

function Home() {
    const process = [{
        icon: <FaChartPie />,
        name: "Estadistica"
    }, {
        icon: <GiComputing />,
        name: "Metodos numericos"
    }, {
        icon: <GiHotSurface />,
        name: "Fenomenos de transporte"
    }, {
        icon: <FaWater />,
        name: "Mecánica de fluidos"
    }, {
        icon: <SiArcgis />,
        name: "Sistemas de información geografica - ArcGIS"
    }, {
        icon: <SiQgis />,
        name: "Sistemas de información geografica - QGIS"
    }, {
        icon: <LuDam />,
        name: "Hidraulica"
    }, {
        icon: <FaCloudShowersWater />,
        name: "Hidrología"
    }, {
        icon: <FaPython />,
        name: "Fundamentos de programación - Python"
    }, {
        icon: <FaReact />,
        name: "Fundamentos de programación - JavaScript"
    }];
    const courses = [{
        icon: <TbTriangleSquareCircleFilled />,
        name: "Matemáticas básicas"
    }, {
        icon: <LuTangent />,
        name: "Cálculo diferencial"
    }, {
        icon: <FaChartArea />,
        name: "Cálculo integral"
    }, {
        icon: <TbAxisY />,
        name: "Geometría vectorial y análitica"
    }, {
        icon: <GrGraphQl />,
        name: "Algebra lineal"
    }, {
        icon: <FaWaveSquare />,
        name: "Ecuaciones diferenciales"
    }];
    var random = courses[Math.floor(Math.random()*courses.length)];
    return (
        <Layout>
            <Header course={ random.name } />
            <Courses courses={ courses } />
        </Layout>
    );
}

export { Home };