import React from 'react';
import { styled } from '@stitches/react';
import { violet, mauve, blackA, whiteA } from '@radix-ui/colors';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { darkTheme } from 'stitches.config';
import { Button } from '@atelier/button';
import { useTheme } from 'next-themes';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 32,
  height: 16,
  backgroundColor: '$slate6',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $gray10`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: '$slate6' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 11,
  height: 11,
  backgroundColor: '$lime9',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $lime9`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

// Exports
const Switch = StyledSwitch;
const SwitchThumb = StyledThumb;

// Your app...
const Flex = styled('div', { display: 'flex' });

export const ThemeSwitch = props => {
  const { theme, setTheme } = useTheme();

  return (
    <form>
      <Flex css={{ alignItems: 'center', marginRight: '$5' }}>
        <Switch
          defaultChecked
          id="s1"
          aria-label="Toggle Theme"
          onCheckedChange={() => {
            const newTheme = theme === 'dark' ? 'theme' : 'dark';

            document.querySelectorAll('[data-demo-iframe]').forEach((iframe: HTMLIFrameElement) => {
              if (iframe.contentDocument?.documentElement) {
                iframe.contentDocument.documentElement.classList.toggle(darkTheme.className);
                iframe.contentDocument.documentElement.classList.toggle('theme');
                iframe.contentDocument.documentElement.style.setProperty('color-scheme', newTheme);
              }
            });

            document.documentElement.classList.toggle(darkTheme.className);
            document.documentElement.classList.toggle('theme');
            document.documentElement.style.setProperty('color-scheme', newTheme);

            // Finally, we still need to let `next-themes` know of the theme change so that it saves it to local storage.
            setTheme(newTheme);
          }}
          {...props}
        >
          <SwitchThumb />
        </Switch>
      </Flex>
    </form>
  );
};
