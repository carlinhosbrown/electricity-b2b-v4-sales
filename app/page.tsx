import Link from "next/link";
import { Header, Shell, Card } from "@/components/ui";
export default function Home() {
  return <Shell><Header /><main style={{ maxWidth: 1080, margin: "40px auto", padding: 16 }}><Card><h1>Plataforma B2B para brokers energéticos</h1><p>CRM comercial, propuestas PDF, documentos y comparador de tarifas para empresas.</p><p><Link href="/login">Entrar</Link> · <Link href="/dashboard">Dashboard</Link></p></Card></main></Shell>;
}
