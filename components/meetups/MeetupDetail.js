/* eslint-disable @next/next/no-img-element */
import classes from "./MeetupDetail.module.css";

export default function MeetupDetail(props) {
  console.log("props :>> ", props);
  return (
    <section className={classes.detail}>
      <img src={props.data.image} alt={props.title} />
      <h1>{props.data.title}</h1>
      <address>{props.data.address}</address>
      <p>{props.data.description}</p>
    </section>
  );
}
