export default () => {
  const status = false;
  return (
    <h2
      style={{
        color: status ? "green" : "red",
        marginTop: "2rem",
      }}
    >
      Current status: {status ? "ON" : "OFF"}
    </h2>
  );
};
