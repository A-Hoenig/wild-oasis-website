import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";

// force dynamic route and prevent data cache
// incremental static regeneration (ISR)
// 0 = always dynamic, 3600 = update once per hour
export const revalidate = 3600;

export const metadata = {
  title: "Cabins at",
};

export default function Page({ searchParams }) {
  //get filter value from URL (set default to all)
  const filter = searchParams?.capacity ?? "all";
  console.log(filter);
  // CHANGE

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      {/* await for async data */}
      <Suspense fallback={<Spinner />}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
