"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [{href:"/",label:"Beranda"},{href:"/tentang",label:"Tentang"},{href:"/kopi",label:"Koleksi Kopi"}];
export default function Navbar() {
  const pathname = usePathname();
  return <header className="navbar"><div className="container nav-inner"><Link href="/" className="brand"><span className="brand-mark">☕</span><span>KOPI NUSANTARA<small>RASA ASLI INDONESIA</small></span></Link><nav className="nav-links" aria-label="Navigasi utama">{links.map(link=><Link key={link.href} href={link.href} className={pathname===link.href || (link.href!== "/" && pathname.startsWith(link.href)) ? "active" : ""}>{link.label}</Link>)}<Link className="nav-cta" href="/kopi">Temukan kopi ↗</Link></nav></div></header>;
}
