import React from 'react';
import tw from 'twin.macro';
import { Container as ContainerBase } from 'components/misc/Layouts.js';

const Container = tw(ContainerBase)`bg-white text-black -mx-8 -mb-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`;
export default () => {
	return (
		<Container>
			<Content>
				<Row>
					<LogoContainer>
						<LogoText>JoshTheCarGuy</LogoText>
					</LogoContainer>
					<LinksContainer>
						<Link
							href='https://www.tiktok.com/@joshthecarguy'
							target='_blank'
							rel='noopener noreferrer'
						>
							TikTok
						</Link>
						<Link
							href='https://www.youtube.com/channel/UC19KhRekO9T-wkQtzFSah0g'
							target='_blank'
							rel='noopener noreferrer'
						>
							YouTube
						</Link>
						<Link
							href='https://www.instagram.com/joshthecarguy80'
							target='_blank'
							rel='noopener noreferrer'
						>
							Instagram
						</Link>
						{/* <Link href='#'>Blog</Link> */}
					</LinksContainer>
					<CopyrightText>
						<p className='pt-3 text-center'>
							Copyright&copy; {new Date().getFullYear()}&nbsp;JoshTheCarGuy |
							All Rights Reserved
						</p>
					</CopyrightText>
				</Row>
			</Content>
		</Container>
	);
};
