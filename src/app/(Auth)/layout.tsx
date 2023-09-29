export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-screen h-screen items-center justify-center">
      {children}
    </div>
  );
}
