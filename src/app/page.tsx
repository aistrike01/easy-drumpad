export default function Home() {
  return (
    <main className="bg-green-600 h-screen">
      <h1 className="flex flex-wrap gap-12 items-center justify-center h-full text-center text-6xl font-bold  text-black">
        {Array.from({ length: 16 }).map((pad, i) => (
          <div
            key={i}
            className="h-32 cursor-pointer hover:scale-95 hover:bg-orange-400 w-32 brad rounded-md shadow-inner bg-gray-400"
          ></div>
        ))}
      </h1>
    </main>
  );
}
