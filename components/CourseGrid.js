"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Definición de cursos y documentación
const courses = [
  {
    title: "Curso Git",
    link: "./docs/cursos/curso-git/content",
    images: {
      light: "/images/index-images/cursos/git-logo.svg",
      dark: "/images/index-images/cursos/git-logo-dark.svg",
    },
  },
  {
    title: "Curso Github",
    link: "./docs/cursos/curso-github/content",
    images: {
      light: "/images/index-images/cursos/github-logo.svg",
      dark: "/images/index-images/cursos/github-logo-dark.svg",
    },
  },
  {
    title: "Curso Conventional Commits",
    link: "./docs/cursos/curso-conventional-commits/content",
    images: {
      light: "/images/index-images/cursos/conventional-commits-logo.svg",
      dark: "/images/index-images/cursos/conventional-commits-logo-dark.svg",
    },
  },
];

const documents = [
  {
    title: "Sistemas operativos de red",
    link: "./docs/sena/sistemas-operativos-de-red/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/001.svg",
      dark: "/images/index-images/documentacion/001.svg"
    }
  },
  {
    title: "Redes y networking",
    link: "./docs/sena/conceptos-basicos-de-redes-y-networking/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/002.svg",
      dark: "/images/index-images/documentacion/002.svg"
    }
  },
  {
    title: "Paradigma orientado a objetos",
    link: "./docs/sena/aplicacion-del-paradigma-orientado-a-objetos/1-introduccion",   
    images: {
      light: "/images/index-images/documentacion/006.svg",
      dark: "/images/index-images/documentacion/006.svg"
    }
  },
  {
    title: "Contenedores",
    link: "./docs/sena/contenedores/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/004.svg",
      dark: "/images/index-images/documentacion/004.svg"
    }
  },
  {
    title: "Virtualización",
    link: "./docs/sena/virtualizacion/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/003.svg",
      dark: "/images/index-images/documentacion/003.svg"
    }
  },
  {
    title: "Documentación y entrega",
    link: "/docs/sena/actividades-de-documentacion-y-entrega-de-software-en-procesos-de-implantacion/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/005.svg",
      dark: "/images/index-images/documentacion/005.svg"
    }
  },
  {
    title: "Fundamentos de calidad del software",
    link: "/docs/sena/fundamentos-de-la-calidad-del-software/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/007.svg",
      dark: "/images/index-images/documentacion/007.svg"
    }
  },
  {
    title: "Aplicación de pruebas de software",
    link: "/docs/sena/actividades-de-documentacion-y-entrega-de-software-en-procesos-de-implantacion/1-introduccion",
    images: {
      light: "/images/index-images/documentacion/008.svg",
      dark: "/images/index-images/documentacion/008.svg"
    }
  }
];

// Componente reutilizable para mostrar tarjetas
function GridItem({ title, link, images }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const imageSrc = mounted ? (theme === "dark" ? images.dark : images.light) : images.light;

  return (
    <div className="text-center p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800">
      <div className="w-40 h-40 mx-auto flex items-center justify-center">
        <img src={imageSrc} alt={title} className="w-full h-full  rounded-lg" />
      </div>
      <p className="text-lg font-semibold mt-2">{title}</p>
      <Link href={link} passHref>
        <button className="mt-3 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">
          Ver más
        </button>
      </Link>
    </div>
  );
}

// Componente de la cuadrícula de cursos
export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <GridItem key={index} {...course} />
      ))}
    </div>
  );
}

// Componente de la cuadrícula de documentación
export function DocumentGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {documents.map((doc, index) => (
        <GridItem key={index} {...doc} />
      ))}
    </div>
  );
}
