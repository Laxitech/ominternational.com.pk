// Placeholder: Center detail page
import { centers } from '@/data/centers';

export function generateStaticParams() {
  return centers.map((c) => ({ city: c.city }));
}

export default function CenterPage() {
  return <main>Center</main>;
}
