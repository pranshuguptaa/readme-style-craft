
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="border-b border-white/10 sticky top-0 z-50 w-full bg-black/60 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple/20 border border-purple/30">
            <Code2 className="h-5 w-5 text-purple-light" />
          </div>
          <h1 className="text-xl font-semibold text-white">ReadmeCraft</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* GitHub button removed as requested */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
