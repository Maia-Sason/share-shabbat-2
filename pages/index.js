import { data } from "autoprefixer";
import Image from "next/image";
import InfoCard from "~/components/Generic/InfoCard";
import InfoSection from "~/components/Generic/InfoSection";
import Layout from "~/components/Layout";
import Metadata from "../src/components/Metadata";
import Navigation from "../src/components/Navigation";
import styles from "../styles/Home.module.css";
import { getPage } from "./api/contentful";
import { firebaseAdmin } from "./api/firebaseAdmin";
import { fetchUpcomingHoliday } from "./api/holiday";

const DAYS = 100;

export const getStaticProps = async (ctx) => {
  console.log(firebaseAdmin);
  const currentDate = new Date();
  const dateToChange = new Date();
  const futureDate = new Date(
    dateToChange.setDate(currentDate.getDate() + DAYS)
  );

  getPage();

  // const [page, otherPages] = await Promise.all([
  //   getPage({ slug, preview, locale: "null", pageContentType }),
  // ]);

  // TODO: Check if user's frooms have a room name/type/category or similar that matches name of event and filter it out. If holiday like "Yom Kippur" maybe disable button
  const upcomingHolidays = await fetchUpcomingHoliday(currentDate, futureDate);

  return {
    props: { upcomingHolidays },
  };
};

export default function Home({ upcomingHolidays }) {
  // console.log(upcomingHolidays);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <>
      <Metadata title="Home Page" />
      <div className="flex flex-col gap-5 ">
        <div className="flex justify-center flex-col">
          <h1 className="text-6xl font-bold">Join a room</h1>
          <span>Join a friend&apos;s room</span>
          <form className="flex-col">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <span>Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Room Code</span>
              </label>
              <label className="input-group">
                <span>Code</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input input-bordered"
                />
              </label>
            </div>
          </form>
        </div>
        {upcomingHolidays && !!Object.keys(upcomingHolidays).length && (
          <InfoSection title={`Next Closest Holiday (within ${DAYS} days):`}>
            {Object.keys(upcomingHolidays).map((key) => {
              const date = new Date(upcomingHolidays[key][0].date);

              return (
                <InfoCard key={key}>
                  <div className="flex justify-between gap-5 items-center">
                    <h4 className="m-0">{key}</h4>
                    <h4 className="m-0 text-accent">
                      {date.toLocaleDateString("en-US", {
                        timeZone: "UTC",
                      })}
                    </h4>
                  </div>
                  <div>{upcomingHolidays[key][0].memo}</div>
                  <div className="text-right">
                    {upcomingHolidays[key][0].hebrew}
                  </div>

                  <button className="text-sm btn btn-sm btn-accent">
                    Create {key} Room?
                  </button>
                </InfoCard>
              );
            })}
          </InfoSection>
        )}

        <InfoSection title="Upcoming Room Sessions">
          <InfoCard>
            <div>
              <h4>Name</h4>
              <p>(5 minutes)</p>
            </div>
            <button className="text-sm btn btn-sm btn-accent">
              Start Room (name: My-room)
            </button>
          </InfoCard>
        </InfoSection>
      </div>
    </>
  );
}
