
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-3xl">
            Inventory management software
          
        </h2>
        <Link href='/dashboard/home/overview'>view Dashboard</Link>
    </div>
    
  );
}
