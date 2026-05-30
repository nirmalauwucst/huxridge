import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section padding="lg" background="default">
      <Container size="narrow">
        <div className="text-center">
          <p className="text-accent-500 font-serif text-8xl font-bold">404</p>
          <h1 className="text-primary-900 mt-4 font-serif text-3xl font-semibold sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-lg leading-relaxed">
            We could not find the page you were looking for. It may have been moved, renamed, or it may never have existed.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href="/">Go to Home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-8 text-sm">
            Looking for something specific?{" "}
            <Link href="/contact" className="text-primary-700 underline-offset-2 hover:underline">
              Contact us
            </Link>{" "}
            and we will help you find it.
          </p>
        </div>
      </Container>
    </Section>
  );
}
