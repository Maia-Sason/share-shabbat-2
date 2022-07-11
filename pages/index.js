import Image from "next/image";
import Layout from "~/components/Layout";
import Metadata from "../src/components/Metadata";
import Navigation from "../src/components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
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
        <div className="alert alert-info flex-wrap">
          <div>
            <div className="prose">
              <h3>Next Closest Holiday:</h3>
              <p>Passover (5 days)</p>
              <button className="text-sm btn btn-sm btn-accent">
                Create a new Room for Passover?
              </button>
            </div>
          </div>
        </div>
        <div className="alert alert-info flex-wrap">
          <div>
            <div className="prose">
              <h3>Upcoming room sessions:</h3>
              <div className="grid md:grid-cols-2 ">
                <div className="card glass p-5">
                  <div>
                    <h4>Name</h4>
                    <p>(5 minutes)</p>
                  </div>
                  <button className="text-sm btn btn-sm btn-accent">
                    Start Room (name: My-room)
                  </button>
                </div>
                <div className="card glass p-5">
                  <div>
                    <h4>Name</h4>
                    <p>(5 minutes)</p>
                  </div>
                  <button className="text-sm btn btn-sm btn-accent">
                    Start Room (name: My-room)
                  </button>
                </div>
                <div className="card glass p-5">
                  <div>
                    <h4>Name</h4>
                    <p>(5 minutes)</p>
                  </div>
                  <button className="text-sm btn btn-sm btn-accent">
                    Start Room (name: My-room)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
