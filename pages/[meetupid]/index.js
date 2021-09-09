import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  return <MeetupDetail data={props.meetupData} />;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://jvstblvck:130404010@cluster0.beanb.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data from an API

  const meetupId = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://jvstblvck:130404010@cluster0.beanb.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        id: selectedMeetup._id.toString(),
      },
    },
  };
}
