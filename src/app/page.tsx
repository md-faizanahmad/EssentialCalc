import Hero from "@/components/layouts/Hero";
import ToolLinks from "@/components/layouts/TookLinks";
import ToolGrid from "@/components/layouts/ToolGrid";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ToolGrid />
      <ToolLinks />
    </div>
  );
}
