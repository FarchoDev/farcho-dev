import React from 'react';
import { CourseGrid, DocumentGrid } from '../../components/CourseGrid';
 
export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center p-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la Plataforma 🚀</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📚 Cursos</h2>
        <p className="text-muted mb-4">
          Explora nuestros cursos y documentación para mejorar tus habilidades.
        </p>
        <CourseGrid />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📖 Documentación</h2>
        <p className="text-muted mb-4">
          Consulta la documentación técnica detallada.
        </p>
        <DocumentGrid />
      </section>
      
      <p className="text-lg">¡Esperamos que disfrutes el aprendizaje! 🎉</p>
    </main>
  );
}
