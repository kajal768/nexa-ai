import "./Loader.css";

function Loader() {
  return (
    <div className="app-loader" aria-label="Loading NexaAI">
      <span className="loader-mark">
        <i className="bi bi-cpu"></i>
      </span>
    </div>
  );
}

export default Loader;