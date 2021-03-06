import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from '../components/Link';

export default {
  component: Link,
  title: 'Components/Link',
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'Google Page',
    underline: false,
    href: 'https://www.google.com/'
};