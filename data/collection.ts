export interface Product {
  id: string;
  name: string;
  cat: 'caftan' | 'takchita' | 'karakou' | 'robe-mariee';
  img: string;
  sizes: string[];
  ok: boolean;
  desc: string;
  fab: string;
  emb: string;
  brd: string;
  caut: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Caftan Royal Saphir',
    cat: 'caftan',
    img: '/images/kling_20261103_IMAGE_Photoreali_5442_0.png',
    sizes: ['36', '38', '40', '42'],
    ok: true,
    desc: "Caftan de cérémonie en velours satiné fond saphir nuit, orné de broderies traditionnelles au fil doré réalisées par nos Maâlams.",
    fab: 'Velours satiné fond saphir nuit',
    emb: "Broderie fil doré Maâlam, motifs arabesques et floraux",
    brd: 'Perlage cristal Swarovski et pierres semi-précieuses',
    caut: '400 €',
  },
  {
    id: '2',
    name: 'Takchita Ivoire Céleste',
    cat: 'takchita',
    img: '/images/kling_20261103_IMAGE_Photoreali_5453_1.png',
    sizes: ['36', '38', '40'],
    ok: true,
    desc: "Takchita deux pièces en soie naturelle ivoire avec surjupe brodée et ceinture en sfifa dorée. Élégance intemporelle.",
    fab: "Soie naturelle ivoire, surjupe en crêpe transparent",
    emb: "Sfifa en fils d'or, bordures brodées à la main",
    brd: 'Perles nacrées et cristaux transparents',
    caut: '450 €',
  },
  {
    id: '3',
    name: 'Karakou Algérois Or & Noir',
    cat: 'karakou',
    img: '/images/kling_20261103_IMAGE_Photoreali_5456_2.png',
    sizes: ['36', '38', '40', '42', '44'],
    ok: true,
    desc: "Karakou traditionnel algérois en velours noir, brodé intégralement à la main au fil doré par des brodeuses d'Alger.",
    fab: 'Velours lyonnais noir profond, jupe en soie dorée',
    emb: 'Broderie or Maâlam intégrale — motifs floraux et géométriques',
    brd: 'Perlage or et fil de soie torsadé',
    caut: '500 €',
  },
  {
    id: '4',
    name: 'Caftan Bordeaux Impérial',
    cat: 'caftan',
    img: '/images/kling_20261103_IMAGE_Photoreali_5461_2.png',
    sizes: ['38', '40', '42'],
    ok: false,
    desc: "Caftan princier en brocart bordeaux et or avec ceinture haute brodée. Conçu pour les grandes occasions.",
    fab: "Brocart jacquard bordeaux et fils d'or",
    emb: 'Broderie sfifa sur col, manches et ourlet',
    brd: 'Perlage rubis synthétique et cristal doré',
    caut: '380 €',
  },
  {
    id: '5',
    name: 'Takchita Verte Andalouse',
    cat: 'takchita',
    img: '/images/takchita-verte-cape-or.webp',
    sizes: ['36', '38', '40', '42'],
    ok: true,
    desc: "Takchita en velours vert émeraude aux reflets dorés, inspirée des palais andalous.",
    fab: 'Velours vert émeraude, surjupe en mousseline brodée',
    emb: 'Motifs floraux andalous or et argent',
    brd: 'Perlage cristal vert et or',
    caut: '420 €',
  },
  {
    id: '6',
    name: 'Robe Blanche Orientale',
    cat: 'robe-mariee',
    img: '/images/kling_20261103_IMAGE_Photoreali_5458_0.png',
    sizes: ['36', '38', '40'],
    ok: true,
    desc: "Robe de mariée alliant l'élégance occidentale et les détails orientaux. Broderies fines, traîne royale et voile brodé.",
    fab: 'Satin duchesse ivoire avec dentelle Chantilly',
    emb: 'Broderie fil argent sur le corsage et la traîne',
    brd: 'Milliers de perles et cristaux cousus à la main',
    caut: '600 €',
  },
  {
    id: '7',
    name: 'Karakou Rose Pourpre',
    cat: 'karakou',
    img: '/images/kling_20261103_IMAGE_Photoreali_5461_1_1.png',
    sizes: ['38', '40', '42'],
    ok: true,
    desc: "Karakou en velours rose pourpre aux broderies délicates. Ce modèle revisite la tradition algéroise avec une touche féminine.",
    fab: 'Velours rose pourpre, jupe en organza',
    emb: "Broderie dorée fine sur la veste et l'ourlet",
    brd: 'Micro-perlage argenté',
    caut: '450 €',
  },
  {
    id: '8',
    name: 'Caftan Bleu Majorelle',
    cat: 'caftan',
    img: '/images/kling_20261103_IMAGE_Photoreali_5463_1.png',
    sizes: ['36', '38', '40', '42', '44'],
    ok: true,
    desc: "Inspiré du célèbre bleu des jardins de Marrakech, ce caftan en damas soie bleu Majorelle est une ode à la beauté marocaine.",
    fab: 'Damas soie bleu Majorelle',
    emb: 'Broderie or Maâlam et motifs géométriques zellige',
    brd: 'Perles lapis-lazuli et or',
    caut: '480 €',
  },
];

export const CAT_LBL: Record<string, string> = {
  caftan: 'Caftan',
  takchita: 'Takchita',
  karakou: 'Karakou',
  'robe-mariee': 'Robe Mariée',
};
