// Placeholder: Center detail page
import { centers } from '@/data/centers';

export function generateStaticParams() {
  const params = centers.map((c) => ({ city: c.city }));
  params.push({ city: "Damascus" });
  params.push({ city: "damascus" });
  params.push({ city: "syria" });
  params.push({ city: "malaysia" });
  params.push({ city: "kuala-lumpur" });
  return params;
}

export default function CenterPage() {
  return <main>Center</main>;
}
