"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import heroImg from "@/components/img/main.jpg";
import school1 from "@/components/img/1.webp";
import school2 from "@/components/img/2.webp";
import school3 from "@/components/img/3.webp";
import school4 from "@/components/img/4.webp";
import school5 from "@/components/img/5.webp";
import school6 from "@/components/img/6.webp";
import school7 from "@/components/img/7.webp";
import school8 from "@/components/img/8.webp";
import school9 from "@/components/img/9.webp";
import rectoraImg from "@/components/img/Rectora.png";
import fundadorImg from "@/components/img/Fundador.png";
import logoImg from "@/components/img/logo.png";

const phonePrimary = { display: "316 657 3266", href: "tel:+573166573266" };
const phoneSecondary = { display: "320 705 0390", href: "tel:+573207050390" };
const emailMain = "cgiraldocarmona@gmail.com";
const emailRectora = "cgiraldocarmona@yahoo.com";
const whatsappUrl = "https://wa.me/573166573266";
const whatsappUrlAlt = "https://wa.me/573207050390";
const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/befacpopayan.befac",
    Icon: FaFacebookF,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@befacsedeeltambo",
    Icon: FaTiktok,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/befactambo/",
    Icon: FaInstagram,
  },
  { label: "WhatsApp", href: whatsappUrl, Icon: FaWhatsapp },
];

const navItems = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Historia", href: "#historia" },
  { label: "Encuéntranos", href: "#sedes" },
  { label: "Formación virtual", href: "#virtual" },
  { label: "Nuestro equipo", href: "#equipo" },
];

const studentPhotos = [
  {
    src: school2.src,
    alt: "Estudiantes del bachillerato de adultos BEFAC en Popayán",
    className: "student-photo-tall",
  },
  {
    src: school7.src,
    alt: "Comunidad educativa del bachillerato formal de adultos BEFAC",
    className: "student-photo-wide",
  },
  {
    src: school3.src,
    alt: "Estudiantes del bachillerato de adultos BEFAC en el Cauca",
    className: "",
  },
  {
    src: school4.src,
    alt: "Jornada de clases en el bachillerato de adultos BEFAC",
    className: "",
  },
  {
    src: school5.src,
    alt: "Estudiantes del bachillerato formal de adultos BEFAC",
    className: "",
  },
  {
    src: school8.src,
    alt: "Jornada de clases del bachillerato de adultos BEFAC en Popayán",
    className: "",
  },
  {
    src: school9.src,
    alt: "Estudiantes del bachillerato de adultos BEFAC en El Tambo",
    className: "",
  },
];

const moduleTags = [
  "Tarea",
  "Lección",
  "Foros",
  "Consulta",
  "Chat",
  "Charla",
  "Para finalizar",
  "Cuestionario",
  "Etiquetas",
  "Glosario",
  "Taller",
];
const focusAreas = [
  "Deporte",
  "Pedagogía",
  "Tecnología",
  "Desarrollo",
  "Aprendizaje",
  "Enseñanza",
];
const results = [
  "Trabajo en equipo y actitudes sociales con la comunidad de aprendizaje",
  "Fortalecimiento de estrategias didácticas para mejorar las prácticas de aula",
  "Entornos dinámicos e interactivos para el proceso de enseñanza-aprendizaje",
  "Becas para población vulnerable, fuerzas públicas y deportistas de alto rendimiento",
];

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(false);
    setSending(true);
    try {
      const data = new FormData(event.currentTarget);
      const payload = {
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        phone: String(data.get("phone") ?? ""),
        city: String(data.get("city") ?? ""),
        message: String(data.get("message") ?? ""),
      };
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Error al enviar la solicitud");
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <main className="site-shell">
        <header className="site-header">
          <a
            className="brand"
            href="#inicio"
            aria-label="BEFAC, volver al inicio"
          >
            <span className="brand-mark">
              <img src={logoImg.src} alt="" fetchPriority="high" />
            </span>
            <span>
              <strong>BEFAC</strong>
              <small>Experiencia y compromiso</small>
            </span>
          </a>
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="nav-cta"
              href="#inscribete"
              onClick={() => setMenuOpen(false)}
            >
              Inscríbete ahora <ArrowRight size={16} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </header>

        <section className="hero" id="inicio">
          <div
            className="hero-bg"
            data-reveal
            style={{ transitionDelay: "200ms" }}
            aria-hidden="true"
          >
            <img src={heroImg.src} alt="" fetchPriority="high" />
          </div>
          <div className="hero-fade" aria-hidden="true" />
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">
              <span /> Educación que transforma historias
            </p>
            <h1>
              Tu experiencia
              <br />
              <em>también</em> es futuro.
            </h1>
            <p className="hero-text">
              En BEFAC creemos que nunca es tarde para cumplir tus metas.
              Termina tu bachillerato de adultos en Popayán y El Tambo y abre
              nuevas oportunidades para ti y tu familia.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#inscribete">
                Quiero inscribirme <ArrowRight size={18} />
              </a>
              <a className="text-link" href="#quienes-somos">
                Conoce más <ChevronDown size={16} />
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars">
                <span>✦</span>
                <span>+</span>
                <span>●</span>
              </div>
              <p>
                <strong>Más de 30 años</strong>
                <br />
                formando sueños en el Cauca
              </p>
            </div>
          </div>
          <div className="hero-sticker">
            <Sparkles size={18} />
            <span>
              Aprender
              <br />
              <strong>es avanzar</strong>
            </span>
          </div>
          <div className="scroll-note">
            <span /> Desliza para conocer más
          </div>
        </section>

        <section className="intro-strip" data-reveal>
          <div>
            <span>01</span>
            <strong>
              Una nueva oportunidad
              <br />
              comienza aquí.
            </strong>
          </div>
          <p>
            Institución mixta, privada y sin ánimo de lucro. Más de 30 años
            ofreciendo bachillerato formal de adultos del Cauca en Popayán y El
            Tambo a jóvenes mayores de 15 años y adultos.
          </p>
          <a href="#quienes-somos" aria-label="Ir a quiénes somos">
            <ArrowRight />
          </a>
        </section>

        <section className="section about-section" id="quienes-somos">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Nuestra esencia</p>
              <h2>
                Quiénes <em>somos</em>
              </h2>
            </div>
            <p>
              Un espacio para crecer, aprender y demostrar que los sueños no
              tienen edad.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-lead" data-reveal>
              <div className="outline-number">01</div>
              <p>
                El Bachillerato Formal de Adultos del Cauca (BEFAC) es una
                institución educativa mixta, privada y sin ánimo de lucro,
                fundada en junio de 1993 en Popayán. Brindamos educación formal
                a jóvenes mayores de 15 años y adultos, sin discriminación por
                su condición, ideas políticas, sociales, filosóficas o
                religiosas.
              </p>
              <a className="arrow-link" href="#historia">
                Conoce nuestra historia <ArrowRight size={17} />
              </a>
            </div>
            <div
              className="value-card"
              data-reveal
              style={{ transitionDelay: "90ms" }}
            >
              <Users size={28} />
              <h3>Compromiso</h3>
              <p>
                La educación es el pilar fundamental para crear procesos de
                resiliencia y construcción de paz en los territorios.
              </p>
            </div>
            <div
              className="value-card dark-card"
              data-reveal
              style={{ transitionDelay: "180ms" }}
            >
              <Target size={28} />
              <h3>Emprendimiento</h3>
              <p>
                Motivar y sensibilizar a los estudiantes sobre la necesidad e
                importancia de la creación de empresas y la generación de
                empleo.
              </p>
            </div>
            <div className="objectives" data-reveal>
              <span className="mini-label">Nuestros pilares</span>
              <ul>
                {[
                  "Básica primaria, secundaria y media vocacional",
                  "Modalidad cíclica para jóvenes y adultos",
                  "Bachillerato académico–técnico con énfasis empresarial",
                ].map((item, i) => (
                  <li key={item} style={{ transitionDelay: `${i * 80}ms` }}>
                    <CheckCircle2 size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section history-section" id="historia">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Nuestra historia</p>
              <h2>
                Desde <em>1993</em>
              </h2>
            </div>
            <p>
              Una trayectoria de más de 30 años al servicio de la educación de
              adultos en el Cauca.
            </p>
          </div>
          <div className="history-grid">
            <div className="history-lead" data-reveal>
              <p>
                El proyecto se inició en la ciudad de Popayán, Cauca, en el año
                de 1993, por el licenciado{" "}
                <strong>Jaime Giraldo Arbeláez</strong>, quien realizó un
                análisis de la población estudiantil del municipio y determinó
                que esta requería de centros educativos. Por tal motivo, y en
                convenio con la{" "}
                <strong>Policía del Departamento del Cauca</strong> y el{" "}
                <strong>Colegio INEM</strong>, creó un centro de Educación
                Básica y Media Vocacional, que más tarde recibió el nombre de
                Bachillerato Formal de Adultos del Cauca, y en el cual muchos
                jóvenes y adultos de la ciudad lograron culminar sus estudios de
                bachillerato.
              </p>
              <p>
                La institución funciona conforme a los decretos reglamentarios
                3011 de 1997 y 1860 de 2002 de la Secretaría de Educación,
                Cultura y Deportes del departamento del Cauca. Está enfocada a
                la re inclusión social y económica de miembros de las fuerzas
                públicas afectados por algún nivel de mutilación en su
                integridad corporal, así como de las viudas producto de la
                violencia en Colombia. Por medio de un convenio, funciona en uno
                de los bloques de aulas y laboratorios del{" "}
                <strong>Colegio INEM Francisco José de Caldas</strong>, ubicado
                en la Avenida Aeropuerto de Popayán.
              </p>
            </div>
            <div className="history-facts">
              {[
                [
                  "01",
                  "Fundación",
                  "Junio de 1993, en Popayán–Cauca, en convenio con la Policía del departamento y el Colegio INEM.",
                ],
                [
                  "02",
                  "Niveles",
                  "Básica primaria, básica secundaria y media vocacional, en modalidad cíclica para jóvenes y adultos.",
                ],
                [
                  "03",
                  "Bachillerato",
                  "Académico y técnico con profundo énfasis empresarial. Profundización académica y empresarial.",
                ],
                [
                  "04",
                  "Datos institucionales",
                  "Licencia de funcionamiento: Resolución 4124 de 2010 · NIT 34.559.338-8 · Código DANE 31900100440.",
                ],
              ].map(([num, title, text], i) => (
                <article
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  key={num}
                >
                  <span>{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section meta-section" id="meta">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">La meta</p>
              <h2>
                A quién <em>educamos</em>
              </h2>
            </div>
            <p>
              Una estrategia de inclusión social y económica para el
              departamento del Cauca.
            </p>
          </div>
          <div className="history-grid">
            <div className="history-lead" data-reveal>
              <p>
                Responder al incremento constante de la demanda de aspirantes:
                jóvenes auxiliares de la Policía Nacional y del Ejército que
                prestan el servicio militar, firmantes de la paz, jóvenes
                deportistas de alto rendimiento que por su dedicación al deporte
                no pueden asistir a un colegio regular, campesinos, indígenas,
                afrodescendientes, soldados discapacitados del Ejército, viudas,
                hijos y esposas de estos soldados y demás población vulnerable
                del departamento del Cauca.
              </p>
              <p>
                Esto, a través de la educación básica primaria, básica, media y
                superior, con el sistema de{" "}
                <strong>Formación Presencial y Virtual (F.P.V.)</strong> como
                estrategia educativa para el desarrollo sostenible de sus
                comunidades y programas educativos pertinentes.
              </p>
            </div>
            <div className="history-facts">
              {[
                [
                  "01",
                  "Propuesta",
                  "Construir y dotar una planta física propia para el Colegio BEFAC, con proyección de convertirse en Universidad y cobertura en todo el departamento del Cauca.",
                ],
                [
                  "02",
                  "Tecnología",
                  "Comprender que la tecnología es aplicable a todas las áreas del conocimiento, utilizando las TIC en los procesos educativos.",
                ],
              ].map(([num, title, text], i) => (
                <article
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms` }}
                  key={num}
                >
                  <span>{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="objectives" data-reveal>
            <span className="mini-label">Resultados</span>
            <ul>
              {results.map((item, i) => (
                <li key={item} style={{ transitionDelay: `${i * 80}ms` }}>
                  <CheckCircle2 size={18} /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section locations-section" id="sedes">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Estamos cerca de ti</p>
              <h2>Encuéntranos</h2>
            </div>
            <p>
              Estamos en Popayán y en El Tambo, Cauca. Acércate y empieza a
              construir tu próxima meta.
            </p>
          </div>
          <div className="locations-grid">
            <div className="location-stack" data-reveal>
              <div className="location-photo">
                <img
                  src={school1.src}
                  alt="Sede del bachillerato de adultos BEFAC en Popayán, Colegio INEM"
                  loading="lazy"
                  decoding="async"
                />
                <div className="photo-label">
                  <MapPin size={18} />
                  <span>
                    Popayán
                    <br />
                    <strong>Colegio INEM, Avenida Aeropuerto</strong>
                  </span>
                </div>
              </div>
              <div className="location-photo">
                <img
                  src={school6.src}
                  alt="Sede del bachillerato de adultos BEFAC en El Tambo, Cauca"
                  loading="lazy"
                  decoding="async"
                />
                <div className="photo-label">
                  <MapPin size={18} />
                  <span>
                    El Tambo, Cauca
                    <br />
                    <strong>Nueva sede BEFAC</strong>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="location-list"
              data-reveal
              style={{ transitionDelay: "120ms" }}
            >
              <div className="location-socials">
                <span>Síguenos y escríbenos</span>
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
              <article>
                <span className="location-index">01</span>
                <div>
                  <h3>Popayán · Sede principal</h3>
                  <p>
                    Avenida Aeropuerto, Colegio INEM Francisco José de Caldas
                    <br />
                    Bloque de aulas y laboratorios en convenio
                  </p>
                  <a href="#inscribete">
                    Ver ubicación <ArrowRight size={15} />
                  </a>
                </div>
              </article>
              <article>
                <span className="location-index">02</span>
                <div>
                  <h3>El Tambo, Cauca · Sede</h3>
                  <p>
                    Municipio de El Tambo, Cauca
                    <br />
                    Información e inscripciones por WhatsApp y redes sociales
                  </p>
                  <div className="whatsapp-links">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp 316 657 3266 <ArrowRight size={15} />
                    </a>
                    <a
                      href={whatsappUrlAlt}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp 320 705 0390 <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section students-section" id="estudiantes">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Historias que inspiran</p>
              <h2>
                Nuestros <em>estudiantes</em>
              </h2>
            </div>
            <p>
              Sin discriminación de condición, sexo, ideas políticas, sociales,
              filosóficas o religiosas: BEFAC abre sus puertas a todos.
            </p>
          </div>
          <div className="student-gallery">
            {studentPhotos.map((photo, i) => (
              <button
                type="button"
                className={`gallery-item ${photo.className}`}
                data-reveal
                style={{ transitionDelay: `${i * 60}ms` }}
                key={photo.src}
                onClick={() => setLightbox(photo)}
                aria-label={`Ampliar imagen: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            ))}
          </div>
          <div className="quote-row" data-reveal>
            <span className="quote-mark">“</span>
            <p>
              Soldados y policías, campesinos, indígenas y afrodescendientes
              encuentran en BEFAC una oportunidad para culminar su bachillerato.
            </p>
            <span className="quote-author">
              — Población que atendemos en el Cauca
            </span>
          </div>
        </section>

        <section className="section virtual-section" id="virtual">
          <div className="virtual-grid">
            <div className="virtual-copy" data-reveal>
              <p className="eyebrow">
                <span /> Sigamos
              </p>
              <h2>
                Formación <em>virtual</em>
              </h2>
              <p>
                La formación virtual es el fortalecimiento de estrategias
                didácticas que orientan y brindan a los docentes la posibilidad
                de mejorar sus prácticas de aula, crear entornos de aprendizaje
                más dinámicos e interactivos, facilitar el trabajo en equipo y
                el cultivo de actitudes sociales con la comunidad de
                aprendizaje, estimulando que cada estudiante comprenda que la
                tecnología es aplicable a todos los contextos del conocimiento y
                sea actor en la construcción de su propio aprendizaje,
                enriqueciendo las prácticas pedagógicas con las TIC.
              </p>
              <strong>Equilibrio entre la pedagogía y la tecnología.</strong>
              <span className="mini-label">Nuestros módulos</span>
              <div className="module-tags">
                {moduleTags.map((tag, i) => (
                  <span
                    data-reveal
                    style={{ transitionDelay: `${i * 35}ms` }}
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="virtual-percent"
              data-reveal
              style={{ transitionDelay: "140ms" }}
            >
              <ul>
                {focusAreas.map((area, i) => (
                  <li
                    data-reveal
                    style={{ transitionDelay: `${200 + i * 80}ms` }}
                    key={area}
                  >
                    <strong>{area}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section team-section" id="equipo">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow">Personas que acompañan</p>
              <h2>
                Nuestro <em>equipo</em>
              </h2>
            </div>
            <p>
              Una dirección comprometida con la educación, heredada de un
              maestro que creyó en el Cauca.
            </p>
          </div>
          <div className="team-grid">
            <article className="team-card" data-reveal>
              <div className="team-photo">
                <img
                  src={rectoraImg.src}
                  alt="Claudia Patricia Giraldo Carmona, rectora del bachillerato de adultos BEFAC"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>Claudia Patricia Giraldo Carmona</h3>
              <p>Rectora</p>
              <small>
                {phonePrimary.display} · {phoneSecondary.display}
                <br />
                <a href={`mailto:${emailRectora}`}>{emailRectora}</a>
              </small>
            </article>
            <article
              className="team-card"
              data-reveal
              style={{ transitionDelay: "120ms" }}
            >
              <div className="team-photo">
                <img
                  src={fundadorImg.src}
                  alt="Jaime Giraldo Arbeláez, rector fundador del Bachillerato Formal de Adultos del Cauca"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>Jaime Giraldo Arbeláez</h3>
              <p>Rector fundador · 1941 – 2011</p>
              <small>Padre, abuelo y maestro. Fundador de BEFAC en 1993.</small>
            </article>
          </div>
        </section>

        <section className="enroll-section" id="inscribete">
          <div className="enroll-copy" data-reveal>
            <p className="eyebrow light-eyebrow">El próximo paso es tuyo</p>
            <h2>
              Inscríbete
              <br />
              <em>ahora</em>
            </h2>
            <p>
              Déjanos tus datos y un asesor BEFAC se pondrá en contacto contigo
              para acompañarte en el proceso.
            </p>
            <div className="contact-line">
              <Phone size={18} />
              <span>
                También puedes llamarnos
                <br />
                <strong>
                  <a href={phonePrimary.href}>{phonePrimary.display}</a>
                  {" · "}
                  <a href={phoneSecondary.href}>{phoneSecondary.display}</a>
                </strong>
              </span>
            </div>
            <div className="contact-line">
              <Mail size={18} />
              <span>
                O escribirnos
                <br />
                <strong>
                  <a href={`mailto:${emailMain}`}>{emailMain}</a>
                </strong>
                <br />
                <strong>
                  <a href={`mailto:${emailRectora}`}>{emailRectora}</a>
                </strong>
              </span>
            </div>
            <div className="contact-line">
              <MapPin size={18} />
              <span>
                Nos encontramos en
                <br />
                <strong>Avenida Aeropuerto, Colegio INEM · Popayán</strong>
              </span>
            </div>
          </div>
          <div
            className="form-card"
            data-reveal
            style={{ transitionDelay: "120ms" }}
          >
            {submitted ? (
              <div className="success-state">
                <CheckCircle2 size={46} />
                <h3>¡Gracias por escribirnos!</h3>
                <p>
                  Recibimos tus datos. Muy pronto un asesor BEFAC se pondrá en
                  contacto contigo.
                </p>
                <button
                  className="button button-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-title">
                  <span>02</span>
                  <h3>Cuéntanos sobre ti</h3>
                </div>
                <label>
                  Nombre completo
                  <input required name="name" placeholder="Escribe tu nombre" />
                </label>
                <label>
                  Correo electrónico
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="tucorreo@correo.com"
                  />
                </label>
                <div className="form-row">
                  <label>
                    Celular
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="300 000 0000"
                    />
                  </label>
                  <label>
                    Municipio
                    <input
                      required
                      name="city"
                      placeholder="Escribe tu municipio"
                    />
                  </label>
                </div>
                <label>
                  ¿Cómo podemos ayudarte?
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Quiero conocer más sobre..."
                  />
                </label>
                {error && (
                  <p className="form-error">
                    No pudimos enviar tu solicitud. Inténtalo de nuevo o
                    escríbenos por WhatsApp al {phoneSecondary.display}.
                  </p>
                )}
                <button
                  className="button button-dark"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "Enviando..." : "Quiero ser parte de BEFAC"}{" "}
                  {!sending && <Send size={17} />}
                </button>
                <small>
                  Al enviar aceptas el tratamiento de tus datos personales.
                </small>
              </form>
            )}
          </div>
        </section>

        <footer className="site-footer">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark">
              <img
                src={logoImg.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </span>
            <span>
              <strong>BEFAC</strong>
              <small>Experiencia y compromiso</small>
            </span>
          </a>
          <p>
            Bachillerato Formal de Adultos del Cauca
            <br />
            NIT 34.559.338-8 · Resolución 4124 de 2010 · DANE 31900100440
            <br />
            Contacto:{" "}
            <a href={phonePrimary.href}>{phonePrimary.display}</a> ·{" "}
            <a href={phoneSecondary.href}>{phoneSecondary.display}</a> ·{" "}
            <a href={`mailto:${emailMain}`}>{emailMain}</a>
          </p>
          <div className="footer-social" aria-label="Redes sociales de BEFAC">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <span className="copyright">© 2026 BEFAC</span>
        </footer>
      </main>
      {lightbox && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightbox(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setLightbox(null);
          }}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Cerrar imagen"
          >
            <X size={22} />
          </button>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </>
  );
}
