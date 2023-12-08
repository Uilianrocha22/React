import Sum from "./Sum";

export const SubTitle = () => (
  <h2
    style={{
      color: "#252",
      marginTop: "2rem",
    }}
  >
    It`s easy, Like 10 + 5 is {Sum(8, 7)}
  </h2>
);
