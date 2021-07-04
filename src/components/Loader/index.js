import "./index.css";
export default function Loader() {
  return (
    <div className="loader text-center">
      <div className="loader-inner">
        <div className="lds-roller mb-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4 className="text-uppercase font-weight-bold center">Loading</h4>
        <p className="font-italic text-muted center">
          Please Wait while we load your results.
        </p>
      </div>
    </div>
  );
}
