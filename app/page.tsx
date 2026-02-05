export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 text-white px-5">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">Hi, I'm Aditya</h1>
        <p className="text-xl opacity-90 mb-8 leading-relaxed">
          Welcome to my corner of the internet. I build things and explore ideas.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
        >
          Get in Touch
        </a>
        <div className="mt-12 flex gap-6 justify-center">
          <a
            href="https://github.com"
            className="text-white opacity-80 hover:opacity-100 transition-opacity text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="text-white opacity-80 hover:opacity-100 transition-opacity text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            className="text-white opacity-80 hover:opacity-100 transition-opacity text-sm font-medium"
          >
            Twitter
          </a>
        </div>
      </div>
    </main>
  )
}
