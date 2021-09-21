import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import joshtik from '../../images/joshtik1.png';
import joshtik1 from '../../images/joshtik2.png';
import joshtik2 from '../../images/joshtik3.png';
import { SectionHeading as HeadingTitle } from '../misc/Headings.js';

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div((props) => [
	tw`items-center justify-center mt-24 md:flex`,
	props.reversed ? tw`flex-row-reverse` : 'flex-row',
]);
const Image = styled.div((props) => [
	`background-image: url("${props.imageSrc}");`,
	tw`flex-shrink-0 mx-4 bg-center bg-cover rounded md:w-1/2 lg:w-5/12 xl:w-1/3 h-80 md:h-144 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export default () => {
	const cards = [
		{
			imageSrc: joshtik,
			subtitle: '',
			title: 'Mackenzie Rae',
			description: `"So I have been car shopping for about 2 to 3 weeks before I came across Josh's account and I am so happy that I did because I was having terrible experiances so I said if you have any time I need your help. He was amazing! I called him and gave him the rundown of what was going on and what I needed help with. He even called me several times letting me know what I needed to say to my dealership and that I need to call him when certain papers are brought out because there are certain things they won't show without you asking. Even when I got scared throughout certain times during speaking with the sales man I put Josh on speaker phone and he talked to my sales man, basically doing the heavy lifting for me. Thanks to Josh I have a new Honda Civic!"`,
			url: 'https://timerse.com',
		},

		{
			imageSrc: joshtik1,
			subtitle: '',
			title: 'Sarah Jennings',
			description:
				'"I called Josh and he told me what to expect in advance. He said these are the numebers you deserve so I walked into the dealership they did not give me those numbers so I walked out. Then I walked back in and they were ready to renegotiate my interest price, my GAP warranty, and the total car price. Thanks Josh!"',
			url: 'https://timerse.com',
		},

		{
			imageSrc: joshtik2,
			title: 'AsianCop on YouTube',
			description:
				'"I just saved close to $15,000. Let me tell you guys something this guy is legit. We called Josh and we went to the dealership and he got on the phone with the sales person and also got on the phone with the finance manager. Well I tell you what those guys faces were pricless. Now we are the proud owners of a 2022 Honda Odyssy. If you guys are in the market for a new car give Josh a call!"',
			url: 'https://timerse.com',
		},
	];

	return (
		<Container>
			<SingleColumn>
				<HeadingInfoContainer>
					<HeadingTitle>Testimonials</HeadingTitle>
					<HeadingDescription>
						Here are some testimonails of my recent customers.
					</HeadingDescription>
				</HeadingInfoContainer>

				<Content>
					{cards.map((card, i) => (
						<Card key={i} reversed={i % 2 === 1}>
							<Image imageSrc={card.imageSrc} />
							<Details>
								<Subtitle>{card.subtitle}</Subtitle>
								<Title>{card.title}</Title>
								<Description>{card.description}</Description>
								<Link href={card.url}>Link to video</Link>
							</Details>
						</Card>
					))}
				</Content>
			</SingleColumn>
		</Container>
	);
};
