const heading = React.createElement("div", { id: "top" }, [
  React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading1" }, "This is heading one (1)"),
      React.createElement("h2", { id: "heading2" }, "This is heading two (2)"),
      React.createElement(
        "h3",
        { id: "heading3" },
        "This is heading three (3)"
      ),
    ]),
    React.createElement("div", { id: "childtwo" }, [
      React.createElement("h1", { id: "heading1" }, "This is heading one (1)"),
      React.createElement("h2", { id: "heading2" }, "This is heading two (2)"),
      React.createElement(
        "h3",
        { id: "heading3" },
        "This is heading three (3)"
      ),
    ]),
  ]),
  React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading1" }, "This is heading one (1)"),
      React.createElement("h2", { id: "heading2" }, "This is heading two (2)"),
      React.createElement(
        "h3",
        { id: "heading3" },
        "This is heading three (3)"
      ),
    ]),
    React.createElement("div", { id: "childtwo" }, [
      React.createElement("h1", { id: "heading1" }, "This is heading one (1)"),
      React.createElement("h2", { id: "heading2" }, "This is heading two (2)"),
      React.createElement(
        "h3",
        { id: "heading3" },
        "This is heading three (3)"
      ),
    ]),
  ]),
]);

console.log(heading); // This heading will return an object ()

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
