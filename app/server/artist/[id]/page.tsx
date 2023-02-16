import { getArtist } from "~/utils/apis";

type NextPageProps = { params: any };
const SingerPage = async ({ params }: NextPageProps) => {
    const artist = await getArtist(params.id);

  return <>{artist.name} - {artist.followers.total} follows</>
};

const STATIC_SINGER_IDS: string[] = [
    '376pcuw4IgWBMOUwCr8kIm', // tanya
    '42UhEbkOaTEwJKWmf7xlfZ', // polin
    '5AO5nzx14PfLNfVgYVd0rw', // crispy
];
export async function generateStaticParams() {
    return STATIC_SINGER_IDS.map((id) => ({
      id,
    }));
  }
  

export default SingerPage;