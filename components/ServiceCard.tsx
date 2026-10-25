import Link from "next/link";
import type { Coffee } from "@/data/coffees";
export default function ServiceCard({item}:{item:Coffee}){return <article className="service-card"><div className={`coffee-visual tone-${item.tone}`}><span>{item.icon}</span></div><div className="card-body"><span className="card-kicker">{item.region.toUpperCase()}</span><h3>{item.name}</h3><p>{item.description}</p><div className="card-bottom"><strong>{item.process}</strong><Link href={`/kopi/${item.slug}`}>Detail kopi ↗</Link></div></div></article>}
