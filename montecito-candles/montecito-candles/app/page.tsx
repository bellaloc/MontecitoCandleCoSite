import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1]">
      <header className="flex flex-col gap-8 items-center sm:items-start">
        <Image
          src="/candle-logo.png" // Change to your logo image
          alt="Candle Store Logo"
          width={200}
          height={100}
          priority
        />
        <h1 className="text-4xl font-bold text-center sm:text-left text-[#333]">
          Welcome to Our Candle Store
        </h1>
        <p className="text-lg text-center sm:text-left text-gray-600">
          Discover the perfect scent for every moment with our hand-poured candles.
        </p>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="flex flex-col sm:flex-row gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <Image
              src="/candle1.jpg" // Replace with actual product image
              alt="Candle 1"
              width={350}
              height={350}
              className="rounded-lg object-cover"
            />
            <h3 className="text-xl font-semibold text-[#444] mt-4">Lavender Bliss</h3>
            <p className="text-gray-500">A calming lavender scent perfect for relaxation.</p>
            <button className="mt-4 py-2 px-6 rounded-full bg-[#fcbf49] text-white font-semibold transition duration-300 ease-in-out hover:bg-[#f59e0b]">
              Shop Now
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
            <Image
              src="/candle2.jpg" // Replace with actual product image
              alt="Candle 2"
              width={350}
              height={350}
              className="rounded-lg object-cover"
            />
            <h3 className="text-xl font-semibold text-[#444] mt-4">Cozy Vanilla</h3>
            <p className="text-gray-500">A warm and inviting vanilla scent to fill your space.</p>
            <button className="mt-4 py-2 px-6 rounded-full bg-[#fcbf49] text-white font-semibold transition duration-300 ease-in-out hover:bg-[#f59e0b]">
              Shop Now
            </button>
          </div>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-12">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-12">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
