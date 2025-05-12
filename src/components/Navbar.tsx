
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="border-b border-border sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Github className="h-6 w-6" />
          <h1 className="text-xl font-semibold">GitHub Profile Generator</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
