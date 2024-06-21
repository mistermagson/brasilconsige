// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
      <div>
        <header>
          <h1>BrasilConsige</h1>
          <nav>
            <Link href="/quemsomos">Quem Somos</Link>
            <Link href="/pilares">Pilares</Link>
            <Link href="/trajetoria">Trajetória</Link>
            <Link href="/beneficios">Benefícios</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </header>
        <main>
          <Image src="/images/logo.png" alt="BrasilConsige" width={500} height={300} />
          <h2>Proteção Familiar</h2>
          <p>Bem-vindo à BrasilConsige Proteção Familiar...</p>
        </main>
        <footer>
          <p>© 2024 BrasilConsige</p>
        </footer>
      </div>
  );
}
