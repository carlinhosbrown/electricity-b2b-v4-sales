export default function LoginPage() {
  return <main style={{ maxWidth: 420, margin: "80px auto", fontFamily: "Arial" }}><h1>Acceso broker</h1><p>Usuario demo: admin@brokerpro.es / broker1234</p><form action="/api/auth/signin/credentials" method="post"><input name="email" type="email" placeholder="Email" style={{ width: "100%", padding: 10, marginBottom: 12 }} /><input name="password" type="password" placeholder="Contraseña" style={{ width: "100%", padding: 10, marginBottom: 12 }} /><button type="submit">Entrar</button></form></main>;
}
