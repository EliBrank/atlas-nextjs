import Link from "next/link";
import Image from "next/image";
import placeholder from "@/assets/placeholder.svg";
import { signIn } from "@/auth";

export default function Page() {
  return (
    <main className="flex w-screen flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl">
              Unlock the Power of the Web
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover our suite of tools and services to build, deploy, and
              scale your web applications with ease.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <form
                action={async () => {
                  "use server"
                  await signIn("default", { redirectTo: "/ui" });
                }}
              >
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                  <div>Sign In</div>
                </button>
              </form>
              <Link
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <Image
            src={placeholder}
            alt="Hero"
            className="mx-auto aspect-square w-full max-w-[550px] overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </main>
  );
}
