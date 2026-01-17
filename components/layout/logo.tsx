import { Link } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
        <Link>
          <img src="/images/logo.png" alt="mergedtech logo" />
        </Link>
      </div>
      <span className="font-bold text-xl text-foreground hidden sm:inline">Mergedtech</span>
    </div>
  )
}
