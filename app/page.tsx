import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { coffees } from "@/data/coffees";

export default function HomePage() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">DARI TANAH INDONESIA</span>
          <h1>Secangkir cerita, <span>sejuta rasa.</span></h1>
          <p>Kopi Nusantara menghadirkan biji kopi pilihan dari kebun terbaik Indonesia. Temukan karakter unik setiap daerah dalam setiap seduhan.</p>
          <div className="hero-actions"><Link className="button button-primary" href="/kopi">Jelajahi kopi <span>↗</span></Link><Link className="text-link" href="/tentang">Cerita kami →</Link></div>
          <div className="hero-proof"><div className="proof-avatars"><span>☕</span><span>🌿</span><span>✦</span></div><p><strong>100% kebanggaan lokal</strong><br/>Dibawa dari kebun ke cangkirmu.</p></div>
        </div>
        <div className="hero-art" role="img" aria-label="Ilustrasi secangkir kopi dengan biji kopi dan daun"><div className="sun"></div><div className="leaf leaf-one"></div><div className="leaf leaf-two"></div><div className="coffee-bean bean-one"></div><div className="coffee-bean bean-two"></div><div className="cup"><div className="coffee"></div><div className="cup-handle"></div></div><div className="art-label">PANEN PILIHAN<br/><strong>INDONESIA ☕</strong></div></div>
      </div>
    </section>
    <section className="section container"><div className="section-heading"><div><span className="eyebrow">PILIHAN BARISTA</span><h2>Kenali kopi unggulan kami</h2></div><Link className="text-link" href="/kopi">Lihat semua kopi →</Link></div><div className="card-grid">{coffees.slice(0,3).map(coffee=><ServiceCard key={coffee.slug} item={coffee}/>)}</div></section>
    <section className="origin-band"><div className="container origin-content"><span className="eyebrow">DARI SABANG SAMPAI MERAUKE</span><h2>Setiap daerah punya cerita.<br/><span>Setiap kopi punya karakter.</span></h2><p>Dari aroma floral Gayo hingga rasa cokelat yang kaya dari Toraja, mari menjelajahi keberagaman kopi Indonesia.</p><Link className="button button-light" href="/tentang">Kenali Kopi Nusantara</Link></div></section>
    <section className="section container values"><div><span className="eyebrow">LEBIH DARI SECANGKIR KOPI</span><h2>Rasa yang dekat,<br/>asal yang bermakna.</h2></div><div className="value-list"><article><span>01</span><div><h3>Biji pilihan</h3><p>Kami mengutamakan biji berkualitas dengan karakter khas dari daerah asalnya.</p></div></article><article><span>02</span><div><h3>Mendukung petani lokal</h3><p>Mengangkat kekayaan kopi Indonesia dan cerita para petani di baliknya.</p></div></article><article><span>03</span><div><h3>Diracik dengan perhatian</h3><p>Setiap proses dijaga agar rasa alami kopi tetap menjadi bintang utama.</p></div></article></div></section>
  </>;
}
