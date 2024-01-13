import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import { useId } from 'react';



export const Email = ({ data: { name, email, subject, comment, website = 'String Shaper' } }) => {
  return (
    <Html>
      <Head />
      <Preview>{`Message From ${website}, sent by ${name}`}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border-2 bg-neutral-100 border-solid border-neutral-300 rounded-md my-[40px] mx-auto p-[20px] max-w-3xl shadow-xl">
            <Section className="mt-8">
              <Img
                src={`https://iili.io/JYd1hMv.md.png`}
                alt={website}
                className="w-40 my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-base text-center p-0 my-[30px] mx-0 font-bold">
              {subject.charAt(0).toUpperCase() + subject.slice(1)}
            </Heading>
            <Text className="text-black text-sm leading-[24px]">
              Sender Name: <strong>{name}</strong>
            </Text>
            <Text className="text-black text-sm leading-[24px]">
              Sender Email: <strong>{email}</strong>
            </Text>
            <Text className="text-black text-lg font-normal leading-[24px] p-2">
              {comment.charAt(0).toUpperCase() + comment.slice(1)}
            </Text>
            <Section className='mt-4'>
              <footer className='w-full text-center font-[urbanist] text-base'>
                ❤️ Email from <strong>{website.toUpperCase()}</strong> ❤️
              </footer>
            </Section>
          </Container>

        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;