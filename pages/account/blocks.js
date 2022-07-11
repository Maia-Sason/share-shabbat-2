import ProtectedRoute from "~/components/firebaseComponents/ProtectedRoute";
import BlockView from "~/components/BlessBlockEditor/BlockView";

// export const getStaticProps = () => {
//   // TODO: Get blessings from a CMS
// };

const BlockPage = () => {
  return (
    <ProtectedRoute>
      {/* Catagories */}
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <BlockView />
      </div>

      <div className="flex flex-col gap-5">
        <div className="tabs tabs-boxed">
          <a className="tab">All</a>
          <a className="tab tab-active">Friday Night Dinner</a>
          <a className="tab">Shabbat Morning</a>
          <a className="tab">Passover Seder</a>
          <a className="tab">Sukkot Dinner</a>
          <a className="tab">Custom</a>
        </div>
        <section>
          <section className="prose">
            <h2>Friday Night Dinner</h2>
            <div className="flex gap-2 flex-wrap">
              <label htmlFor="my-modal-6" className="btn modal-button">
                One
              </label>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
              <button className="btn">Four fjklsfds</button>
              <button className="btn">Two</button>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
              <button className="btn">Four fjklsfds</button>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
            </div>
            <div className="divider"></div>
          </section>
          <section className="prose">
            <h2>Shabbat Morning</h2>
            <div className="flex gap-2 flex-wrap">
              <button className="btn">One</button>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
              <button className="btn">Four fjklsfds</button>
              <button className="btn">Two</button>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
              <button className="btn">Four fjklsfds</button>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
            </div>
            <div className="divider"></div>
          </section>
          <section className="prose">
            <h2>Shabbat Morning</h2>
            <div className="flex gap-2 flex-wrap">
              <button className="btn">One</button>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
              <button className="btn">Four fjklsfds</button>
              <button className="btn">Two</button>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
              <button className="btn">Four fjklsfds</button>
              <button className="btn">Two</button>
              <button className="btn">Three</button>
            </div>
            <div className="divider"></div>
          </section>
        </section>
      </div>
    </ProtectedRoute>
  );
};

export default BlockPage;
