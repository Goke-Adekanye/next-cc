import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return <MeetupDetail data={props.meetupData} />;
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from an API

  const meetupId = context.params.meetupid;
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "Second Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/8/81/The_Old_Palace_of_Whitehall_by_Hendrik_Danckerts.jpg",
        address: "12 Washington street, DC",
        description: "AI meetup",
      },
    },
  };
}
