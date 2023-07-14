const header = React.createElement("div", { class: "ContentWrapper" }, [
  React.createElement(
    "div",
    { class: "leftCol" },
    React.createElement(
      "h1",
      { class: "heading-one" },
      "Hi this is practice session and I'm a left column."
    )
  ),
  React.createElement(
    "div",
    { class: "RightCol" },
    React.createElement(
      "h1",
      { class: "heading-two" },
      "Hi this is practice session and I'm a left column."
    )
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(header);
