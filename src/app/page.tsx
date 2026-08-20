'use client'

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";
import "./App.css";
import brandonErica from './assets/brandon-erica.jpg';
import lupinsForeground from './assets/lupins-foreground.jpg';
import bridge from './assets/bridge.jpg';
import colorfulHut from './assets/colorful-hut.jpg';
import dandelions from './assets/dandelions.jpg';
import lupins from './assets/lupins.jpg';
import oldBuildings from './assets/old-buildings.jpg';
import puffin from './assets/puffin.jpg';
import saltbox from './assets/saltbox.jpg';
import stage from './assets/stage.jpg';
import windowPic from './assets/window.jpg';
import { StaticImageData } from "next/image";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Frame {
  id: number;
  title: string;
  category: string;
  camera: string;
  exif: string;
  imageName: StaticImageData;
}

function PhotoManager() {
  const [photos, setPhotos] = useState([
    { id: 1, url: bridge, assignedNumber: 1},
    { id: 2, url: colorfulHut, assignedNumber: 2},
    { id: 3, url: dandelions, assignedNumber: 3},
    { id: 4, url: lupins, assignedNumber: 4},
    { id: 5, url: oldBuildings, assignedNumber: 5},
    { id: 6, url: puffin, assignedNumber: 6},
    { id: 7, url: saltbox, assignedNumber: 7},
    { id: 8, url: stage, assignedNumber: 8},
  ])
}

const FRAMES: Frame[] = [
  {
    id: 1,
    title: "Autumn Bridge",
    category: "Coastal",
    camera: "Mamiya 7",
    exif: "65mm — f/4 — 1/125 — ISO 100",
    imageName: bridge,
  },
  {
    id: 2,
    title: "Door to the Ocean",
    category: "Street",
    camera: "Leica M6",
    exif: "35mm — f/1.4 — 1/250 — ISO 400",
    imageName: colorfulHut,
  },
  {
    id: 3,
    title: "Spring Blooms",
    category: "Documentary",
    camera: "Pentax 67",
    exif: "105mm — f/2.8 — 1/30 — ISO 400",
    imageName: dandelions,
  },
  {
    id: 4,
    title: "Lupins and Coastal Houses",
    category: "Coastal",
    camera: "Rolleiflex 2.8F",
    exif: "80mm — f/5.6 — 1/125 — ISO 100",
    imageName: lupins,
  },
  {
    id: 5,
    title: "Still Holding Fast",
    category: "Street",
    camera: "Contax T2",
    exif: "38mm — f/2.8 — 1/250 — ISO 400",
    imageName: oldBuildings,
  },
  {
    id: 6,
    title: "Telephoto Puffin",
    category: "Documentary",
    camera: "Nikon FM2",
    exif: "50mm — f/2 — 1/500 — ISO 200",
    imageName: puffin,
  },
  {
    id: 7,
    title: "SaltBox",
    category: "Coastal",
    camera: "Mamiya 7",
    exif: "43mm — f/8 — 1/60 — ISO 100",
    imageName: saltbox,
  },
  {
    id: 8,
    title: "Yellow Stage",
    category: "Street",
    camera: "Leica M6",
    exif: "50mm — f/2 — 1/60 — ISO 800",
    imageName: stage,
  },
];

/* ------------------------------------------------------------------ */
/*  Scroll-reveal hook                                                 */
/* ------------------------------------------------------------------ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  as = "div",
  className = "",
  children,
}: {
  as?: "div" | "figure";
  className?: string;
  children: ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      className: `reveal ${visible ? "reveal--visible" : ""} ${className}`,
    },
    children
  );
}

/* ------------------------------------------------------------------ */
/*  Small decorative components                                        */
/* ------------------------------------------------------------------ */

function Sprockets({ count = 24 }: { count?: number }) {
  return (
    <div className="sprockets" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="sprockets__hole" />
      ))}
    </div>
  );
}

function frameNumber(n: number): string {
  return n.toString().padStart(2, "0");
}

/* ------------------------------------------------------------------ */
/*  App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      {/* ---------------------------------------------------------- */}
      {/* Nav                                                         */}
      {/* ---------------------------------------------------------- */}
      <header className={`nav ${navSolid ? "nav--solid" : ""}`}>
        <a href="#top" className="nav__mark">
          B & E&nbsp;PHOTOGRAPHY
        </a>
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ---------------------------------------------------------- */}
      {/* Hero                                                        */}
      {/* ---------------------------------------------------------- */}
      <section id="top" className="hero">
        <div className="hero__grain" aria-hidden="true" />
        <img
          className="hero__image"
          src={lupinsForeground.src}
          alt="Lupins in front of a few houses"
        />
        <div className="hero__scrim" aria-hidden="true" />

        <div className="hero__content">
          <p className="eyebrow eyebrow--light">
            Bonavista Bay, Newfoundland - EST. 2023
          </p>
          <h1 className="hero__headline">
            Light, fog,
            <br />
            and what remains.
          </h1>
          <p className="hero__sub">
            Landscape and personal photography, shot with care & diligence
          </p>
          <a href="#work" className="button">
            View the Work
          </a>
        </div>

        <div className="hero__caption" aria-hidden="true">
          <span>Lupins in full bloom —</span>
          <span>Canon 90d</span>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* About                                                       */}
      {/* ---------------------------------------------------------- */}
      <section id="about" className="about">
        <Reveal className="about__image-wrap">
          <img
            className="about__image"
            src={brandonErica.src}
            alt="Brandon and Erica"
          />
        </Reveal>

        <Reveal className="about__text">
          <p className="eyebrow">About</p>
          <h2 className="about__heading">
            Five years capturing Newfoundland's many beautiful moments.
          </h2>
          <p className="about__body">
            Born, raised, and currently based out of Bonavista Bay, Newfoundland.
            What started out as a hobby quickly turned into a project that I'm
            passionately persuing. Forever chasing the perfect shot.
          </p>
          <p className="about__body">
            Available for special occasions,
            editorial work, and sittings along the rocky coast and beyond.
          </p>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Work — contact sheet                                        */}
      {/* ---------------------------------------------------------- */}
      <section id="work" className="work">
        <Reveal as="div" className="work__heading-row">
          <p className="eyebrow">Selected Frames</p>
          <h2 className="work__heading">Contact Sheet, 2023-present</h2>
        </Reveal>

        <Sprockets />
        <div className="frames">
          {FRAMES.map((frame) => (
            <Reveal key={frame.id} as="figure" className="frame">
              <span className="frame__number">
                No. {frameNumber(frame.id)}
              </span>
              <div className="frame__image-wrap">
                <img
                  className="frame__image"
                  src={frame.imageName.src}
                  alt={frame.title}
                  loading="lazy"
                />
              </div>
              <figcaption className="frame__caption">
                <span className="frame__title">{frame.title}</span>
{/*                 <span className="frame__meta">
                  {frame.category} · {frame.camera}
                </span> */}
{/*                 <span className="frame__exif">{frame.exif}</span> */}
              </figcaption>
            </Reveal>
          ))}
        </div>
        <Sprockets />
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Testimonial                                                  */}
      {/* ---------------------------------------------------------- */}
      <section className="quote">
        <Reveal className="quote__inner">
          <span className="quote__mark" aria-hidden="true">
            &ldquo;
          </span>
          <p className="quote__text">
            Brandon and Erica photographed myself and my family and perfectly captured
            our love in still frames. They're both a tremendous talent and I would recommend
            them without hesitation!
          </p>
          <p className="quote__attribution">— Danny</p>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Contact                                                      */}
      {/* ---------------------------------------------------------- */}
      <section id="contact" className="contact">
        <Reveal className="contact__inner">
          <p className="eyebrow eyebrow--light">Get in Touch</p>
          <h2 className="contact__heading">Book a session.</h2>
          <p className="contact__body">
            Your special occasion deserves a special touch - professional, high-quality
            photography
          </p>
          <a href="mailto:brandon_keough96@hotmail.com" className="button button--light">
            brandon_keough96@hotmail.com
          </a>
        </Reveal>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Footer                                                       */}
      {/* ---------------------------------------------------------- */}
      <footer className="footer">
        <Sprockets count={40} />
        <div className="footer__row">
          <span className="footer__mark">B & E Photography</span>
          <span className="footer__meta">
            Bonavista Bay, NL
          </span>
          <span className="footer__copy">
            © {new Date().getFullYear()} B & E Photography
          </span>
        </div>
      </footer>
    </div>
  );
}
