import { SiQgis, SiArcgis, SiLooker, SiGeopandas, SiGoogleclassroom, SiOverleaf } from "react-icons/si";
import { MdOutlineRecycling, MdOutlineGTranslate, MdCoPresent } from "react-icons/md";
import { FaPython, FaPeopleCarryBox, FaCloudShowersWater, FaGears } from "react-icons/fa6";
import { GiMonsteraLeaf, GiStonePile } from "react-icons/gi";
import { IoConstructSharp } from "react-icons/io5";
import { GoLaw } from "react-icons/go";
import { Link } from "react-router-dom";
import foto from './foto.jpeg';
import info from './info.json';
import './CV.scss';

function Skill({ skill }) {
    switch (skill) {
        case "Economía circular":
            return (
                <MdOutlineRecycling />
            );
        case "QGIS":
            return (
                <SiQgis />
            );
        case "ArcGIS":
            return (
                <SiArcgis />
            );
        case "Python":
            return (
                <FaPython />
            );
        case "Análisis de datos":
            return (
                <SiLooker />
            );
        case "Geodata":
            return (
                <SiGeopandas />
            );
        case "Docencia":
            return (
                <SiGoogleclassroom />
            );
        case "LaTex":
            return (
                <SiOverleaf />
            );
        case "Normativa ambiental":
            return (
                <GoLaw />
            );
        case "Construcción":
            return (
                <IoConstructSharp />
            );
        case "Minería":
            return (
                <GiStonePile />
            );
        case "English":
            return (
                <MdOutlineGTranslate />
            );
        case "Spanish":
            return (
                <MdOutlineGTranslate />
            );
        case "French":
            return (
                <MdOutlineGTranslate />
            );
        case "Trabajo en equipo":
            return (
                <FaPeopleCarryBox />
            );
        case "Comunicación":
            return (
                <MdCoPresent />
            );
        case "Hidrología":
            return (
                <FaCloudShowersWater />
            );
        case "Sistemas de gestión ambiental":
            return (
                <FaGears />
            );
        default:
            return (
                <GiMonsteraLeaf />
            );
    }
}

function CV() {
    console.log(info);
    return (
        <div id="cv">
            <nav>
                <Link to='/'>@jdavid.ram</Link>
            </nav>
            <header>
                <img src={ foto } alt="Foto" />
                <h1>David Ramirez Rodriguez</h1>
                <h2>{ info.title }</h2>
                <ul>
                    <li>+57 311 357 8185</li>
                    <li>david456ram@gmail.com</li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                </ul>
            </header>
            <section className="about">
                <h3>Sobre mí</h3>
                <p>{ info.about }</p>
            </section>
            <section className="experience">
                <h3>Experiencia</h3>
                { info.experience.map( (exp, id) => (
                    <article key={ id }>
                        <h4>{ exp.job }</h4>
                        <h5>{ exp.company }</h5>
                        <p><strong>{ exp.from } - { exp.to }</strong></p>
                        <p><strong>{ exp.city }</strong></p>
                        <ul>
                            { exp.activities.map( (act, i) => (
                                <li key={ i }>{ act }</li>
                            ) ) }
                        </ul>
                    </article>
                ) ) }
            </section>
            <section className="education">
                <h3>Educación</h3>
                { info.education.map( (edu, i) => (
                    <article>
                        <h4>{ edu.degree }</h4>
                        <h5>{ edu.university }</h5>
                        <p><strong>{ edu.from } - { edu.to }</strong></p>
                        <p><strong>{ edu.city }</strong></p>
                    </article>
                ) ) }
            </section>
            <section className="certificates">
                <h3>Certificados</h3>
                { info.certificates.map( (course, i) => (
                    <article>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <h4>{ course.course }</h4>
                        </a>
                        <p><strong>{ course.academy }</strong></p>
                        <p>{ course.date }</p>
                    </article>
                ) ) }
            </section>
            <section className="skills">
                <h3>Habilidades</h3>
                <ul>
                    { info.skills.map( (skill, i) => (
                        <li>
                            <Skill skill={ skill } />
                            <p>{ skill }</p>
                        </li>
                    ) ) }
                </ul>
            </section>
        </div>
    );
}

export { CV };