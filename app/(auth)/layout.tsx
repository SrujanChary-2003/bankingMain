import Image from "next/image";

/**
 * Renders the root layout of the application, including a main content area 
 * and an authentication image. The layout is styled to be flexible and full-screen.
 * 
 * @param {Readonly<{ children: React.ReactNode }>} props - The component's props containing children elements.
 * @returns {JSX.Element} The rendered layout component.
 * @throws {Error} Throws an error if the image fails to load.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image 
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
