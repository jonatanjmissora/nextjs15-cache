import { Suspense } from "react";
import SimpleFetchJsonUsers from "@/app/components/json-users/simple-fetch-json-users";
import UnestableCachedJsonUsers from "@/app/components/json-users/unestable-cache-json-users";
import SwrJsonUsers from "@/app/components/json-users/swr-json-users";

export default function PlaceholderUsersPage() {
  return (
    <div className="container mx-auto w-5xl 2xl:w-8xl">
      <main className="grid grid-cols-4 gap-1">
        
      <Suspense fallback={<p>Loading simple json users...</p>}>
        <SimpleFetchJsonUsers />
      </Suspense>

        <Suspense fallback={<p>Loading unstable cache json users...</p>}>
          <UnestableCachedJsonUsers />
        </Suspense>
        
        <SwrJsonUsers />

        {/* <TankStackQueryMongoDb /> */}
      </main>
    </div>
  )
}
