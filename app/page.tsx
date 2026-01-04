import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-24 bg-white text-black">
            <div className = "relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-500">
                <Image
                    src="/my-photo.jpg"
                    alt="Me"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <h1 className="text-5xl font-bold mb-2 text-center">
                Uladzislau Shuman
            </h1>

            <h2 className="text-2xl text-gray-600 font-medium mb-6 text-center">
                Software Engineer
            </h2>

            <div className="flex flex-row gap-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    View Projects
                </button>
                <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
                    Contact Me
                </button>
            </div>

        </main>
    )
}