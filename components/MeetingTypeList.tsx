/* eslint-disable camelcase */
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HomeCard from './HomeCard';
import MeetingModal from './MeetingModal';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import Loader from './Loader';
import { Textarea } from './ui/textarea';
import ReactDatePicker from 'react-datepicker';
import { useToast } from './ui/use-toast';
import { Input } from './ui/input';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();

  // State to manage favorite cards
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({
    newRoom: false,
    joinMeeting: false,
    scheduleMeeting: false,
    viewRecordings: false,
  });

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast({ title: 'Please select a date and time to meet a representative of MyStory.' });
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call('default', id);
      if (!call) throw new Error('Failed to create Room.');
      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: 'Room Created',
      });
    } catch (error) {
      console.error(error);
      toast({ title: 'Failed to create Room.' });
    }
  };

  if (!client || !user) return <Loader />;

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;

  // Function to handle heart click
  const toggleFavorite = (key: string) => {
    setFavorites((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div className="relative">
        <HomeCard
          img="/icons/add-meeting.svg"
          title="New Room"
          description="Start a Meeting Room"
          className="bg-red-600"
          handleClick={() => setMeetingState('isInstantMeeting')}
        />
        <span
          className="absolute top-2 right-2 cursor-pointer"
          onMouseDown={() => toggleFavorite('newRoom')}
        >
          {favorites.newRoom ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </span>
      </div>

      <div className="relative">
        <HomeCard
          img="/icons/join-meeting.svg"
          title="Join Meeting"
          description="via Shared Link"
          className="bg-dark-1"
          handleClick={() => setMeetingState('isJoiningMeeting')}
        />
        <span
          className="absolute top-2 right-2 cursor-pointer"
          onMouseDown={() => toggleFavorite('joinMeeting')}
        >
          {favorites.joinMeeting ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </span>
      </div>

      <div className="relative">
        <HomeCard
          img="/icons/schedule.svg"
          title="Schedule a Meeting with MyStory"
          description="Plan your Meetings"
          className="bg-yellow-1"
          handleClick={() => setMeetingState('isScheduleMeeting')}
        />
        <span
          className="absolute top-2 right-2 cursor-pointer"
          onMouseDown={() => toggleFavorite('scheduleMeeting')}
        >
          {favorites.scheduleMeeting ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </span>
      </div>

      <div className="relative">
        <HomeCard
          img="/icons/recordings.svg"
          title="View Recordings"
          description="Meeting Recordings"
          className="bg-blue-1"
          handleClick={() => router.push('/recordings')}
        />
        <span
          className="absolute top-2 right-2 cursor-pointer"
          onMouseDown={() => toggleFavorite('viewRecordings')}
        >
          {favorites.viewRecordings ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        </span>
      </div>

      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Create Meeting"
          handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Add a description
            </label>
            <Textarea
              className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
              onChange={(e) => setValues({ ...values, description: e.target.value })}
            />
          </div>
          <div className="flex w-full flex-col gap-2.5">
            <label className="text-base font-normal leading-[22.4px] text-sky-2">
              Select Date and Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded bg-dark-3 p-2 focus:outline-none"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title="Meeting Created"
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: 'Link Copied' });
          }}
          image={'/icons/checked.svg'}
          buttonIcon="/icons/copy.svg"
          className="text-center"
          buttonText="Copy Meeting Link"
        />
      )}

      <MeetingModal
        isOpen={meetingState === 'isJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Type the link here"
        className="text-center"
        buttonText="Join Meeting"
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder="Meeting link"
          onChange={(e) => setValues({ ...values, link: e.target.value })}
          className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </MeetingModal>

      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Room."
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
