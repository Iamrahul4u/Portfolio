import "./Heading.css";

function Heading({ heading }) {
  return (
    <div>
      <main className={"main"}>
        <span className={"span"}>
          <p className={" p mt-32"}>{heading}</p>
        </span>
      </main>
    </div>
  );
}

export default Heading;
