import Image from "next/image";
import Link from "next/link";

type AppLogoProps = {
  href?: string;
  className?: string;
  priority?: boolean;
};

export function AppLogo({
  href = "/",
  className = "h-30 w-auto",
  priority = false,
}: AppLogoProps) {
  return (
    <Link
      href={href}
      aria-label="HMDEV"
      className="inline-flex shrink-0"
    >
      {/* Light mode */}
      <Image
        src="/vertical-light.png"
        alt="HMDEV"
        width={200}
        height={150}
        priority={priority}
        className={`${className} dark:hidden`}
      />

      {/* Dark mode */}
      <Image
        src="/vertical-dark.png"
        alt="HMDEV"
        width={200}
        height={150}
        priority={priority}
        className={`${className} hidden dark:block`}
      />
    </Link>
  );
}