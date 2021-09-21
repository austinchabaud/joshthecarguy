import React from 'react';
import { Link } from 'react-scroll';
import tw from 'twin.macro';
import HeaderBase, {
	NavLinks,
	NavLink,
	PrimaryLink,
} from 'components/headers/light.js';
import { SectionHeading } from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import {
	Container,
	ContentWithVerticalPadding,
} from 'components/misc/Layouts.js';
import { ReactComponent as CheckboxIcon } from 'feather-icons/dist/icons/check-circle.svg';
import { ReactComponent as QuotesLeftIconBase } from 'images/quotes-l.svg';
import headerImg from '../../images/headerTruck.jpeg';

const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(
	Column
)`mr-auto lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(
	SectionHeading
)`text-left text-blue-900 leading-snug xl:text-6xl`;
const Description = tw(
	SectionDescription
)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(
	PrimaryButtonBase
)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`ml-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`;

const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`;
const QuotesLeftIcon = tw(
	QuotesLeftIconBase
)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`;
const Quote = tw.blockquote``;
const CustomerName = tw.p`mt-4 font-bold`;
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`;

export default ({
	heading = 'JoshTheCarGuy',
	description = "Weather you are buying a new or used vehicle I am going to be there to help you through the process and make sure you save as much money as possible. I am a long time car sales man turned to car consultant. I'm here to make sure you save the most money possible in your new car purchase.",
	imageSrc = headerImg,
	primaryButtonUrl = 'tel:+16627849081',
	primaryButtonText = '662-784-9081',
	buttonRounded = true,
	features = ['Certified LLC', '100+ Customers', 'Call me anytime!'],
	testimonial = {
		quote:
			'"Thanks Josh I am a new owner of a 2018 tacoma! He helped me out at the dealership and I got to walk away with a great deal.."',
		customerName: 'Colin Maughan',
	},
}) => {
	const buttonRoundedCss = buttonRounded && tw`rounded-full`;
	const navLinks = [
		<NavLinks key={1}>
			<NavLink
				href='https://www.tiktok.com/@joshthecarguy'
				target='_blank'
				rel='noopener noreferrer'
			>
				TikTok
			</NavLink>
			<NavLink
				href='https://www.youtube.com/channel/UC19KhRekO9T-wkQtzFSah0g'
				target='_blank'
				rel='noopener noreferrer'
			>
				YouTube
			</NavLink>
			<NavLink
				href='https://www.instagram.com/joshthecarguy80'
				target='_blank'
				rel='noopener noreferrer'
			>
				Instagram
			</NavLink>
		</NavLinks>,
		<NavLinks key={2}>
			<PrimaryLink css={buttonRoundedCss} href='tel:+16627849081'>
				662-784-9081
			</PrimaryLink>
		</NavLinks>,
	];
	return (
		<>
			<Header links={navLinks} />
			<Container>
				<ContentWithVerticalPadding>
					<Row>
						<TextColumn>
							<Heading>{heading}</Heading>
							<Description>{description}</Description>
							<PrimaryButton
								as='a'
								href={primaryButtonUrl}
								css={buttonRoundedCss}
							>
								{primaryButtonText}
							</PrimaryButton>
							<FeatureList>
								{features.map((feature, index) => (
									<Feature key={index}>
										<FeatureIcon />
										<FeatureText>{feature}</FeatureText>
									</Feature>
								))}
							</FeatureList>
						</TextColumn>
						<ImageColumn>
							<ImageContainer>
								<Image src={imageSrc} />
								<Testimonial>
									<QuotesLeftIcon />
									<Quote>{testimonial.quote}</Quote>
									<CustomerName>{testimonial.customerName}</CustomerName>
									<CustomerCompany>
										{testimonial.customerCompany}
									</CustomerCompany>
								</Testimonial>
							</ImageContainer>
							<Offsetbackground />
						</ImageColumn>
					</Row>
				</ContentWithVerticalPadding>
			</Container>
		</>
	);
};
