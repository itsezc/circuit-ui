/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { css } from '@emotion/core';

import docs from './Card.docs.mdx';
import Card, { CardHeader, CardFooter } from '.';
import Heading from '../Heading';
import Text from '../Text';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

import { Theme } from '@sumup/design-tokens';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: { page: docs },
    jest: ['Card']
  }
};

const cardStyles = (theme: Theme) => css`
  width: 500px;
  height: 150px;
  max-width: 90%;
  max-height: 90%;
  margin-bottom: ${theme.spacings.mega};
`;

const contentStyles = (theme: Theme) => css`
  background: ${theme.colors.n200};
  width: 100%;
  height: 100%;
`;

const Header = () => (
  <Heading size="kilo" noMargin>
    Card heading
  </Heading>
);

const Content = () => (
  <Text noMargin>This is some text showing in my card</Text>
);

export const base = () => <Card css={cardStyles} />;

export const shadows = () => (
  <Fragment>
    <Card shadow='single' css={cardStyles} />
    <Card shadow='double' css={cardStyles} />
    <Card shadow='triple' css={cardStyles} />
  </Fragment>
);

export const spacings = () => (
  <Fragment>
    <Card spacing='mega' css={cardStyles}>
      <div css={contentStyles} />
    </Card>
    <Card spacing='giga' css={cardStyles}>
      <div css={contentStyles} />
    </Card>
  </Fragment>
);

export const withHeader = () => (
  <Fragment>
    <Card css={cardStyles}>
      <CardHeader>
        <Header />
      </CardHeader>
      <Content />
    </Card>

    <Card css={cardStyles}>
      <CardHeader onClose={action('CloseButton clicked')}>
        <Header />
      </CardHeader>
      <Content />
    </Card>
  </Fragment>
);

export const withFooter = () => (
  <Fragment>
    <Card css={cardStyles}>
      <Content />
      <CardFooter>
        <ButtonGroup>
          <Button variant="secondary">Cancel</Button>
          <Button>Confirm</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>

    <Card css={cardStyles}>
      <Content />
      <CardFooter align="left">
        <ButtonGroup align="left">
          <Button variant="secondary">Cancel</Button>
          <Button>Confirm</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  </Fragment>
);