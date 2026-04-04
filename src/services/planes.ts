import { PlansSchema } from '@/schemas/plan';
import { type Plan } from '@/types/plan';

const mockPlans = [
  {
    id: 'plan-1',
    title: 'Aventura en el Hacha',
    description: 'Recorrido extremo por el río Hacha con canotaje y avistamiento de aves amazónicas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxnl6JlaU7j0kiMxtS4aZPGnG7uAU4t2juu3EaDfMBEI_HdP9rkXclSouUgUoBgDgreo6AD8kr7KEt-n1wMKnPxHVYemeKH9a1I2Y_fcCMBBwwJp_lC_S1bQtKHBde-8hykTS36a6KT8h5RuPsNMTO2GK3GSUhppqj01bQmZAGtJgcff6Uw8r2v030Xwy2i3xTjkuYhPSePlgm7nIBNH5c7pbBGHxM6As1I-uowK4noOmOwgXHLGlS0XKxTLxWfT5sNNnt7izXNy4',
    price: '$450.000',
    rating: '4.9',
    duration: '3 Días / 2 Noches',
    tag: 'Guía local',
    tagIcon: 'verified'
  },
  {
    id: 'plan-2',
    title: 'Cascadas del Fin del Mundo',
    description: 'Una caminata mística hasta una de las caídas de agua más espectaculares de la región.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiNiQF69AfqYso9dTdHlFfdM8AO2gOTVSVGIcFGYgmef8jIKf-SIVGhWgeGuNpD9Uyy6WHqEfqHoBBj6lxWsAE6J_SIOpXW0oWApkX6JostbAsOvPDhwCJARmZ9aRcif74Dsejvu-4LNDs8boz7rc3FnNlH8rZeTIKCsUfpbJwMzZtp5H5lvth9Y30OIu57JVZfQMQuaOxndaAD8zVL3CsggM57lG9RqAWV-7-kf4QSJVn_Qt0SqActEj3f35org5tRm6sT8qrmrE',
    price: '$320.000',
    rating: '5.0',
    duration: '2 Días / 1 Noche',
    tag: 'Eco-Friendly',
    tagIcon: 'nature'
  },
  {
    id: 'plan-3',
    title: 'Secretos del Orteguaza',
    description: 'Navegación histórica y cultural conectando con las comunidades locales y su legado.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLjOYj555DCHVs8OKxzP3vPKmiHulA6NOR8Wc0mpXjH5J7f9BygyQ2A8QjJLO774XNte5h4CBvGMUR4OZ51k8L1dGeCN_X40l-nyetai8sWn_8KFLaRxt_8D7FvDE3JjBzew9TGVgtYAbwTQrkCWwjQr1QK-ZA28zwtb3DyZ3RX-LJUmIqJtP7yJPPbU0wRiwVyp4e88xYx2REJOJIds7imJvFXLAlPZSskXUZBaR6klPya8mCGZ-iuoJu8xMoBBiEiixQlWVgy_s',
    price: '$580.000',
    rating: '4.7',
    duration: '4 Días / 3 Noches',
    tag: 'Historia Viva',
    tagIcon: 'history_edu'
  }
] satisfies Plan[];

export const getFeaturedPlans = async (): Promise<Plan[]> => {
  return PlansSchema.parse(mockPlans);
};
