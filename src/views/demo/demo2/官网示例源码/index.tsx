import Heading from './Heading.tsx';
import Section from './Section.tsx';

const Demo2 = () => {
	return (
		<Section>
			<Heading level={1}>主标题</Heading>
			<Heading level={2}>副标题</Heading>
			<Heading level={3}>子标题</Heading>
			<Heading level={4}>子子标题</Heading>
			<Heading level={5}>子子子标题</Heading>
			<Heading level={6}>子子子子标题</Heading>
		</Section>
	);
};

export default Demo2;
