import Image from "next/image";
import Link from "next/link";

export default function Gallery({
  images,
}: {
  images: [
    {
      src: string;
      name: string;
      id: string;
    }
  ];
}) {
  const result = (
    <div>
      <section className="-h-full -w-full">
        <h2 className="text-red-600">{images.length} images in the gallery</h2>
        <ul className="flex flex-row flex-wrap border-2 w-fit bg-yellow-50">
          {images.map(({ src, id, name }) => (
            <li className="image-wrapper bg-white shadow-xl rounded-lg m-1 p-1 h-fit">
              <Link href={`/gallery/${id}`}>
                <Image
                  className="shadow-xl rounded-lg hover:opacity-70"
                  src={src}
                  alt={name}
                  width={300}
                  height={300}
                  layout="intrinsic"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
  return result;
}
