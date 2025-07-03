import Image from "next/image";

export default function ProjectItem() {
  return (
    <div>
      <Image src="https://placehold.co/256x256" width="256" height="256" alt="MyGLP Companion" />
      <div>
        <h2>MyGLP Companion</h2>
        <p>A simple and beautiful way to track your GLP-1 journey.</p>
      </div>
    </div>
  )
}