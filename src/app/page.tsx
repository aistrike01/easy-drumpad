export default function Home() {
  return (
    <main className="h-screen bg-green-600">
      <h1 className="flex h-full flex-wrap items-center justify-center gap-12 text-center text-6xl font-bold  text-black">
        {Array.from({ length: 16 }).map((pad, i) => (
          <div
            key={i}
            className="brad h-32 w-32 cursor-pointer rounded-md bg-gray-400 shadow-inner hover:scale-95 hover:bg-orange-400"
          ></div>
        ))}
      </h1>
    </main>
  );
}
