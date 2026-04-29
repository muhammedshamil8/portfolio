import Portfolio from "@/components/Portfolio";

export default function WorkPage() {
  return (
    <div className="pt-40">
      <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
          Selected <span className="text-primary italic">Works.</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A showcase of products, platforms, and experiments built with a focus on impact and utility. 
          From startups to complex enterprise systems.
        </p>
      </div>
      <Portfolio />
    </div>
  );
}
