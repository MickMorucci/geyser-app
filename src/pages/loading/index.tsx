import { Box, Image, Progress, VStack } from '@chakra-ui/react';
import React from 'react';
import LogoNameLight from '../../assets/logo-name.png';

export const LoadingPage = () => {
	console.log('checking open ');
	return (
		<VStack
			height="100vh"
			width="100%"
			color="brand.primary"
			justifyContent="center"
			alignItems="center"
			spacing="20px"
		>

			<Image height="100px" src={LogoNameLight} alt="geyser logo image" objectFit="contain" />
			<Box maxWidth="380px" width="100%">
				<Progress size="xs" isIndeterminate colorScheme="teal" />
			</Box>
		</VStack>
	);
};