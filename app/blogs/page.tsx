import Image from "next/image";
// import Header from "@/components/header";

export default function Home() {
    return (
        <div className="bg-white">
            {/* <Header /> */}
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <h1 className="text-4xl font-bold">Blog News</h1>
                <p className="mt-4 text-lg">This is a simple example of a Next.js application.</p>
                <Image
                    src="/logo-text.png"
                    alt="Next.js Logo"
                    width={200}
                    height={200}
                    className="mt-8"
                />
            </main>
        </div>
    );
}
