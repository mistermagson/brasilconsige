// pages/quemsomos.js
import Image from 'next/image';

export default function Trajetoria() {
    return (
        <div>
            <header>
                <h1>BrasilConsige</h1>
            </header>
            <main>
                <h2>Quem Somos</h2>
                <Image src="/images/quemsomos.png" alt="Quem Somos" width={500} height={300} />
                <p>Bem-vindo à BrasilConsige Proteção Familiar...</p>
            </main>
            <footer>
                <p>© 2024 BrasilConsige</p>
            </footer>
        </div>
    );
}
