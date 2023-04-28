interface ParaProps {
  show: boolean;
}
const Paragraph = (props: ParaProps) => {
  console.log("Paragraph");
  return (
    <>
      {props.show && (
        <p>
          {" "}
          The medicine helped calm her breathing. Adjective The teacher asked us
          to remain calm after the fire alarm went off. Let's try to have a calm
          discussion about your grades.
        </p>
      )}
    </>
  );
};
export default Paragraph;
