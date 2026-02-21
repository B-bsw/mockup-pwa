import fs from "fs";
import path from "path";
import Guide from "./components/Guide";

export default function Home() {
  let readmeContent = "";
  try {
    const readmePath = path.join(process.cwd(), "README.md");
    readmeContent = fs.readFileSync(readmePath, "utf8");
    // Fix image paths: replace 'src="public/' with 'src="/'
    readmeContent = readmeContent.replace(/src="public\//g, 'src="/');
  } catch (error) {
    console.error("Error reading README.md:", error);
    readmeContent = "Could not load README.md";
  }

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center bg-white text-black">
        <div className="text-5xl font-bold tracking-tighter">MOCKUP PWA</div>
      </div>
      <Guide readmeContent={readmeContent} />
    </>
  );
}
