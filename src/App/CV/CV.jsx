import { MdOutlineRecycling } from "react-icons/md";
import { LayoutCV } from "../Layout/Layout";
import foto from "./foto.jpeg";
import { useState } from 'react';
import "./CV.scss";

const cv = {
    "Ingeniero ambiental": {
        about: "Ingeniero ambiental de la Universidad Nacional de Colombia con más de 2 años de experiencia en proyectos de sostenibilidad y economía circular en sectores productivos, salud e infraestructura. He liderado la implementación de estrategias de gestión integral de residuos, visitas técnicas y talleres de capacitación, logrando indicadores de aprovechamiento superiores al 80% y fortaleciendo el relacionamiento con comunidades y empresarios. Domino herramientas de análisis geoespacial (QGIS, ArcGIS), programación (Python, SQL) y visualización de datos (Power BI, Looker Studio), integrando información normativa y técnica para la toma de decisiones estratégicas orientadas a la sostenibilidad territorial.",
        experience: [{
            career: "Inspector ambiental",
            empresa: "Estyma S.A.",
            city: "Medellín",
            inicio: "Abril/2026",
            fin: "Junio/2026",
            description: "Apoyo directo a la residente ambiental en la supervisión y seguimiento de la implementación de medidas del Plan de Manejo Ambiental (PMA). Encargado de verificar cumplimiento normativo, elaborar informes técnicos y coordinar acciones correctivas con el equipo de obra, asegurando la mitigación de impactos ambientales en la construcción de infraestructura vial."
        }],
        studies: [{
            titulo: "Ingeniero ambiental",
            universidad: "Universidad Nacional de Colombia",
            city: "Medellín",
            grados: "Abril/2026"
        }],
        courses: [{
            titulo: "Análisis de datos - Nivel avanzado",
            link: "#",
            academia: "Universidad de Antioquia",
            fecha: "Agosto/2025"
        }],
        skills: [{
            icon: <MdOutlineRecycling />,
            skill: "Economía circular"
        }]
    }
};

function CV() {
    const [job, setJob] = useState("Ingeniero ambiental");
    var info = cv["Ingeniero ambiental"];
    return (
        <LayoutCV>
            <header>
                <img src={ foto } alt="Foto" />
                <h1>David Ramirez Rodriguez</h1>
                <div className="dropdown">
                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <h2>{ job }</h2>
                    </button>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={ () => setJob("Ingeniero ambiental") }>Ingeniero ambiental</li>
                        <li className="dropdown-item" onClick={ () => setJob("Analista de datos") }>Analista de datos</li>
                        <li className="dropdown-item" onClick={ () => setJob("Docente de matemáticas") }>Docente de matemáticas</li>
                    </ul>
                </div>
                <ul className="contact">
                    <li>Medellin, Antioquia</li>
                    <li>+57 311 357 8185</li>
                    <li>david456ram@gmail.com</li>
                    <li><a href="https://www.linkedin.com/in/david-ramirez-rodriguez/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </header>
            <section className="about">
                <h2>Perfil profesional</h2>
                <p>{ info.about }</p>
            </section>
            <section className="experience">
                <h2>Experiencia</h2>
                { info.experience.map((exp, i) => (
                    <article key={ i }>
                        <h3>{ exp.career }</h3>
                        <h4>{ exp.empresa } - <strong>{ exp.city }</strong></h4>
                        <h4>{ exp.inicio } - { exp.fin }</h4>
                        <p>{ exp.description }</p>
                    </article>
                )) }
                <article>
                    <h3>Inspector ambiental</h3>
                    <h4>Estyma S.A. - <strong>Medellin</strong></h4>
                    <h4>Abril/2026 - Junio/2026</h4>
                    <p>Apoyo directo a la residente ambiental en la supervisión y seguimiento de la implementación de medidas del Plan de Manejo Ambiental (PMA). Encargado de verificar cumplimiento normativo, elaborar informes técnicos y coordinar acciones correctivas con el equipo de obra, asegurando la mitigación de impactos ambientales en la construcción de infraestructura vial.</p>
                </article>
            </section>
            <section className="studies">
                <h2>Formación académica</h2>
                { info.studies.map((degree, i) => (
                    <article key={ i }>
                        <h3>{ degree.titulo }</h3>
                        <h4>{ degree.universidad } - <strong>{ degree.city }</strong></h4>
                        <h4>{ degree.grados }</h4>
                    </article>
                )) }
                <article>
                    <h3>Ingeniero ambiental</h3>
                    <h4>Universidad Nacional de Colombia - <strong>Medellín</strong></h4>
                    <h4>Abril/2026</h4>
                </article>
            </section>
            <section className="courses">
                <h2>Certificaciones</h2>
                { info.courses.map((course, i) => (
                    <article key={ i }>
                        <h3>
                            <a href={ course.link } target="_blank" rel="noopener noreferrer">{ course.titulo }</a>
                        </h3>
                        <h4>{ course.academia }</h4>
                        <h4>{ course.fecha }</h4>
                    </article>
                )) }
                <article>
                    <h3>
                        <a href="#" target="_blank" rel="noopener noreferrer">Análisis de datos - Nivel avanzado</a>
                    </h3>
                    <h4>Universidad de Antioquia</h4>
                    <h4>Agosto/2025</h4>
                </article>
            </section>
            <section className="skills">
                <h2>Habilidades</h2>
                <ul>
                    { info.skills.map((skill, i) => (
                        <li key={ i }>
                            { skill.icon }
                            <p>{ skill.skill }</p>
                        </li>
                    )) }
                    <li>
                        <MdOutlineRecycling />
                        <p>Economía circular</p>
                    </li>
                </ul>
            </section>
        </LayoutCV>
    );
}

export { CV };