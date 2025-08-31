export default function Footer() {
  return (
    <footer className="border-t mt-16 dark:border-slate-800">
      <div className="container-padding py-8 text-sm text-slate-600 dark:text-slate-300 flex flex-col md:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} EchoShop. All rights reserved.</p>
        <p className="text-slate-500 dark:text-slate-400">Designed & built by Bhavya Agrawal • Next.js • Tailwind CSS • Framer Motion</p>
      </div>
    </footer>
  )
}
