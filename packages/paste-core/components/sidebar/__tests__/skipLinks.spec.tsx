import * as React from 'react';
import {render, screen} from '@testing-library/react';

import {SidebarSkipLinks} from '../src/SidebarSkipLinks';

describe('SkipLinks', () => {
  it('should render three links', () => {
    render(<SidebarSkipLinks mainContentSkipLinkID="ID1" sidebarNavigationSkipLinkID="ID2" topbarSkipLinkID="ID3" />);

    const renderedLinks = screen.getAllByRole('link');

    expect(renderedLinks.length).toBe(3);
    expect(renderedLinks[0]).toHaveAttribute('href', '#ID1');
    expect(renderedLinks[1]).toHaveAttribute('href', '#ID2');
    expect(renderedLinks[2]).toHaveAttribute('href', '#ID3');
    expect(screen.getByRole('link', {name: /skip to content/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /skip to navigation/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /skip to topbar/i})).toBeInTheDocument();
  });

  it('should render translated links', () => {
    render(
      <SidebarSkipLinks
        mainContentSkipLinkID="ID1"
        sidebarNavigationSkipLinkID="ID2"
        topbarSkipLinkID="ID3"
        i18nMainContentSkipLinkText="translated main"
        i18nTopbarSkipLinkText="translated topbar"
        i18nNavigationSkipLinkText="translated nav"
      />
    );

    expect(screen.getByRole('link', {name: /translated main/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /translated nav/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /translated topbar/i})).toBeInTheDocument();
  });

  it('should render default element names', () => {
    render(<SidebarSkipLinks mainContentSkipLinkID="ID1" sidebarNavigationSkipLinkID="ID2" topbarSkipLinkID="ID3" />);
    expect(screen.getByRole('link', {name: /skip to content/i}).dataset.pasteElement).toBe('SIDEBAR_SKIPLINKS_LINK');
    expect(screen.getByRole('link', {name: /skip to navigation/i}).dataset.pasteElement).toBe('SIDEBAR_SKIPLINKS_LINK');
    expect(screen.getByRole('link', {name: /skip to topbar/i}).dataset.pasteElement).toBe('SIDEBAR_SKIPLINKS_LINK');
  });

  it('should render custom element names', () => {
    render(
      <SidebarSkipLinks
        mainContentSkipLinkID="ID1"
        sidebarNavigationSkipLinkID="ID2"
        topbarSkipLinkID="ID3"
        element="CUSTOMLINKS"
      />
    );
    expect(screen.getByRole('link', {name: /skip to content/i}).dataset.pasteElement).toBe('CUSTOMLINKS_LINK');
    expect(screen.getByRole('link', {name: /skip to navigation/i}).dataset.pasteElement).toBe('CUSTOMLINKS_LINK');
    expect(screen.getByRole('link', {name: /skip to topbar/i}).dataset.pasteElement).toBe('CUSTOMLINKS_LINK');
  });
});
