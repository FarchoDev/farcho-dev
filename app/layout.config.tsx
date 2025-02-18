import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';


/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: 'Farcho Dev',
  },
  links: [
    {
      text: 'Inicio',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'Biblioteca',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Sena',
      url: '/docs/sena/',
      active: 'nested-url',
    },
    {
      text: 'Cursos',
      url: '/docs/cursos/',
      active: 'nested-url',
    },
    {
      text: 'Contacto',
      url: '/contact',
      active: 'nested-url',
    },
    {
      text: 'Acerca de',
      url: '/about',
      active: 'nested-url',
    },
  ],
}
