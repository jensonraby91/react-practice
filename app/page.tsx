export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans p-6 dark:bg-black">
      <main className="w-full max-w-xl rounded-2xl border border-black/8 bg-white p-8 shadow-sm dark:border-white/15 dark:bg-zinc-950">
        <p className="text-center text-xl leading-8 text-zinc-800 dark:text-zinc-100 sm:text-2xl">
          An example of an error framework is{" "}
          <span className="font-semibold text-black dark:text-white">IRCTC</span>
        </p>
      </main>
    </div>
  );
}
