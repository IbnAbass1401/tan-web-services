export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-extrabold text-navy md:text-6xl">
        TAN Web Services
      </h1>
      <p className="font-semibold text-ocean">Build. Grow. Scale.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <span className="rounded-full bg-mist-soft px-4 py-2 text-sm text-navy">
          mist-soft
        </span>
        <span className="rounded-full bg-teal-light px-4 py-2 text-sm text-navy">
          teal-light
        </span>
        <span className="rounded-full bg-ocean px-4 py-2 text-sm text-white">
          ocean
        </span>
        <span className="rounded-full bg-navy px-4 py-2 text-sm text-white">
          navy
        </span>
      </div>
    </main>
  );
}