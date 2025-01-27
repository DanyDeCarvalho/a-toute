import Image from "next/image";

export function ImageSection({
  imageSrc,
  imageAlt,
  title,
  description,
  isReversed = false,
}) {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8 my-12`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={500}
          height={300}
          layout="responsive"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
