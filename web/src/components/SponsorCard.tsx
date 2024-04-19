// NextCard.tsx
import {Image} from "@nextui-org/react";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function SponsorCard({ header,image,description }: 
  { header: string,
    image: string,
    description: string
 }) {
  return (
    <Card className="py-4 px-4 bg-white shadow-lg rounded-xl mx-auto">
      <CardBody className="py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={image}
          width={270}
          height={150}
        />
        <div className="flex flex-col items-start justify-start mt-4">
          <h3 className="text-lg font-semibold mt-2">{header}</h3>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
          <Button className="mt-4">
            Read more
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}