import Image from 'next/image';
import { createClient, groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import styles from './page.module.css';

const clientConfig = {
  projectId: '0zxm1jwh',
  dataset: 'production',
  useCdn: false,
};

function getCorgis() {
  return createClient(clientConfig).fetch(groq`
    *[_type == "corgi"]{
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      content,
    }
  `);
}

export default async function Home() {
  const corgis = await getCorgis();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>CORGI FANZ</h1>

        {corgis.map((corgi: any) => {
          return (
            <div className="corgi" key={corgi._id}>
              <h2>{corgi.name}</h2>
              <Image
                src={corgi.image}
                alt={corgi.alt}
                width={300}
                height={300}
              />
              <PortableText value={corgi.content} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
