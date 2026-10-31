// Placeholder: Programme detail page
import { programmes } from '@/data/programmes';

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export default function ProgrammePage() {
  return <main>Programme</main>;
}
