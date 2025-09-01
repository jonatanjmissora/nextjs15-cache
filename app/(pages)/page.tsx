import { Suspense } from "react";
import { UnestableCacheMongoDb } from "../components/mongo-db/unestable-cache-mongodb";
import SwrMongoDb from "../components/mongo-db/swr-mongodb";
import SimpleFetchMongoDb from "../components/mongo-db/simple-fetch-mongodb";

export default function Home() {

  return (
    <div className="container mx-auto w-5xl 2xl:w-8xl">
      <main className="grid grid-cols-4 gap-1">
        
      <Suspense fallback={<p>Loading simple mongodb...</p>}>
        <SimpleFetchMongoDb />
      </Suspense>

        <Suspense fallback={<p>Loading unstable cache mongodb...</p>}>
          <UnestableCacheMongoDb />
        </Suspense>
        
        <SwrMongoDb />

        {/* <TankStackQueryMongoDb />  */}
      </main>
    </div>
  );
}

 